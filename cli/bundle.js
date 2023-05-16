#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalScripts = exports.getLocalPackageTypes = exports.getLocalPackage = exports.getLocalPackagePath = exports.hashDir = exports.hashFile = exports.hashItems = void 0;
const path_1 = __importDefault(require("path"));
const compiler_1 = require("@ijstech/compiler");
const fs_1 = require("fs");
const ipfs_js_1 = __importDefault(require("./ipfs.js"));
const RootPath = process.cwd();
const SourcePath = process.argv[2];
async function hashItems(items, version) {
    return await ipfs_js_1.default.hashItems(items || [], version);
}
exports.hashItems = hashItems;
;
async function hashFile(filePath, version, options) {
    if (version == undefined)
        version = 1;
    let size;
    let stat = await fs_1.promises.stat(filePath);
    size = stat.size;
    let file = fs_1.createReadStream(filePath);
    let cid;
    let result;
    if (size == 0) {
        cid = await ipfs_js_1.default.hashContent('', version);
        return {
            cid,
            size
        };
    }
    else if (version == 1) {
        result = await ipfs_js_1.default.hashFile(file, version, ipfs_js_1.default.mergeOptions({
            rawLeaves: true,
            maxChunkSize: 1048576,
            maxChildrenPerNode: 1024
        }, options || {}));
    }
    else
        result = await ipfs_js_1.default.hashFile(file, version);
    return result;
}
exports.hashFile = hashFile;
async function hashDir(dirPath, version, excludes) {
    if (version == undefined)
        version = 1;
    let files = await fs_1.promises.readdir(dirPath);
    let items = [];
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let path = path_1.default.join(dirPath, file);
        if (!excludes || excludes.indexOf(path) < 0) {
            let stat = await fs_1.promises.stat(path);
            if (stat.isDirectory()) {
                let result = await hashDir(path, version, excludes);
                result.name = file;
                items.push(result);
            }
            else {
                try {
                    let result = await hashFile(path, version);
                    items.push({
                        cid: result.cid,
                        name: file,
                        size: result.size,
                        type: 'file'
                    });
                }
                catch (err) {
                    console.dir(path);
                }
            }
        }
    }
    ;
    let result = await hashItems(items, version);
    return {
        cid: result.cid,
        name: '',
        size: result.size,
        type: 'dir',
        links: items
    };
}
exports.hashDir = hashDir;
;
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
    if (path && path != '/') {
        try {
            let stat = await fs_1.promises.stat(path_1.default.join(name, 'package.json'));
            if (stat.isFile())
                return name;
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
let packages = {};
async function getLocalPackage(name) {
    if (packages[name])
        return packages[name];
    let path = await getLocalPackagePath(name);
    if (path) {
        let pack = JSON.parse(await fs_1.promises.readFile(path_1.default.join(path, 'package.json'), 'utf8'));
        pack.path = path;
        packages[name] = pack;
        return pack;
    }
    ;
}
exports.getLocalPackage = getLocalPackage;
;
async function getLocalPackageTypes(name, packName) {
    packName = packName || name;
    if (name[0] != '/')
        name = path_1.default.dirname(require.resolve(name));
    let path = path_1.default.dirname(name);
    if (path && path != '/') {
        try {
            let pack = JSON.parse(await fs_1.promises.readFile(path_1.default.join(name, 'package.json'), 'utf8'));
            let dts = await fs_1.promises.readFile(path_1.default.join(name, pack.pluginTypes || pack.types || pack.typings || 'index.d.ts'), 'utf8');
            return {
                dts: dts
            };
        }
        catch (err) {
            return getLocalPackageTypes(path, packName);
        }
    }
    else {
        throw new Error('Failed to get package: ' + packName);
    }
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
async function writeIpfs(distDir, cid) {
    let links = [];
    if (cid.links) {
        for (let i = 0; i < cid.links.length; i++) {
            let item = cid.links[i];
            links.push({
                cid: item.cid,
                name: item.name,
                size: item.size,
                type: item.type
            });
            if (item.type == 'dir')
                await writeIpfs(distDir, item);
        }
        ;
        let item = {
            cid: cid.cid,
            name: cid.name,
            size: cid.size,
            type: cid.type,
            links: links
        };
        await fs_1.promises.writeFile(path_1.default.join(distDir, `${cid.cid}`), JSON.stringify(item), 'utf8');
    }
}
;
async function bundle() {
    let scRootDir = RootPath;
    if (SourcePath)
        scRootDir = path_1.default.relative(scRootDir, SourcePath);
    let bundleLibs = {};
    let scconfig = await readSCConfig(scRootDir);
    let packageConfig = await readPackageConfig(scRootDir);
    if (scconfig) {
        let moduleSourceDir = scRootDir;
        if (scconfig.moduleDir)
            moduleSourceDir = path_1.default.join(scRootDir, scconfig.moduleDir);
        let packages = {};
        for (let name in scconfig.modules) {
            packages[name] = path_1.default.join(moduleSourceDir, scconfig.modules[name].path);
        }
        ;
        let packageManager = new compiler_1.PackageManager({
            packageImporter: async (packName) => {
                let pack = await getLocalPackageTypes(packName);
                return pack;
            }
        });
        packageManager.addPackage('@ijstech/components', await getLocalPackageTypes('@ijstech/components'));
        if (scconfig.networks) {
            packageManager.addPackage('bignumber.js', await getLocalPackageTypes('bignumber.js'));
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
        let distLibDir = path_1.default.join(distDir, scconfig.rootDir || '', scconfig.libDir || 'libs');
        let distModuleDir = path_1.default.join(distDir, scconfig.rootDir || '', 'modules');
        // let distModuleDir = Path.join(distDir, 'libs/' + packageConfig.name);//'modules');
        for (let name in scconfig.modules) {
            let pack = packageManager.packages(name);
            let module = scconfig.modules[name];
            module.dependencies = [];
            pack.dependencies?.forEach((item) => {
                if (item != '@ijstech/components' && !item.startsWith('@ijstech/components/')) {
                    module.dependencies.push(item);
                    if (!scconfig.modules[item] && !scconfig.dependencies[item])
                        scconfig.dependencies[item] = '*';
                }
                ;
            });
            let distModulePath = path_1.default.join(distModuleDir, module.path);
            copyAssets(path_1.default.join(scRootDir, scconfig.moduleDir || 'modules', module.path), distModulePath);
            await fs_1.promises.mkdir(distModulePath, { recursive: true });
            fs_1.promises.writeFile(path_1.default.join(distModulePath, 'index.js'), pack.script || '');
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
            await fs_1.promises.cp(path_1.default.join(path, 'dist'), path_1.default.join(distLibDir, '@ijstech/components'), { recursive: true });
        async function copyDependencies(dependencies, all) {
            dependencies = dependencies || {};
            for (let name in dependencies) {
                if (name.startsWith('@ijstech/components/'))
                    name = '@ijstech/components';
                if ((all || name.startsWith('@ijstech/') || name.startsWith('@scom/'))) {
                    let pack = await getLocalPackage(name);
                    if (pack) {
                        path = pack.path;
                        if (deps.indexOf(name) < 0) {
                            console.dir('#Copy dependence: ' + name);
                            let distFile = pack.plugin || pack.browser;
                            if (distFile && distFile.endsWith('.js')) {
                                await fs_1.promises.mkdir(path_1.default.join(distLibDir, name), { recursive: true });
                                await fs_1.promises.copyFile(path_1.default.join(path, distFile), path_1.default.join(distLibDir, name, 'index.js'));
                            }
                            else
                                await fs_1.promises.cp(path_1.default.join(path, 'dist'), path_1.default.join(distLibDir, name), { recursive: true });
                        }
                        ;
                        deps.unshift(name);
                        let dependencies = pack.dependencies || {};
                        if (name == '@ijstech/eth-contract')
                            dependencies['@ijstech/eth-wallet'] = '*';
                        await copyDependencies(dependencies);
                    }
                }
                ;
            }
            ;
        }
        ;
        async function bundleDependencies(dependencies) {
            dependencies = dependencies || {};
            for (let name in dependencies) {
                let content = '';
                if (scconfig.modules[name]) {
                    content = await fs_1.promises.readFile(path_1.default.join(distModuleDir, `${scconfig.modules[name].path}/index.js`), 'utf-8');
                }
                else
                    content = await fs_1.promises.readFile(path_1.default.join(distLibDir, name, 'index.js'), 'utf-8');
                if (content)
                    bundleLibs[name] = content;
            }
            ;
        }
        ;
        scconfig.dependencies = scconfig.dependencies || {};
        if (scconfig.main && !scconfig.modules[scconfig.main] && !scconfig.dependencies[scconfig.main])
            scconfig.dependencies[scconfig.main] = '*';
        if (scconfig.bundle) {
            await copyDependencies(scconfig.dependencies, true);
            await bundleDependencies(scconfig.dependencies);
            if (scconfig.main && scconfig.modules[scconfig.main] && scconfig.modules[scconfig.main].dependencies) {
                let deps = {};
                for (let i = 0; i < scconfig.modules[scconfig.main].dependencies.length; i++)
                    deps[scconfig.modules[scconfig.main].dependencies[i]] = '*';
                deps[scconfig.main] = '*';
                await bundleDependencies(deps);
            }
            ;
            await fs_1.promises.writeFile(path_1.default.join(distDir, scconfig.rootDir || '', 'bundle.json'), JSON.stringify(bundleLibs));
        }
        else
            await copyDependencies(scconfig.dependencies, true);
        scconfig.dependencies = {};
        deps.forEach((name) => {
            if (name != '@ijstech/components' && !name.startsWith('@ijstech/components/'))
                scconfig.dependencies[name] = '*';
        });
        delete scconfig['distDir'];
        scconfig.moduleDir = 'modules';
        // scconfig.moduleDir = 'libs/' + packageConfig.name;//'modules';
        await fs_1.promises.writeFile(path_1.default.join(distDir, 'scconfig.json'), JSON.stringify(scconfig, null, 4), 'utf8');
        //generate index.html
        let indexHtml = await fs_1.promises.readFile(path_1.default.join(__dirname, 'index.template.html'), 'utf8');
        let meta = '';
        if (scconfig.meta) {
            for (let n in scconfig.meta) {
                if (n == 'favicon') {
                    let value = scconfig.meta[n];
                    if (scconfig.rootDir && value.startsWith('modules/'))
                        value = `${scconfig.rootDir}/${value}`;
                    meta += `  <link rel="icon" href="${value}">\n`;
                }
                else if (n == 'title')
                    meta += `  <title>${scconfig.meta[n]}</title>\n`;
                else if (n == 'chartset')
                    meta += `  <meta charset="${scconfig.meta[n]}">\n`;
                else if (n.indexOf(':') < 0)
                    meta += `  <meta name="${n}" content="${scconfig.meta[n]}">\n`;
                else
                    meta += `  <meta property="${n}" content="${scconfig.meta[n]}">\n`;
            }
            ;
        }
        ;
        indexHtml = indexHtml.replace('{{meta}}', meta);
        indexHtml = indexHtml.replaceAll('{{rootDir}}', scconfig.rootDir ? scconfig.rootDir + '/' : '');
        indexHtml = indexHtml.replace('{{main}}', `${scconfig.main || '@scom/dapp'}`);
        // indexHtml = indexHtml.replace('{{scconfig}}', JSON.stringify(scconfig, null, 4));
        await fs_1.promises.writeFile(path_1.default.join(scRootDir, scconfig.distDir || 'dist', 'index.html'), indexHtml);
        if (scconfig.ipfs == true) {
            let cid = await hashDir(distDir);
            scconfig.ipfs = cid.cid;
            await fs_1.promises.writeFile(path_1.default.join(distDir, 'scconfig.json'), JSON.stringify(scconfig, null, 4), 'utf8');
            await fs_1.promises.mkdir(path_1.default.join(distDir, 'ipfs'), { recursive: true });
            await writeIpfs(path_1.default.join(distDir, 'ipfs'), cid);
        }
        ;
    }
    else {
        if (packageConfig) {
            let packageManager = new compiler_1.PackageManager({
                packageImporter: async (packName) => {
                    let pack = await getLocalPackageTypes(packName);
                    return pack;
                }
            });
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
                console.error('Package compilation error: ' + packageConfig.name);
                console.error(JSON.stringify(pack.errors, null, 4));
                return;
            }
            ;
            let distDir = path_1.default.join(scRootDir, 'dist');
            let typesDir = path_1.default.join(scRootDir, 'pluginTypes');
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
