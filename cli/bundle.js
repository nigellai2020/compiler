#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalScripts = exports.getLocalPackageTypes = exports.getLocalPackagePath = void 0;
const path_1 = __importDefault(require("path"));
const compiler_1 = require("@ijstech/compiler");
const fs_1 = require("fs");
const RootPath = process.cwd();
const SourcePath = process.argv[2];
async function copyAssets(sourceDir, targetDir) {
    let files = await fs_1.promises.readdir(sourceDir, { withFileTypes: true });
    for (let file of files) {
        if (file.isDirectory()) {
            copyAssets(path_1.default.join(sourceDir, file.name), path_1.default.join(targetDir, file.name));
        }
        else {
            if (!file.name.endsWith('.ts') && !file.name.endsWith('.tsx')) {
                await fs_1.promises.mkdir(targetDir, { recursive: true });
                fs_1.promises.copyFile(path_1.default.join(sourceDir, file.name), path_1.default.join(targetDir, file.name));
            }
            ;
        }
        ;
    }
    ;
}
;
async function getLocalPackagePath(name) {
    if (name[0] != '/')
        name = path_1.default.dirname(require.resolve(name));
    let path = path_1.default.dirname(name);
    if (path) {
        try {
            let stat = await fs_1.promises.stat(path_1.default.join(path, 'package.json'));
            if (stat.isFile())
                return path;
            else
                return getLocalPackagePath(path);
        }
        catch (err) {
            return getLocalPackagePath(path);
        }
        ;
    }
    else
        return '';
}
exports.getLocalPackagePath = getLocalPackagePath;
;
async function getLocalPackageTypes(name) {
    if (name[0] != '/')
        name = path_1.default.dirname(require.resolve(name));
    let path = path_1.default.dirname(name);
    if (path) {
        try {
            let pack = JSON.parse(await fs_1.promises.readFile(path_1.default.join(path, 'package.json'), 'utf8'));
            let dts = await fs_1.promises.readFile(path_1.default.join(path, pack.pluginTypes || pack.types || 'index.d.ts'), 'utf8');
            return {
                dts: dts
            };
        }
        catch (err) {
            return getLocalPackageTypes(path);
        }
    }
    else
        return {};
}
exports.getLocalPackageTypes = getLocalPackageTypes;
;
async function getLocalScripts(path) {
    let result = {};
    let files = await fs_1.promises.readdir(path, { withFileTypes: true });
    for (let file of files) {
        if (file.isDirectory()) {
            let r = await getLocalScripts(path_1.default.join(path, file.name));
            for (let name in r) {
                result[file.name + '/' + name] = r[name];
            }
        }
        else {
            if (file.name.endsWith('.ts') || file.name.endsWith('.tsx')) {
                result[file.name] = await fs_1.promises.readFile(path_1.default.join(path, file.name), 'utf8');
            }
        }
    }
    ;
    return result;
}
exports.getLocalScripts = getLocalScripts;
;
async function readSCConfig(path) {
    try {
        return JSON.parse(JSON.stringify(JSON.parse(await fs_1.promises.readFile(path_1.default.join(path, 'scconfig.json'), 'utf-8'))));
    }
    catch (err) { }
}
;
async function readPackageConfig(path) {
    try {
        return JSON.parse(JSON.stringify(JSON.parse(await fs_1.promises.readFile(path_1.default.join(path, 'package.json'), 'utf-8'))));
    }
    catch (err) { }
}
;
async function bundle() {
    var _a;
    let scRootDir = RootPath;
    if (SourcePath)
        scRootDir = path_1.default.relative(scRootDir, SourcePath);
    let scconfig = await readSCConfig(scRootDir);
    if (scconfig) {
        let moduleDir = scRootDir;
        if (scconfig.moduleDir)
            moduleDir = path_1.default.join(scRootDir, scconfig.moduleDir);
        let packages = {};
        for (let name in scconfig.modules) {
            packages[name] = path_1.default.join(moduleDir, scconfig.modules[name].path);
        }
        ;
        let packageManager = new compiler_1.PackageManager();
        packageManager.addPackage('@ijstech/components', await getLocalPackageTypes('@ijstech/components'));
        if (scconfig.networks) {
            packageManager.addPackage('@ijstech/eth-wallet', await getLocalPackageTypes('@ijstech/eth-wallet'));
            packageManager.addPackage('@ijstech/eth-contract', await getLocalPackageTypes('@ijstech/eth-contract'));
        }
        ;
        for (let n in scconfig.dependencies) {
            if (!packageManager.packages[n])
                packageManager.addPackage(n, await getLocalPackageTypes(n));
        }
        ;
        for (let name in packages) {
            let pack = { files: await getLocalScripts(packages[name]) };
            for (let n in pack.files) {
                if (n == 'index.ts' || n == 'index.tsx')
                    pack.files[n] = `///<amd-module name='${name}'/> \n` + pack.files[n];
                else
                    pack.files[n] = `///<amd-module name='${name}/${n}'/> \n` + pack.files[n];
            }
            ;
            // if (pack.files['index.ts']){
            //     pack.files['index.ts'] = `///<amd-module name='${name}'/> \n` + pack.files['index.ts']
            // }
            // else if (pack.files['index.tsx'])
            //     pack.files['index.tsx'] = `///<amd-module name='${name}'/> \n` + pack.files['index.tsx']
            packageManager.addPackage(name, pack);
        }
        ;
        await packageManager.buildAll();
        for (let name in packages) {
            let pack = packageManager.packages(name);
            if (pack.errors && pack.errors.length > 0) {
                console.error('Package compilation error: ' + name);
                console.error(JSON.stringify(pack.errors, null, 4));
                return;
            }
        }
        ;
        //copy compiled modules to dist directory
        let distDir = path_1.default.join(scRootDir, scconfig.distDir || 'dist');
        let distModuleDir = path_1.default.join(distDir, 'modules');
        for (let name in scconfig.modules) {
            let pack = packageManager.packages(name);
            let module = scconfig.modules[name];
            module.dependencies = [];
            (_a = pack.dependencies) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                if (item != '@ijstech/components') {
                    module.dependencies.push(item);
                    if (!scconfig.modules[item] && !scconfig.dependencies[item])
                        scconfig.dependencies[item] = '*';
                }
                ;
            });
            let moduleDir = path_1.default.join(distModuleDir, module.path);
            copyAssets(path_1.default.join(scRootDir, scconfig.rootDir || scconfig.moduleDir || 'modules', module.path), moduleDir);
            await fs_1.promises.mkdir(moduleDir, { recursive: true });
            fs_1.promises.writeFile(path_1.default.join(moduleDir, 'index.js'), pack.script || '');
        }
        ;
        let checkDeps = true;
        while (checkDeps) {
            checkDeps = false;
            for (let name in scconfig.modules) {
                let module = scconfig.modules[name];
                for (let i = 0; i < module.dependencies.length; i++) {
                    let depModule = scconfig.modules[module.dependencies[i]];
                    if (depModule) {
                        for (let k = 0; k < depModule.dependencies.length; k++) {
                            if (module.dependencies.indexOf(depModule.dependencies[k]) < 0) {
                                module.dependencies.splice(i, 0, depModule.dependencies[k]);
                                checkDeps = true;
                            }
                            ;
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;
        //copy dependencies        
        let deps = ['@ijstech/components'];
        let path = await getLocalPackagePath('@ijstech/components');
        if (path)
            await fs_1.promises.cp(path_1.default.join(path, 'dist'), path_1.default.join(distDir, 'libs/@ijstech/components'), { recursive: true });
        async function copyDependencies(dependencies) {
            dependencies = dependencies || {};
            for (let name in dependencies) {
                if (!deps[name] && (name.startsWith('@ijstech/') || name.startsWith('@scom/'))) {
                    let path = await getLocalPackagePath(name);
                    if (path) {
                        deps.unshift(name);
                        await fs_1.promises.cp(path_1.default.join(path, 'dist'), path_1.default.join(distDir, 'libs', name), { recursive: true });
                        let pack = JSON.parse(await fs_1.promises.readFile(path_1.default.join(path, 'package.json'), 'utf8'));
                        await copyDependencies(pack.dependencies);
                    }
                }
                ;
            }
            ;
        }
        ;
        scconfig.dependencies = scconfig.dependencies || {};
        if (scconfig.main && !scconfig.modules[scconfig.main] && !scconfig.dependencies[scconfig.main])
            scconfig.dependencies[scconfig.main] = '*';
        await copyDependencies(scconfig.dependencies);
        scconfig.dependencies = {};
        deps.forEach((name) => {
            if (name != '@ijstech/components')
                scconfig.dependencies[name] = '*';
        });
        delete scconfig['distDir'];
        scconfig.moduleDir = 'modules';
        await fs_1.promises.writeFile(path_1.default.join(distDir, 'scconfig.json'), JSON.stringify(scconfig, null, 4), 'utf8');
        //generate index.html
        let indexHtml = await fs_1.promises.readFile(path_1.default.join(__dirname, 'index.template.html'), 'utf8');
        indexHtml = indexHtml.replace('{{main}}', `${scconfig.main || '@scom/dapp'}`);
        indexHtml = indexHtml.replace('{{scconfig}}', JSON.stringify(scconfig, null, 4));
        await fs_1.promises.writeFile(path_1.default.join(scRootDir, scconfig.distDir || 'dist', 'index.html'), indexHtml);
    }
    else {
        let packageConfig = await readPackageConfig(scRootDir);
        if (packageConfig) {
            let packageManager = new compiler_1.PackageManager();
            // packageManager.addPackage('@ijstech/components', await getLocalPackageTypes('@ijstech/components'));            
            let pack = { files: await getLocalScripts(path_1.default.join(scRootDir, 'src')) };
            for (let n in pack.files) {
                if (n == 'index.ts' || n == 'index.tsx')
                    pack.files[n] = `///<amd-module name='${packageConfig.name}'/> \n` + pack.files[n];
                else
                    pack.files[n] = `///<amd-module name='${packageConfig.name}/${n}'/> \n` + pack.files[n];
            }
            ;
            // if (pack.files['index.ts']){
            //     pack.files['index.ts'] = `///<amd-module name='${packageConfig.name}'/> \n` + pack.files['index.ts']
            // }
            // else if (pack.files['index.tsx'])
            //     pack.files['index.tsx'] = `///<amd-module name='${packageConfig.name}'/> \n` + pack.files['index.tsx']
            packageManager.addPackage(packageConfig.name, pack);
            await packageManager.buildAll();
            pack = packageManager.packages(packageConfig.name);
            if (pack.errors && pack.errors.length > 0) {
                console.error('Package compilation error: ' + name);
                console.error(JSON.stringify(pack.errors, null, 4));
                return;
            }
            ;
            let distDir = path_1.default.join(scRootDir, 'dist');
            let typesDir = path_1.default.join(scRootDir, 'types');
            await fs_1.promises.mkdir(distDir, { recursive: true });
            await fs_1.promises.mkdir(typesDir, { recursive: true });
            copyAssets(path_1.default.join(scRootDir, 'src'), distDir);
            fs_1.promises.writeFile(path_1.default.join(distDir, 'index.js'), pack.script || '');
            fs_1.promises.writeFile(path_1.default.join(typesDir, 'index.d.ts'), pack.dts || '');
        }
        ;
    }
    ;
}
;
bundle();
