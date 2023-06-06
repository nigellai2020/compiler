declare var global: any;
declare var NaN: number;
declare var Infinity: number;
declare function eval(x: string): any;
declare function parseInt(string: string, radix?: number): number;
declare function parseFloat(string: string): number;
declare function isNaN(number: number): boolean;
declare function isFinite(number: number): boolean;
declare function decodeURI(encodedURI: string): string;
declare function decodeURIComponent(encodedURIComponent: string): string;
declare function encodeURI(uri: string): string;
declare function encodeURIComponent(uriComponent: string | number | boolean): string;
declare function escape(string: string): string;
declare function unescape(string: string): string;
interface Symbol {
    toString(): string;
    valueOf(): symbol;
}
declare type PropertyKey = string | number | symbol;
interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}
interface PropertyDescriptorMap {
    [key: PropertyKey]: PropertyDescriptor;
}
interface Object {
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: PropertyKey): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: PropertyKey): boolean;
}
interface ObjectConstructor {
    new (value?: any): Object;
    (): any;
    (value: any): any;
    readonly prototype: Object;
    getPrototypeOf(o: any): any;
    getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined;
    getOwnPropertyNames(o: any): string[];
    create(o: object | null): any;
    create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;
    defineProperty<T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): T;
    defineProperties<T>(o: T, properties: PropertyDescriptorMap & ThisType<any>): T;
    seal<T>(o: T): T;
    freeze<T extends Function>(f: T): T;
    freeze<T extends {
        [idx: string]: U | null | undefined | object;
    }, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>;
    freeze<T>(o: T): Readonly<T>;
    preventExtensions<T>(o: T): T;
    isSealed(o: any): boolean;
    isFrozen(o: any): boolean;
    isExtensible(o: any): boolean;
    keys(o: object): string[];
}
declare var Object: ObjectConstructor;
interface Function {
    apply(this: Function, thisArg: any, argArray?: any): any;
    call(this: Function, thisArg: any, ...argArray: any[]): any;
    bind(this: Function, thisArg: any, ...argArray: any[]): any;
    toString(): string;
    prototype: any;
    readonly length: number;
    arguments: any;
    caller: Function;
}
interface FunctionConstructor {
    new (...args: string[]): Function;
    (...args: string[]): Function;
    readonly prototype: Function;
}
declare var Function: FunctionConstructor;
type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
interface CallableFunction extends Function {
    apply<T, R>(this: (this: T) => R, thisArg: T): R;
    apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R;
    call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;
    bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
    bind<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R;
    bind<T, A0, A1, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1): (...args: A) => R;
    bind<T, A0, A1, A2, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R;
    bind<T, A0, A1, A2, A3, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3): (...args: A) => R;
    bind<T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R;
}
interface NewableFunction extends Function {
    apply<T>(this: new () => T, thisArg: T): void;
    apply<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, args: A): void;
    call<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, ...args: A): void;
    bind<T>(this: T, thisArg: any): T;
    bind<A0, A extends any[], R>(this: new (arg0: A0, ...args: A) => R, thisArg: any, arg0: A0): new (...args: A) => R;
    bind<A0, A1, A extends any[], R>(this: new (arg0: A0, arg1: A1, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1): new (...args: A) => R;
    bind<A0, A1, A2, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2): new (...args: A) => R;
    bind<A0, A1, A2, A3, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2, arg3: A3): new (...args: A) => R;
    bind<AX, R>(this: new (...args: AX[]) => R, thisArg: any, ...args: AX[]): new (...args: AX[]) => R;
}
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
interface String {
    toString(): string;
    charAt(pos: number): string;
    charCodeAt(index: number): number;
    concat(...strings: string[]): string;
    indexOf(searchString: string, position?: number): number;
    lastIndexOf(searchString: string, position?: number): number;
    localeCompare(that: string): number;
    match(regexp: string | RegExp): RegExpMatchArray | null;
    replace(searchValue: string | RegExp, replaceValue: string): string;
    replace(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
    search(regexp: string | RegExp): number;
    slice(start?: number, end?: number): string;
    split(separator: string | RegExp, limit?: number): string[];
    substring(start: number, end?: number): string;
    toLowerCase(): string;
    toLocaleLowerCase(locales?: string | string[]): string;
    toUpperCase(): string;
    toLocaleUpperCase(locales?: string | string[]): string;
    trim(): string;
    readonly length: number;
    substr(from: number, length?: number): string;
    valueOf(): string;
    readonly [index: number]: string;
}
interface StringConstructor {
    new (value?: any): String;
    (value?: any): string;
    readonly prototype: String;
    fromCharCode(...codes: number[]): string;
}
declare var String: StringConstructor;
interface Boolean {
    valueOf(): boolean;
}
interface BooleanConstructor {
    new (value?: any): Boolean;
    <T>(value?: T): boolean;
    readonly prototype: Boolean;
}
declare var Boolean: BooleanConstructor;
interface Number {
    toString(radix?: number): string;
    toFixed(fractionDigits?: number): string;
    toExponential(fractionDigits?: number): string;
    toPrecision(precision?: number): string;
    valueOf(): number;
}
interface NumberConstructor {
    new (value?: any): Number;
    (value?: any): number;
    readonly prototype: Number;
    readonly MAX_VALUE: number;
    readonly MIN_VALUE: number;
    readonly NaN: number;
    readonly NEGATIVE_INFINITY: number;
    readonly POSITIVE_INFINITY: number;
}
declare var Number: NumberConstructor;
interface TemplateStringsArray extends ReadonlyArray<string> {
    readonly raw: readonly string[];
}
interface ImportMeta {
}
interface ImportCallOptions {
    assert?: ImportAssertions;
}
interface ImportAssertions {
    [key: string]: string;
}
interface Math {
    readonly E: number;
    readonly LN10: number;
    readonly LN2: number;
    readonly LOG2E: number;
    readonly LOG10E: number;
    readonly PI: number;
    readonly SQRT1_2: number;
    readonly SQRT2: number;
    abs(x: number): number;
    acos(x: number): number;
    asin(x: number): number;
    atan(x: number): number;
    atan2(y: number, x: number): number;
    ceil(x: number): number;
    cos(x: number): number;
    exp(x: number): number;
    floor(x: number): number;
    log(x: number): number;
    max(...values: number[]): number;
    min(...values: number[]): number;
    pow(x: number, y: number): number;
    random(): number;
    round(x: number): number;
    sin(x: number): number;
    sqrt(x: number): number;
    tan(x: number): number;
}
declare var Math: Math;
interface Date {
    toString(): string;
    toDateString(): string;
    toTimeString(): string;
    toLocaleString(): string;
    toLocaleDateString(): string;
    toLocaleTimeString(): string;
    valueOf(): number;
    getTime(): number;
    getFullYear(): number;
    getUTCFullYear(): number;
    getMonth(): number;
    getUTCMonth(): number;
    getDate(): number;
    getUTCDate(): number;
    getDay(): number;
    getUTCDay(): number;
    getHours(): number;
    getUTCHours(): number;
    getMinutes(): number;
    getUTCMinutes(): number;
    getSeconds(): number;
    getUTCSeconds(): number;
    getMilliseconds(): number;
    getUTCMilliseconds(): number;
    getTimezoneOffset(): number;
    setTime(time: number): number;
    setMilliseconds(ms: number): number;
    setUTCMilliseconds(ms: number): number;
    setSeconds(sec: number, ms?: number): number;
    setUTCSeconds(sec: number, ms?: number): number;
    setMinutes(min: number, sec?: number, ms?: number): number;
    setUTCMinutes(min: number, sec?: number, ms?: number): number;
    setHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
    setDate(date: number): number;
    setUTCDate(date: number): number;
    setMonth(month: number, date?: number): number;
    setUTCMonth(month: number, date?: number): number;
    setFullYear(year: number, month?: number, date?: number): number;
    setUTCFullYear(year: number, month?: number, date?: number): number;
    toUTCString(): string;
    toISOString(): string;
    toJSON(key?: any): string;
}
interface DateConstructor {
    new (): Date;
    new (value: number | string): Date;
    new (year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
    (): string;
    readonly prototype: Date;
    parse(s: string): number;
    UTC(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;
    now(): number;
}
declare var Date: DateConstructor;
interface RegExpMatchArray extends Array<string> {
    index?: number;
    input?: string;
    0: string;
}
interface RegExpExecArray extends Array<string> {
    index: number;
    input: string;
    0: string;
}
interface RegExp {
    exec(string: string): RegExpExecArray | null;
    test(string: string): boolean;
    readonly source: string;
    readonly global: boolean;
    readonly ignoreCase: boolean;
    readonly multiline: boolean;
    lastIndex: number;
    compile(pattern: string, flags?: string): this;
}
interface RegExpConstructor {
    new (pattern: RegExp | string): RegExp;
    new (pattern: string, flags?: string): RegExp;
    (pattern: RegExp | string): RegExp;
    (pattern: string, flags?: string): RegExp;
    readonly prototype: RegExp;
    $1: string;
    $2: string;
    $3: string;
    $4: string;
    $5: string;
    $6: string;
    $7: string;
    $8: string;
    $9: string;
    input: string;
    $_: string;
    lastMatch: string;
    "$&": string;
    lastParen: string;
    "$+": string;
    leftContext: string;
    "$`": string;
    rightContext: string;
    "$'": string;
}
declare var RegExp: RegExpConstructor;
interface Error {
    name: string;
    message: string;
    stack?: string;
}
interface ErrorConstructor {
    new (message?: string): Error;
    (message?: string): Error;
    readonly prototype: Error;
}
declare var Error: ErrorConstructor;
interface EvalError extends Error {
}
interface EvalErrorConstructor extends ErrorConstructor {
    new (message?: string): EvalError;
    (message?: string): EvalError;
    readonly prototype: EvalError;
}
declare var EvalError: EvalErrorConstructor;
interface RangeError extends Error {
}
interface RangeErrorConstructor extends ErrorConstructor {
    new (message?: string): RangeError;
    (message?: string): RangeError;
    readonly prototype: RangeError;
}
declare var RangeError: RangeErrorConstructor;
interface ReferenceError extends Error {
}
interface ReferenceErrorConstructor extends ErrorConstructor {
    new (message?: string): ReferenceError;
    (message?: string): ReferenceError;
    readonly prototype: ReferenceError;
}
declare var ReferenceError: ReferenceErrorConstructor;
interface SyntaxError extends Error {
}
interface SyntaxErrorConstructor extends ErrorConstructor {
    new (message?: string): SyntaxError;
    (message?: string): SyntaxError;
    readonly prototype: SyntaxError;
}
declare var SyntaxError: SyntaxErrorConstructor;
interface TypeError extends Error {
}
interface TypeErrorConstructor extends ErrorConstructor {
    new (message?: string): TypeError;
    (message?: string): TypeError;
    readonly prototype: TypeError;
}
declare var TypeError: TypeErrorConstructor;
interface URIError extends Error {
}
interface URIErrorConstructor extends ErrorConstructor {
    new (message?: string): URIError;
    (message?: string): URIError;
    readonly prototype: URIError;
}
declare var URIError: URIErrorConstructor;
interface JSON {
    parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
    stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
}
declare var JSON: JSON;
interface ReadonlyArray<T> {
    readonly length: number;
    toString(): string;
    toLocaleString(): string;
    concat(...items: ConcatArray<T>[]): T[];
    concat(...items: (T | ConcatArray<T>)[]): T[];
    join(separator?: string): string;
    slice(start?: number, end?: number): T[];
    indexOf(searchElement: T, fromIndex?: number): number;
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    every<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[];
    every(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[];
    filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
    readonly [n: number]: T;
}
interface ConcatArray<T> {
    readonly length: number;
    readonly [n: number]: T;
    join(separator?: string): string;
    slice(start?: number, end?: number): T[];
}
interface Array<T> {
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): T | undefined;
    push(...items: T[]): number;
    concat(...items: ConcatArray<T>[]): T[];
    concat(...items: (T | ConcatArray<T>)[]): T[];
    join(separator?: string): string;
    reverse(): T[];
    shift(): T | undefined;
    slice(start?: number, end?: number): T[];
    sort(compareFn?: (a: T, b: T) => number): this;
    splice(start: number, deleteCount?: number): T[];
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    unshift(...items: T[]): number;
    indexOf(searchElement: T, fromIndex?: number): number;
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
    every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    [n: number]: T;
}
interface ArrayConstructor {
    new (arrayLength?: number): any[];
    new <T>(arrayLength: number): T[];
    new <T>(...items: T[]): T[];
    (arrayLength?: number): any[];
    <T>(arrayLength: number): T[];
    <T>(...items: T[]): T[];
    isArray(arg: any): arg is any[];
    readonly prototype: any[];
}
declare var Array: ArrayConstructor;
interface TypedPropertyDescriptor<T> {
    enumerable?: boolean;
    configurable?: boolean;
    writable?: boolean;
    value?: T;
    get?: () => T;
    set?: (value: T) => void;
}
declare type PromiseConstructorLike = new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>;
interface PromiseLike<T> {
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;
}
interface Promise<T> {
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}
type Awaited<T> = T extends null | undefined ? T : T extends object & {
    then(onfulfilled: infer F, ...args: infer _): any;
} ? F extends ((value: infer V, ...args: infer _) => any) ? Awaited<V> : never : T;
interface ArrayLike<T> {
    readonly length: number;
    readonly [n: number]: T;
}
type Partial<T> = {
    [P in keyof T]?: T[P];
};
type Required<T> = {
    [P in keyof T]-?: T[P];
};
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type NonNullable<T> = T & {};
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
type Uppercase<S extends string> = intrinsic;
type Lowercase<S extends string> = intrinsic;
type Capitalize<S extends string> = intrinsic;
type Uncapitalize<S extends string> = intrinsic;
interface ThisType<T> {
}
interface ArrayBuffer {
    readonly byteLength: number;
    slice(begin: number, end?: number): ArrayBuffer;
}
interface ArrayBufferTypes {
    ArrayBuffer: ArrayBuffer;
}
type ArrayBufferLike = ArrayBufferTypes[keyof ArrayBufferTypes];
interface ArrayBufferConstructor {
    readonly prototype: ArrayBuffer;
    new (byteLength: number): ArrayBuffer;
    isView(arg: any): arg is ArrayBufferView;
}
declare var ArrayBuffer: ArrayBufferConstructor;
interface ArrayBufferView {
    buffer: ArrayBufferLike;
    byteLength: number;
    byteOffset: number;
}
interface DataView {
    readonly buffer: ArrayBuffer;
    readonly byteLength: number;
    readonly byteOffset: number;
    getFloat32(byteOffset: number, littleEndian?: boolean): number;
    getFloat64(byteOffset: number, littleEndian?: boolean): number;
    getInt8(byteOffset: number): number;
    getInt16(byteOffset: number, littleEndian?: boolean): number;
    getInt32(byteOffset: number, littleEndian?: boolean): number;
    getUint8(byteOffset: number): number;
    getUint16(byteOffset: number, littleEndian?: boolean): number;
    getUint32(byteOffset: number, littleEndian?: boolean): number;
    setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;
    setInt8(byteOffset: number, value: number): void;
    setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;
    setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;
    setUint8(byteOffset: number, value: number): void;
    setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;
    setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
}
interface DataViewConstructor {
    readonly prototype: DataView;
    new (buffer: ArrayBufferLike, byteOffset?: number, byteLength?: number): DataView;
}
declare var DataView: DataViewConstructor;
interface Int8Array {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    copyWithin(target: number, start: number, end?: number): this;
    every(predicate: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: Int8Array) => any, thisArg?: any): Int8Array;
    find(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: Int8Array) => void, thisArg?: any): void;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    readonly length: number;
    map(callbackfn: (value: number, index: number, array: Int8Array) => number, thisArg?: any): Int8Array;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;
    reverse(): Int8Array;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Int8Array;
    some(predicate: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Int8Array;
    toLocaleString(): string;
    toString(): string;
    valueOf(): Int8Array;
    [index: number]: number;
}
interface Int8ArrayConstructor {
    readonly prototype: Int8Array;
    new (length: number): Int8Array;
    new (array: ArrayLike<number> | ArrayBufferLike): Int8Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int8Array;
    readonly BYTES_PER_ELEMENT: number;
    of(...items: number[]): Int8Array;
    from(arrayLike: ArrayLike<number>): Int8Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int8Array;
}
declare var Int8Array: Int8ArrayConstructor;
interface Uint8Array {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    copyWithin(target: number, start: number, end?: number): this;
    every(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: Uint8Array) => any, thisArg?: any): Uint8Array;
    find(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any): void;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    readonly length: number;
    map(callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any): Uint8Array;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;
    reverse(): Uint8Array;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Uint8Array;
    some(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Uint8Array;
    toLocaleString(): string;
    toString(): string;
    valueOf(): Uint8Array;
    [index: number]: number;
}
interface Uint8ArrayConstructor {
    readonly prototype: Uint8Array;
    new (length: number): Uint8Array;
    new (array: ArrayLike<number> | ArrayBufferLike): Uint8Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8Array;
    readonly BYTES_PER_ELEMENT: number;
    of(...items: number[]): Uint8Array;
    from(arrayLike: ArrayLike<number>): Uint8Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8Array;
}
declare var Uint8Array: Uint8ArrayConstructor;
interface Uint8ClampedArray {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    copyWithin(target: number, start: number, end?: number): this;
    every(predicate: (value: number, index: number, array: Uint8ClampedArray) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: Uint8ClampedArray) => any, thisArg?: any): Uint8ClampedArray;
    find(predicate: (value: number, index: number, obj: Uint8ClampedArray) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: Uint8ClampedArray) => boolean, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => void, thisArg?: any): void;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    readonly length: number;
    map(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => number, thisArg?: any): Uint8ClampedArray;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => U, initialValue: U): U;
    reverse(): Uint8ClampedArray;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Uint8ClampedArray;
    some(predicate: (value: number, index: number, array: Uint8ClampedArray) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Uint8ClampedArray;
    toLocaleString(): string;
    toString(): string;
    valueOf(): Uint8ClampedArray;
    [index: number]: number;
}
interface Uint8ClampedArrayConstructor {
    readonly prototype: Uint8ClampedArray;
    new (length: number): Uint8ClampedArray;
    new (array: ArrayLike<number> | ArrayBufferLike): Uint8ClampedArray;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8ClampedArray;
    readonly BYTES_PER_ELEMENT: number;
    of(...items: number[]): Uint8ClampedArray;
    from(arrayLike: ArrayLike<number>): Uint8ClampedArray;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8ClampedArray;
}
declare var Uint8ClampedArray: Uint8ClampedArrayConstructor;
interface Int16Array {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    copyWithin(target: number, start: number, end?: number): this;
    every(predicate: (value: number, index: number, array: Int16Array) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: Int16Array) => any, thisArg?: any): Int16Array;
    find(predicate: (value: number, index: number, obj: Int16Array) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: Int16Array) => boolean, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: Int16Array) => void, thisArg?: any): void;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    readonly length: number;
    map(callbackfn: (value: number, index: number, array: Int16Array) => number, thisArg?: any): Int16Array;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int16Array) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int16Array) => U, initialValue: U): U;
    reverse(): Int16Array;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Int16Array;
    some(predicate: (value: number, index: number, array: Int16Array) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Int16Array;
    toLocaleString(): string;
    toString(): string;
    valueOf(): Int16Array;
    [index: number]: number;
}
interface Int16ArrayConstructor {
    readonly prototype: Int16Array;
    new (length: number): Int16Array;
    new (array: ArrayLike<number> | ArrayBufferLike): Int16Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int16Array;
    readonly BYTES_PER_ELEMENT: number;
    of(...items: number[]): Int16Array;
    from(arrayLike: ArrayLike<number>): Int16Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int16Array;
}
declare var Int16Array: Int16ArrayConstructor;
interface Uint16Array {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    copyWithin(target: number, start: number, end?: number): this;
    every(predicate: (value: number, index: number, array: Uint16Array) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: Uint16Array) => any, thisArg?: any): Uint16Array;
    find(predicate: (value: number, index: number, obj: Uint16Array) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: Uint16Array) => boolean, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: Uint16Array) => void, thisArg?: any): void;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    readonly length: number;
    map(callbackfn: (value: number, index: number, array: Uint16Array) => number, thisArg?: any): Uint16Array;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint16Array) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint16Array) => U, initialValue: U): U;
    reverse(): Uint16Array;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Uint16Array;
    some(predicate: (value: number, index: number, array: Uint16Array) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Uint16Array;
    toLocaleString(): string;
    toString(): string;
    valueOf(): Uint16Array;
    [index: number]: number;
}
interface Uint16ArrayConstructor {
    readonly prototype: Uint16Array;
    new (length: number): Uint16Array;
    new (array: ArrayLike<number> | ArrayBufferLike): Uint16Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint16Array;
    readonly BYTES_PER_ELEMENT: number;
    of(...items: number[]): Uint16Array;
    from(arrayLike: ArrayLike<number>): Uint16Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint16Array;
}
declare var Uint16Array: Uint16ArrayConstructor;
interface Int32Array {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    copyWithin(target: number, start: number, end?: number): this;
    every(predicate: (value: number, index: number, array: Int32Array) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: Int32Array) => any, thisArg?: any): Int32Array;
    find(predicate: (value: number, index: number, obj: Int32Array) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: Int32Array) => boolean, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: Int32Array) => void, thisArg?: any): void;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    readonly length: number;
    map(callbackfn: (value: number, index: number, array: Int32Array) => number, thisArg?: any): Int32Array;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int32Array) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int32Array) => U, initialValue: U): U;
    reverse(): Int32Array;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Int32Array;
    some(predicate: (value: number, index: number, array: Int32Array) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Int32Array;
    toLocaleString(): string;
    toString(): string;
    valueOf(): Int32Array;
    [index: number]: number;
}
interface Int32ArrayConstructor {
    readonly prototype: Int32Array;
    new (length: number): Int32Array;
    new (array: ArrayLike<number> | ArrayBufferLike): Int32Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int32Array;
    readonly BYTES_PER_ELEMENT: number;
    of(...items: number[]): Int32Array;
    from(arrayLike: ArrayLike<number>): Int32Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int32Array;
}
declare var Int32Array: Int32ArrayConstructor;
interface Uint32Array {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    copyWithin(target: number, start: number, end?: number): this;
    every(predicate: (value: number, index: number, array: Uint32Array) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: Uint32Array) => any, thisArg?: any): Uint32Array;
    find(predicate: (value: number, index: number, obj: Uint32Array) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: Uint32Array) => boolean, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: Uint32Array) => void, thisArg?: any): void;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    readonly length: number;
    map(callbackfn: (value: number, index: number, array: Uint32Array) => number, thisArg?: any): Uint32Array;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U;
    reverse(): Uint32Array;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Uint32Array;
    some(predicate: (value: number, index: number, array: Uint32Array) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Uint32Array;
    toLocaleString(): string;
    toString(): string;
    valueOf(): Uint32Array;
    [index: number]: number;
}
interface Uint32ArrayConstructor {
    readonly prototype: Uint32Array;
    new (length: number): Uint32Array;
    new (array: ArrayLike<number> | ArrayBufferLike): Uint32Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint32Array;
    readonly BYTES_PER_ELEMENT: number;
    of(...items: number[]): Uint32Array;
    from(arrayLike: ArrayLike<number>): Uint32Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint32Array;
}
declare var Uint32Array: Uint32ArrayConstructor;
interface Float32Array {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    copyWithin(target: number, start: number, end?: number): this;
    every(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array;
    find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    readonly length: number;
    map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;
    reverse(): Float32Array;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Float32Array;
    some(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Float32Array;
    toLocaleString(): string;
    toString(): string;
    valueOf(): Float32Array;
    [index: number]: number;
}
interface Float32ArrayConstructor {
    readonly prototype: Float32Array;
    new (length: number): Float32Array;
    new (array: ArrayLike<number> | ArrayBufferLike): Float32Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float32Array;
    readonly BYTES_PER_ELEMENT: number;
    of(...items: number[]): Float32Array;
    from(arrayLike: ArrayLike<number>): Float32Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float32Array;
}
declare var Float32Array: Float32ArrayConstructor;
interface Float64Array {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    copyWithin(target: number, start: number, end?: number): this;
    every(predicate: (value: number, index: number, array: Float64Array) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: Float64Array) => any, thisArg?: any): Float64Array;
    find(predicate: (value: number, index: number, obj: Float64Array) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: Float64Array) => boolean, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: Float64Array) => void, thisArg?: any): void;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    readonly length: number;
    map(callbackfn: (value: number, index: number, array: Float64Array) => number, thisArg?: any): Float64Array;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number): number;
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue: number): number;
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float64Array) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number): number;
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue: number): number;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float64Array) => U, initialValue: U): U;
    reverse(): Float64Array;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Float64Array;
    some(predicate: (value: number, index: number, array: Float64Array) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Float64Array;
    toString(): string;
    valueOf(): Float64Array;
    [index: number]: number;
}
interface Float64ArrayConstructor {
    readonly prototype: Float64Array;
    new (length: number): Float64Array;
    new (array: ArrayLike<number> | ArrayBufferLike): Float64Array;
    new (buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float64Array;
    readonly BYTES_PER_ELEMENT: number;
    of(...items: number[]): Float64Array;
    from(arrayLike: ArrayLike<number>): Float64Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float64Array;
}
declare var Float64Array: Float64ArrayConstructor;
declare namespace Intl {
    interface CollatorOptions {
        usage?: string | undefined;
        localeMatcher?: string | undefined;
        numeric?: boolean | undefined;
        caseFirst?: string | undefined;
        sensitivity?: string | undefined;
        ignorePunctuation?: boolean | undefined;
    }
    interface ResolvedCollatorOptions {
        locale: string;
        usage: string;
        sensitivity: string;
        ignorePunctuation: boolean;
        collation: string;
        caseFirst: string;
        numeric: boolean;
    }
    interface Collator {
        compare(x: string, y: string): number;
        resolvedOptions(): ResolvedCollatorOptions;
    }
    var Collator: {
        new (locales?: string | string[], options?: CollatorOptions): Collator;
        (locales?: string | string[], options?: CollatorOptions): Collator;
        supportedLocalesOf(locales: string | string[], options?: CollatorOptions): string[];
    };
    interface NumberFormatOptions {
        localeMatcher?: string | undefined;
        style?: string | undefined;
        currency?: string | undefined;
        currencySign?: string | undefined;
        useGrouping?: boolean | undefined;
        minimumIntegerDigits?: number | undefined;
        minimumFractionDigits?: number | undefined;
        maximumFractionDigits?: number | undefined;
        minimumSignificantDigits?: number | undefined;
        maximumSignificantDigits?: number | undefined;
    }
    interface ResolvedNumberFormatOptions {
        locale: string;
        numberingSystem: string;
        style: string;
        currency?: string;
        minimumIntegerDigits: number;
        minimumFractionDigits: number;
        maximumFractionDigits: number;
        minimumSignificantDigits?: number;
        maximumSignificantDigits?: number;
        useGrouping: boolean;
    }
    interface NumberFormat {
        format(value: number): string;
        resolvedOptions(): ResolvedNumberFormatOptions;
    }
    var NumberFormat: {
        new (locales?: string | string[], options?: NumberFormatOptions): NumberFormat;
        (locales?: string | string[], options?: NumberFormatOptions): NumberFormat;
        supportedLocalesOf(locales: string | string[], options?: NumberFormatOptions): string[];
        readonly prototype: NumberFormat;
    };
    interface DateTimeFormatOptions {
        localeMatcher?: "best fit" | "lookup" | undefined;
        weekday?: "long" | "short" | "narrow" | undefined;
        era?: "long" | "short" | "narrow" | undefined;
        year?: "numeric" | "2-digit" | undefined;
        month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
        day?: "numeric" | "2-digit" | undefined;
        hour?: "numeric" | "2-digit" | undefined;
        minute?: "numeric" | "2-digit" | undefined;
        second?: "numeric" | "2-digit" | undefined;
        timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;
        formatMatcher?: "best fit" | "basic" | undefined;
        hour12?: boolean | undefined;
        timeZone?: string | undefined;
    }
    interface ResolvedDateTimeFormatOptions {
        locale: string;
        calendar: string;
        numberingSystem: string;
        timeZone: string;
        hour12?: boolean;
        weekday?: string;
        era?: string;
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        second?: string;
        timeZoneName?: string;
    }
    interface DateTimeFormat {
        format(date?: Date | number): string;
        resolvedOptions(): ResolvedDateTimeFormatOptions;
    }
    var DateTimeFormat: {
        new (locales?: string | string[], options?: DateTimeFormatOptions): DateTimeFormat;
        (locales?: string | string[], options?: DateTimeFormatOptions): DateTimeFormat;
        supportedLocalesOf(locales: string | string[], options?: DateTimeFormatOptions): string[];
        readonly prototype: DateTimeFormat;
    };
}
interface String {
    localeCompare(that: string, locales?: string | string[], options?: Intl.CollatorOptions): number;
}
interface Number {
    toLocaleString(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
}
interface Date {
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
    toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
    toLocaleTimeString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
}
interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
}
interface AesCbcParams extends Algorithm {
    iv: BufferSource;
}
interface AesCtrParams extends Algorithm {
    counter: BufferSource;
    length: number;
}
interface AesDerivedKeyParams extends Algorithm {
    length: number;
}
interface AesGcmParams extends Algorithm {
    additionalData?: BufferSource;
    iv: BufferSource;
    tagLength?: number;
}
interface AesKeyAlgorithm extends KeyAlgorithm {
    length: number;
}
interface AesKeyGenParams extends Algorithm {
    length: number;
}
interface Algorithm {
    name: string;
}
interface AnalyserOptions extends AudioNodeOptions {
    fftSize?: number;
    maxDecibels?: number;
    minDecibels?: number;
    smoothingTimeConstant?: number;
}
interface AnimationEventInit extends EventInit {
    animationName?: string;
    elapsedTime?: number;
    pseudoElement?: string;
}
interface AnimationPlaybackEventInit extends EventInit {
    currentTime?: CSSNumberish | null;
    timelineTime?: CSSNumberish | null;
}
interface AssignedNodesOptions {
    flatten?: boolean;
}
interface AudioBufferOptions {
    length: number;
    numberOfChannels?: number;
    sampleRate: number;
}
interface AudioBufferSourceOptions {
    buffer?: AudioBuffer | null;
    detune?: number;
    loop?: boolean;
    loopEnd?: number;
    loopStart?: number;
    playbackRate?: number;
}
interface AudioConfiguration {
    bitrate?: number;
    channels?: string;
    contentType: string;
    samplerate?: number;
    spatialRendering?: boolean;
}
interface AudioContextOptions {
    latencyHint?: AudioContextLatencyCategory | number;
    sampleRate?: number;
}
interface AudioNodeOptions {
    channelCount?: number;
    channelCountMode?: ChannelCountMode;
    channelInterpretation?: ChannelInterpretation;
}
interface AudioProcessingEventInit extends EventInit {
    inputBuffer: AudioBuffer;
    outputBuffer: AudioBuffer;
    playbackTime: number;
}
interface AudioTimestamp {
    contextTime?: number;
    performanceTime?: DOMHighResTimeStamp;
}
interface AudioWorkletNodeOptions extends AudioNodeOptions {
    numberOfInputs?: number;
    numberOfOutputs?: number;
    outputChannelCount?: number[];
    parameterData?: Record<string, number>;
    processorOptions?: any;
}
interface AuthenticationExtensionsClientInputs {
    appid?: string;
    credProps?: boolean;
    hmacCreateSecret?: boolean;
}
interface AuthenticationExtensionsClientOutputs {
    appid?: boolean;
    credProps?: CredentialPropertiesOutput;
    hmacCreateSecret?: boolean;
}
interface AuthenticatorSelectionCriteria {
    authenticatorAttachment?: AuthenticatorAttachment;
    requireResidentKey?: boolean;
    residentKey?: ResidentKeyRequirement;
    userVerification?: UserVerificationRequirement;
}
interface BiquadFilterOptions extends AudioNodeOptions {
    Q?: number;
    detune?: number;
    frequency?: number;
    gain?: number;
    type?: BiquadFilterType;
}
interface BlobEventInit {
    data: Blob;
    timecode?: DOMHighResTimeStamp;
}
interface BlobPropertyBag {
    endings?: EndingType;
    type?: string;
}
interface CSSStyleSheetInit {
    baseURL?: string;
    disabled?: boolean;
    media?: MediaList | string;
}
interface CacheQueryOptions {
    ignoreMethod?: boolean;
    ignoreSearch?: boolean;
    ignoreVary?: boolean;
}
interface CanvasRenderingContext2DSettings {
    alpha?: boolean;
    colorSpace?: PredefinedColorSpace;
    desynchronized?: boolean;
    willReadFrequently?: boolean;
}
interface ChannelMergerOptions extends AudioNodeOptions {
    numberOfInputs?: number;
}
interface ChannelSplitterOptions extends AudioNodeOptions {
    numberOfOutputs?: number;
}
interface CheckVisibilityOptions {
    checkOpacity?: boolean;
    checkVisibilityCSS?: boolean;
}
interface ClientQueryOptions {
    includeUncontrolled?: boolean;
    type?: ClientTypes;
}
interface ClipboardEventInit extends EventInit {
    clipboardData?: DataTransfer | null;
}
interface ClipboardItemOptions {
    presentationStyle?: PresentationStyle;
}
interface CloseEventInit extends EventInit {
    code?: number;
    reason?: string;
    wasClean?: boolean;
}
interface CompositionEventInit extends UIEventInit {
    data?: string;
}
interface ComputedEffectTiming extends EffectTiming {
    activeDuration?: CSSNumberish;
    currentIteration?: number | null;
    endTime?: CSSNumberish;
    localTime?: CSSNumberish | null;
    progress?: number | null;
    startTime?: CSSNumberish;
}
interface ComputedKeyframe {
    composite: CompositeOperationOrAuto;
    computedOffset: number;
    easing: string;
    offset: number | null;
    [property: string]: string | number | null | undefined;
}
interface ConstantSourceOptions {
    offset?: number;
}
interface ConstrainBooleanParameters {
    exact?: boolean;
    ideal?: boolean;
}
interface ConstrainDOMStringParameters {
    exact?: string | string[];
    ideal?: string | string[];
}
interface ConstrainDoubleRange extends DoubleRange {
    exact?: number;
    ideal?: number;
}
interface ConstrainULongRange extends ULongRange {
    exact?: number;
    ideal?: number;
}
interface ConvolverOptions extends AudioNodeOptions {
    buffer?: AudioBuffer | null;
    disableNormalization?: boolean;
}
interface CredentialCreationOptions {
    publicKey?: PublicKeyCredentialCreationOptions;
    signal?: AbortSignal;
}
interface CredentialPropertiesOutput {
    rk?: boolean;
}
interface CredentialRequestOptions {
    mediation?: CredentialMediationRequirement;
    publicKey?: PublicKeyCredentialRequestOptions;
    signal?: AbortSignal;
}
interface CryptoKeyPair {
    privateKey: CryptoKey;
    publicKey: CryptoKey;
}
interface CustomEventInit<T = any> extends EventInit {
    detail?: T;
}
interface DOMMatrix2DInit {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
}
interface DOMMatrixInit extends DOMMatrix2DInit {
    is2D?: boolean;
    m13?: number;
    m14?: number;
    m23?: number;
    m24?: number;
    m31?: number;
    m32?: number;
    m33?: number;
    m34?: number;
    m43?: number;
    m44?: number;
}
interface DOMPointInit {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
}
interface DOMQuadInit {
    p1?: DOMPointInit;
    p2?: DOMPointInit;
    p3?: DOMPointInit;
    p4?: DOMPointInit;
}
interface DOMRectInit {
    height?: number;
    width?: number;
    x?: number;
    y?: number;
}
interface DelayOptions extends AudioNodeOptions {
    delayTime?: number;
    maxDelayTime?: number;
}
interface DeviceMotionEventAccelerationInit {
    x?: number | null;
    y?: number | null;
    z?: number | null;
}
interface DeviceMotionEventInit extends EventInit {
    acceleration?: DeviceMotionEventAccelerationInit;
    accelerationIncludingGravity?: DeviceMotionEventAccelerationInit;
    interval?: number;
    rotationRate?: DeviceMotionEventRotationRateInit;
}
interface DeviceMotionEventRotationRateInit {
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
}
interface DeviceOrientationEventInit extends EventInit {
    absolute?: boolean;
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
}
interface DisplayMediaStreamOptions {
    audio?: boolean | MediaTrackConstraints;
    video?: boolean | MediaTrackConstraints;
}
interface DocumentTimelineOptions {
    originTime?: DOMHighResTimeStamp;
}
interface DoubleRange {
    max?: number;
    min?: number;
}
interface DragEventInit extends MouseEventInit {
    dataTransfer?: DataTransfer | null;
}
interface DynamicsCompressorOptions extends AudioNodeOptions {
    attack?: number;
    knee?: number;
    ratio?: number;
    release?: number;
    threshold?: number;
}
interface EcKeyAlgorithm extends KeyAlgorithm {
    namedCurve: NamedCurve;
}
interface EcKeyGenParams extends Algorithm {
    namedCurve: NamedCurve;
}
interface EcKeyImportParams extends Algorithm {
    namedCurve: NamedCurve;
}
interface EcdhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
}
interface EcdsaParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}
interface EffectTiming {
    delay?: number;
    direction?: PlaybackDirection;
    duration?: number | string;
    easing?: string;
    endDelay?: number;
    fill?: FillMode;
    iterationStart?: number;
    iterations?: number;
    playbackRate?: number;
}
interface ElementCreationOptions {
    is?: string;
}
interface ElementDefinitionOptions {
    extends?: string;
}
interface ErrorEventInit extends EventInit {
    colno?: number;
    error?: any;
    filename?: string;
    lineno?: number;
    message?: string;
}
interface EventInit {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}
interface EventListenerOptions {
    capture?: boolean;
}
interface EventModifierInit extends UIEventInit {
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    modifierAltGraph?: boolean;
    modifierCapsLock?: boolean;
    modifierFn?: boolean;
    modifierFnLock?: boolean;
    modifierHyper?: boolean;
    modifierNumLock?: boolean;
    modifierScrollLock?: boolean;
    modifierSuper?: boolean;
    modifierSymbol?: boolean;
    modifierSymbolLock?: boolean;
    shiftKey?: boolean;
}
interface EventSourceInit {
    withCredentials?: boolean;
}
interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}
interface FileSystemFlags {
    create?: boolean;
    exclusive?: boolean;
}
interface FileSystemGetDirectoryOptions {
    create?: boolean;
}
interface FileSystemGetFileOptions {
    create?: boolean;
}
interface FileSystemRemoveOptions {
    recursive?: boolean;
}
interface FocusEventInit extends UIEventInit {
    relatedTarget?: EventTarget | null;
}
interface FocusOptions {
    preventScroll?: boolean;
}
interface FontFaceDescriptors {
    ascentOverride?: string;
    descentOverride?: string;
    display?: FontDisplay;
    featureSettings?: string;
    lineGapOverride?: string;
    stretch?: string;
    style?: string;
    unicodeRange?: string;
    variant?: string;
    weight?: string;
}
interface FontFaceSetLoadEventInit extends EventInit {
    fontfaces?: FontFace[];
}
interface FormDataEventInit extends EventInit {
    formData: FormData;
}
interface FullscreenOptions {
    navigationUI?: FullscreenNavigationUI;
}
interface GainOptions extends AudioNodeOptions {
    gain?: number;
}
interface GamepadEventInit extends EventInit {
    gamepad: Gamepad;
}
interface GetAnimationsOptions {
    subtree?: boolean;
}
interface GetNotificationOptions {
    tag?: string;
}
interface GetRootNodeOptions {
    composed?: boolean;
}
interface HashChangeEventInit extends EventInit {
    newURL?: string;
    oldURL?: string;
}
interface HkdfParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    info: BufferSource;
    salt: BufferSource;
}
interface HmacImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}
interface HmacKeyAlgorithm extends KeyAlgorithm {
    hash: KeyAlgorithm;
    length: number;
}
interface HmacKeyGenParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}
interface IDBDatabaseInfo {
    name?: string;
    version?: number;
}
interface IDBIndexParameters {
    multiEntry?: boolean;
    unique?: boolean;
}
interface IDBObjectStoreParameters {
    autoIncrement?: boolean;
    keyPath?: string | string[] | null;
}
interface IDBTransactionOptions {
    durability?: IDBTransactionDurability;
}
interface IDBVersionChangeEventInit extends EventInit {
    newVersion?: number | null;
    oldVersion?: number;
}
interface IIRFilterOptions extends AudioNodeOptions {
    feedback: number[];
    feedforward: number[];
}
interface IdleRequestOptions {
    timeout?: number;
}
interface ImageBitmapOptions {
    colorSpaceConversion?: ColorSpaceConversion;
    imageOrientation?: ImageOrientation;
    premultiplyAlpha?: PremultiplyAlpha;
    resizeHeight?: number;
    resizeQuality?: ResizeQuality;
    resizeWidth?: number;
}
interface ImageBitmapRenderingContextSettings {
    alpha?: boolean;
}
interface ImageDataSettings {
    colorSpace?: PredefinedColorSpace;
}
interface ImageEncodeOptions {
    quality?: number;
    type?: string;
}
interface ImportMeta {
    url: string;
}
interface InputEventInit extends UIEventInit {
    data?: string | null;
    dataTransfer?: DataTransfer | null;
    inputType?: string;
    isComposing?: boolean;
    targetRanges?: StaticRange[];
}
interface IntersectionObserverEntryInit {
    boundingClientRect: DOMRectInit;
    intersectionRatio: number;
    intersectionRect: DOMRectInit;
    isIntersecting: boolean;
    rootBounds: DOMRectInit | null;
    target: Element;
    time: DOMHighResTimeStamp;
}
interface IntersectionObserverInit {
    root?: Element | Document | null;
    rootMargin?: string;
    threshold?: number | number[];
}
interface JsonWebKey {
    alg?: string;
    crv?: string;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: string[];
    kty?: string;
    n?: string;
    oth?: RsaOtherPrimesInfo[];
    p?: string;
    q?: string;
    qi?: string;
    use?: string;
    x?: string;
    y?: string;
}
interface KeyAlgorithm {
    name: string;
}
interface KeyboardEventInit extends EventModifierInit {
    charCode?: number;
    code?: string;
    isComposing?: boolean;
    key?: string;
    keyCode?: number;
    location?: number;
    repeat?: boolean;
}
interface Keyframe {
    composite?: CompositeOperationOrAuto;
    easing?: string;
    offset?: number | null;
    [property: string]: string | number | null | undefined;
}
interface KeyframeAnimationOptions extends KeyframeEffectOptions {
    id?: string;
}
interface KeyframeEffectOptions extends EffectTiming {
    composite?: CompositeOperation;
    iterationComposite?: IterationCompositeOperation;
    pseudoElement?: string | null;
}
interface LockInfo {
    clientId?: string;
    mode?: LockMode;
    name?: string;
}
interface LockManagerSnapshot {
    held?: LockInfo[];
    pending?: LockInfo[];
}
interface LockOptions {
    ifAvailable?: boolean;
    mode?: LockMode;
    signal?: AbortSignal;
    steal?: boolean;
}
interface MIDIConnectionEventInit extends EventInit {
    port?: MIDIPort;
}
interface MIDIMessageEventInit extends EventInit {
    data?: Uint8Array;
}
interface MIDIOptions {
    software?: boolean;
    sysex?: boolean;
}
interface MediaCapabilitiesDecodingInfo extends MediaCapabilitiesInfo {
    configuration?: MediaDecodingConfiguration;
}
interface MediaCapabilitiesEncodingInfo extends MediaCapabilitiesInfo {
    configuration?: MediaEncodingConfiguration;
}
interface MediaCapabilitiesInfo {
    powerEfficient: boolean;
    smooth: boolean;
    supported: boolean;
}
interface MediaConfiguration {
    audio?: AudioConfiguration;
    video?: VideoConfiguration;
}
interface MediaDecodingConfiguration extends MediaConfiguration {
    type: MediaDecodingType;
}
interface MediaElementAudioSourceOptions {
    mediaElement: HTMLMediaElement;
}
interface MediaEncodingConfiguration extends MediaConfiguration {
    type: MediaEncodingType;
}
interface MediaEncryptedEventInit extends EventInit {
    initData?: ArrayBuffer | null;
    initDataType?: string;
}
interface MediaImage {
    sizes?: string;
    src: string;
    type?: string;
}
interface MediaKeyMessageEventInit extends EventInit {
    message: ArrayBuffer;
    messageType: MediaKeyMessageType;
}
interface MediaKeySystemConfiguration {
    audioCapabilities?: MediaKeySystemMediaCapability[];
    distinctiveIdentifier?: MediaKeysRequirement;
    initDataTypes?: string[];
    label?: string;
    persistentState?: MediaKeysRequirement;
    sessionTypes?: string[];
    videoCapabilities?: MediaKeySystemMediaCapability[];
}
interface MediaKeySystemMediaCapability {
    contentType?: string;
    encryptionScheme?: string | null;
    robustness?: string;
}
interface MediaMetadataInit {
    album?: string;
    artist?: string;
    artwork?: MediaImage[];
    title?: string;
}
interface MediaPositionState {
    duration?: number;
    playbackRate?: number;
    position?: number;
}
interface MediaQueryListEventInit extends EventInit {
    matches?: boolean;
    media?: string;
}
interface MediaRecorderOptions {
    audioBitsPerSecond?: number;
    bitsPerSecond?: number;
    mimeType?: string;
    videoBitsPerSecond?: number;
}
interface MediaSessionActionDetails {
    action: MediaSessionAction;
    fastSeek?: boolean;
    seekOffset?: number;
    seekTime?: number;
}
interface MediaStreamAudioSourceOptions {
    mediaStream: MediaStream;
}
interface MediaStreamConstraints {
    audio?: boolean | MediaTrackConstraints;
    peerIdentity?: string;
    preferCurrentTab?: boolean;
    video?: boolean | MediaTrackConstraints;
}
interface MediaStreamTrackEventInit extends EventInit {
    track: MediaStreamTrack;
}
interface MediaTrackCapabilities {
    aspectRatio?: DoubleRange;
    autoGainControl?: boolean[];
    channelCount?: ULongRange;
    deviceId?: string;
    displaySurface?: string;
    echoCancellation?: boolean[];
    facingMode?: string[];
    frameRate?: DoubleRange;
    groupId?: string;
    height?: ULongRange;
    noiseSuppression?: boolean[];
    sampleRate?: ULongRange;
    sampleSize?: ULongRange;
    width?: ULongRange;
}
interface MediaTrackConstraintSet {
    aspectRatio?: ConstrainDouble;
    autoGainControl?: ConstrainBoolean;
    channelCount?: ConstrainULong;
    deviceId?: ConstrainDOMString;
    displaySurface?: ConstrainDOMString;
    echoCancellation?: ConstrainBoolean;
    facingMode?: ConstrainDOMString;
    frameRate?: ConstrainDouble;
    groupId?: ConstrainDOMString;
    height?: ConstrainULong;
    noiseSuppression?: ConstrainBoolean;
    sampleRate?: ConstrainULong;
    sampleSize?: ConstrainULong;
    width?: ConstrainULong;
}
interface MediaTrackConstraints extends MediaTrackConstraintSet {
    advanced?: MediaTrackConstraintSet[];
}
interface MediaTrackSettings {
    aspectRatio?: number;
    autoGainControl?: boolean;
    channelCount?: number;
    deviceId?: string;
    displaySurface?: string;
    echoCancellation?: boolean;
    facingMode?: string;
    frameRate?: number;
    groupId?: string;
    height?: number;
    noiseSuppression?: boolean;
    sampleRate?: number;
    sampleSize?: number;
    width?: number;
}
interface MediaTrackSupportedConstraints {
    aspectRatio?: boolean;
    autoGainControl?: boolean;
    channelCount?: boolean;
    deviceId?: boolean;
    displaySurface?: boolean;
    echoCancellation?: boolean;
    facingMode?: boolean;
    frameRate?: boolean;
    groupId?: boolean;
    height?: boolean;
    noiseSuppression?: boolean;
    sampleRate?: boolean;
    sampleSize?: boolean;
    width?: boolean;
}
interface MessageEventInit<T = any> extends EventInit {
    data?: T;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: MessageEventSource | null;
}
interface MouseEventInit extends EventModifierInit {
    button?: number;
    buttons?: number;
    clientX?: number;
    clientY?: number;
    movementX?: number;
    movementY?: number;
    relatedTarget?: EventTarget | null;
    screenX?: number;
    screenY?: number;
}
interface MultiCacheQueryOptions extends CacheQueryOptions {
    cacheName?: string;
}
interface MutationObserverInit {
    attributeFilter?: string[];
    attributeOldValue?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    characterDataOldValue?: boolean;
    childList?: boolean;
    subtree?: boolean;
}
interface NavigationPreloadState {
    enabled?: boolean;
    headerValue?: string;
}
interface NotificationAction {
    action: string;
    icon?: string;
    title: string;
}
interface NotificationOptions {
    actions?: NotificationAction[];
    badge?: string;
    body?: string;
    data?: any;
    dir?: NotificationDirection;
    icon?: string;
    image?: string;
    lang?: string;
    renotify?: boolean;
    requireInteraction?: boolean;
    silent?: boolean;
    tag?: string;
    timestamp?: EpochTimeStamp;
    vibrate?: VibratePattern;
}
interface OfflineAudioCompletionEventInit extends EventInit {
    renderedBuffer: AudioBuffer;
}
interface OfflineAudioContextOptions {
    length: number;
    numberOfChannels?: number;
    sampleRate: number;
}
interface OptionalEffectTiming {
    delay?: number;
    direction?: PlaybackDirection;
    duration?: number | string;
    easing?: string;
    endDelay?: number;
    fill?: FillMode;
    iterationStart?: number;
    iterations?: number;
    playbackRate?: number;
}
interface OscillatorOptions extends AudioNodeOptions {
    detune?: number;
    frequency?: number;
    periodicWave?: PeriodicWave;
    type?: OscillatorType;
}
interface PageTransitionEventInit extends EventInit {
    persisted?: boolean;
}
interface PannerOptions extends AudioNodeOptions {
    coneInnerAngle?: number;
    coneOuterAngle?: number;
    coneOuterGain?: number;
    distanceModel?: DistanceModelType;
    maxDistance?: number;
    orientationX?: number;
    orientationY?: number;
    orientationZ?: number;
    panningModel?: PanningModelType;
    positionX?: number;
    positionY?: number;
    positionZ?: number;
    refDistance?: number;
    rolloffFactor?: number;
}
interface PaymentCurrencyAmount {
    currency: string;
    value: string;
}
interface PaymentDetailsBase {
    displayItems?: PaymentItem[];
    modifiers?: PaymentDetailsModifier[];
}
interface PaymentDetailsInit extends PaymentDetailsBase {
    id?: string;
    total: PaymentItem;
}
interface PaymentDetailsModifier {
    additionalDisplayItems?: PaymentItem[];
    data?: any;
    supportedMethods: string;
    total?: PaymentItem;
}
interface PaymentDetailsUpdate extends PaymentDetailsBase {
    paymentMethodErrors?: any;
    total?: PaymentItem;
}
interface PaymentItem {
    amount: PaymentCurrencyAmount;
    label: string;
    pending?: boolean;
}
interface PaymentMethodChangeEventInit extends PaymentRequestUpdateEventInit {
    methodDetails?: any;
    methodName?: string;
}
interface PaymentMethodData {
    data?: any;
    supportedMethods: string;
}
interface PaymentRequestUpdateEventInit extends EventInit {
}
interface PaymentValidationErrors {
    error?: string;
    paymentMethod?: any;
}
interface Pbkdf2Params extends Algorithm {
    hash: HashAlgorithmIdentifier;
    iterations: number;
    salt: BufferSource;
}
interface PerformanceMarkOptions {
    detail?: any;
    startTime?: DOMHighResTimeStamp;
}
interface PerformanceMeasureOptions {
    detail?: any;
    duration?: DOMHighResTimeStamp;
    end?: string | DOMHighResTimeStamp;
    start?: string | DOMHighResTimeStamp;
}
interface PerformanceObserverInit {
    buffered?: boolean;
    entryTypes?: string[];
    type?: string;
}
interface PeriodicWaveConstraints {
    disableNormalization?: boolean;
}
interface PeriodicWaveOptions extends PeriodicWaveConstraints {
    imag?: number[] | Float32Array;
    real?: number[] | Float32Array;
}
interface PermissionDescriptor {
    name: PermissionName;
}
interface PictureInPictureEventInit extends EventInit {
    pictureInPictureWindow: PictureInPictureWindow;
}
interface PointerEventInit extends MouseEventInit {
    coalescedEvents?: PointerEvent[];
    height?: number;
    isPrimary?: boolean;
    pointerId?: number;
    pointerType?: string;
    predictedEvents?: PointerEvent[];
    pressure?: number;
    tangentialPressure?: number;
    tiltX?: number;
    tiltY?: number;
    twist?: number;
    width?: number;
}
interface PopStateEventInit extends EventInit {
    state?: any;
}
interface PositionOptions {
    enableHighAccuracy?: boolean;
    maximumAge?: number;
    timeout?: number;
}
interface ProgressEventInit extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}
interface PromiseRejectionEventInit extends EventInit {
    promise: Promise<any>;
    reason?: any;
}
interface PropertyIndexedKeyframes {
    composite?: CompositeOperationOrAuto | CompositeOperationOrAuto[];
    easing?: string | string[];
    offset?: number | (number | null)[];
    [property: string]: string | string[] | number | null | (number | null)[] | undefined;
}
interface PublicKeyCredentialCreationOptions {
    attestation?: AttestationConveyancePreference;
    authenticatorSelection?: AuthenticatorSelectionCriteria;
    challenge: BufferSource;
    excludeCredentials?: PublicKeyCredentialDescriptor[];
    extensions?: AuthenticationExtensionsClientInputs;
    pubKeyCredParams: PublicKeyCredentialParameters[];
    rp: PublicKeyCredentialRpEntity;
    timeout?: number;
    user: PublicKeyCredentialUserEntity;
}
interface PublicKeyCredentialDescriptor {
    id: BufferSource;
    transports?: AuthenticatorTransport[];
    type: PublicKeyCredentialType;
}
interface PublicKeyCredentialEntity {
    name: string;
}
interface PublicKeyCredentialParameters {
    alg: COSEAlgorithmIdentifier;
    type: PublicKeyCredentialType;
}
interface PublicKeyCredentialRequestOptions {
    allowCredentials?: PublicKeyCredentialDescriptor[];
    challenge: BufferSource;
    extensions?: AuthenticationExtensionsClientInputs;
    rpId?: string;
    timeout?: number;
    userVerification?: UserVerificationRequirement;
}
interface PublicKeyCredentialRpEntity extends PublicKeyCredentialEntity {
    id?: string;
}
interface PublicKeyCredentialUserEntity extends PublicKeyCredentialEntity {
    displayName: string;
    id: BufferSource;
}
interface PushSubscriptionJSON {
    endpoint?: string;
    expirationTime?: EpochTimeStamp | null;
    keys?: Record<string, string>;
}
interface PushSubscriptionOptionsInit {
    applicationServerKey?: BufferSource | string | null;
    userVisibleOnly?: boolean;
}
interface QueuingStrategy<T = any> {
    highWaterMark?: number;
    size?: QueuingStrategySize<T>;
}
interface QueuingStrategyInit {
    highWaterMark: number;
}
interface RTCAnswerOptions extends RTCOfferAnswerOptions {
}
interface RTCCertificateExpiration {
    expires?: number;
}
interface RTCConfiguration {
    bundlePolicy?: RTCBundlePolicy;
    certificates?: RTCCertificate[];
    iceCandidatePoolSize?: number;
    iceServers?: RTCIceServer[];
    iceTransportPolicy?: RTCIceTransportPolicy;
    rtcpMuxPolicy?: RTCRtcpMuxPolicy;
}
interface RTCDTMFToneChangeEventInit extends EventInit {
    tone?: string;
}
interface RTCDataChannelEventInit extends EventInit {
    channel: RTCDataChannel;
}
interface RTCDataChannelInit {
    id?: number;
    maxPacketLifeTime?: number;
    maxRetransmits?: number;
    negotiated?: boolean;
    ordered?: boolean;
    protocol?: string;
}
interface RTCDtlsFingerprint {
    algorithm?: string;
    value?: string;
}
interface RTCEncodedAudioFrameMetadata {
    contributingSources?: number[];
    synchronizationSource?: number;
}
interface RTCEncodedVideoFrameMetadata {
    contributingSources?: number[];
    dependencies?: number[];
    frameId?: number;
    height?: number;
    spatialIndex?: number;
    synchronizationSource?: number;
    temporalIndex?: number;
    width?: number;
}
interface RTCErrorEventInit extends EventInit {
    error: RTCError;
}
interface RTCErrorInit {
    errorDetail: RTCErrorDetailType;
    httpRequestStatusCode?: number;
    receivedAlert?: number;
    sctpCauseCode?: number;
    sdpLineNumber?: number;
    sentAlert?: number;
}
interface RTCIceCandidateInit {
    candidate?: string;
    sdpMLineIndex?: number | null;
    sdpMid?: string | null;
    usernameFragment?: string | null;
}
interface RTCIceCandidatePairStats extends RTCStats {
    availableIncomingBitrate?: number;
    availableOutgoingBitrate?: number;
    bytesReceived?: number;
    bytesSent?: number;
    currentRoundTripTime?: number;
    lastPacketReceivedTimestamp?: DOMHighResTimeStamp;
    lastPacketSentTimestamp?: DOMHighResTimeStamp;
    localCandidateId: string;
    nominated?: boolean;
    remoteCandidateId: string;
    requestsReceived?: number;
    requestsSent?: number;
    responsesReceived?: number;
    responsesSent?: number;
    state: RTCStatsIceCandidatePairState;
    totalRoundTripTime?: number;
    transportId: string;
}
interface RTCIceServer {
    credential?: string;
    urls: string | string[];
    username?: string;
}
interface RTCInboundRtpStreamStats extends RTCReceivedRtpStreamStats {
    audioLevel?: number;
    bytesReceived?: number;
    concealedSamples?: number;
    concealmentEvents?: number;
    decoderImplementation?: string;
    estimatedPlayoutTimestamp?: DOMHighResTimeStamp;
    fecPacketsDiscarded?: number;
    fecPacketsReceived?: number;
    firCount?: number;
    frameHeight?: number;
    frameWidth?: number;
    framesDecoded?: number;
    framesDropped?: number;
    framesPerSecond?: number;
    framesReceived?: number;
    headerBytesReceived?: number;
    insertedSamplesForDeceleration?: number;
    jitterBufferDelay?: number;
    jitterBufferEmittedCount?: number;
    keyFramesDecoded?: number;
    kind: string;
    lastPacketReceivedTimestamp?: DOMHighResTimeStamp;
    nackCount?: number;
    packetsDiscarded?: number;
    pliCount?: number;
    qpSum?: number;
    remoteId?: string;
    removedSamplesForAcceleration?: number;
    silentConcealedSamples?: number;
    totalAudioEnergy?: number;
    totalDecodeTime?: number;
    totalInterFrameDelay?: number;
    totalProcessingDelay?: number;
    totalSamplesDuration?: number;
    totalSamplesReceived?: number;
    totalSquaredInterFrameDelay?: number;
}
interface RTCLocalSessionDescriptionInit {
    sdp?: string;
    type?: RTCSdpType;
}
interface RTCOfferAnswerOptions {
}
interface RTCOfferOptions extends RTCOfferAnswerOptions {
    iceRestart?: boolean;
    offerToReceiveAudio?: boolean;
    offerToReceiveVideo?: boolean;
}
interface RTCOutboundRtpStreamStats extends RTCSentRtpStreamStats {
    firCount?: number;
    frameHeight?: number;
    frameWidth?: number;
    framesEncoded?: number;
    framesPerSecond?: number;
    framesSent?: number;
    headerBytesSent?: number;
    hugeFramesSent?: number;
    keyFramesEncoded?: number;
    mediaSourceId?: string;
    nackCount?: number;
    pliCount?: number;
    qpSum?: number;
    qualityLimitationResolutionChanges?: number;
    remoteId?: string;
    retransmittedBytesSent?: number;
    retransmittedPacketsSent?: number;
    rid?: string;
    targetBitrate?: number;
    totalEncodeTime?: number;
    totalEncodedBytesTarget?: number;
    totalPacketSendDelay?: number;
}
interface RTCPeerConnectionIceErrorEventInit extends EventInit {
    address?: string | null;
    errorCode: number;
    errorText?: string;
    port?: number | null;
    url?: string;
}
interface RTCPeerConnectionIceEventInit extends EventInit {
    candidate?: RTCIceCandidate | null;
    url?: string | null;
}
interface RTCReceivedRtpStreamStats extends RTCRtpStreamStats {
    jitter?: number;
    packetsLost?: number;
    packetsReceived?: number;
}
interface RTCRtcpParameters {
    cname?: string;
    reducedSize?: boolean;
}
interface RTCRtpCapabilities {
    codecs: RTCRtpCodecCapability[];
    headerExtensions: RTCRtpHeaderExtensionCapability[];
}
interface RTCRtpCodecCapability {
    channels?: number;
    clockRate: number;
    mimeType: string;
    sdpFmtpLine?: string;
}
interface RTCRtpCodecParameters {
    channels?: number;
    clockRate: number;
    mimeType: string;
    payloadType: number;
    sdpFmtpLine?: string;
}
interface RTCRtpCodingParameters {
    rid?: string;
}
interface RTCRtpContributingSource {
    audioLevel?: number;
    rtpTimestamp: number;
    source: number;
    timestamp: DOMHighResTimeStamp;
}
interface RTCRtpEncodingParameters extends RTCRtpCodingParameters {
    active?: boolean;
    maxBitrate?: number;
    maxFramerate?: number;
    networkPriority?: RTCPriorityType;
    priority?: RTCPriorityType;
    scaleResolutionDownBy?: number;
}
interface RTCRtpHeaderExtensionCapability {
    uri?: string;
}
interface RTCRtpHeaderExtensionParameters {
    encrypted?: boolean;
    id: number;
    uri: string;
}
interface RTCRtpParameters {
    codecs: RTCRtpCodecParameters[];
    headerExtensions: RTCRtpHeaderExtensionParameters[];
    rtcp: RTCRtcpParameters;
}
interface RTCRtpReceiveParameters extends RTCRtpParameters {
}
interface RTCRtpSendParameters extends RTCRtpParameters {
    degradationPreference?: RTCDegradationPreference;
    encodings: RTCRtpEncodingParameters[];
    transactionId: string;
}
interface RTCRtpStreamStats extends RTCStats {
    codecId?: string;
    kind: string;
    ssrc: number;
    transportId?: string;
}
interface RTCRtpSynchronizationSource extends RTCRtpContributingSource {
}
interface RTCRtpTransceiverInit {
    direction?: RTCRtpTransceiverDirection;
    sendEncodings?: RTCRtpEncodingParameters[];
    streams?: MediaStream[];
}
interface RTCSentRtpStreamStats extends RTCRtpStreamStats {
    bytesSent?: number;
    packetsSent?: number;
}
interface RTCSessionDescriptionInit {
    sdp?: string;
    type: RTCSdpType;
}
interface RTCStats {
    id: string;
    timestamp: DOMHighResTimeStamp;
    type: RTCStatsType;
}
interface RTCTrackEventInit extends EventInit {
    receiver: RTCRtpReceiver;
    streams?: MediaStream[];
    track: MediaStreamTrack;
    transceiver: RTCRtpTransceiver;
}
interface RTCTransportStats extends RTCStats {
    bytesReceived?: number;
    bytesSent?: number;
    dtlsCipher?: string;
    dtlsState: RTCDtlsTransportState;
    localCertificateId?: string;
    remoteCertificateId?: string;
    selectedCandidatePairId?: string;
    srtpCipher?: string;
    tlsVersion?: string;
}
interface ReadableStreamGetReaderOptions {
    mode?: ReadableStreamReaderMode;
}
interface ReadableStreamReadDoneResult<T> {
    done: true;
    value?: T;
}
interface ReadableStreamReadValueResult<T> {
    done: false;
    value: T;
}
interface ReadableWritablePair<R = any, W = any> {
    readable: ReadableStream<R>;
    writable: WritableStream<W>;
}
interface RegistrationOptions {
    scope?: string;
    type?: WorkerType;
    updateViaCache?: ServiceWorkerUpdateViaCache;
}
interface RequestInit {
    body?: BodyInit | null;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    signal?: AbortSignal | null;
    window?: null;
}
interface ResizeObserverOptions {
    box?: ResizeObserverBoxOptions;
}
interface ResponseInit {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}
interface RsaHashedImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}
interface RsaHashedKeyAlgorithm extends RsaKeyAlgorithm {
    hash: KeyAlgorithm;
}
interface RsaHashedKeyGenParams extends RsaKeyGenParams {
    hash: HashAlgorithmIdentifier;
}
interface RsaKeyAlgorithm extends KeyAlgorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}
interface RsaKeyGenParams extends Algorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}
interface RsaOaepParams extends Algorithm {
    label?: BufferSource;
}
interface RsaOtherPrimesInfo {
    d?: string;
    r?: string;
    t?: string;
}
interface RsaPssParams extends Algorithm {
    saltLength: number;
}
interface SVGBoundingBoxOptions {
    clipped?: boolean;
    fill?: boolean;
    markers?: boolean;
    stroke?: boolean;
}
interface ScrollIntoViewOptions extends ScrollOptions {
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
}
interface ScrollOptions {
    behavior?: ScrollBehavior;
}
interface ScrollToOptions extends ScrollOptions {
    left?: number;
    top?: number;
}
interface SecurityPolicyViolationEventInit extends EventInit {
    blockedURI?: string;
    columnNumber?: number;
    disposition: SecurityPolicyViolationEventDisposition;
    documentURI: string;
    effectiveDirective: string;
    lineNumber?: number;
    originalPolicy: string;
    referrer?: string;
    sample?: string;
    sourceFile?: string;
    statusCode: number;
    violatedDirective: string;
}
interface ShadowRootInit {
    delegatesFocus?: boolean;
    mode: ShadowRootMode;
    slotAssignment?: SlotAssignmentMode;
}
interface ShareData {
    files?: File[];
    text?: string;
    title?: string;
    url?: string;
}
interface SpeechSynthesisErrorEventInit extends SpeechSynthesisEventInit {
    error: SpeechSynthesisErrorCode;
}
interface SpeechSynthesisEventInit extends EventInit {
    charIndex?: number;
    charLength?: number;
    elapsedTime?: number;
    name?: string;
    utterance: SpeechSynthesisUtterance;
}
interface StaticRangeInit {
    endContainer: Node;
    endOffset: number;
    startContainer: Node;
    startOffset: number;
}
interface StereoPannerOptions extends AudioNodeOptions {
    pan?: number;
}
interface StorageEstimate {
    quota?: number;
    usage?: number;
}
interface StorageEventInit extends EventInit {
    key?: string | null;
    newValue?: string | null;
    oldValue?: string | null;
    storageArea?: Storage | null;
    url?: string;
}
interface StreamPipeOptions {
    preventAbort?: boolean;
    preventCancel?: boolean;
    preventClose?: boolean;
    signal?: AbortSignal;
}
interface StructuredSerializeOptions {
    transfer?: Transferable[];
}
interface SubmitEventInit extends EventInit {
    submitter?: HTMLElement | null;
}
interface TextDecodeOptions {
    stream?: boolean;
}
interface TextDecoderOptions {
    fatal?: boolean;
    ignoreBOM?: boolean;
}
interface TextEncoderEncodeIntoResult {
    read?: number;
    written?: number;
}
interface TouchEventInit extends EventModifierInit {
    changedTouches?: Touch[];
    targetTouches?: Touch[];
    touches?: Touch[];
}
interface TouchInit {
    altitudeAngle?: number;
    azimuthAngle?: number;
    clientX?: number;
    clientY?: number;
    force?: number;
    identifier: number;
    pageX?: number;
    pageY?: number;
    radiusX?: number;
    radiusY?: number;
    rotationAngle?: number;
    screenX?: number;
    screenY?: number;
    target: EventTarget;
    touchType?: TouchType;
}
interface TrackEventInit extends EventInit {
    track?: TextTrack | null;
}
interface Transformer<I = any, O = any> {
    flush?: TransformerFlushCallback<O>;
    readableType?: undefined;
    start?: TransformerStartCallback<O>;
    transform?: TransformerTransformCallback<I, O>;
    writableType?: undefined;
}
interface TransitionEventInit extends EventInit {
    elapsedTime?: number;
    propertyName?: string;
    pseudoElement?: string;
}
interface UIEventInit extends EventInit {
    detail?: number;
    view?: Window | null;
    which?: number;
}
interface ULongRange {
    max?: number;
    min?: number;
}
interface UnderlyingByteSource {
    autoAllocateChunkSize?: number;
    cancel?: UnderlyingSourceCancelCallback;
    pull?: (controller: ReadableByteStreamController) => void | PromiseLike<void>;
    start?: (controller: ReadableByteStreamController) => any;
    type: "bytes";
}
interface UnderlyingDefaultSource<R = any> {
    cancel?: UnderlyingSourceCancelCallback;
    pull?: (controller: ReadableStreamDefaultController<R>) => void | PromiseLike<void>;
    start?: (controller: ReadableStreamDefaultController<R>) => any;
    type?: undefined;
}
interface UnderlyingSink<W = any> {
    abort?: UnderlyingSinkAbortCallback;
    close?: UnderlyingSinkCloseCallback;
    start?: UnderlyingSinkStartCallback;
    type?: undefined;
    write?: UnderlyingSinkWriteCallback<W>;
}
interface UnderlyingSource<R = any> {
    autoAllocateChunkSize?: number;
    cancel?: UnderlyingSourceCancelCallback;
    pull?: UnderlyingSourcePullCallback<R>;
    start?: UnderlyingSourceStartCallback<R>;
    type?: ReadableStreamType;
}
interface ValidityStateFlags {
    badInput?: boolean;
    customError?: boolean;
    patternMismatch?: boolean;
    rangeOverflow?: boolean;
    rangeUnderflow?: boolean;
    stepMismatch?: boolean;
    tooLong?: boolean;
    tooShort?: boolean;
    typeMismatch?: boolean;
    valueMissing?: boolean;
}
interface VideoColorSpaceInit {
    fullRange?: boolean | null;
    matrix?: VideoMatrixCoefficients | null;
    primaries?: VideoColorPrimaries | null;
    transfer?: VideoTransferCharacteristics | null;
}
interface VideoConfiguration {
    bitrate: number;
    colorGamut?: ColorGamut;
    contentType: string;
    framerate: number;
    hdrMetadataType?: HdrMetadataType;
    height: number;
    scalabilityMode?: string;
    transferFunction?: TransferFunction;
    width: number;
}
interface VideoFrameCallbackMetadata {
    captureTime?: DOMHighResTimeStamp;
    expectedDisplayTime: DOMHighResTimeStamp;
    height: number;
    mediaTime: number;
    presentationTime: DOMHighResTimeStamp;
    presentedFrames: number;
    processingDuration?: number;
    receiveTime?: DOMHighResTimeStamp;
    rtpTimestamp?: number;
    width: number;
}
interface WaveShaperOptions extends AudioNodeOptions {
    curve?: number[] | Float32Array;
    oversample?: OverSampleType;
}
interface WebGLContextAttributes {
    alpha?: boolean;
    antialias?: boolean;
    depth?: boolean;
    desynchronized?: boolean;
    failIfMajorPerformanceCaveat?: boolean;
    powerPreference?: WebGLPowerPreference;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
    stencil?: boolean;
}
interface WebGLContextEventInit extends EventInit {
    statusMessage?: string;
}
interface WheelEventInit extends MouseEventInit {
    deltaMode?: number;
    deltaX?: number;
    deltaY?: number;
    deltaZ?: number;
}
interface WindowPostMessageOptions extends StructuredSerializeOptions {
    targetOrigin?: string;
}
interface WorkerOptions {
    credentials?: RequestCredentials;
    name?: string;
    type?: WorkerType;
}
interface WorkletOptions {
    credentials?: RequestCredentials;
}
type NodeFilter = ((node: Node) => number) | {
    acceptNode(node: Node): number;
};
declare var NodeFilter: {
    readonly FILTER_ACCEPT: 1;
    readonly FILTER_REJECT: 2;
    readonly FILTER_SKIP: 3;
    readonly SHOW_ALL: 0xFFFFFFFF;
    readonly SHOW_ELEMENT: 0x1;
    readonly SHOW_ATTRIBUTE: 0x2;
    readonly SHOW_TEXT: 0x4;
    readonly SHOW_CDATA_SECTION: 0x8;
    readonly SHOW_ENTITY_REFERENCE: 0x10;
    readonly SHOW_ENTITY: 0x20;
    readonly SHOW_PROCESSING_INSTRUCTION: 0x40;
    readonly SHOW_COMMENT: 0x80;
    readonly SHOW_DOCUMENT: 0x100;
    readonly SHOW_DOCUMENT_TYPE: 0x200;
    readonly SHOW_DOCUMENT_FRAGMENT: 0x400;
    readonly SHOW_NOTATION: 0x800;
};
type XPathNSResolver = ((prefix: string | null) => string | null) | {
    lookupNamespaceURI(prefix: string | null): string | null;
};
interface ANGLE_instanced_arrays {
    drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void;
    drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void;
    vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 0x88FE;
}
interface ARIAMixin {
    ariaAtomic: string | null;
    ariaAutoComplete: string | null;
    ariaBusy: string | null;
    ariaChecked: string | null;
    ariaColCount: string | null;
    ariaColIndex: string | null;
    ariaColSpan: string | null;
    ariaCurrent: string | null;
    ariaDisabled: string | null;
    ariaExpanded: string | null;
    ariaHasPopup: string | null;
    ariaHidden: string | null;
    ariaInvalid: string | null;
    ariaKeyShortcuts: string | null;
    ariaLabel: string | null;
    ariaLevel: string | null;
    ariaLive: string | null;
    ariaModal: string | null;
    ariaMultiLine: string | null;
    ariaMultiSelectable: string | null;
    ariaOrientation: string | null;
    ariaPlaceholder: string | null;
    ariaPosInSet: string | null;
    ariaPressed: string | null;
    ariaReadOnly: string | null;
    ariaRequired: string | null;
    ariaRoleDescription: string | null;
    ariaRowCount: string | null;
    ariaRowIndex: string | null;
    ariaRowSpan: string | null;
    ariaSelected: string | null;
    ariaSetSize: string | null;
    ariaSort: string | null;
    ariaValueMax: string | null;
    ariaValueMin: string | null;
    ariaValueNow: string | null;
    ariaValueText: string | null;
    role: string | null;
}
interface AbortController {
    readonly signal: AbortSignal;
    abort(reason?: any): void;
}
declare var AbortController: {
    prototype: AbortController;
    new (): AbortController;
};
interface AbortSignalEventMap {
    "abort": Event;
}
interface AbortSignal extends EventTarget {
    readonly aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
    readonly reason: any;
    throwIfAborted(): void;
    addEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var AbortSignal: {
    prototype: AbortSignal;
    new (): AbortSignal;
    abort(reason?: any): AbortSignal;
    timeout(milliseconds: number): AbortSignal;
};
interface AbstractRange {
    readonly collapsed: boolean;
    readonly endContainer: Node;
    readonly endOffset: number;
    readonly startContainer: Node;
    readonly startOffset: number;
}
declare var AbstractRange: {
    prototype: AbstractRange;
    new (): AbstractRange;
};
interface AbstractWorkerEventMap {
    "error": ErrorEvent;
}
interface AbstractWorker {
    onerror: ((this: AbstractWorker, ev: ErrorEvent) => any) | null;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
interface AnalyserNode extends AudioNode {
    fftSize: number;
    readonly frequencyBinCount: number;
    maxDecibels: number;
    minDecibels: number;
    smoothingTimeConstant: number;
    getByteFrequencyData(array: Uint8Array): void;
    getByteTimeDomainData(array: Uint8Array): void;
    getFloatFrequencyData(array: Float32Array): void;
    getFloatTimeDomainData(array: Float32Array): void;
}
declare var AnalyserNode: {
    prototype: AnalyserNode;
    new (context: BaseAudioContext, options?: AnalyserOptions): AnalyserNode;
};
interface Animatable {
    animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation;
    getAnimations(options?: GetAnimationsOptions): Animation[];
}
interface AnimationEventMap {
    "cancel": AnimationPlaybackEvent;
    "finish": AnimationPlaybackEvent;
    "remove": Event;
}
interface Animation extends EventTarget {
    currentTime: CSSNumberish | null;
    effect: AnimationEffect | null;
    readonly finished: Promise<Animation>;
    id: string;
    oncancel: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    onfinish: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    onremove: ((this: Animation, ev: Event) => any) | null;
    readonly pending: boolean;
    readonly playState: AnimationPlayState;
    playbackRate: number;
    readonly ready: Promise<Animation>;
    readonly replaceState: AnimationReplaceState;
    startTime: CSSNumberish | null;
    timeline: AnimationTimeline | null;
    cancel(): void;
    commitStyles(): void;
    finish(): void;
    pause(): void;
    persist(): void;
    play(): void;
    reverse(): void;
    updatePlaybackRate(playbackRate: number): void;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var Animation: {
    prototype: Animation;
    new (effect?: AnimationEffect | null, timeline?: AnimationTimeline | null): Animation;
};
interface AnimationEffect {
    getComputedTiming(): ComputedEffectTiming;
    getTiming(): EffectTiming;
    updateTiming(timing?: OptionalEffectTiming): void;
}
declare var AnimationEffect: {
    prototype: AnimationEffect;
    new (): AnimationEffect;
};
interface AnimationEvent extends Event {
    readonly animationName: string;
    readonly elapsedTime: number;
    readonly pseudoElement: string;
}
declare var AnimationEvent: {
    prototype: AnimationEvent;
    new (type: string, animationEventInitDict?: AnimationEventInit): AnimationEvent;
};
interface AnimationFrameProvider {
    cancelAnimationFrame(handle: number): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
}
interface AnimationPlaybackEvent extends Event {
    readonly currentTime: CSSNumberish | null;
    readonly timelineTime: CSSNumberish | null;
}
declare var AnimationPlaybackEvent: {
    prototype: AnimationPlaybackEvent;
    new (type: string, eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent;
};
interface AnimationTimeline {
    readonly currentTime: number | null;
}
declare var AnimationTimeline: {
    prototype: AnimationTimeline;
    new (): AnimationTimeline;
};
interface Attr extends Node {
    readonly localName: string;
    readonly name: string;
    readonly namespaceURI: string | null;
    readonly ownerDocument: Document;
    readonly ownerElement: Element | null;
    readonly prefix: string | null;
    readonly specified: boolean;
    value: string;
}
declare var Attr: {
    prototype: Attr;
    new (): Attr;
};
interface AudioBuffer {
    readonly duration: number;
    readonly length: number;
    readonly numberOfChannels: number;
    readonly sampleRate: number;
    copyFromChannel(destination: Float32Array, channelNumber: number, bufferOffset?: number): void;
    copyToChannel(source: Float32Array, channelNumber: number, bufferOffset?: number): void;
    getChannelData(channel: number): Float32Array;
}
declare var AudioBuffer: {
    prototype: AudioBuffer;
    new (options: AudioBufferOptions): AudioBuffer;
};
interface AudioBufferSourceNode extends AudioScheduledSourceNode {
    buffer: AudioBuffer | null;
    readonly detune: AudioParam;
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    readonly playbackRate: AudioParam;
    start(when?: number, offset?: number, duration?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var AudioBufferSourceNode: {
    prototype: AudioBufferSourceNode;
    new (context: BaseAudioContext, options?: AudioBufferSourceOptions): AudioBufferSourceNode;
};
interface AudioContext extends BaseAudioContext {
    readonly baseLatency: number;
    readonly outputLatency: number;
    close(): Promise<void>;
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamDestination(): MediaStreamAudioDestinationNode;
    createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
    getOutputTimestamp(): AudioTimestamp;
    resume(): Promise<void>;
    suspend(): Promise<void>;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var AudioContext: {
    prototype: AudioContext;
    new (contextOptions?: AudioContextOptions): AudioContext;
};
interface AudioDestinationNode extends AudioNode {
    readonly maxChannelCount: number;
}
declare var AudioDestinationNode: {
    prototype: AudioDestinationNode;
    new (): AudioDestinationNode;
};
interface AudioListener {
    readonly forwardX: AudioParam;
    readonly forwardY: AudioParam;
    readonly forwardZ: AudioParam;
    readonly positionX: AudioParam;
    readonly positionY: AudioParam;
    readonly positionZ: AudioParam;
    readonly upX: AudioParam;
    readonly upY: AudioParam;
    readonly upZ: AudioParam;
    setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
    setPosition(x: number, y: number, z: number): void;
}
declare var AudioListener: {
    prototype: AudioListener;
    new (): AudioListener;
};
interface AudioNode extends EventTarget {
    channelCount: number;
    channelCountMode: ChannelCountMode;
    channelInterpretation: ChannelInterpretation;
    readonly context: BaseAudioContext;
    readonly numberOfInputs: number;
    readonly numberOfOutputs: number;
    connect(destinationNode: AudioNode, output?: number, input?: number): AudioNode;
    connect(destinationParam: AudioParam, output?: number): void;
    disconnect(): void;
    disconnect(output: number): void;
    disconnect(destinationNode: AudioNode): void;
    disconnect(destinationNode: AudioNode, output: number): void;
    disconnect(destinationNode: AudioNode, output: number, input: number): void;
    disconnect(destinationParam: AudioParam): void;
    disconnect(destinationParam: AudioParam, output: number): void;
}
declare var AudioNode: {
    prototype: AudioNode;
    new (): AudioNode;
};
interface AudioParam {
    automationRate: AutomationRate;
    readonly defaultValue: number;
    readonly maxValue: number;
    readonly minValue: number;
    value: number;
    cancelAndHoldAtTime(cancelTime: number): AudioParam;
    cancelScheduledValues(cancelTime: number): AudioParam;
    exponentialRampToValueAtTime(value: number, endTime: number): AudioParam;
    linearRampToValueAtTime(value: number, endTime: number): AudioParam;
    setTargetAtTime(target: number, startTime: number, timeConstant: number): AudioParam;
    setValueAtTime(value: number, startTime: number): AudioParam;
    setValueCurveAtTime(values: number[] | Float32Array, startTime: number, duration: number): AudioParam;
}
declare var AudioParam: {
    prototype: AudioParam;
    new (): AudioParam;
};
interface AudioParamMap {
    forEach(callbackfn: (value: AudioParam, key: string, parent: AudioParamMap) => void, thisArg?: any): void;
}
declare var AudioParamMap: {
    prototype: AudioParamMap;
    new (): AudioParamMap;
};
interface AudioProcessingEvent extends Event {
    readonly inputBuffer: AudioBuffer;
    readonly outputBuffer: AudioBuffer;
    readonly playbackTime: number;
}
declare var AudioProcessingEvent: {
    prototype: AudioProcessingEvent;
    new (type: string, eventInitDict: AudioProcessingEventInit): AudioProcessingEvent;
};
interface AudioScheduledSourceNodeEventMap {
    "ended": Event;
}
interface AudioScheduledSourceNode extends AudioNode {
    onended: ((this: AudioScheduledSourceNode, ev: Event) => any) | null;
    start(when?: number): void;
    stop(when?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var AudioScheduledSourceNode: {
    prototype: AudioScheduledSourceNode;
    new (): AudioScheduledSourceNode;
};
interface AudioWorklet extends Worklet {
}
declare var AudioWorklet: {
    prototype: AudioWorklet;
    new (): AudioWorklet;
};
interface AudioWorkletNodeEventMap {
    "processorerror": Event;
}
interface AudioWorkletNode extends AudioNode {
    onprocessorerror: ((this: AudioWorkletNode, ev: Event) => any) | null;
    readonly parameters: AudioParamMap;
    readonly port: MessagePort;
    addEventListener<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var AudioWorkletNode: {
    prototype: AudioWorkletNode;
    new (context: BaseAudioContext, name: string, options?: AudioWorkletNodeOptions): AudioWorkletNode;
};
interface AuthenticatorAssertionResponse extends AuthenticatorResponse {
    readonly authenticatorData: ArrayBuffer;
    readonly signature: ArrayBuffer;
    readonly userHandle: ArrayBuffer | null;
}
declare var AuthenticatorAssertionResponse: {
    prototype: AuthenticatorAssertionResponse;
    new (): AuthenticatorAssertionResponse;
};
interface AuthenticatorAttestationResponse extends AuthenticatorResponse {
    readonly attestationObject: ArrayBuffer;
    getAuthenticatorData(): ArrayBuffer;
    getPublicKey(): ArrayBuffer | null;
    getPublicKeyAlgorithm(): COSEAlgorithmIdentifier;
    getTransports(): string[];
}
declare var AuthenticatorAttestationResponse: {
    prototype: AuthenticatorAttestationResponse;
    new (): AuthenticatorAttestationResponse;
};
interface AuthenticatorResponse {
    readonly clientDataJSON: ArrayBuffer;
}
declare var AuthenticatorResponse: {
    prototype: AuthenticatorResponse;
    new (): AuthenticatorResponse;
};
interface BarProp {
    readonly visible: boolean;
}
declare var BarProp: {
    prototype: BarProp;
    new (): BarProp;
};
interface BaseAudioContextEventMap {
    "statechange": Event;
}
interface BaseAudioContext extends EventTarget {
    readonly audioWorklet: AudioWorklet;
    readonly currentTime: number;
    readonly destination: AudioDestinationNode;
    readonly listener: AudioListener;
    onstatechange: ((this: BaseAudioContext, ev: Event) => any) | null;
    readonly sampleRate: number;
    readonly state: AudioContextState;
    createAnalyser(): AnalyserNode;
    createBiquadFilter(): BiquadFilterNode;
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createBufferSource(): AudioBufferSourceNode;
    createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
    createChannelSplitter(numberOfOutputs?: number): ChannelSplitterNode;
    createConstantSource(): ConstantSourceNode;
    createConvolver(): ConvolverNode;
    createDelay(maxDelayTime?: number): DelayNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createGain(): GainNode;
    createIIRFilter(feedforward: number[], feedback: number[]): IIRFilterNode;
    createOscillator(): OscillatorNode;
    createPanner(): PannerNode;
    createPeriodicWave(real: number[] | Float32Array, imag: number[] | Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave;
    createScriptProcessor(bufferSize?: number, numberOfInputChannels?: number, numberOfOutputChannels?: number): ScriptProcessorNode;
    createStereoPanner(): StereoPannerNode;
    createWaveShaper(): WaveShaperNode;
    decodeAudioData(audioData: ArrayBuffer, successCallback?: DecodeSuccessCallback | null, errorCallback?: DecodeErrorCallback | null): Promise<AudioBuffer>;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var BaseAudioContext: {
    prototype: BaseAudioContext;
    new (): BaseAudioContext;
};
interface BeforeUnloadEvent extends Event {
    returnValue: any;
}
declare var BeforeUnloadEvent: {
    prototype: BeforeUnloadEvent;
    new (): BeforeUnloadEvent;
};
interface BiquadFilterNode extends AudioNode {
    readonly Q: AudioParam;
    readonly detune: AudioParam;
    readonly frequency: AudioParam;
    readonly gain: AudioParam;
    type: BiquadFilterType;
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}
declare var BiquadFilterNode: {
    prototype: BiquadFilterNode;
    new (context: BaseAudioContext, options?: BiquadFilterOptions): BiquadFilterNode;
};
interface Blob {
    readonly size: number;
    readonly type: string;
    arrayBuffer(): Promise<ArrayBuffer>;
    slice(start?: number, end?: number, contentType?: string): Blob;
    stream(): ReadableStream<Uint8Array>;
    text(): Promise<string>;
}
declare var Blob: {
    prototype: Blob;
    new (blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};
interface BlobEvent extends Event {
    readonly data: Blob;
    readonly timecode: DOMHighResTimeStamp;
}
declare var BlobEvent: {
    prototype: BlobEvent;
    new (type: string, eventInitDict: BlobEventInit): BlobEvent;
};
interface Body {
    readonly body: ReadableStream<Uint8Array> | null;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}
interface BroadcastChannelEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}
interface BroadcastChannel extends EventTarget {
    readonly name: string;
    onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    close(): void;
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var BroadcastChannel: {
    prototype: BroadcastChannel;
    new (name: string): BroadcastChannel;
};
interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
    readonly highWaterMark: number;
    readonly size: QueuingStrategySize<ArrayBufferView>;
}
declare var ByteLengthQueuingStrategy: {
    prototype: ByteLengthQueuingStrategy;
    new (init: QueuingStrategyInit): ByteLengthQueuingStrategy;
};
interface CDATASection extends Text {
}
declare var CDATASection: {
    prototype: CDATASection;
    new (): CDATASection;
};
interface CSSAnimation extends Animation {
    readonly animationName: string;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSAnimation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSAnimation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var CSSAnimation: {
    prototype: CSSAnimation;
    new (): CSSAnimation;
};
interface CSSConditionRule extends CSSGroupingRule {
    readonly conditionText: string;
}
declare var CSSConditionRule: {
    prototype: CSSConditionRule;
    new (): CSSConditionRule;
};
interface CSSContainerRule extends CSSConditionRule {
}
declare var CSSContainerRule: {
    prototype: CSSContainerRule;
    new (): CSSContainerRule;
};
interface CSSCounterStyleRule extends CSSRule {
    additiveSymbols: string;
    fallback: string;
    name: string;
    negative: string;
    pad: string;
    prefix: string;
    range: string;
    speakAs: string;
    suffix: string;
    symbols: string;
    system: string;
}
declare var CSSCounterStyleRule: {
    prototype: CSSCounterStyleRule;
    new (): CSSCounterStyleRule;
};
interface CSSFontFaceRule extends CSSRule {
    readonly style: CSSStyleDeclaration;
}
declare var CSSFontFaceRule: {
    prototype: CSSFontFaceRule;
    new (): CSSFontFaceRule;
};
interface CSSFontFeatureValuesRule extends CSSRule {
    fontFamily: string;
}
declare var CSSFontFeatureValuesRule: {
    prototype: CSSFontFeatureValuesRule;
    new (): CSSFontFeatureValuesRule;
};
interface CSSFontPaletteValuesRule extends CSSRule {
    readonly basePalette: string;
    readonly fontFamily: string;
    readonly name: string;
    readonly overrideColors: string;
}
declare var CSSFontPaletteValuesRule: {
    prototype: CSSFontPaletteValuesRule;
    new (): CSSFontPaletteValuesRule;
};
interface CSSGroupingRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    deleteRule(index: number): void;
    insertRule(rule: string, index?: number): number;
}
declare var CSSGroupingRule: {
    prototype: CSSGroupingRule;
    new (): CSSGroupingRule;
};
interface CSSImportRule extends CSSRule {
    readonly href: string;
    readonly layerName: string | null;
    readonly media: MediaList;
    readonly styleSheet: CSSStyleSheet;
}
declare var CSSImportRule: {
    prototype: CSSImportRule;
    new (): CSSImportRule;
};
interface CSSKeyframeRule extends CSSRule {
    keyText: string;
    readonly style: CSSStyleDeclaration;
}
declare var CSSKeyframeRule: {
    prototype: CSSKeyframeRule;
    new (): CSSKeyframeRule;
};
interface CSSKeyframesRule extends CSSRule {
    readonly cssRules: CSSRuleList;
    name: string;
    appendRule(rule: string): void;
    deleteRule(select: string): void;
    findRule(select: string): CSSKeyframeRule | null;
    [index: number]: CSSKeyframeRule;
}
declare var CSSKeyframesRule: {
    prototype: CSSKeyframesRule;
    new (): CSSKeyframesRule;
};
interface CSSLayerBlockRule extends CSSGroupingRule {
    readonly name: string;
}
declare var CSSLayerBlockRule: {
    prototype: CSSLayerBlockRule;
    new (): CSSLayerBlockRule;
};
interface CSSLayerStatementRule extends CSSRule {
    readonly nameList: ReadonlyArray<string>;
}
declare var CSSLayerStatementRule: {
    prototype: CSSLayerStatementRule;
    new (): CSSLayerStatementRule;
};
interface CSSMediaRule extends CSSConditionRule {
    readonly media: MediaList;
}
declare var CSSMediaRule: {
    prototype: CSSMediaRule;
    new (): CSSMediaRule;
};
interface CSSNamespaceRule extends CSSRule {
    readonly namespaceURI: string;
    readonly prefix: string;
}
declare var CSSNamespaceRule: {
    prototype: CSSNamespaceRule;
    new (): CSSNamespaceRule;
};
interface CSSPageRule extends CSSGroupingRule {
    selectorText: string;
    readonly style: CSSStyleDeclaration;
}
declare var CSSPageRule: {
    prototype: CSSPageRule;
    new (): CSSPageRule;
};
interface CSSRule {
    cssText: string;
    readonly parentRule: CSSRule | null;
    readonly parentStyleSheet: CSSStyleSheet | null;
    readonly type: number;
    readonly STYLE_RULE: 1;
    readonly CHARSET_RULE: 2;
    readonly IMPORT_RULE: 3;
    readonly MEDIA_RULE: 4;
    readonly FONT_FACE_RULE: 5;
    readonly PAGE_RULE: 6;
    readonly NAMESPACE_RULE: 10;
    readonly KEYFRAMES_RULE: 7;
    readonly KEYFRAME_RULE: 8;
    readonly SUPPORTS_RULE: 12;
}
declare var CSSRule: {
    prototype: CSSRule;
    new (): CSSRule;
    readonly STYLE_RULE: 1;
    readonly CHARSET_RULE: 2;
    readonly IMPORT_RULE: 3;
    readonly MEDIA_RULE: 4;
    readonly FONT_FACE_RULE: 5;
    readonly PAGE_RULE: 6;
    readonly NAMESPACE_RULE: 10;
    readonly KEYFRAMES_RULE: 7;
    readonly KEYFRAME_RULE: 8;
    readonly SUPPORTS_RULE: 12;
};
interface CSSRuleList {
    readonly length: number;
    item(index: number): CSSRule | null;
    [index: number]: CSSRule;
}
declare var CSSRuleList: {
    prototype: CSSRuleList;
    new (): CSSRuleList;
};
interface CSSStyleDeclaration {
    accentColor: string;
    alignContent: string;
    alignItems: string;
    alignSelf: string;
    alignmentBaseline: string;
    all: string;
    animation: string;
    animationDelay: string;
    animationDirection: string;
    animationDuration: string;
    animationFillMode: string;
    animationIterationCount: string;
    animationName: string;
    animationPlayState: string;
    animationTimingFunction: string;
    appearance: string;
    aspectRatio: string;
    backdropFilter: string;
    backfaceVisibility: string;
    background: string;
    backgroundAttachment: string;
    backgroundBlendMode: string;
    backgroundClip: string;
    backgroundColor: string;
    backgroundImage: string;
    backgroundOrigin: string;
    backgroundPosition: string;
    backgroundPositionX: string;
    backgroundPositionY: string;
    backgroundRepeat: string;
    backgroundSize: string;
    baselineShift: string;
    blockSize: string;
    border: string;
    borderBlock: string;
    borderBlockColor: string;
    borderBlockEnd: string;
    borderBlockEndColor: string;
    borderBlockEndStyle: string;
    borderBlockEndWidth: string;
    borderBlockStart: string;
    borderBlockStartColor: string;
    borderBlockStartStyle: string;
    borderBlockStartWidth: string;
    borderBlockStyle: string;
    borderBlockWidth: string;
    borderBottom: string;
    borderBottomColor: string;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
    borderBottomStyle: string;
    borderBottomWidth: string;
    borderCollapse: string;
    borderColor: string;
    borderEndEndRadius: string;
    borderEndStartRadius: string;
    borderImage: string;
    borderImageOutset: string;
    borderImageRepeat: string;
    borderImageSlice: string;
    borderImageSource: string;
    borderImageWidth: string;
    borderInline: string;
    borderInlineColor: string;
    borderInlineEnd: string;
    borderInlineEndColor: string;
    borderInlineEndStyle: string;
    borderInlineEndWidth: string;
    borderInlineStart: string;
    borderInlineStartColor: string;
    borderInlineStartStyle: string;
    borderInlineStartWidth: string;
    borderInlineStyle: string;
    borderInlineWidth: string;
    borderLeft: string;
    borderLeftColor: string;
    borderLeftStyle: string;
    borderLeftWidth: string;
    borderRadius: string;
    borderRight: string;
    borderRightColor: string;
    borderRightStyle: string;
    borderRightWidth: string;
    borderSpacing: string;
    borderStartEndRadius: string;
    borderStartStartRadius: string;
    borderStyle: string;
    borderTop: string;
    borderTopColor: string;
    borderTopLeftRadius: string;
    borderTopRightRadius: string;
    borderTopStyle: string;
    borderTopWidth: string;
    borderWidth: string;
    bottom: string;
    boxShadow: string;
    boxSizing: string;
    breakAfter: string;
    breakBefore: string;
    breakInside: string;
    captionSide: string;
    caretColor: string;
    clear: string;
    clip: string;
    clipPath: string;
    clipRule: string;
    color: string;
    colorInterpolation: string;
    colorInterpolationFilters: string;
    colorScheme: string;
    columnCount: string;
    columnFill: string;
    columnGap: string;
    columnRule: string;
    columnRuleColor: string;
    columnRuleStyle: string;
    columnRuleWidth: string;
    columnSpan: string;
    columnWidth: string;
    columns: string;
    contain: string;
    containIntrinsicBlockSize: string;
    containIntrinsicHeight: string;
    containIntrinsicInlineSize: string;
    containIntrinsicSize: string;
    containIntrinsicWidth: string;
    container: string;
    containerName: string;
    containerType: string;
    content: string;
    contentVisibility: string;
    counterIncrement: string;
    counterReset: string;
    counterSet: string;
    cssFloat: string;
    cssText: string;
    cursor: string;
    direction: string;
    display: string;
    dominantBaseline: string;
    emptyCells: string;
    fill: string;
    fillOpacity: string;
    fillRule: string;
    filter: string;
    flex: string;
    flexBasis: string;
    flexDirection: string;
    flexFlow: string;
    flexGrow: string;
    flexShrink: string;
    flexWrap: string;
    float: string;
    floodColor: string;
    floodOpacity: string;
    font: string;
    fontFamily: string;
    fontFeatureSettings: string;
    fontKerning: string;
    fontOpticalSizing: string;
    fontPalette: string;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: string;
    fontSynthesis: string;
    fontVariant: string;
    fontVariantAlternates: string;
    fontVariantCaps: string;
    fontVariantEastAsian: string;
    fontVariantLigatures: string;
    fontVariantNumeric: string;
    fontVariantPosition: string;
    fontVariationSettings: string;
    fontWeight: string;
    gap: string;
    grid: string;
    gridArea: string;
    gridAutoColumns: string;
    gridAutoFlow: string;
    gridAutoRows: string;
    gridColumn: string;
    gridColumnEnd: string;
    gridColumnGap: string;
    gridColumnStart: string;
    gridGap: string;
    gridRow: string;
    gridRowEnd: string;
    gridRowGap: string;
    gridRowStart: string;
    gridTemplate: string;
    gridTemplateAreas: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    height: string;
    hyphenateCharacter: string;
    hyphens: string;
    imageOrientation: string;
    imageRendering: string;
    inlineSize: string;
    inset: string;
    insetBlock: string;
    insetBlockEnd: string;
    insetBlockStart: string;
    insetInline: string;
    insetInlineEnd: string;
    insetInlineStart: string;
    isolation: string;
    justifyContent: string;
    justifyItems: string;
    justifySelf: string;
    left: string;
    readonly length: number;
    letterSpacing: string;
    lightingColor: string;
    lineBreak: string;
    lineHeight: string;
    listStyle: string;
    listStyleImage: string;
    listStylePosition: string;
    listStyleType: string;
    margin: string;
    marginBlock: string;
    marginBlockEnd: string;
    marginBlockStart: string;
    marginBottom: string;
    marginInline: string;
    marginInlineEnd: string;
    marginInlineStart: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    marker: string;
    markerEnd: string;
    markerMid: string;
    markerStart: string;
    mask: string;
    maskClip: string;
    maskComposite: string;
    maskImage: string;
    maskMode: string;
    maskOrigin: string;
    maskPosition: string;
    maskRepeat: string;
    maskSize: string;
    maskType: string;
    mathStyle: string;
    maxBlockSize: string;
    maxHeight: string;
    maxInlineSize: string;
    maxWidth: string;
    minBlockSize: string;
    minHeight: string;
    minInlineSize: string;
    minWidth: string;
    mixBlendMode: string;
    objectFit: string;
    objectPosition: string;
    offset: string;
    offsetDistance: string;
    offsetPath: string;
    offsetRotate: string;
    opacity: string;
    order: string;
    orphans: string;
    outline: string;
    outlineColor: string;
    outlineOffset: string;
    outlineStyle: string;
    outlineWidth: string;
    overflow: string;
    overflowAnchor: string;
    overflowClipMargin: string;
    overflowWrap: string;
    overflowX: string;
    overflowY: string;
    overscrollBehavior: string;
    overscrollBehaviorBlock: string;
    overscrollBehaviorInline: string;
    overscrollBehaviorX: string;
    overscrollBehaviorY: string;
    padding: string;
    paddingBlock: string;
    paddingBlockEnd: string;
    paddingBlockStart: string;
    paddingBottom: string;
    paddingInline: string;
    paddingInlineEnd: string;
    paddingInlineStart: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    pageBreakAfter: string;
    pageBreakBefore: string;
    pageBreakInside: string;
    paintOrder: string;
    readonly parentRule: CSSRule | null;
    perspective: string;
    perspectiveOrigin: string;
    placeContent: string;
    placeItems: string;
    placeSelf: string;
    pointerEvents: string;
    position: string;
    printColorAdjust: string;
    quotes: string;
    resize: string;
    right: string;
    rotate: string;
    rowGap: string;
    rubyPosition: string;
    scale: string;
    scrollBehavior: string;
    scrollMargin: string;
    scrollMarginBlock: string;
    scrollMarginBlockEnd: string;
    scrollMarginBlockStart: string;
    scrollMarginBottom: string;
    scrollMarginInline: string;
    scrollMarginInlineEnd: string;
    scrollMarginInlineStart: string;
    scrollMarginLeft: string;
    scrollMarginRight: string;
    scrollMarginTop: string;
    scrollPadding: string;
    scrollPaddingBlock: string;
    scrollPaddingBlockEnd: string;
    scrollPaddingBlockStart: string;
    scrollPaddingBottom: string;
    scrollPaddingInline: string;
    scrollPaddingInlineEnd: string;
    scrollPaddingInlineStart: string;
    scrollPaddingLeft: string;
    scrollPaddingRight: string;
    scrollPaddingTop: string;
    scrollSnapAlign: string;
    scrollSnapStop: string;
    scrollSnapType: string;
    scrollbarGutter: string;
    shapeImageThreshold: string;
    shapeMargin: string;
    shapeOutside: string;
    shapeRendering: string;
    stopColor: string;
    stopOpacity: string;
    stroke: string;
    strokeDasharray: string;
    strokeDashoffset: string;
    strokeLinecap: string;
    strokeLinejoin: string;
    strokeMiterlimit: string;
    strokeOpacity: string;
    strokeWidth: string;
    tabSize: string;
    tableLayout: string;
    textAlign: string;
    textAlignLast: string;
    textAnchor: string;
    textCombineUpright: string;
    textDecoration: string;
    textDecorationColor: string;
    textDecorationLine: string;
    textDecorationSkipInk: string;
    textDecorationStyle: string;
    textDecorationThickness: string;
    textEmphasis: string;
    textEmphasisColor: string;
    textEmphasisPosition: string;
    textEmphasisStyle: string;
    textIndent: string;
    textOrientation: string;
    textOverflow: string;
    textRendering: string;
    textShadow: string;
    textTransform: string;
    textUnderlineOffset: string;
    textUnderlinePosition: string;
    top: string;
    touchAction: string;
    transform: string;
    transformBox: string;
    transformOrigin: string;
    transformStyle: string;
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction: string;
    translate: string;
    unicodeBidi: string;
    userSelect: string;
    verticalAlign: string;
    visibility: string;
    webkitAlignContent: string;
    webkitAlignItems: string;
    webkitAlignSelf: string;
    webkitAnimation: string;
    webkitAnimationDelay: string;
    webkitAnimationDirection: string;
    webkitAnimationDuration: string;
    webkitAnimationFillMode: string;
    webkitAnimationIterationCount: string;
    webkitAnimationName: string;
    webkitAnimationPlayState: string;
    webkitAnimationTimingFunction: string;
    webkitAppearance: string;
    webkitBackfaceVisibility: string;
    webkitBackgroundClip: string;
    webkitBackgroundOrigin: string;
    webkitBackgroundSize: string;
    webkitBorderBottomLeftRadius: string;
    webkitBorderBottomRightRadius: string;
    webkitBorderRadius: string;
    webkitBorderTopLeftRadius: string;
    webkitBorderTopRightRadius: string;
    webkitBoxAlign: string;
    webkitBoxFlex: string;
    webkitBoxOrdinalGroup: string;
    webkitBoxOrient: string;
    webkitBoxPack: string;
    webkitBoxShadow: string;
    webkitBoxSizing: string;
    webkitFilter: string;
    webkitFlex: string;
    webkitFlexBasis: string;
    webkitFlexDirection: string;
    webkitFlexFlow: string;
    webkitFlexGrow: string;
    webkitFlexShrink: string;
    webkitFlexWrap: string;
    webkitJustifyContent: string;
    webkitLineClamp: string;
    webkitMask: string;
    webkitMaskBoxImage: string;
    webkitMaskBoxImageOutset: string;
    webkitMaskBoxImageRepeat: string;
    webkitMaskBoxImageSlice: string;
    webkitMaskBoxImageSource: string;
    webkitMaskBoxImageWidth: string;
    webkitMaskClip: string;
    webkitMaskComposite: string;
    webkitMaskImage: string;
    webkitMaskOrigin: string;
    webkitMaskPosition: string;
    webkitMaskRepeat: string;
    webkitMaskSize: string;
    webkitOrder: string;
    webkitPerspective: string;
    webkitPerspectiveOrigin: string;
    webkitTextFillColor: string;
    webkitTextSizeAdjust: string;
    webkitTextStroke: string;
    webkitTextStrokeColor: string;
    webkitTextStrokeWidth: string;
    webkitTransform: string;
    webkitTransformOrigin: string;
    webkitTransformStyle: string;
    webkitTransition: string;
    webkitTransitionDelay: string;
    webkitTransitionDuration: string;
    webkitTransitionProperty: string;
    webkitTransitionTimingFunction: string;
    webkitUserSelect: string;
    whiteSpace: string;
    widows: string;
    width: string;
    willChange: string;
    wordBreak: string;
    wordSpacing: string;
    wordWrap: string;
    writingMode: string;
    zIndex: string;
    getPropertyPriority(property: string): string;
    getPropertyValue(property: string): string;
    item(index: number): string;
    removeProperty(property: string): string;
    setProperty(property: string, value: string | null, priority?: string): void;
    [index: number]: string;
}
declare var CSSStyleDeclaration: {
    prototype: CSSStyleDeclaration;
    new (): CSSStyleDeclaration;
};
interface CSSStyleRule extends CSSRule {
    selectorText: string;
    readonly style: CSSStyleDeclaration;
}
declare var CSSStyleRule: {
    prototype: CSSStyleRule;
    new (): CSSStyleRule;
};
interface CSSStyleSheet extends StyleSheet {
    readonly cssRules: CSSRuleList;
    readonly ownerRule: CSSRule | null;
    readonly rules: CSSRuleList;
    addRule(selector?: string, style?: string, index?: number): number;
    deleteRule(index: number): void;
    insertRule(rule: string, index?: number): number;
    removeRule(index?: number): void;
    replace(text: string): Promise<CSSStyleSheet>;
    replaceSync(text: string): void;
}
declare var CSSStyleSheet: {
    prototype: CSSStyleSheet;
    new (options?: CSSStyleSheetInit): CSSStyleSheet;
};
interface CSSSupportsRule extends CSSConditionRule {
}
declare var CSSSupportsRule: {
    prototype: CSSSupportsRule;
    new (): CSSSupportsRule;
};
interface CSSTransition extends Animation {
    readonly transitionProperty: string;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSTransition, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSTransition, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var CSSTransition: {
    prototype: CSSTransition;
    new (): CSSTransition;
};
interface Cache {
    add(request: RequestInfo | URL): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    delete(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>;
    match(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<Response | undefined>;
    matchAll(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
    put(request: RequestInfo | URL, response: Response): Promise<void>;
}
declare var Cache: {
    prototype: Cache;
    new (): Cache;
};
interface CacheStorage {
    delete(cacheName: string): Promise<boolean>;
    has(cacheName: string): Promise<boolean>;
    keys(): Promise<string[]>;
    match(request: RequestInfo | URL, options?: MultiCacheQueryOptions): Promise<Response | undefined>;
    open(cacheName: string): Promise<Cache>;
}
declare var CacheStorage: {
    prototype: CacheStorage;
    new (): CacheStorage;
};
interface CanvasCaptureMediaStreamTrack extends MediaStreamTrack {
    readonly canvas: HTMLCanvasElement;
    requestFrame(): void;
    addEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: CanvasCaptureMediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: CanvasCaptureMediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var CanvasCaptureMediaStreamTrack: {
    prototype: CanvasCaptureMediaStreamTrack;
    new (): CanvasCaptureMediaStreamTrack;
};
interface CanvasCompositing {
    globalAlpha: number;
    globalCompositeOperation: GlobalCompositeOperation;
}
interface CanvasDrawImage {
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}
interface CanvasDrawPath {
    beginPath(): void;
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    fill(fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    stroke(): void;
    stroke(path: Path2D): void;
}
interface CanvasFillStrokeStyles {
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    createConicGradient(startAngle: number, x: number, y: number): CanvasGradient;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
}
interface CanvasFilters {
    filter: string;
}
interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
}
declare var CanvasGradient: {
    prototype: CanvasGradient;
    new (): CanvasGradient;
};
interface CanvasImageData {
    createImageData(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    getImageData(sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}
interface CanvasImageSmoothing {
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality: ImageSmoothingQuality;
}
interface CanvasPath {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    closePath(): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
    roundRect(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | (number | DOMPointInit)[]): void;
}
interface CanvasPathDrawingStyles {
    lineCap: CanvasLineCap;
    lineDashOffset: number;
    lineJoin: CanvasLineJoin;
    lineWidth: number;
    miterLimit: number;
    getLineDash(): number[];
    setLineDash(segments: number[]): void;
}
interface CanvasPattern {
    setTransform(transform?: DOMMatrix2DInit): void;
}
declare var CanvasPattern: {
    prototype: CanvasPattern;
    new (): CanvasPattern;
};
interface CanvasRect {
    clearRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
}
interface CanvasRenderingContext2D extends CanvasCompositing, CanvasDrawImage, CanvasDrawPath, CanvasFillStrokeStyles, CanvasFilters, CanvasImageData, CanvasImageSmoothing, CanvasPath, CanvasPathDrawingStyles, CanvasRect, CanvasShadowStyles, CanvasState, CanvasText, CanvasTextDrawingStyles, CanvasTransform, CanvasUserInterface {
    readonly canvas: HTMLCanvasElement;
    getContextAttributes(): CanvasRenderingContext2DSettings;
}
declare var CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
    new (): CanvasRenderingContext2D;
};
interface CanvasShadowStyles {
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
}
interface CanvasState {
    restore(): void;
    save(): void;
}
interface CanvasText {
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): TextMetrics;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}
interface CanvasTextDrawingStyles {
    direction: CanvasDirection;
    font: string;
    fontKerning: CanvasFontKerning;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
}
interface CanvasTransform {
    getTransform(): DOMMatrix;
    resetTransform(): void;
    rotate(angle: number): void;
    scale(x: number, y: number): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(transform?: DOMMatrix2DInit): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    translate(x: number, y: number): void;
}
interface CanvasUserInterface {
    drawFocusIfNeeded(element: Element): void;
    drawFocusIfNeeded(path: Path2D, element: Element): void;
}
interface ChannelMergerNode extends AudioNode {
}
declare var ChannelMergerNode: {
    prototype: ChannelMergerNode;
    new (context: BaseAudioContext, options?: ChannelMergerOptions): ChannelMergerNode;
};
interface ChannelSplitterNode extends AudioNode {
}
declare var ChannelSplitterNode: {
    prototype: ChannelSplitterNode;
    new (context: BaseAudioContext, options?: ChannelSplitterOptions): ChannelSplitterNode;
};
interface CharacterData extends Node, ChildNode, NonDocumentTypeChildNode {
    data: string;
    readonly length: number;
    readonly ownerDocument: Document;
    appendData(data: string): void;
    deleteData(offset: number, count: number): void;
    insertData(offset: number, data: string): void;
    replaceData(offset: number, count: number, data: string): void;
    substringData(offset: number, count: number): string;
}
declare var CharacterData: {
    prototype: CharacterData;
    new (): CharacterData;
};
interface ChildNode extends Node {
    after(...nodes: (Node | string)[]): void;
    before(...nodes: (Node | string)[]): void;
    remove(): void;
    replaceWith(...nodes: (Node | string)[]): void;
}
interface ClientRect extends DOMRect {
}
interface Clipboard extends EventTarget {
    read(): Promise<ClipboardItems>;
    readText(): Promise<string>;
    write(data: ClipboardItems): Promise<void>;
    writeText(data: string): Promise<void>;
}
declare var Clipboard: {
    prototype: Clipboard;
    new (): Clipboard;
};
interface ClipboardEvent extends Event {
    readonly clipboardData: DataTransfer | null;
}
declare var ClipboardEvent: {
    prototype: ClipboardEvent;
    new (type: string, eventInitDict?: ClipboardEventInit): ClipboardEvent;
};
interface ClipboardItem {
    readonly presentationStyle: PresentationStyle;
    readonly types: ReadonlyArray<string>;
    getType(type: string): Promise<Blob>;
}
declare var ClipboardItem: {
    prototype: ClipboardItem;
    new (items: Record<string, string | Blob | PromiseLike<string | Blob>>, options?: ClipboardItemOptions): ClipboardItem;
};
interface CloseEvent extends Event {
    readonly code: number;
    readonly reason: string;
    readonly wasClean: boolean;
}
declare var CloseEvent: {
    prototype: CloseEvent;
    new (type: string, eventInitDict?: CloseEventInit): CloseEvent;
};
interface Comment extends CharacterData {
}
declare var Comment: {
    prototype: Comment;
    new (data?: string): Comment;
};
interface CompositionEvent extends UIEvent {
    readonly data: string;
    initCompositionEvent(typeArg: string, bubblesArg?: boolean, cancelableArg?: boolean, viewArg?: WindowProxy | null, dataArg?: string): void;
}
declare var CompositionEvent: {
    prototype: CompositionEvent;
    new (type: string, eventInitDict?: CompositionEventInit): CompositionEvent;
};
interface ConstantSourceNode extends AudioScheduledSourceNode {
    readonly offset: AudioParam;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var ConstantSourceNode: {
    prototype: ConstantSourceNode;
    new (context: BaseAudioContext, options?: ConstantSourceOptions): ConstantSourceNode;
};
interface ConvolverNode extends AudioNode {
    buffer: AudioBuffer | null;
    normalize: boolean;
}
declare var ConvolverNode: {
    prototype: ConvolverNode;
    new (context: BaseAudioContext, options?: ConvolverOptions): ConvolverNode;
};
interface CountQueuingStrategy extends QueuingStrategy {
    readonly highWaterMark: number;
    readonly size: QueuingStrategySize;
}
declare var CountQueuingStrategy: {
    prototype: CountQueuingStrategy;
    new (init: QueuingStrategyInit): CountQueuingStrategy;
};
interface Credential {
    readonly id: string;
    readonly type: string;
}
declare var Credential: {
    prototype: Credential;
    new (): Credential;
};
interface CredentialsContainer {
    create(options?: CredentialCreationOptions): Promise<Credential | null>;
    get(options?: CredentialRequestOptions): Promise<Credential | null>;
    preventSilentAccess(): Promise<void>;
    store(credential: Credential): Promise<Credential>;
}
declare var CredentialsContainer: {
    prototype: CredentialsContainer;
    new (): CredentialsContainer;
};
interface Crypto {
    readonly subtle: SubtleCrypto;
    getRandomValues<T extends ArrayBufferView | null>(array: T): T;
    randomUUID(): `${string}-${string}-${string}-${string}-${string}`;
}
declare var Crypto: {
    prototype: Crypto;
    new (): Crypto;
};
interface CryptoKey {
    readonly algorithm: KeyAlgorithm;
    readonly extractable: boolean;
    readonly type: KeyType;
    readonly usages: KeyUsage[];
}
declare var CryptoKey: {
    prototype: CryptoKey;
    new (): CryptoKey;
};
interface CustomElementRegistry {
    define(name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions): void;
    get(name: string): CustomElementConstructor | undefined;
    upgrade(root: Node): void;
    whenDefined(name: string): Promise<CustomElementConstructor>;
}
declare var CustomElementRegistry: {
    prototype: CustomElementRegistry;
    new (): CustomElementRegistry;
};
interface CustomEvent<T = any> extends Event {
    readonly detail: T;
    initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: T): void;
}
declare var CustomEvent: {
    prototype: CustomEvent;
    new <T>(type: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
};
interface DOMException extends Error {
    readonly code: number;
    readonly message: string;
    readonly name: string;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
}
declare var DOMException: {
    prototype: DOMException;
    new (message?: string, name?: string): DOMException;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
};
interface DOMImplementation {
    createDocument(namespace: string | null, qualifiedName: string | null, doctype?: DocumentType | null): XMLDocument;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createHTMLDocument(title?: string): Document;
    hasFeature(...args: any[]): true;
}
declare var DOMImplementation: {
    prototype: DOMImplementation;
    new (): DOMImplementation;
};
interface DOMMatrix extends DOMMatrixReadOnly {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
    invertSelf(): DOMMatrix;
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    setMatrixValue(transformList: string): DOMMatrix;
    skewXSelf(sx?: number): DOMMatrix;
    skewYSelf(sy?: number): DOMMatrix;
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}
declare var DOMMatrix: {
    prototype: DOMMatrix;
    new (init?: string | number[]): DOMMatrix;
    fromFloat32Array(array32: Float32Array): DOMMatrix;
    fromFloat64Array(array64: Float64Array): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};
type SVGMatrix = DOMMatrix;
declare var SVGMatrix: typeof DOMMatrix;
type WebKitCSSMatrix = DOMMatrix;
declare var WebKitCSSMatrix: typeof DOMMatrix;
interface DOMMatrixReadOnly {
    readonly a: number;
    readonly b: number;
    readonly c: number;
    readonly d: number;
    readonly e: number;
    readonly f: number;
    readonly is2D: boolean;
    readonly isIdentity: boolean;
    readonly m11: number;
    readonly m12: number;
    readonly m13: number;
    readonly m14: number;
    readonly m21: number;
    readonly m22: number;
    readonly m23: number;
    readonly m24: number;
    readonly m31: number;
    readonly m32: number;
    readonly m33: number;
    readonly m34: number;
    readonly m41: number;
    readonly m42: number;
    readonly m43: number;
    readonly m44: number;
    flipX(): DOMMatrix;
    flipY(): DOMMatrix;
    inverse(): DOMMatrix;
    multiply(other?: DOMMatrixInit): DOMMatrix;
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
    skewX(sx?: number): DOMMatrix;
    skewY(sy?: number): DOMMatrix;
    toFloat32Array(): Float32Array;
    toFloat64Array(): Float64Array;
    toJSON(): any;
    transformPoint(point?: DOMPointInit): DOMPoint;
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
    toString(): string;
}
declare var DOMMatrixReadOnly: {
    prototype: DOMMatrixReadOnly;
    new (init?: string | number[]): DOMMatrixReadOnly;
    fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
    toString(): string;
};
interface DOMParser {
    parseFromString(string: string, type: DOMParserSupportedType): Document;
}
declare var DOMParser: {
    prototype: DOMParser;
    new (): DOMParser;
};
interface DOMPoint extends DOMPointReadOnly {
    w: number;
    x: number;
    y: number;
    z: number;
}
declare var DOMPoint: {
    prototype: DOMPoint;
    new (x?: number, y?: number, z?: number, w?: number): DOMPoint;
    fromPoint(other?: DOMPointInit): DOMPoint;
};
type SVGPoint = DOMPoint;
declare var SVGPoint: typeof DOMPoint;
interface DOMPointReadOnly {
    readonly w: number;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
    toJSON(): any;
}
declare var DOMPointReadOnly: {
    prototype: DOMPointReadOnly;
    new (x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};
interface DOMQuad {
    readonly p1: DOMPoint;
    readonly p2: DOMPoint;
    readonly p3: DOMPoint;
    readonly p4: DOMPoint;
    getBounds(): DOMRect;
    toJSON(): any;
}
declare var DOMQuad: {
    prototype: DOMQuad;
    new (p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
    fromQuad(other?: DOMQuadInit): DOMQuad;
    fromRect(other?: DOMRectInit): DOMQuad;
};
interface DOMRect extends DOMRectReadOnly {
    height: number;
    width: number;
    x: number;
    y: number;
}
declare var DOMRect: {
    prototype: DOMRect;
    new (x?: number, y?: number, width?: number, height?: number): DOMRect;
    fromRect(other?: DOMRectInit): DOMRect;
};
type SVGRect = DOMRect;
declare var SVGRect: typeof DOMRect;
interface DOMRectList {
    readonly length: number;
    item(index: number): DOMRect | null;
    [index: number]: DOMRect;
}
declare var DOMRectList: {
    prototype: DOMRectList;
    new (): DOMRectList;
};
interface DOMRectReadOnly {
    readonly bottom: number;
    readonly height: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly width: number;
    readonly x: number;
    readonly y: number;
    toJSON(): any;
}
declare var DOMRectReadOnly: {
    prototype: DOMRectReadOnly;
    new (x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
};
interface DOMStringList {
    readonly length: number;
    contains(string: string): boolean;
    item(index: number): string | null;
    [index: number]: string;
}
declare var DOMStringList: {
    prototype: DOMStringList;
    new (): DOMStringList;
};
interface DOMStringMap {
    [name: string]: string | undefined;
}
declare var DOMStringMap: {
    prototype: DOMStringMap;
    new (): DOMStringMap;
};
interface DOMTokenList {
    readonly length: number;
    value: string;
    toString(): string;
    add(...tokens: string[]): void;
    contains(token: string): boolean;
    item(index: number): string | null;
    remove(...tokens: string[]): void;
    replace(token: string, newToken: string): boolean;
    supports(token: string): boolean;
    toggle(token: string, force?: boolean): boolean;
    forEach(callbackfn: (value: string, key: number, parent: DOMTokenList) => void, thisArg?: any): void;
    [index: number]: string;
}
declare var DOMTokenList: {
    prototype: DOMTokenList;
    new (): DOMTokenList;
};
interface DataTransfer {
    dropEffect: "none" | "copy" | "link" | "move";
    effectAllowed: "none" | "copy" | "copyLink" | "copyMove" | "link" | "linkMove" | "move" | "all" | "uninitialized";
    readonly files: FileList;
    readonly items: DataTransferItemList;
    readonly types: ReadonlyArray<string>;
    clearData(format?: string): void;
    getData(format: string): string;
    setData(format: string, data: string): void;
    setDragImage(image: Element, x: number, y: number): void;
}
declare var DataTransfer: {
    prototype: DataTransfer;
    new (): DataTransfer;
};
interface DataTransferItem {
    readonly kind: string;
    readonly type: string;
    getAsFile(): File | null;
    getAsString(callback: FunctionStringCallback | null): void;
    webkitGetAsEntry(): FileSystemEntry | null;
}
declare var DataTransferItem: {
    prototype: DataTransferItem;
    new (): DataTransferItem;
};
interface DataTransferItemList {
    readonly length: number;
    add(data: string, type: string): DataTransferItem | null;
    add(data: File): DataTransferItem | null;
    clear(): void;
    remove(index: number): void;
    [index: number]: DataTransferItem;
}
declare var DataTransferItemList: {
    prototype: DataTransferItemList;
    new (): DataTransferItemList;
};
interface DelayNode extends AudioNode {
    readonly delayTime: AudioParam;
}
declare var DelayNode: {
    prototype: DelayNode;
    new (context: BaseAudioContext, options?: DelayOptions): DelayNode;
};
interface DeviceMotionEvent extends Event {
    readonly acceleration: DeviceMotionEventAcceleration | null;
    readonly accelerationIncludingGravity: DeviceMotionEventAcceleration | null;
    readonly interval: number;
    readonly rotationRate: DeviceMotionEventRotationRate | null;
}
declare var DeviceMotionEvent: {
    prototype: DeviceMotionEvent;
    new (type: string, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent;
};
interface DeviceMotionEventAcceleration {
    readonly x: number | null;
    readonly y: number | null;
    readonly z: number | null;
}
interface DeviceMotionEventRotationRate {
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
}
interface DeviceOrientationEvent extends Event {
    readonly absolute: boolean;
    readonly alpha: number | null;
    readonly beta: number | null;
    readonly gamma: number | null;
}
declare var DeviceOrientationEvent: {
    prototype: DeviceOrientationEvent;
    new (type: string, eventInitDict?: DeviceOrientationEventInit): DeviceOrientationEvent;
};
interface DocumentEventMap extends GlobalEventHandlersEventMap {
    "DOMContentLoaded": Event;
    "fullscreenchange": Event;
    "fullscreenerror": Event;
    "pointerlockchange": Event;
    "pointerlockerror": Event;
    "readystatechange": Event;
    "visibilitychange": Event;
}
interface Document extends Node, DocumentOrShadowRoot, FontFaceSource, GlobalEventHandlers, NonElementParentNode, ParentNode, XPathEvaluatorBase {
    readonly URL: string;
    alinkColor: string;
    readonly all: HTMLAllCollection;
    readonly anchors: HTMLCollectionOf<HTMLAnchorElement>;
    readonly applets: HTMLCollection;
    bgColor: string;
    body: HTMLElement;
    readonly characterSet: string;
    readonly charset: string;
    readonly compatMode: string;
    readonly contentType: string;
    cookie: string;
    readonly currentScript: HTMLOrSVGScriptElement | null;
    readonly defaultView: (WindowProxy & typeof globalThis) | null;
    designMode: string;
    dir: string;
    readonly doctype: DocumentType | null;
    readonly documentElement: HTMLElement;
    readonly documentURI: string;
    domain: string;
    readonly embeds: HTMLCollectionOf<HTMLEmbedElement>;
    fgColor: string;
    readonly forms: HTMLCollectionOf<HTMLFormElement>;
    readonly fullscreen: boolean;
    readonly fullscreenEnabled: boolean;
    readonly head: HTMLHeadElement;
    readonly hidden: boolean;
    readonly images: HTMLCollectionOf<HTMLImageElement>;
    readonly implementation: DOMImplementation;
    readonly inputEncoding: string;
    readonly lastModified: string;
    linkColor: string;
    readonly links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    get location(): Location;
    set location(href: string | Location);
    onfullscreenchange: ((this: Document, ev: Event) => any) | null;
    onfullscreenerror: ((this: Document, ev: Event) => any) | null;
    onpointerlockchange: ((this: Document, ev: Event) => any) | null;
    onpointerlockerror: ((this: Document, ev: Event) => any) | null;
    onreadystatechange: ((this: Document, ev: Event) => any) | null;
    onvisibilitychange: ((this: Document, ev: Event) => any) | null;
    readonly ownerDocument: null;
    readonly pictureInPictureEnabled: boolean;
    readonly plugins: HTMLCollectionOf<HTMLEmbedElement>;
    readonly readyState: DocumentReadyState;
    readonly referrer: string;
    readonly rootElement: SVGSVGElement | null;
    readonly scripts: HTMLCollectionOf<HTMLScriptElement>;
    readonly scrollingElement: Element | null;
    readonly timeline: DocumentTimeline;
    title: string;
    readonly visibilityState: DocumentVisibilityState;
    vlinkColor: string;
    adoptNode<T extends Node>(node: T): T;
    captureEvents(): void;
    caretRangeFromPoint(x: number, y: number): Range | null;
    clear(): void;
    close(): void;
    createAttribute(localName: string): Attr;
    createAttributeNS(namespace: string | null, qualifiedName: string): Attr;
    createCDATASection(data: string): CDATASection;
    createComment(data: string): Comment;
    createDocumentFragment(): DocumentFragment;
    createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
    createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementDeprecatedTagNameMap[K];
    createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
    createElementNS(namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement;
    createElementNS<K extends keyof SVGElementTagNameMap>(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: K): SVGElementTagNameMap[K];
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement;
    createElementNS<K extends keyof MathMLElementTagNameMap>(namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: K): MathMLElementTagNameMap[K];
    createElementNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: string): MathMLElement;
    createElementNS(namespaceURI: string | null, qualifiedName: string, options?: ElementCreationOptions): Element;
    createElementNS(namespace: string | null, qualifiedName: string, options?: string | ElementCreationOptions): Element;
    createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
    createEvent(eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
    createEvent(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface: "BlobEvent"): BlobEvent;
    createEvent(eventInterface: "ClipboardEvent"): ClipboardEvent;
    createEvent(eventInterface: "CloseEvent"): CloseEvent;
    createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
    createEvent(eventInterface: "CustomEvent"): CustomEvent;
    createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface: "DragEvent"): DragEvent;
    createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
    createEvent(eventInterface: "Event"): Event;
    createEvent(eventInterface: "Events"): Event;
    createEvent(eventInterface: "FocusEvent"): FocusEvent;
    createEvent(eventInterface: "FontFaceSetLoadEvent"): FontFaceSetLoadEvent;
    createEvent(eventInterface: "FormDataEvent"): FormDataEvent;
    createEvent(eventInterface: "GamepadEvent"): GamepadEvent;
    createEvent(eventInterface: "HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface: "InputEvent"): InputEvent;
    createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface: "MIDIConnectionEvent"): MIDIConnectionEvent;
    createEvent(eventInterface: "MIDIMessageEvent"): MIDIMessageEvent;
    createEvent(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
    createEvent(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
    createEvent(eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
    createEvent(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
    createEvent(eventInterface: "MessageEvent"): MessageEvent;
    createEvent(eventInterface: "MouseEvent"): MouseEvent;
    createEvent(eventInterface: "MouseEvents"): MouseEvent;
    createEvent(eventInterface: "MutationEvent"): MutationEvent;
    createEvent(eventInterface: "MutationEvents"): MutationEvent;
    createEvent(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface: "PaymentMethodChangeEvent"): PaymentMethodChangeEvent;
    createEvent(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    createEvent(eventInterface: "PictureInPictureEvent"): PictureInPictureEvent;
    createEvent(eventInterface: "PointerEvent"): PointerEvent;
    createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
    createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
    createEvent(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
    createEvent(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    createEvent(eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
    createEvent(eventInterface: "RTCErrorEvent"): RTCErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    createEvent(eventInterface: "RTCTrackEvent"): RTCTrackEvent;
    createEvent(eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
    createEvent(eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
    createEvent(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
    createEvent(eventInterface: "StorageEvent"): StorageEvent;
    createEvent(eventInterface: "SubmitEvent"): SubmitEvent;
    createEvent(eventInterface: "TouchEvent"): TouchEvent;
    createEvent(eventInterface: "TrackEvent"): TrackEvent;
    createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
    createEvent(eventInterface: "UIEvent"): UIEvent;
    createEvent(eventInterface: "UIEvents"): UIEvent;
    createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface: "WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter | null): NodeIterator;
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    createRange(): Range;
    createTextNode(data: string): Text;
    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter | null): TreeWalker;
    execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
    exitFullscreen(): Promise<void>;
    exitPictureInPicture(): Promise<void>;
    exitPointerLock(): void;
    getElementById(elementId: string): HTMLElement | null;
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    getElementsByName(elementName: string): NodeListOf<HTMLElement>;
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>;
    getElementsByTagNameNS(namespace: string | null, localName: string): HTMLCollectionOf<Element>;
    getSelection(): Selection | null;
    hasFocus(): boolean;
    hasStorageAccess(): Promise<boolean>;
    importNode<T extends Node>(node: T, deep?: boolean): T;
    open(unused1?: string, unused2?: string): Document;
    open(url: string | URL, name: string, features: string): WindowProxy | null;
    queryCommandEnabled(commandId: string): boolean;
    queryCommandIndeterm(commandId: string): boolean;
    queryCommandState(commandId: string): boolean;
    queryCommandSupported(commandId: string): boolean;
    queryCommandValue(commandId: string): string;
    releaseEvents(): void;
    requestStorageAccess(): Promise<void>;
    write(...text: string[]): void;
    writeln(...text: string[]): void;
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var Document: {
    prototype: Document;
    new (): Document;
};
interface DocumentFragment extends Node, NonElementParentNode, ParentNode {
    readonly ownerDocument: Document;
    getElementById(elementId: string): HTMLElement | null;
}
declare var DocumentFragment: {
    prototype: DocumentFragment;
    new (): DocumentFragment;
};
interface DocumentOrShadowRoot {
    readonly activeElement: Element | null;
    adoptedStyleSheets: CSSStyleSheet[];
    readonly fullscreenElement: Element | null;
    readonly pictureInPictureElement: Element | null;
    readonly pointerLockElement: Element | null;
    readonly styleSheets: StyleSheetList;
    elementFromPoint(x: number, y: number): Element | null;
    elementsFromPoint(x: number, y: number): Element[];
    getAnimations(): Animation[];
}
interface DocumentTimeline extends AnimationTimeline {
}
declare var DocumentTimeline: {
    prototype: DocumentTimeline;
    new (options?: DocumentTimelineOptions): DocumentTimeline;
};
interface DocumentType extends Node, ChildNode {
    readonly name: string;
    readonly ownerDocument: Document;
    readonly publicId: string;
    readonly systemId: string;
}
declare var DocumentType: {
    prototype: DocumentType;
    new (): DocumentType;
};
interface DragEvent extends MouseEvent {
    readonly dataTransfer: DataTransfer | null;
}
declare var DragEvent: {
    prototype: DragEvent;
    new (type: string, eventInitDict?: DragEventInit): DragEvent;
};
interface DynamicsCompressorNode extends AudioNode {
    readonly attack: AudioParam;
    readonly knee: AudioParam;
    readonly ratio: AudioParam;
    readonly reduction: number;
    readonly release: AudioParam;
    readonly threshold: AudioParam;
}
declare var DynamicsCompressorNode: {
    prototype: DynamicsCompressorNode;
    new (context: BaseAudioContext, options?: DynamicsCompressorOptions): DynamicsCompressorNode;
};
interface EXT_blend_minmax {
    readonly MIN_EXT: 0x8007;
    readonly MAX_EXT: 0x8008;
}
interface EXT_color_buffer_float {
}
interface EXT_color_buffer_half_float {
    readonly RGBA16F_EXT: 0x881A;
    readonly RGB16F_EXT: 0x881B;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211;
    readonly UNSIGNED_NORMALIZED_EXT: 0x8C17;
}
interface EXT_float_blend {
}
interface EXT_frag_depth {
}
interface EXT_sRGB {
    readonly SRGB_EXT: 0x8C40;
    readonly SRGB_ALPHA_EXT: 0x8C42;
    readonly SRGB8_ALPHA8_EXT: 0x8C43;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: 0x8210;
}
interface EXT_shader_texture_lod {
}
interface EXT_texture_compression_bptc {
    readonly COMPRESSED_RGBA_BPTC_UNORM_EXT: 0x8E8C;
    readonly COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT: 0x8E8D;
    readonly COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT: 0x8E8E;
    readonly COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT: 0x8E8F;
}
interface EXT_texture_compression_rgtc {
    readonly COMPRESSED_RED_RGTC1_EXT: 0x8DBB;
    readonly COMPRESSED_SIGNED_RED_RGTC1_EXT: 0x8DBC;
    readonly COMPRESSED_RED_GREEN_RGTC2_EXT: 0x8DBD;
    readonly COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT: 0x8DBE;
}
interface EXT_texture_filter_anisotropic {
    readonly TEXTURE_MAX_ANISOTROPY_EXT: 0x84FE;
    readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84FF;
}
interface EXT_texture_norm16 {
    readonly R16_EXT: 0x822A;
    readonly RG16_EXT: 0x822C;
    readonly RGB16_EXT: 0x8054;
    readonly RGBA16_EXT: 0x805B;
    readonly R16_SNORM_EXT: 0x8F98;
    readonly RG16_SNORM_EXT: 0x8F99;
    readonly RGB16_SNORM_EXT: 0x8F9A;
    readonly RGBA16_SNORM_EXT: 0x8F9B;
}
interface ElementEventMap {
    "fullscreenchange": Event;
    "fullscreenerror": Event;
}
interface Element extends Node, ARIAMixin, Animatable, ChildNode, InnerHTML, NonDocumentTypeChildNode, ParentNode, Slottable {
    readonly attributes: NamedNodeMap;
    readonly classList: DOMTokenList;
    className: string;
    readonly clientHeight: number;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    id: string;
    readonly localName: string;
    readonly namespaceURI: string | null;
    onfullscreenchange: ((this: Element, ev: Event) => any) | null;
    onfullscreenerror: ((this: Element, ev: Event) => any) | null;
    outerHTML: string;
    readonly ownerDocument: Document;
    readonly part: DOMTokenList;
    readonly prefix: string | null;
    readonly scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly shadowRoot: ShadowRoot | null;
    slot: string;
    readonly tagName: string;
    attachShadow(init: ShadowRootInit): ShadowRoot;
    checkVisibility(options?: CheckVisibilityOptions): boolean;
    closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
    closest<K extends keyof MathMLElementTagNameMap>(selector: K): MathMLElementTagNameMap[K] | null;
    closest<E extends Element = Element>(selectors: string): E | null;
    getAttribute(qualifiedName: string): string | null;
    getAttributeNS(namespace: string | null, localName: string): string | null;
    getAttributeNames(): string[];
    getAttributeNode(qualifiedName: string): Attr | null;
    getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
    getBoundingClientRect(): DOMRect;
    getClientRects(): DOMRectList;
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>;
    getElementsByTagNameNS(namespace: string | null, localName: string): HTMLCollectionOf<Element>;
    hasAttribute(qualifiedName: string): boolean;
    hasAttributeNS(namespace: string | null, localName: string): boolean;
    hasAttributes(): boolean;
    hasPointerCapture(pointerId: number): boolean;
    insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
    insertAdjacentHTML(position: InsertPosition, text: string): void;
    insertAdjacentText(where: InsertPosition, data: string): void;
    matches(selectors: string): boolean;
    releasePointerCapture(pointerId: number): void;
    removeAttribute(qualifiedName: string): void;
    removeAttributeNS(namespace: string | null, localName: string): void;
    removeAttributeNode(attr: Attr): Attr;
    requestFullscreen(options?: FullscreenOptions): Promise<void>;
    requestPointerLock(): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    setAttribute(qualifiedName: string, value: string): void;
    setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
    setAttributeNode(attr: Attr): Attr | null;
    setAttributeNodeNS(attr: Attr): Attr | null;
    setPointerCapture(pointerId: number): void;
    toggleAttribute(qualifiedName: string, force?: boolean): boolean;
    webkitMatchesSelector(selectors: string): boolean;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var Element: {
    prototype: Element;
    new (): Element;
};
interface ElementCSSInlineStyle {
    readonly style: CSSStyleDeclaration;
}
interface ElementContentEditable {
    contentEditable: string;
    enterKeyHint: string;
    inputMode: string;
    readonly isContentEditable: boolean;
}
interface ElementInternals extends ARIAMixin {
    readonly form: HTMLFormElement | null;
    readonly labels: NodeList;
    readonly shadowRoot: ShadowRoot | null;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setFormValue(value: File | string | FormData | null, state?: File | string | FormData | null): void;
    setValidity(flags?: ValidityStateFlags, message?: string, anchor?: HTMLElement): void;
}
declare var ElementInternals: {
    prototype: ElementInternals;
    new (): ElementInternals;
};
interface ErrorEvent extends Event {
    readonly colno: number;
    readonly error: any;
    readonly filename: string;
    readonly lineno: number;
    readonly message: string;
}
declare var ErrorEvent: {
    prototype: ErrorEvent;
    new (type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
};
interface Event {
    readonly bubbles: boolean;
    cancelBubble: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly currentTarget: EventTarget | null;
    readonly defaultPrevented: boolean;
    readonly eventPhase: number;
    readonly isTrusted: boolean;
    returnValue: boolean;
    readonly srcElement: EventTarget | null;
    readonly target: EventTarget | null;
    readonly timeStamp: DOMHighResTimeStamp;
    readonly type: string;
    composedPath(): EventTarget[];
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
}
declare var Event: {
    prototype: Event;
    new (type: string, eventInitDict?: EventInit): Event;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
};
interface EventCounts {
    forEach(callbackfn: (value: number, key: string, parent: EventCounts) => void, thisArg?: any): void;
}
declare var EventCounts: {
    prototype: EventCounts;
    new (): EventCounts;
};
interface EventListener {
    (evt: Event): void;
}
interface EventListenerObject {
    handleEvent(object: Event): void;
}
interface EventSourceEventMap {
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}
interface EventSource extends EventTarget {
    onerror: ((this: EventSource, ev: Event) => any) | null;
    onmessage: ((this: EventSource, ev: MessageEvent) => any) | null;
    onopen: ((this: EventSource, ev: Event) => any) | null;
    readonly readyState: number;
    readonly url: string;
    readonly withCredentials: boolean;
    close(): void;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSED: 2;
    addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var EventSource: {
    prototype: EventSource;
    new (url: string | URL, eventSourceInitDict?: EventSourceInit): EventSource;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSED: 2;
};
interface EventTarget {
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    dispatchEvent(event: Event): boolean;
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}
declare var EventTarget: {
    prototype: EventTarget;
    new (): EventTarget;
};
interface External {
    AddSearchProvider(): void;
    IsSearchProviderInstalled(): void;
}
declare var External: {
    prototype: External;
    new (): External;
};
interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
    readonly webkitRelativePath: string;
}
declare var File: {
    prototype: File;
    new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};
interface FileList {
    readonly length: number;
    item(index: number): File | null;
    [index: number]: File;
}
declare var FileList: {
    prototype: FileList;
    new (): FileList;
};
interface FileReaderEventMap {
    "abort": ProgressEvent<FileReader>;
    "error": ProgressEvent<FileReader>;
    "load": ProgressEvent<FileReader>;
    "loadend": ProgressEvent<FileReader>;
    "loadstart": ProgressEvent<FileReader>;
    "progress": ProgressEvent<FileReader>;
}
interface FileReader extends EventTarget {
    readonly error: DOMException | null;
    onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onloadstart: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    readonly readyState: typeof FileReader.EMPTY | typeof FileReader.LOADING | typeof FileReader.DONE;
    readonly result: string | ArrayBuffer | null;
    abort(): void;
    readAsArrayBuffer(blob: Blob): void;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
    readonly EMPTY: 0;
    readonly LOADING: 1;
    readonly DONE: 2;
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var FileReader: {
    prototype: FileReader;
    new (): FileReader;
    readonly EMPTY: 0;
    readonly LOADING: 1;
    readonly DONE: 2;
};
interface FileSystem {
    readonly name: string;
    readonly root: FileSystemDirectoryEntry;
}
declare var FileSystem: {
    prototype: FileSystem;
    new (): FileSystem;
};
interface FileSystemDirectoryEntry extends FileSystemEntry {
    createReader(): FileSystemDirectoryReader;
    getDirectory(path?: string | null, options?: FileSystemFlags, successCallback?: FileSystemEntryCallback, errorCallback?: ErrorCallback): void;
    getFile(path?: string | null, options?: FileSystemFlags, successCallback?: FileSystemEntryCallback, errorCallback?: ErrorCallback): void;
}
declare var FileSystemDirectoryEntry: {
    prototype: FileSystemDirectoryEntry;
    new (): FileSystemDirectoryEntry;
};
interface FileSystemDirectoryHandle extends FileSystemHandle {
    readonly kind: "directory";
    getDirectoryHandle(name: string, options?: FileSystemGetDirectoryOptions): Promise<FileSystemDirectoryHandle>;
    getFileHandle(name: string, options?: FileSystemGetFileOptions): Promise<FileSystemFileHandle>;
    removeEntry(name: string, options?: FileSystemRemoveOptions): Promise<void>;
    resolve(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
}
declare var FileSystemDirectoryHandle: {
    prototype: FileSystemDirectoryHandle;
    new (): FileSystemDirectoryHandle;
};
interface FileSystemDirectoryReader {
    readEntries(successCallback: FileSystemEntriesCallback, errorCallback?: ErrorCallback): void;
}
declare var FileSystemDirectoryReader: {
    prototype: FileSystemDirectoryReader;
    new (): FileSystemDirectoryReader;
};
interface FileSystemEntry {
    readonly filesystem: FileSystem;
    readonly fullPath: string;
    readonly isDirectory: boolean;
    readonly isFile: boolean;
    readonly name: string;
    getParent(successCallback?: FileSystemEntryCallback, errorCallback?: ErrorCallback): void;
}
declare var FileSystemEntry: {
    prototype: FileSystemEntry;
    new (): FileSystemEntry;
};
interface FileSystemFileEntry extends FileSystemEntry {
    file(successCallback: FileCallback, errorCallback?: ErrorCallback): void;
}
declare var FileSystemFileEntry: {
    prototype: FileSystemFileEntry;
    new (): FileSystemFileEntry;
};
interface FileSystemFileHandle extends FileSystemHandle {
    readonly kind: "file";
    getFile(): Promise<File>;
}
declare var FileSystemFileHandle: {
    prototype: FileSystemFileHandle;
    new (): FileSystemFileHandle;
};
interface FileSystemHandle {
    readonly kind: FileSystemHandleKind;
    readonly name: string;
    isSameEntry(other: FileSystemHandle): Promise<boolean>;
}
declare var FileSystemHandle: {
    prototype: FileSystemHandle;
    new (): FileSystemHandle;
};
interface FocusEvent extends UIEvent {
    readonly relatedTarget: EventTarget | null;
}
declare var FocusEvent: {
    prototype: FocusEvent;
    new (type: string, eventInitDict?: FocusEventInit): FocusEvent;
};
interface FontFace {
    ascentOverride: string;
    descentOverride: string;
    display: FontDisplay;
    family: string;
    featureSettings: string;
    lineGapOverride: string;
    readonly loaded: Promise<FontFace>;
    readonly status: FontFaceLoadStatus;
    stretch: string;
    style: string;
    unicodeRange: string;
    variant: string;
    weight: string;
    load(): Promise<FontFace>;
}
declare var FontFace: {
    prototype: FontFace;
    new (family: string, source: string | BinaryData, descriptors?: FontFaceDescriptors): FontFace;
};
interface FontFaceSetEventMap {
    "loading": Event;
    "loadingdone": Event;
    "loadingerror": Event;
}
interface FontFaceSet extends EventTarget {
    onloading: ((this: FontFaceSet, ev: Event) => any) | null;
    onloadingdone: ((this: FontFaceSet, ev: Event) => any) | null;
    onloadingerror: ((this: FontFaceSet, ev: Event) => any) | null;
    readonly ready: Promise<FontFaceSet>;
    readonly status: FontFaceSetLoadStatus;
    check(font: string, text?: string): boolean;
    load(font: string, text?: string): Promise<FontFace[]>;
    forEach(callbackfn: (value: FontFace, key: FontFace, parent: FontFaceSet) => void, thisArg?: any): void;
    addEventListener<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var FontFaceSet: {
    prototype: FontFaceSet;
    new (initialFaces: FontFace[]): FontFaceSet;
};
interface FontFaceSetLoadEvent extends Event {
    readonly fontfaces: ReadonlyArray<FontFace>;
}
declare var FontFaceSetLoadEvent: {
    prototype: FontFaceSetLoadEvent;
    new (type: string, eventInitDict?: FontFaceSetLoadEventInit): FontFaceSetLoadEvent;
};
interface FontFaceSource {
    readonly fonts: FontFaceSet;
}
interface FormData {
    append(name: string, value: string | Blob, fileName?: string): void;
    delete(name: string): void;
    get(name: string): FormDataEntryValue | null;
    getAll(name: string): FormDataEntryValue[];
    has(name: string): boolean;
    set(name: string, value: string | Blob, fileName?: string): void;
    forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}
declare var FormData: {
    prototype: FormData;
    new (form?: HTMLFormElement): FormData;
};
interface FormDataEvent extends Event {
    readonly formData: FormData;
}
declare var FormDataEvent: {
    prototype: FormDataEvent;
    new (type: string, eventInitDict: FormDataEventInit): FormDataEvent;
};
interface GainNode extends AudioNode {
    readonly gain: AudioParam;
}
declare var GainNode: {
    prototype: GainNode;
    new (context: BaseAudioContext, options?: GainOptions): GainNode;
};
interface Gamepad {
    readonly axes: ReadonlyArray<number>;
    readonly buttons: ReadonlyArray<GamepadButton>;
    readonly connected: boolean;
    readonly hapticActuators: ReadonlyArray<GamepadHapticActuator>;
    readonly id: string;
    readonly index: number;
    readonly mapping: GamepadMappingType;
    readonly timestamp: DOMHighResTimeStamp;
}
declare var Gamepad: {
    prototype: Gamepad;
    new (): Gamepad;
};
interface GamepadButton {
    readonly pressed: boolean;
    readonly touched: boolean;
    readonly value: number;
}
declare var GamepadButton: {
    prototype: GamepadButton;
    new (): GamepadButton;
};
interface GamepadEvent extends Event {
    readonly gamepad: Gamepad;
}
declare var GamepadEvent: {
    prototype: GamepadEvent;
    new (type: string, eventInitDict: GamepadEventInit): GamepadEvent;
};
interface GamepadHapticActuator {
    readonly type: GamepadHapticActuatorType;
}
declare var GamepadHapticActuator: {
    prototype: GamepadHapticActuator;
    new (): GamepadHapticActuator;
};
interface GenericTransformStream {
    readonly readable: ReadableStream;
    readonly writable: WritableStream;
}
interface Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | null, options?: PositionOptions): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | null, options?: PositionOptions): number;
}
declare var Geolocation: {
    prototype: Geolocation;
    new (): Geolocation;
};
interface GeolocationCoordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}
declare var GeolocationCoordinates: {
    prototype: GeolocationCoordinates;
    new (): GeolocationCoordinates;
};
interface GeolocationPosition {
    readonly coords: GeolocationCoordinates;
    readonly timestamp: EpochTimeStamp;
}
declare var GeolocationPosition: {
    prototype: GeolocationPosition;
    new (): GeolocationPosition;
};
interface GeolocationPositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: 1;
    readonly POSITION_UNAVAILABLE: 2;
    readonly TIMEOUT: 3;
}
declare var GeolocationPositionError: {
    prototype: GeolocationPositionError;
    new (): GeolocationPositionError;
    readonly PERMISSION_DENIED: 1;
    readonly POSITION_UNAVAILABLE: 2;
    readonly TIMEOUT: 3;
};
interface GlobalEventHandlersEventMap {
    "abort": UIEvent;
    "animationcancel": AnimationEvent;
    "animationend": AnimationEvent;
    "animationiteration": AnimationEvent;
    "animationstart": AnimationEvent;
    "auxclick": MouseEvent;
    "beforeinput": InputEvent;
    "blur": FocusEvent;
    "cancel": Event;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "close": Event;
    "compositionend": CompositionEvent;
    "compositionstart": CompositionEvent;
    "compositionupdate": CompositionEvent;
    "contextmenu": MouseEvent;
    "copy": ClipboardEvent;
    "cuechange": Event;
    "cut": ClipboardEvent;
    "dblclick": MouseEvent;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "focusin": FocusEvent;
    "focusout": FocusEvent;
    "formdata": FormDataEvent;
    "gotpointercapture": PointerEvent;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadstart": Event;
    "lostpointercapture": PointerEvent;
    "mousedown": MouseEvent;
    "mouseenter": MouseEvent;
    "mouseleave": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "paste": ClipboardEvent;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "pointercancel": PointerEvent;
    "pointerdown": PointerEvent;
    "pointerenter": PointerEvent;
    "pointerleave": PointerEvent;
    "pointermove": PointerEvent;
    "pointerout": PointerEvent;
    "pointerover": PointerEvent;
    "pointerup": PointerEvent;
    "progress": ProgressEvent;
    "ratechange": Event;
    "reset": Event;
    "resize": UIEvent;
    "scroll": Event;
    "securitypolicyviolation": SecurityPolicyViolationEvent;
    "seeked": Event;
    "seeking": Event;
    "select": Event;
    "selectionchange": Event;
    "selectstart": Event;
    "slotchange": Event;
    "stalled": Event;
    "submit": SubmitEvent;
    "suspend": Event;
    "timeupdate": Event;
    "toggle": Event;
    "touchcancel": TouchEvent;
    "touchend": TouchEvent;
    "touchmove": TouchEvent;
    "touchstart": TouchEvent;
    "transitioncancel": TransitionEvent;
    "transitionend": TransitionEvent;
    "transitionrun": TransitionEvent;
    "transitionstart": TransitionEvent;
    "volumechange": Event;
    "waiting": Event;
    "webkitanimationend": Event;
    "webkitanimationiteration": Event;
    "webkitanimationstart": Event;
    "webkittransitionend": Event;
    "wheel": WheelEvent;
}
interface GlobalEventHandlers {
    onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onbeforeinput: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
    onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    oncopy: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
    oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncut: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
    ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onerror: OnErrorEventHandler;
    onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
    ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onpaste: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
    onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
    onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onslotchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
    onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontouchcancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    ontouchend?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    ontouchmove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    ontouchstart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkitanimationiteration: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkitanimationstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
interface HTMLAllCollection {
    readonly length: number;
    item(nameOrIndex?: string): HTMLCollection | Element | null;
    namedItem(name: string): HTMLCollection | Element | null;
    [index: number]: Element;
}
declare var HTMLAllCollection: {
    prototype: HTMLAllCollection;
    new (): HTMLAllCollection;
};
interface HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils {
    charset: string;
    coords: string;
    download: string;
    hreflang: string;
    name: string;
    ping: string;
    referrerPolicy: string;
    rel: string;
    readonly relList: DOMTokenList;
    rev: string;
    shape: string;
    target: string;
    text: string;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    new (): HTMLAnchorElement;
};
interface HTMLAreaElement extends HTMLElement, HTMLHyperlinkElementUtils {
    alt: string;
    coords: string;
    download: string;
    noHref: boolean;
    ping: string;
    referrerPolicy: string;
    rel: string;
    readonly relList: DOMTokenList;
    shape: string;
    target: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLAreaElement: {
    prototype: HTMLAreaElement;
    new (): HTMLAreaElement;
};
interface HTMLAudioElement extends HTMLMediaElement {
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLAudioElement: {
    prototype: HTMLAudioElement;
    new (): HTMLAudioElement;
};
interface HTMLBRElement extends HTMLElement {
    clear: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLBRElement: {
    prototype: HTMLBRElement;
    new (): HTMLBRElement;
};
interface HTMLBaseElement extends HTMLElement {
    href: string;
    target: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLBaseElement: {
    prototype: HTMLBaseElement;
    new (): HTMLBaseElement;
};
interface HTMLBodyElementEventMap extends HTMLElementEventMap, WindowEventHandlersEventMap {
}
interface HTMLBodyElement extends HTMLElement, WindowEventHandlers {
    aLink: string;
    background: string;
    bgColor: string;
    link: string;
    text: string;
    vLink: string;
    addEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLBodyElement: {
    prototype: HTMLBodyElement;
    new (): HTMLBodyElement;
};
interface HTMLButtonElement extends HTMLElement {
    disabled: boolean;
    readonly form: HTMLFormElement | null;
    formAction: string;
    formEnctype: string;
    formMethod: string;
    formNoValidate: boolean;
    formTarget: string;
    readonly labels: NodeListOf<HTMLLabelElement>;
    name: string;
    type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    value: string;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new (): HTMLButtonElement;
};
interface HTMLCanvasElement extends HTMLElement {
    height: number;
    width: number;
    captureStream(frameRequestRate?: number): MediaStream;
    getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | null;
    getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
    getContext(contextId: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext | null;
    getContext(contextId: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext | null;
    getContext(contextId: string, options?: any): RenderingContext | null;
    toBlob(callback: BlobCallback, type?: string, quality?: any): void;
    toDataURL(type?: string, quality?: any): string;
    transferControlToOffscreen(): OffscreenCanvas;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLCanvasElement: {
    prototype: HTMLCanvasElement;
    new (): HTMLCanvasElement;
};
interface HTMLCollectionBase {
    readonly length: number;
    item(index: number): Element | null;
    [index: number]: Element;
}
interface HTMLCollection extends HTMLCollectionBase {
    namedItem(name: string): Element | null;
}
declare var HTMLCollection: {
    prototype: HTMLCollection;
    new (): HTMLCollection;
};
interface HTMLCollectionOf<T extends Element> extends HTMLCollectionBase {
    item(index: number): T | null;
    namedItem(name: string): T | null;
    [index: number]: T;
}
interface HTMLDListElement extends HTMLElement {
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLDListElement: {
    prototype: HTMLDListElement;
    new (): HTMLDListElement;
};
interface HTMLDataElement extends HTMLElement {
    value: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLDataElement: {
    prototype: HTMLDataElement;
    new (): HTMLDataElement;
};
interface HTMLDataListElement extends HTMLElement {
    readonly options: HTMLCollectionOf<HTMLOptionElement>;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLDataListElement: {
    prototype: HTMLDataListElement;
    new (): HTMLDataListElement;
};
interface HTMLDetailsElement extends HTMLElement {
    open: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLDetailsElement: {
    prototype: HTMLDetailsElement;
    new (): HTMLDetailsElement;
};
interface HTMLDialogElement extends HTMLElement {
    open: boolean;
    returnValue: string;
    close(returnValue?: string): void;
    show(): void;
    showModal(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLDialogElement: {
    prototype: HTMLDialogElement;
    new (): HTMLDialogElement;
};
interface HTMLDirectoryElement extends HTMLElement {
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLDirectoryElement: {
    prototype: HTMLDirectoryElement;
    new (): HTMLDirectoryElement;
};
interface HTMLDivElement extends HTMLElement {
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLDivElement: {
    prototype: HTMLDivElement;
    new (): HTMLDivElement;
};
interface HTMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLDocument: {
    prototype: HTMLDocument;
    new (): HTMLDocument;
};
interface HTMLElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap {
}
interface HTMLElement extends Element, ElementCSSInlineStyle, ElementContentEditable, GlobalEventHandlers, HTMLOrSVGElement {
    accessKey: string;
    readonly accessKeyLabel: string;
    autocapitalize: string;
    dir: string;
    draggable: boolean;
    hidden: boolean;
    inert: boolean;
    innerText: string;
    lang: string;
    readonly offsetHeight: number;
    readonly offsetLeft: number;
    readonly offsetParent: Element | null;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    outerText: string;
    spellcheck: boolean;
    title: string;
    translate: boolean;
    attachInternals(): ElementInternals;
    click(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLElement: {
    prototype: HTMLElement;
    new (): HTMLElement;
};
interface HTMLEmbedElement extends HTMLElement {
    align: string;
    height: string;
    name: string;
    src: string;
    type: string;
    width: string;
    getSVGDocument(): Document | null;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLEmbedElement: {
    prototype: HTMLEmbedElement;
    new (): HTMLEmbedElement;
};
interface HTMLFieldSetElement extends HTMLElement {
    disabled: boolean;
    readonly elements: HTMLCollection;
    readonly form: HTMLFormElement | null;
    name: string;
    readonly type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    new (): HTMLFieldSetElement;
};
interface HTMLFontElement extends HTMLElement {
    color: string;
    face: string;
    size: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLFontElement: {
    prototype: HTMLFontElement;
    new (): HTMLFontElement;
};
interface HTMLFormControlsCollection extends HTMLCollectionBase {
    namedItem(name: string): RadioNodeList | Element | null;
}
declare var HTMLFormControlsCollection: {
    prototype: HTMLFormControlsCollection;
    new (): HTMLFormControlsCollection;
};
interface HTMLFormElement extends HTMLElement {
    acceptCharset: string;
    action: string;
    autocomplete: string;
    readonly elements: HTMLFormControlsCollection;
    encoding: string;
    enctype: string;
    readonly length: number;
    method: string;
    name: string;
    noValidate: boolean;
    rel: string;
    readonly relList: DOMTokenList;
    target: string;
    checkValidity(): boolean;
    reportValidity(): boolean;
    requestSubmit(submitter?: HTMLElement | null): void;
    reset(): void;
    submit(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: Element;
    [name: string]: any;
}
declare var HTMLFormElement: {
    prototype: HTMLFormElement;
    new (): HTMLFormElement;
};
interface HTMLFrameElement extends HTMLElement {
    readonly contentDocument: Document | null;
    readonly contentWindow: WindowProxy | null;
    frameBorder: string;
    longDesc: string;
    marginHeight: string;
    marginWidth: string;
    name: string;
    noResize: boolean;
    scrolling: string;
    src: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new (): HTMLFrameElement;
};
interface HTMLFrameSetElementEventMap extends HTMLElementEventMap, WindowEventHandlersEventMap {
}
interface HTMLFrameSetElement extends HTMLElement, WindowEventHandlers {
    cols: string;
    rows: string;
    addEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    new (): HTMLFrameSetElement;
};
interface HTMLHRElement extends HTMLElement {
    align: string;
    color: string;
    noShade: boolean;
    size: string;
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLHRElement: {
    prototype: HTMLHRElement;
    new (): HTMLHRElement;
};
interface HTMLHeadElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLHeadElement: {
    prototype: HTMLHeadElement;
    new (): HTMLHeadElement;
};
interface HTMLHeadingElement extends HTMLElement {
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    new (): HTMLHeadingElement;
};
interface HTMLHtmlElement extends HTMLElement {
    version: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLHtmlElement: {
    prototype: HTMLHtmlElement;
    new (): HTMLHtmlElement;
};
interface HTMLHyperlinkElementUtils {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    toString(): string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    username: string;
}
interface HTMLIFrameElement extends HTMLElement {
    align: string;
    allow: string;
    allowFullscreen: boolean;
    readonly contentDocument: Document | null;
    readonly contentWindow: WindowProxy | null;
    frameBorder: string;
    height: string;
    longDesc: string;
    marginHeight: string;
    marginWidth: string;
    name: string;
    referrerPolicy: ReferrerPolicy;
    readonly sandbox: DOMTokenList;
    scrolling: string;
    src: string;
    srcdoc: string;
    width: string;
    getSVGDocument(): Document | null;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    new (): HTMLIFrameElement;
};
interface HTMLImageElement extends HTMLElement {
    align: string;
    alt: string;
    border: string;
    readonly complete: boolean;
    crossOrigin: string | null;
    readonly currentSrc: string;
    decoding: "async" | "sync" | "auto";
    height: number;
    hspace: number;
    isMap: boolean;
    loading: "eager" | "lazy";
    longDesc: string;
    lowsrc: string;
    name: string;
    readonly naturalHeight: number;
    readonly naturalWidth: number;
    referrerPolicy: string;
    sizes: string;
    src: string;
    srcset: string;
    useMap: string;
    vspace: number;
    width: number;
    readonly x: number;
    readonly y: number;
    decode(): Promise<void>;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLImageElement: {
    prototype: HTMLImageElement;
    new (): HTMLImageElement;
};
interface HTMLInputElement extends HTMLElement {
    accept: string;
    align: string;
    alt: string;
    autocomplete: string;
    capture: string;
    checked: boolean;
    defaultChecked: boolean;
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    files: FileList | null;
    readonly form: HTMLFormElement | null;
    formAction: string;
    formEnctype: string;
    formMethod: string;
    formNoValidate: boolean;
    formTarget: string;
    height: number;
    indeterminate: boolean;
    readonly labels: NodeListOf<HTMLLabelElement> | null;
    readonly list: HTMLDataListElement | null;
    max: string;
    maxLength: number;
    min: string;
    minLength: number;
    multiple: boolean;
    name: string;
    pattern: string;
    placeholder: string;
    readOnly: boolean;
    required: boolean;
    selectionDirection: "forward" | "backward" | "none" | null;
    selectionEnd: number | null;
    selectionStart: number | null;
    size: number;
    src: string;
    step: string;
    type: string;
    useMap: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    value: string;
    valueAsDate: Date | null;
    valueAsNumber: number;
    readonly webkitEntries: ReadonlyArray<FileSystemEntry>;
    webkitdirectory: boolean;
    width: number;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    select(): void;
    setCustomValidity(error: string): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    setSelectionRange(start: number | null, end: number | null, direction?: "forward" | "backward" | "none"): void;
    showPicker(): void;
    stepDown(n?: number): void;
    stepUp(n?: number): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLInputElement: {
    prototype: HTMLInputElement;
    new (): HTMLInputElement;
};
interface HTMLLIElement extends HTMLElement {
    type: string;
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLLIElement: {
    prototype: HTMLLIElement;
    new (): HTMLLIElement;
};
interface HTMLLabelElement extends HTMLElement {
    readonly control: HTMLElement | null;
    readonly form: HTMLFormElement | null;
    htmlFor: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLLabelElement: {
    prototype: HTMLLabelElement;
    new (): HTMLLabelElement;
};
interface HTMLLegendElement extends HTMLElement {
    align: string;
    readonly form: HTMLFormElement | null;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLLegendElement: {
    prototype: HTMLLegendElement;
    new (): HTMLLegendElement;
};
interface HTMLLinkElement extends HTMLElement, LinkStyle {
    as: string;
    charset: string;
    crossOrigin: string | null;
    disabled: boolean;
    href: string;
    hreflang: string;
    imageSizes: string;
    imageSrcset: string;
    integrity: string;
    media: string;
    referrerPolicy: string;
    rel: string;
    readonly relList: DOMTokenList;
    rev: string;
    readonly sizes: DOMTokenList;
    target: string;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLLinkElement: {
    prototype: HTMLLinkElement;
    new (): HTMLLinkElement;
};
interface HTMLMapElement extends HTMLElement {
    readonly areas: HTMLCollection;
    name: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLMapElement: {
    prototype: HTMLMapElement;
    new (): HTMLMapElement;
};
interface HTMLMarqueeElement extends HTMLElement {
    behavior: string;
    bgColor: string;
    direction: string;
    height: string;
    hspace: number;
    loop: number;
    scrollAmount: number;
    scrollDelay: number;
    trueSpeed: boolean;
    vspace: number;
    width: string;
    start(): void;
    stop(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLMarqueeElement: {
    prototype: HTMLMarqueeElement;
    new (): HTMLMarqueeElement;
};
interface HTMLMediaElementEventMap extends HTMLElementEventMap {
    "encrypted": MediaEncryptedEvent;
    "waitingforkey": Event;
}
interface HTMLMediaElement extends HTMLElement {
    autoplay: boolean;
    readonly buffered: TimeRanges;
    controls: boolean;
    crossOrigin: string | null;
    readonly currentSrc: string;
    currentTime: number;
    defaultMuted: boolean;
    defaultPlaybackRate: number;
    disableRemotePlayback: boolean;
    readonly duration: number;
    readonly ended: boolean;
    readonly error: MediaError | null;
    loop: boolean;
    readonly mediaKeys: MediaKeys | null;
    muted: boolean;
    readonly networkState: number;
    onencrypted: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any) | null;
    onwaitingforkey: ((this: HTMLMediaElement, ev: Event) => any) | null;
    readonly paused: boolean;
    playbackRate: number;
    readonly played: TimeRanges;
    preload: "none" | "metadata" | "auto" | "";
    preservesPitch: boolean;
    readonly readyState: number;
    readonly remote: RemotePlayback;
    readonly seekable: TimeRanges;
    readonly seeking: boolean;
    src: string;
    srcObject: MediaProvider | null;
    readonly textTracks: TextTrackList;
    volume: number;
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;
    canPlayType(type: string): CanPlayTypeResult;
    fastSeek(time: number): void;
    load(): void;
    pause(): void;
    play(): Promise<void>;
    setMediaKeys(mediaKeys: MediaKeys | null): Promise<void>;
    readonly NETWORK_EMPTY: 0;
    readonly NETWORK_IDLE: 1;
    readonly NETWORK_LOADING: 2;
    readonly NETWORK_NO_SOURCE: 3;
    readonly HAVE_NOTHING: 0;
    readonly HAVE_METADATA: 1;
    readonly HAVE_CURRENT_DATA: 2;
    readonly HAVE_FUTURE_DATA: 3;
    readonly HAVE_ENOUGH_DATA: 4;
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLMediaElement: {
    prototype: HTMLMediaElement;
    new (): HTMLMediaElement;
    readonly NETWORK_EMPTY: 0;
    readonly NETWORK_IDLE: 1;
    readonly NETWORK_LOADING: 2;
    readonly NETWORK_NO_SOURCE: 3;
    readonly HAVE_NOTHING: 0;
    readonly HAVE_METADATA: 1;
    readonly HAVE_CURRENT_DATA: 2;
    readonly HAVE_FUTURE_DATA: 3;
    readonly HAVE_ENOUGH_DATA: 4;
};
interface HTMLMenuElement extends HTMLElement {
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLMenuElement: {
    prototype: HTMLMenuElement;
    new (): HTMLMenuElement;
};
interface HTMLMetaElement extends HTMLElement {
    content: string;
    httpEquiv: string;
    media: string;
    name: string;
    scheme: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLMetaElement: {
    prototype: HTMLMetaElement;
    new (): HTMLMetaElement;
};
interface HTMLMeterElement extends HTMLElement {
    high: number;
    readonly labels: NodeListOf<HTMLLabelElement>;
    low: number;
    max: number;
    min: number;
    optimum: number;
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLMeterElement: {
    prototype: HTMLMeterElement;
    new (): HTMLMeterElement;
};
interface HTMLModElement extends HTMLElement {
    cite: string;
    dateTime: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLModElement: {
    prototype: HTMLModElement;
    new (): HTMLModElement;
};
interface HTMLOListElement extends HTMLElement {
    compact: boolean;
    reversed: boolean;
    start: number;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLOListElement: {
    prototype: HTMLOListElement;
    new (): HTMLOListElement;
};
interface HTMLObjectElement extends HTMLElement {
    align: string;
    archive: string;
    border: string;
    code: string;
    codeBase: string;
    codeType: string;
    readonly contentDocument: Document | null;
    readonly contentWindow: WindowProxy | null;
    data: string;
    declare: boolean;
    readonly form: HTMLFormElement | null;
    height: string;
    hspace: number;
    name: string;
    standby: string;
    type: string;
    useMap: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    vspace: number;
    width: string;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    getSVGDocument(): Document | null;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLObjectElement: {
    prototype: HTMLObjectElement;
    new (): HTMLObjectElement;
};
interface HTMLOptGroupElement extends HTMLElement {
    disabled: boolean;
    label: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLOptGroupElement: {
    prototype: HTMLOptGroupElement;
    new (): HTMLOptGroupElement;
};
interface HTMLOptionElement extends HTMLElement {
    defaultSelected: boolean;
    disabled: boolean;
    readonly form: HTMLFormElement | null;
    readonly index: number;
    label: string;
    selected: boolean;
    text: string;
    value: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLOptionElement: {
    prototype: HTMLOptionElement;
    new (): HTMLOptionElement;
};
interface HTMLOptionsCollection extends HTMLCollectionOf<HTMLOptionElement> {
    length: number;
    selectedIndex: number;
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    remove(index: number): void;
}
declare var HTMLOptionsCollection: {
    prototype: HTMLOptionsCollection;
    new (): HTMLOptionsCollection;
};
interface HTMLOrSVGElement {
    autofocus: boolean;
    readonly dataset: DOMStringMap;
    nonce?: string;
    tabIndex: number;
    blur(): void;
    focus(options?: FocusOptions): void;
}
interface HTMLOutputElement extends HTMLElement {
    defaultValue: string;
    readonly form: HTMLFormElement | null;
    readonly htmlFor: DOMTokenList;
    readonly labels: NodeListOf<HTMLLabelElement>;
    name: string;
    readonly type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    value: string;
    readonly willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLOutputElement: {
    prototype: HTMLOutputElement;
    new (): HTMLOutputElement;
};
interface HTMLParagraphElement extends HTMLElement {
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLParagraphElement: {
    prototype: HTMLParagraphElement;
    new (): HTMLParagraphElement;
};
interface HTMLParamElement extends HTMLElement {
    name: string;
    type: string;
    value: string;
    valueType: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLParamElement: {
    prototype: HTMLParamElement;
    new (): HTMLParamElement;
};
interface HTMLPictureElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLPictureElement: {
    prototype: HTMLPictureElement;
    new (): HTMLPictureElement;
};
interface HTMLPreElement extends HTMLElement {
    width: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLPreElement: {
    prototype: HTMLPreElement;
    new (): HTMLPreElement;
};
interface HTMLProgressElement extends HTMLElement {
    readonly labels: NodeListOf<HTMLLabelElement>;
    max: number;
    readonly position: number;
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLProgressElement: {
    prototype: HTMLProgressElement;
    new (): HTMLProgressElement;
};
interface HTMLQuoteElement extends HTMLElement {
    cite: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    new (): HTMLQuoteElement;
};
interface HTMLScriptElement extends HTMLElement {
    async: boolean;
    charset: string;
    crossOrigin: string | null;
    defer: boolean;
    event: string;
    htmlFor: string;
    integrity: string;
    noModule: boolean;
    referrerPolicy: string;
    src: string;
    text: string;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLScriptElement: {
    prototype: HTMLScriptElement;
    new (): HTMLScriptElement;
    supports(type: string): boolean;
};
interface HTMLSelectElement extends HTMLElement {
    autocomplete: string;
    disabled: boolean;
    readonly form: HTMLFormElement | null;
    readonly labels: NodeListOf<HTMLLabelElement>;
    length: number;
    multiple: boolean;
    name: string;
    readonly options: HTMLOptionsCollection;
    required: boolean;
    selectedIndex: number;
    readonly selectedOptions: HTMLCollectionOf<HTMLOptionElement>;
    size: number;
    readonly type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    value: string;
    readonly willValidate: boolean;
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    checkValidity(): boolean;
    item(index: number): HTMLOptionElement | null;
    namedItem(name: string): HTMLOptionElement | null;
    remove(): void;
    remove(index: number): void;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [name: number]: HTMLOptionElement | HTMLOptGroupElement;
}
declare var HTMLSelectElement: {
    prototype: HTMLSelectElement;
    new (): HTMLSelectElement;
};
interface HTMLSlotElement extends HTMLElement {
    name: string;
    assign(...nodes: (Element | Text)[]): void;
    assignedElements(options?: AssignedNodesOptions): Element[];
    assignedNodes(options?: AssignedNodesOptions): Node[];
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLSlotElement: {
    prototype: HTMLSlotElement;
    new (): HTMLSlotElement;
};
interface HTMLSourceElement extends HTMLElement {
    height: number;
    media: string;
    sizes: string;
    src: string;
    srcset: string;
    type: string;
    width: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLSourceElement: {
    prototype: HTMLSourceElement;
    new (): HTMLSourceElement;
};
interface HTMLSpanElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLSpanElement: {
    prototype: HTMLSpanElement;
    new (): HTMLSpanElement;
};
interface HTMLStyleElement extends HTMLElement, LinkStyle {
    disabled: boolean;
    media: string;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLStyleElement: {
    prototype: HTMLStyleElement;
    new (): HTMLStyleElement;
};
interface HTMLTableCaptionElement extends HTMLElement {
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    new (): HTMLTableCaptionElement;
};
interface HTMLTableCellElement extends HTMLElement {
    abbr: string;
    align: string;
    axis: string;
    bgColor: string;
    readonly cellIndex: number;
    ch: string;
    chOff: string;
    colSpan: number;
    headers: string;
    height: string;
    noWrap: boolean;
    rowSpan: number;
    scope: string;
    vAlign: string;
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTableCellElement: {
    prototype: HTMLTableCellElement;
    new (): HTMLTableCellElement;
};
interface HTMLTableColElement extends HTMLElement {
    align: string;
    ch: string;
    chOff: string;
    span: number;
    vAlign: string;
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTableColElement: {
    prototype: HTMLTableColElement;
    new (): HTMLTableColElement;
};
interface HTMLTableDataCellElement extends HTMLTableCellElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
interface HTMLTableElement extends HTMLElement {
    align: string;
    bgColor: string;
    border: string;
    caption: HTMLTableCaptionElement | null;
    cellPadding: string;
    cellSpacing: string;
    frame: string;
    readonly rows: HTMLCollectionOf<HTMLTableRowElement>;
    rules: string;
    summary: string;
    readonly tBodies: HTMLCollectionOf<HTMLTableSectionElement>;
    tFoot: HTMLTableSectionElement | null;
    tHead: HTMLTableSectionElement | null;
    width: string;
    createCaption(): HTMLTableCaptionElement;
    createTBody(): HTMLTableSectionElement;
    createTFoot(): HTMLTableSectionElement;
    createTHead(): HTMLTableSectionElement;
    deleteCaption(): void;
    deleteRow(index: number): void;
    deleteTFoot(): void;
    deleteTHead(): void;
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTableElement: {
    prototype: HTMLTableElement;
    new (): HTMLTableElement;
};
interface HTMLTableHeaderCellElement extends HTMLTableCellElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
interface HTMLTableRowElement extends HTMLElement {
    align: string;
    bgColor: string;
    readonly cells: HTMLCollectionOf<HTMLTableCellElement>;
    ch: string;
    chOff: string;
    readonly rowIndex: number;
    readonly sectionRowIndex: number;
    vAlign: string;
    deleteCell(index: number): void;
    insertCell(index?: number): HTMLTableCellElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    new (): HTMLTableRowElement;
};
interface HTMLTableSectionElement extends HTMLElement {
    align: string;
    ch: string;
    chOff: string;
    readonly rows: HTMLCollectionOf<HTMLTableRowElement>;
    vAlign: string;
    deleteRow(index: number): void;
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    new (): HTMLTableSectionElement;
};
interface HTMLTemplateElement extends HTMLElement {
    readonly content: DocumentFragment;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTemplateElement: {
    prototype: HTMLTemplateElement;
    new (): HTMLTemplateElement;
};
interface HTMLTextAreaElement extends HTMLElement {
    autocomplete: string;
    cols: number;
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    readonly form: HTMLFormElement | null;
    readonly labels: NodeListOf<HTMLLabelElement>;
    maxLength: number;
    minLength: number;
    name: string;
    placeholder: string;
    readOnly: boolean;
    required: boolean;
    rows: number;
    selectionDirection: "forward" | "backward" | "none";
    selectionEnd: number;
    selectionStart: number;
    readonly textLength: number;
    readonly type: string;
    readonly validationMessage: string;
    readonly validity: ValidityState;
    value: string;
    readonly willValidate: boolean;
    wrap: string;
    checkValidity(): boolean;
    reportValidity(): boolean;
    select(): void;
    setCustomValidity(error: string): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    setSelectionRange(start: number | null, end: number | null, direction?: "forward" | "backward" | "none"): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTextAreaElement: {
    prototype: HTMLTextAreaElement;
    new (): HTMLTextAreaElement;
};
interface HTMLTimeElement extends HTMLElement {
    dateTime: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTimeElement: {
    prototype: HTMLTimeElement;
    new (): HTMLTimeElement;
};
interface HTMLTitleElement extends HTMLElement {
    text: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTitleElement: {
    prototype: HTMLTitleElement;
    new (): HTMLTitleElement;
};
interface HTMLTrackElement extends HTMLElement {
    default: boolean;
    kind: string;
    label: string;
    readonly readyState: number;
    src: string;
    srclang: string;
    readonly track: TextTrack;
    readonly NONE: 0;
    readonly LOADING: 1;
    readonly LOADED: 2;
    readonly ERROR: 3;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLTrackElement: {
    prototype: HTMLTrackElement;
    new (): HTMLTrackElement;
    readonly NONE: 0;
    readonly LOADING: 1;
    readonly LOADED: 2;
    readonly ERROR: 3;
};
interface HTMLUListElement extends HTMLElement {
    compact: boolean;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLUListElement: {
    prototype: HTMLUListElement;
    new (): HTMLUListElement;
};
interface HTMLUnknownElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLUnknownElement: {
    prototype: HTMLUnknownElement;
    new (): HTMLUnknownElement;
};
interface HTMLVideoElementEventMap extends HTMLMediaElementEventMap {
    "enterpictureinpicture": Event;
    "leavepictureinpicture": Event;
}
interface HTMLVideoElement extends HTMLMediaElement {
    disablePictureInPicture: boolean;
    height: number;
    onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
    onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
    playsInline: boolean;
    poster: string;
    readonly videoHeight: number;
    readonly videoWidth: number;
    width: number;
    cancelVideoFrameCallback(handle: number): void;
    getVideoPlaybackQuality(): VideoPlaybackQuality;
    requestPictureInPicture(): Promise<PictureInPictureWindow>;
    requestVideoFrameCallback(callback: VideoFrameRequestCallback): number;
    addEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var HTMLVideoElement: {
    prototype: HTMLVideoElement;
    new (): HTMLVideoElement;
};
interface HashChangeEvent extends Event {
    readonly newURL: string;
    readonly oldURL: string;
}
declare var HashChangeEvent: {
    prototype: HashChangeEvent;
    new (type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
};
interface Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}
declare var Headers: {
    prototype: Headers;
    new (init?: HeadersInit): Headers;
};
interface History {
    readonly length: number;
    scrollRestoration: ScrollRestoration;
    readonly state: any;
    back(): void;
    forward(): void;
    go(delta?: number): void;
    pushState(data: any, unused: string, url?: string | URL | null): void;
    replaceState(data: any, unused: string, url?: string | URL | null): void;
}
declare var History: {
    prototype: History;
    new (): History;
};
interface IDBCursor {
    readonly direction: IDBCursorDirection;
    readonly key: IDBValidKey;
    readonly primaryKey: IDBValidKey;
    readonly request: IDBRequest;
    readonly source: IDBObjectStore | IDBIndex;
    advance(count: number): void;
    continue(key?: IDBValidKey): void;
    continuePrimaryKey(key: IDBValidKey, primaryKey: IDBValidKey): void;
    delete(): IDBRequest<undefined>;
    update(value: any): IDBRequest<IDBValidKey>;
}
declare var IDBCursor: {
    prototype: IDBCursor;
    new (): IDBCursor;
};
interface IDBCursorWithValue extends IDBCursor {
    readonly value: any;
}
declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new (): IDBCursorWithValue;
};
interface IDBDatabaseEventMap {
    "abort": Event;
    "close": Event;
    "error": Event;
    "versionchange": IDBVersionChangeEvent;
}
interface IDBDatabase extends EventTarget {
    readonly name: string;
    readonly objectStoreNames: DOMStringList;
    onabort: ((this: IDBDatabase, ev: Event) => any) | null;
    onclose: ((this: IDBDatabase, ev: Event) => any) | null;
    onerror: ((this: IDBDatabase, ev: Event) => any) | null;
    onversionchange: ((this: IDBDatabase, ev: IDBVersionChangeEvent) => any) | null;
    readonly version: number;
    close(): void;
    createObjectStore(name: string, options?: IDBObjectStoreParameters): IDBObjectStore;
    deleteObjectStore(name: string): void;
    transaction(storeNames: string | string[], mode?: IDBTransactionMode, options?: IDBTransactionOptions): IDBTransaction;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var IDBDatabase: {
    prototype: IDBDatabase;
    new (): IDBDatabase;
};
interface IDBFactory {
    cmp(first: any, second: any): number;
    databases(): Promise<IDBDatabaseInfo[]>;
    deleteDatabase(name: string): IDBOpenDBRequest;
    open(name: string, version?: number): IDBOpenDBRequest;
}
declare var IDBFactory: {
    prototype: IDBFactory;
    new (): IDBFactory;
};
interface IDBIndex {
    readonly keyPath: string | string[];
    readonly multiEntry: boolean;
    name: string;
    readonly objectStore: IDBObjectStore;
    readonly unique: boolean;
    count(query?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
}
declare var IDBIndex: {
    prototype: IDBIndex;
    new (): IDBIndex;
};
interface IDBKeyRange {
    readonly lower: any;
    readonly lowerOpen: boolean;
    readonly upper: any;
    readonly upperOpen: boolean;
    includes(key: any): boolean;
}
declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new (): IDBKeyRange;
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    only(value: any): IDBKeyRange;
    upperBound(upper: any, open?: boolean): IDBKeyRange;
};
interface IDBObjectStore {
    readonly autoIncrement: boolean;
    readonly indexNames: DOMStringList;
    readonly keyPath: string | string[];
    name: string;
    readonly transaction: IDBTransaction;
    add(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
    clear(): IDBRequest<undefined>;
    count(query?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
    delete(query: IDBValidKey | IDBKeyRange): IDBRequest<undefined>;
    deleteIndex(name: string): void;
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    index(name: string): IDBIndex;
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
    put(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
}
declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new (): IDBObjectStore;
};
interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": IDBVersionChangeEvent;
    "upgradeneeded": IDBVersionChangeEvent;
}
interface IDBOpenDBRequest extends IDBRequest<IDBDatabase> {
    onblocked: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    onupgradeneeded: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new (): IDBOpenDBRequest;
};
interface IDBRequestEventMap {
    "error": Event;
    "success": Event;
}
interface IDBRequest<T = any> extends EventTarget {
    readonly error: DOMException | null;
    onerror: ((this: IDBRequest<T>, ev: Event) => any) | null;
    onsuccess: ((this: IDBRequest<T>, ev: Event) => any) | null;
    readonly readyState: IDBRequestReadyState;
    readonly result: T;
    readonly source: IDBObjectStore | IDBIndex | IDBCursor;
    readonly transaction: IDBTransaction | null;
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var IDBRequest: {
    prototype: IDBRequest;
    new (): IDBRequest;
};
interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": Event;
}
interface IDBTransaction extends EventTarget {
    readonly db: IDBDatabase;
    readonly durability: IDBTransactionDurability;
    readonly error: DOMException | null;
    readonly mode: IDBTransactionMode;
    readonly objectStoreNames: DOMStringList;
    onabort: ((this: IDBTransaction, ev: Event) => any) | null;
    oncomplete: ((this: IDBTransaction, ev: Event) => any) | null;
    onerror: ((this: IDBTransaction, ev: Event) => any) | null;
    abort(): void;
    commit(): void;
    objectStore(name: string): IDBObjectStore;
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var IDBTransaction: {
    prototype: IDBTransaction;
    new (): IDBTransaction;
};
interface IDBVersionChangeEvent extends Event {
    readonly newVersion: number | null;
    readonly oldVersion: number;
}
declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new (type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};
interface IIRFilterNode extends AudioNode {
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}
declare var IIRFilterNode: {
    prototype: IIRFilterNode;
    new (context: BaseAudioContext, options: IIRFilterOptions): IIRFilterNode;
};
interface IdleDeadline {
    readonly didTimeout: boolean;
    timeRemaining(): DOMHighResTimeStamp;
}
declare var IdleDeadline: {
    prototype: IdleDeadline;
    new (): IdleDeadline;
};
interface ImageBitmap {
    readonly height: number;
    readonly width: number;
    close(): void;
}
declare var ImageBitmap: {
    prototype: ImageBitmap;
    new (): ImageBitmap;
};
interface ImageBitmapRenderingContext {
    readonly canvas: HTMLCanvasElement | OffscreenCanvas;
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}
declare var ImageBitmapRenderingContext: {
    prototype: ImageBitmapRenderingContext;
    new (): ImageBitmapRenderingContext;
};
interface ImageData {
    readonly colorSpace: PredefinedColorSpace;
    readonly data: Uint8ClampedArray;
    readonly height: number;
    readonly width: number;
}
declare var ImageData: {
    prototype: ImageData;
    new (sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    new (data: Uint8ClampedArray, sw: number, sh?: number, settings?: ImageDataSettings): ImageData;
};
interface InnerHTML {
    innerHTML: string;
}
interface InputDeviceInfo extends MediaDeviceInfo {
}
declare var InputDeviceInfo: {
    prototype: InputDeviceInfo;
    new (): InputDeviceInfo;
};
interface InputEvent extends UIEvent {
    readonly data: string | null;
    readonly dataTransfer: DataTransfer | null;
    readonly inputType: string;
    readonly isComposing: boolean;
    getTargetRanges(): StaticRange[];
}
declare var InputEvent: {
    prototype: InputEvent;
    new (type: string, eventInitDict?: InputEventInit): InputEvent;
};
interface IntersectionObserver {
    readonly root: Element | Document | null;
    readonly rootMargin: string;
    readonly thresholds: ReadonlyArray<number>;
    disconnect(): void;
    observe(target: Element): void;
    takeRecords(): IntersectionObserverEntry[];
    unobserve(target: Element): void;
}
declare var IntersectionObserver: {
    prototype: IntersectionObserver;
    new (callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
};
interface IntersectionObserverEntry {
    readonly boundingClientRect: DOMRectReadOnly;
    readonly intersectionRatio: number;
    readonly intersectionRect: DOMRectReadOnly;
    readonly isIntersecting: boolean;
    readonly rootBounds: DOMRectReadOnly | null;
    readonly target: Element;
    readonly time: DOMHighResTimeStamp;
}
declare var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new (intersectionObserverEntryInit: IntersectionObserverEntryInit): IntersectionObserverEntry;
};
interface KHR_parallel_shader_compile {
    readonly COMPLETION_STATUS_KHR: 0x91B1;
}
interface KeyboardEvent extends UIEvent {
    readonly altKey: boolean;
    readonly charCode: number;
    readonly code: string;
    readonly ctrlKey: boolean;
    readonly isComposing: boolean;
    readonly key: string;
    readonly keyCode: number;
    readonly location: number;
    readonly metaKey: boolean;
    readonly repeat: boolean;
    readonly shiftKey: boolean;
    getModifierState(keyArg: string): boolean;
    initKeyboardEvent(typeArg: string, bubblesArg?: boolean, cancelableArg?: boolean, viewArg?: Window | null, keyArg?: string, locationArg?: number, ctrlKey?: boolean, altKey?: boolean, shiftKey?: boolean, metaKey?: boolean): void;
    readonly DOM_KEY_LOCATION_STANDARD: 0x00;
    readonly DOM_KEY_LOCATION_LEFT: 0x01;
    readonly DOM_KEY_LOCATION_RIGHT: 0x02;
    readonly DOM_KEY_LOCATION_NUMPAD: 0x03;
}
declare var KeyboardEvent: {
    prototype: KeyboardEvent;
    new (type: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
    readonly DOM_KEY_LOCATION_STANDARD: 0x00;
    readonly DOM_KEY_LOCATION_LEFT: 0x01;
    readonly DOM_KEY_LOCATION_RIGHT: 0x02;
    readonly DOM_KEY_LOCATION_NUMPAD: 0x03;
};
interface KeyframeEffect extends AnimationEffect {
    composite: CompositeOperation;
    iterationComposite: IterationCompositeOperation;
    pseudoElement: string | null;
    target: Element | null;
    getKeyframes(): ComputedKeyframe[];
    setKeyframes(keyframes: Keyframe[] | PropertyIndexedKeyframes | null): void;
}
declare var KeyframeEffect: {
    prototype: KeyframeEffect;
    new (target: Element | null, keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeEffectOptions): KeyframeEffect;
    new (source: KeyframeEffect): KeyframeEffect;
};
interface LinkStyle {
    readonly sheet: CSSStyleSheet | null;
}
interface Location {
    readonly ancestorOrigins: DOMStringList;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    toString(): string;
    readonly origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    assign(url: string | URL): void;
    reload(): void;
    replace(url: string | URL): void;
}
declare var Location: {
    prototype: Location;
    new (): Location;
};
interface Lock {
    readonly mode: LockMode;
    readonly name: string;
}
declare var Lock: {
    prototype: Lock;
    new (): Lock;
};
interface LockManager {
    query(): Promise<LockManagerSnapshot>;
    request(name: string, callback: LockGrantedCallback): Promise<any>;
    request(name: string, options: LockOptions, callback: LockGrantedCallback): Promise<any>;
}
declare var LockManager: {
    prototype: LockManager;
    new (): LockManager;
};
interface MIDIAccessEventMap {
    "statechange": Event;
}
interface MIDIAccess extends EventTarget {
    readonly inputs: MIDIInputMap;
    onstatechange: ((this: MIDIAccess, ev: Event) => any) | null;
    readonly outputs: MIDIOutputMap;
    readonly sysexEnabled: boolean;
    addEventListener<K extends keyof MIDIAccessEventMap>(type: K, listener: (this: MIDIAccess, ev: MIDIAccessEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MIDIAccessEventMap>(type: K, listener: (this: MIDIAccess, ev: MIDIAccessEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MIDIAccess: {
    prototype: MIDIAccess;
    new (): MIDIAccess;
};
interface MIDIConnectionEvent extends Event {
    readonly port: MIDIPort;
}
declare var MIDIConnectionEvent: {
    prototype: MIDIConnectionEvent;
    new (type: string, eventInitDict?: MIDIConnectionEventInit): MIDIConnectionEvent;
};
interface MIDIInputEventMap extends MIDIPortEventMap {
    "midimessage": Event;
}
interface MIDIInput extends MIDIPort {
    onmidimessage: ((this: MIDIInput, ev: Event) => any) | null;
    addEventListener<K extends keyof MIDIInputEventMap>(type: K, listener: (this: MIDIInput, ev: MIDIInputEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MIDIInputEventMap>(type: K, listener: (this: MIDIInput, ev: MIDIInputEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MIDIInput: {
    prototype: MIDIInput;
    new (): MIDIInput;
};
interface MIDIInputMap {
    forEach(callbackfn: (value: MIDIInput, key: string, parent: MIDIInputMap) => void, thisArg?: any): void;
}
declare var MIDIInputMap: {
    prototype: MIDIInputMap;
    new (): MIDIInputMap;
};
interface MIDIMessageEvent extends Event {
    readonly data: Uint8Array;
}
declare var MIDIMessageEvent: {
    prototype: MIDIMessageEvent;
    new (type: string, eventInitDict?: MIDIMessageEventInit): MIDIMessageEvent;
};
interface MIDIOutput extends MIDIPort {
    send(data: number[], timestamp?: DOMHighResTimeStamp): void;
    addEventListener<K extends keyof MIDIPortEventMap>(type: K, listener: (this: MIDIOutput, ev: MIDIPortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MIDIPortEventMap>(type: K, listener: (this: MIDIOutput, ev: MIDIPortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MIDIOutput: {
    prototype: MIDIOutput;
    new (): MIDIOutput;
};
interface MIDIOutputMap {
    forEach(callbackfn: (value: MIDIOutput, key: string, parent: MIDIOutputMap) => void, thisArg?: any): void;
}
declare var MIDIOutputMap: {
    prototype: MIDIOutputMap;
    new (): MIDIOutputMap;
};
interface MIDIPortEventMap {
    "statechange": Event;
}
interface MIDIPort extends EventTarget {
    readonly connection: MIDIPortConnectionState;
    readonly id: string;
    readonly manufacturer: string | null;
    readonly name: string | null;
    onstatechange: ((this: MIDIPort, ev: Event) => any) | null;
    readonly state: MIDIPortDeviceState;
    readonly type: MIDIPortType;
    readonly version: string | null;
    close(): Promise<MIDIPort>;
    open(): Promise<MIDIPort>;
    addEventListener<K extends keyof MIDIPortEventMap>(type: K, listener: (this: MIDIPort, ev: MIDIPortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MIDIPortEventMap>(type: K, listener: (this: MIDIPort, ev: MIDIPortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MIDIPort: {
    prototype: MIDIPort;
    new (): MIDIPort;
};
interface MathMLElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap {
}
interface MathMLElement extends Element, ElementCSSInlineStyle, GlobalEventHandlers, HTMLOrSVGElement {
    addEventListener<K extends keyof MathMLElementEventMap>(type: K, listener: (this: MathMLElement, ev: MathMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MathMLElementEventMap>(type: K, listener: (this: MathMLElement, ev: MathMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MathMLElement: {
    prototype: MathMLElement;
    new (): MathMLElement;
};
interface MediaCapabilities {
    decodingInfo(configuration: MediaDecodingConfiguration): Promise<MediaCapabilitiesDecodingInfo>;
    encodingInfo(configuration: MediaEncodingConfiguration): Promise<MediaCapabilitiesEncodingInfo>;
}
declare var MediaCapabilities: {
    prototype: MediaCapabilities;
    new (): MediaCapabilities;
};
interface MediaDeviceInfo {
    readonly deviceId: string;
    readonly groupId: string;
    readonly kind: MediaDeviceKind;
    readonly label: string;
    toJSON(): any;
}
declare var MediaDeviceInfo: {
    prototype: MediaDeviceInfo;
    new (): MediaDeviceInfo;
};
interface MediaDevicesEventMap {
    "devicechange": Event;
}
interface MediaDevices extends EventTarget {
    ondevicechange: ((this: MediaDevices, ev: Event) => any) | null;
    enumerateDevices(): Promise<MediaDeviceInfo[]>;
    getDisplayMedia(options?: DisplayMediaStreamOptions): Promise<MediaStream>;
    getSupportedConstraints(): MediaTrackSupportedConstraints;
    getUserMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
    addEventListener<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MediaDevices: {
    prototype: MediaDevices;
    new (): MediaDevices;
};
interface MediaElementAudioSourceNode extends AudioNode {
    readonly mediaElement: HTMLMediaElement;
}
declare var MediaElementAudioSourceNode: {
    prototype: MediaElementAudioSourceNode;
    new (context: AudioContext, options: MediaElementAudioSourceOptions): MediaElementAudioSourceNode;
};
interface MediaEncryptedEvent extends Event {
    readonly initData: ArrayBuffer | null;
    readonly initDataType: string;
}
declare var MediaEncryptedEvent: {
    prototype: MediaEncryptedEvent;
    new (type: string, eventInitDict?: MediaEncryptedEventInit): MediaEncryptedEvent;
};
interface MediaError {
    readonly code: number;
    readonly message: string;
    readonly MEDIA_ERR_ABORTED: 1;
    readonly MEDIA_ERR_NETWORK: 2;
    readonly MEDIA_ERR_DECODE: 3;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: 4;
}
declare var MediaError: {
    prototype: MediaError;
    new (): MediaError;
    readonly MEDIA_ERR_ABORTED: 1;
    readonly MEDIA_ERR_NETWORK: 2;
    readonly MEDIA_ERR_DECODE: 3;
    readonly MEDIA_ERR_SRC_NOT_SUPPORTED: 4;
};
interface MediaKeyMessageEvent extends Event {
    readonly message: ArrayBuffer;
    readonly messageType: MediaKeyMessageType;
}
declare var MediaKeyMessageEvent: {
    prototype: MediaKeyMessageEvent;
    new (type: string, eventInitDict: MediaKeyMessageEventInit): MediaKeyMessageEvent;
};
interface MediaKeySessionEventMap {
    "keystatuseschange": Event;
    "message": MediaKeyMessageEvent;
}
interface MediaKeySession extends EventTarget {
    readonly closed: Promise<MediaKeySessionClosedReason>;
    readonly expiration: number;
    readonly keyStatuses: MediaKeyStatusMap;
    onkeystatuseschange: ((this: MediaKeySession, ev: Event) => any) | null;
    onmessage: ((this: MediaKeySession, ev: MediaKeyMessageEvent) => any) | null;
    readonly sessionId: string;
    close(): Promise<void>;
    generateRequest(initDataType: string, initData: BufferSource): Promise<void>;
    load(sessionId: string): Promise<boolean>;
    remove(): Promise<void>;
    update(response: BufferSource): Promise<void>;
    addEventListener<K extends keyof MediaKeySessionEventMap>(type: K, listener: (this: MediaKeySession, ev: MediaKeySessionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaKeySessionEventMap>(type: K, listener: (this: MediaKeySession, ev: MediaKeySessionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MediaKeySession: {
    prototype: MediaKeySession;
    new (): MediaKeySession;
};
interface MediaKeyStatusMap {
    readonly size: number;
    get(keyId: BufferSource): MediaKeyStatus | undefined;
    has(keyId: BufferSource): boolean;
    forEach(callbackfn: (value: MediaKeyStatus, key: BufferSource, parent: MediaKeyStatusMap) => void, thisArg?: any): void;
}
declare var MediaKeyStatusMap: {
    prototype: MediaKeyStatusMap;
    new (): MediaKeyStatusMap;
};
interface MediaKeySystemAccess {
    readonly keySystem: string;
    createMediaKeys(): Promise<MediaKeys>;
    getConfiguration(): MediaKeySystemConfiguration;
}
declare var MediaKeySystemAccess: {
    prototype: MediaKeySystemAccess;
    new (): MediaKeySystemAccess;
};
interface MediaKeys {
    createSession(sessionType?: MediaKeySessionType): MediaKeySession;
    setServerCertificate(serverCertificate: BufferSource): Promise<boolean>;
}
declare var MediaKeys: {
    prototype: MediaKeys;
    new (): MediaKeys;
};
interface MediaList {
    readonly length: number;
    mediaText: string;
    toString(): string;
    appendMedium(medium: string): void;
    deleteMedium(medium: string): void;
    item(index: number): string | null;
    [index: number]: string;
}
declare var MediaList: {
    prototype: MediaList;
    new (): MediaList;
};
interface MediaMetadata {
    album: string;
    artist: string;
    artwork: ReadonlyArray<MediaImage>;
    title: string;
}
declare var MediaMetadata: {
    prototype: MediaMetadata;
    new (init?: MediaMetadataInit): MediaMetadata;
};
interface MediaQueryListEventMap {
    "change": MediaQueryListEvent;
}
interface MediaQueryList extends EventTarget {
    readonly matches: boolean;
    readonly media: string;
    onchange: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;
    addListener(callback: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    removeListener(callback: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    addEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MediaQueryList: {
    prototype: MediaQueryList;
    new (): MediaQueryList;
};
interface MediaQueryListEvent extends Event {
    readonly matches: boolean;
    readonly media: string;
}
declare var MediaQueryListEvent: {
    prototype: MediaQueryListEvent;
    new (type: string, eventInitDict?: MediaQueryListEventInit): MediaQueryListEvent;
};
interface MediaRecorderEventMap {
    "dataavailable": BlobEvent;
    "error": Event;
    "pause": Event;
    "resume": Event;
    "start": Event;
    "stop": Event;
}
interface MediaRecorder extends EventTarget {
    readonly audioBitsPerSecond: number;
    readonly mimeType: string;
    ondataavailable: ((this: MediaRecorder, ev: BlobEvent) => any) | null;
    onerror: ((this: MediaRecorder, ev: Event) => any) | null;
    onpause: ((this: MediaRecorder, ev: Event) => any) | null;
    onresume: ((this: MediaRecorder, ev: Event) => any) | null;
    onstart: ((this: MediaRecorder, ev: Event) => any) | null;
    onstop: ((this: MediaRecorder, ev: Event) => any) | null;
    readonly state: RecordingState;
    readonly stream: MediaStream;
    readonly videoBitsPerSecond: number;
    pause(): void;
    requestData(): void;
    resume(): void;
    start(timeslice?: number): void;
    stop(): void;
    addEventListener<K extends keyof MediaRecorderEventMap>(type: K, listener: (this: MediaRecorder, ev: MediaRecorderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaRecorderEventMap>(type: K, listener: (this: MediaRecorder, ev: MediaRecorderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MediaRecorder: {
    prototype: MediaRecorder;
    new (stream: MediaStream, options?: MediaRecorderOptions): MediaRecorder;
    isTypeSupported(type: string): boolean;
};
interface MediaSession {
    metadata: MediaMetadata | null;
    playbackState: MediaSessionPlaybackState;
    setActionHandler(action: MediaSessionAction, handler: MediaSessionActionHandler | null): void;
    setPositionState(state?: MediaPositionState): void;
}
declare var MediaSession: {
    prototype: MediaSession;
    new (): MediaSession;
};
interface MediaSourceEventMap {
    "sourceclose": Event;
    "sourceended": Event;
    "sourceopen": Event;
}
interface MediaSource extends EventTarget {
    readonly activeSourceBuffers: SourceBufferList;
    duration: number;
    onsourceclose: ((this: MediaSource, ev: Event) => any) | null;
    onsourceended: ((this: MediaSource, ev: Event) => any) | null;
    onsourceopen: ((this: MediaSource, ev: Event) => any) | null;
    readonly readyState: ReadyState;
    readonly sourceBuffers: SourceBufferList;
    addSourceBuffer(type: string): SourceBuffer;
    clearLiveSeekableRange(): void;
    endOfStream(error?: EndOfStreamError): void;
    removeSourceBuffer(sourceBuffer: SourceBuffer): void;
    setLiveSeekableRange(start: number, end: number): void;
    addEventListener<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MediaSource: {
    prototype: MediaSource;
    new (): MediaSource;
    isTypeSupported(type: string): boolean;
};
interface MediaStreamEventMap {
    "addtrack": MediaStreamTrackEvent;
    "removetrack": MediaStreamTrackEvent;
}
interface MediaStream extends EventTarget {
    readonly active: boolean;
    readonly id: string;
    onaddtrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => any) | null;
    onremovetrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => any) | null;
    addTrack(track: MediaStreamTrack): void;
    clone(): MediaStream;
    getAudioTracks(): MediaStreamTrack[];
    getTrackById(trackId: string): MediaStreamTrack | null;
    getTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    removeTrack(track: MediaStreamTrack): void;
    addEventListener<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MediaStream: {
    prototype: MediaStream;
    new (): MediaStream;
    new (stream: MediaStream): MediaStream;
    new (tracks: MediaStreamTrack[]): MediaStream;
};
interface MediaStreamAudioDestinationNode extends AudioNode {
    readonly stream: MediaStream;
}
declare var MediaStreamAudioDestinationNode: {
    prototype: MediaStreamAudioDestinationNode;
    new (context: AudioContext, options?: AudioNodeOptions): MediaStreamAudioDestinationNode;
};
interface MediaStreamAudioSourceNode extends AudioNode {
    readonly mediaStream: MediaStream;
}
declare var MediaStreamAudioSourceNode: {
    prototype: MediaStreamAudioSourceNode;
    new (context: AudioContext, options: MediaStreamAudioSourceOptions): MediaStreamAudioSourceNode;
};
interface MediaStreamTrackEventMap {
    "ended": Event;
    "mute": Event;
    "unmute": Event;
}
interface MediaStreamTrack extends EventTarget {
    contentHint: string;
    enabled: boolean;
    readonly id: string;
    readonly kind: string;
    readonly label: string;
    readonly muted: boolean;
    onended: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onmute: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onunmute: ((this: MediaStreamTrack, ev: Event) => any) | null;
    readonly readyState: MediaStreamTrackState;
    applyConstraints(constraints?: MediaTrackConstraints): Promise<void>;
    clone(): MediaStreamTrack;
    getCapabilities(): MediaTrackCapabilities;
    getConstraints(): MediaTrackConstraints;
    getSettings(): MediaTrackSettings;
    stop(): void;
    addEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MediaStreamTrack: {
    prototype: MediaStreamTrack;
    new (): MediaStreamTrack;
};
interface MediaStreamTrackEvent extends Event {
    readonly track: MediaStreamTrack;
}
declare var MediaStreamTrackEvent: {
    prototype: MediaStreamTrackEvent;
    new (type: string, eventInitDict: MediaStreamTrackEventInit): MediaStreamTrackEvent;
};
interface MessageChannel {
    readonly port1: MessagePort;
    readonly port2: MessagePort;
}
declare var MessageChannel: {
    prototype: MessageChannel;
    new (): MessageChannel;
};
interface MessageEvent<T = any> extends Event {
    readonly data: T;
    readonly lastEventId: string;
    readonly origin: string;
    readonly ports: ReadonlyArray<MessagePort>;
    readonly source: MessageEventSource | null;
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource | null, ports?: MessagePort[]): void;
}
declare var MessageEvent: {
    prototype: MessageEvent;
    new <T>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>;
};
interface MessagePortEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}
interface MessagePort extends EventTarget {
    onmessage: ((this: MessagePort, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: MessagePort, ev: MessageEvent) => any) | null;
    close(): void;
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    start(): void;
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var MessagePort: {
    prototype: MessagePort;
    new (): MessagePort;
};
interface MimeType {
    readonly description: string;
    readonly enabledPlugin: Plugin;
    readonly suffixes: string;
    readonly type: string;
}
declare var MimeType: {
    prototype: MimeType;
    new (): MimeType;
};
interface MimeTypeArray {
    readonly length: number;
    item(index: number): MimeType | null;
    namedItem(name: string): MimeType | null;
    [index: number]: MimeType;
}
declare var MimeTypeArray: {
    prototype: MimeTypeArray;
    new (): MimeTypeArray;
};
interface MouseEvent extends UIEvent {
    readonly altKey: boolean;
    readonly button: number;
    readonly buttons: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly movementX: number;
    readonly movementY: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly relatedTarget: EventTarget | null;
    readonly screenX: number;
    readonly screenY: number;
    readonly shiftKey: boolean;
    readonly x: number;
    readonly y: number;
    getModifierState(keyArg: string): boolean;
    initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget | null): void;
}
declare var MouseEvent: {
    prototype: MouseEvent;
    new (type: string, eventInitDict?: MouseEventInit): MouseEvent;
};
interface MutationEvent extends Event {
    readonly attrChange: number;
    readonly attrName: string;
    readonly newValue: string;
    readonly prevValue: string;
    readonly relatedNode: Node | null;
    initMutationEvent(typeArg: string, bubblesArg?: boolean, cancelableArg?: boolean, relatedNodeArg?: Node | null, prevValueArg?: string, newValueArg?: string, attrNameArg?: string, attrChangeArg?: number): void;
    readonly MODIFICATION: 1;
    readonly ADDITION: 2;
    readonly REMOVAL: 3;
}
declare var MutationEvent: {
    prototype: MutationEvent;
    new (): MutationEvent;
    readonly MODIFICATION: 1;
    readonly ADDITION: 2;
    readonly REMOVAL: 3;
};
interface MutationObserver {
    disconnect(): void;
    observe(target: Node, options?: MutationObserverInit): void;
    takeRecords(): MutationRecord[];
}
declare var MutationObserver: {
    prototype: MutationObserver;
    new (callback: MutationCallback): MutationObserver;
};
interface MutationRecord {
    readonly addedNodes: NodeList;
    readonly attributeName: string | null;
    readonly attributeNamespace: string | null;
    readonly nextSibling: Node | null;
    readonly oldValue: string | null;
    readonly previousSibling: Node | null;
    readonly removedNodes: NodeList;
    readonly target: Node;
    readonly type: MutationRecordType;
}
declare var MutationRecord: {
    prototype: MutationRecord;
    new (): MutationRecord;
};
interface NamedNodeMap {
    readonly length: number;
    getNamedItem(qualifiedName: string): Attr | null;
    getNamedItemNS(namespace: string | null, localName: string): Attr | null;
    item(index: number): Attr | null;
    removeNamedItem(qualifiedName: string): Attr;
    removeNamedItemNS(namespace: string | null, localName: string): Attr;
    setNamedItem(attr: Attr): Attr | null;
    setNamedItemNS(attr: Attr): Attr | null;
    [index: number]: Attr;
}
declare var NamedNodeMap: {
    prototype: NamedNodeMap;
    new (): NamedNodeMap;
};
interface NavigationPreloadManager {
    disable(): Promise<void>;
    enable(): Promise<void>;
    getState(): Promise<NavigationPreloadState>;
    setHeaderValue(value: string): Promise<void>;
}
declare var NavigationPreloadManager: {
    prototype: NavigationPreloadManager;
    new (): NavigationPreloadManager;
};
interface Navigator extends NavigatorAutomationInformation, NavigatorConcurrentHardware, NavigatorContentUtils, NavigatorCookies, NavigatorID, NavigatorLanguage, NavigatorLocks, NavigatorOnLine, NavigatorPlugins, NavigatorStorage {
    readonly clipboard: Clipboard;
    readonly credentials: CredentialsContainer;
    readonly doNotTrack: string | null;
    readonly geolocation: Geolocation;
    readonly maxTouchPoints: number;
    readonly mediaCapabilities: MediaCapabilities;
    readonly mediaDevices: MediaDevices;
    readonly mediaSession: MediaSession;
    readonly permissions: Permissions;
    readonly serviceWorker: ServiceWorkerContainer;
    canShare(data?: ShareData): boolean;
    getGamepads(): (Gamepad | null)[];
    requestMIDIAccess(options?: MIDIOptions): Promise<MIDIAccess>;
    requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): Promise<MediaKeySystemAccess>;
    sendBeacon(url: string | URL, data?: BodyInit | null): boolean;
    share(data?: ShareData): Promise<void>;
    vibrate(pattern: VibratePattern): boolean;
}
declare var Navigator: {
    prototype: Navigator;
    new (): Navigator;
};
interface NavigatorAutomationInformation {
    readonly webdriver: boolean;
}
interface NavigatorConcurrentHardware {
    readonly hardwareConcurrency: number;
}
interface NavigatorContentUtils {
    registerProtocolHandler(scheme: string, url: string | URL): void;
}
interface NavigatorCookies {
    readonly cookieEnabled: boolean;
}
interface NavigatorID {
    readonly appCodeName: string;
    readonly appName: string;
    readonly appVersion: string;
    readonly platform: string;
    readonly product: string;
    readonly productSub: string;
    readonly userAgent: string;
    readonly vendor: string;
    readonly vendorSub: string;
}
interface NavigatorLanguage {
    readonly language: string;
    readonly languages: ReadonlyArray<string>;
}
interface NavigatorLocks {
    readonly locks: LockManager;
}
interface NavigatorOnLine {
    readonly onLine: boolean;
}
interface NavigatorPlugins {
    readonly mimeTypes: MimeTypeArray;
    readonly pdfViewerEnabled: boolean;
    readonly plugins: PluginArray;
    javaEnabled(): boolean;
}
interface NavigatorStorage {
    readonly storage: StorageManager;
}
interface Node extends EventTarget {
    readonly baseURI: string;
    readonly childNodes: NodeListOf<ChildNode>;
    readonly firstChild: ChildNode | null;
    readonly isConnected: boolean;
    readonly lastChild: ChildNode | null;
    readonly nextSibling: ChildNode | null;
    readonly nodeName: string;
    readonly nodeType: number;
    nodeValue: string | null;
    readonly ownerDocument: Document | null;
    readonly parentElement: HTMLElement | null;
    readonly parentNode: ParentNode | null;
    readonly previousSibling: ChildNode | null;
    textContent: string | null;
    appendChild<T extends Node>(node: T): T;
    cloneNode(deep?: boolean): Node;
    compareDocumentPosition(other: Node): number;
    contains(other: Node | null): boolean;
    getRootNode(options?: GetRootNodeOptions): Node;
    hasChildNodes(): boolean;
    insertBefore<T extends Node>(node: T, child: Node | null): T;
    isDefaultNamespace(namespace: string | null): boolean;
    isEqualNode(otherNode: Node | null): boolean;
    isSameNode(otherNode: Node | null): boolean;
    lookupNamespaceURI(prefix: string | null): string | null;
    lookupPrefix(namespace: string | null): string | null;
    normalize(): void;
    removeChild<T extends Node>(child: T): T;
    replaceChild<T extends Node>(node: Node, child: T): T;
    readonly ELEMENT_NODE: 1;
    readonly ATTRIBUTE_NODE: 2;
    readonly TEXT_NODE: 3;
    readonly CDATA_SECTION_NODE: 4;
    readonly ENTITY_REFERENCE_NODE: 5;
    readonly ENTITY_NODE: 6;
    readonly PROCESSING_INSTRUCTION_NODE: 7;
    readonly COMMENT_NODE: 8;
    readonly DOCUMENT_NODE: 9;
    readonly DOCUMENT_TYPE_NODE: 10;
    readonly DOCUMENT_FRAGMENT_NODE: 11;
    readonly NOTATION_NODE: 12;
    readonly DOCUMENT_POSITION_DISCONNECTED: 0x01;
    readonly DOCUMENT_POSITION_PRECEDING: 0x02;
    readonly DOCUMENT_POSITION_FOLLOWING: 0x04;
    readonly DOCUMENT_POSITION_CONTAINS: 0x08;
    readonly DOCUMENT_POSITION_CONTAINED_BY: 0x10;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 0x20;
}
declare var Node: {
    prototype: Node;
    new (): Node;
    readonly ELEMENT_NODE: 1;
    readonly ATTRIBUTE_NODE: 2;
    readonly TEXT_NODE: 3;
    readonly CDATA_SECTION_NODE: 4;
    readonly ENTITY_REFERENCE_NODE: 5;
    readonly ENTITY_NODE: 6;
    readonly PROCESSING_INSTRUCTION_NODE: 7;
    readonly COMMENT_NODE: 8;
    readonly DOCUMENT_NODE: 9;
    readonly DOCUMENT_TYPE_NODE: 10;
    readonly DOCUMENT_FRAGMENT_NODE: 11;
    readonly NOTATION_NODE: 12;
    readonly DOCUMENT_POSITION_DISCONNECTED: 0x01;
    readonly DOCUMENT_POSITION_PRECEDING: 0x02;
    readonly DOCUMENT_POSITION_FOLLOWING: 0x04;
    readonly DOCUMENT_POSITION_CONTAINS: 0x08;
    readonly DOCUMENT_POSITION_CONTAINED_BY: 0x10;
    readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 0x20;
};
interface NodeIterator {
    readonly filter: NodeFilter | null;
    readonly pointerBeforeReferenceNode: boolean;
    readonly referenceNode: Node;
    readonly root: Node;
    readonly whatToShow: number;
    detach(): void;
    nextNode(): Node | null;
    previousNode(): Node | null;
}
declare var NodeIterator: {
    prototype: NodeIterator;
    new (): NodeIterator;
};
interface NodeList {
    readonly length: number;
    item(index: number): Node | null;
    forEach(callbackfn: (value: Node, key: number, parent: NodeList) => void, thisArg?: any): void;
    [index: number]: Node;
}
declare var NodeList: {
    prototype: NodeList;
    new (): NodeList;
};
interface NodeListOf<TNode extends Node> extends NodeList {
    item(index: number): TNode;
    forEach(callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => void, thisArg?: any): void;
    [index: number]: TNode;
}
interface NonDocumentTypeChildNode {
    readonly nextElementSibling: Element | null;
    readonly previousElementSibling: Element | null;
}
interface NonElementParentNode {
    getElementById(elementId: string): Element | null;
}
interface NotificationEventMap {
    "click": Event;
    "close": Event;
    "error": Event;
    "show": Event;
}
interface Notification extends EventTarget {
    readonly body: string;
    readonly data: any;
    readonly dir: NotificationDirection;
    readonly icon: string;
    readonly lang: string;
    onclick: ((this: Notification, ev: Event) => any) | null;
    onclose: ((this: Notification, ev: Event) => any) | null;
    onerror: ((this: Notification, ev: Event) => any) | null;
    onshow: ((this: Notification, ev: Event) => any) | null;
    readonly tag: string;
    readonly title: string;
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var Notification: {
    prototype: Notification;
    new (title: string, options?: NotificationOptions): Notification;
    readonly permission: NotificationPermission;
    requestPermission(deprecatedCallback?: NotificationPermissionCallback): Promise<NotificationPermission>;
};
interface OES_draw_buffers_indexed {
    blendEquationSeparateiOES(buf: GLuint, modeRGB: GLenum, modeAlpha: GLenum): void;
    blendEquationiOES(buf: GLuint, mode: GLenum): void;
    blendFuncSeparateiOES(buf: GLuint, srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    blendFunciOES(buf: GLuint, src: GLenum, dst: GLenum): void;
    colorMaskiOES(buf: GLuint, r: GLboolean, g: GLboolean, b: GLboolean, a: GLboolean): void;
    disableiOES(target: GLenum, index: GLuint): void;
    enableiOES(target: GLenum, index: GLuint): void;
}
interface OES_element_index_uint {
}
interface OES_fbo_render_mipmap {
}
interface OES_standard_derivatives {
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 0x8B8B;
}
interface OES_texture_float {
}
interface OES_texture_float_linear {
}
interface OES_texture_half_float {
    readonly HALF_FLOAT_OES: 0x8D61;
}
interface OES_texture_half_float_linear {
}
interface OES_vertex_array_object {
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    createVertexArrayOES(): WebGLVertexArrayObjectOES | null;
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
    readonly VERTEX_ARRAY_BINDING_OES: 0x85B5;
}
interface OVR_multiview2 {
    framebufferTextureMultiviewOVR(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, baseViewIndex: GLint, numViews: GLsizei): void;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR: 0x9630;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR: 0x9632;
    readonly MAX_VIEWS_OVR: 0x9631;
    readonly FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR: 0x9633;
}
interface OfflineAudioCompletionEvent extends Event {
    readonly renderedBuffer: AudioBuffer;
}
declare var OfflineAudioCompletionEvent: {
    prototype: OfflineAudioCompletionEvent;
    new (type: string, eventInitDict: OfflineAudioCompletionEventInit): OfflineAudioCompletionEvent;
};
interface OfflineAudioContextEventMap extends BaseAudioContextEventMap {
    "complete": OfflineAudioCompletionEvent;
}
interface OfflineAudioContext extends BaseAudioContext {
    readonly length: number;
    oncomplete: ((this: OfflineAudioContext, ev: OfflineAudioCompletionEvent) => any) | null;
    resume(): Promise<void>;
    startRendering(): Promise<AudioBuffer>;
    suspend(suspendTime: number): Promise<void>;
    addEventListener<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var OfflineAudioContext: {
    prototype: OfflineAudioContext;
    new (contextOptions: OfflineAudioContextOptions): OfflineAudioContext;
    new (numberOfChannels: number, length: number, sampleRate: number): OfflineAudioContext;
};
interface OffscreenCanvasEventMap {
    "contextlost": Event;
    "contextrestored": Event;
}
interface OffscreenCanvas extends EventTarget {
    height: number;
    oncontextlost: ((this: OffscreenCanvas, ev: Event) => any) | null;
    oncontextrestored: ((this: OffscreenCanvas, ev: Event) => any) | null;
    width: number;
    convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
    getContext(contextId: "2d", options?: any): OffscreenCanvasRenderingContext2D | null;
    getContext(contextId: "bitmaprenderer", options?: any): ImageBitmapRenderingContext | null;
    getContext(contextId: "webgl", options?: any): WebGLRenderingContext | null;
    getContext(contextId: "webgl2", options?: any): WebGL2RenderingContext | null;
    getContext(contextId: OffscreenRenderingContextId, options?: any): OffscreenRenderingContext | null;
    transferToImageBitmap(): ImageBitmap;
    addEventListener<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var OffscreenCanvas: {
    prototype: OffscreenCanvas;
    new (width: number, height: number): OffscreenCanvas;
};
interface OffscreenCanvasRenderingContext2D extends CanvasCompositing, CanvasDrawImage, CanvasDrawPath, CanvasFillStrokeStyles, CanvasFilters, CanvasImageData, CanvasImageSmoothing, CanvasPath, CanvasPathDrawingStyles, CanvasRect, CanvasShadowStyles, CanvasState, CanvasText, CanvasTextDrawingStyles, CanvasTransform {
    readonly canvas: OffscreenCanvas;
    commit(): void;
}
declare var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
    new (): OffscreenCanvasRenderingContext2D;
};
interface OscillatorNode extends AudioScheduledSourceNode {
    readonly detune: AudioParam;
    readonly frequency: AudioParam;
    type: OscillatorType;
    setPeriodicWave(periodicWave: PeriodicWave): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var OscillatorNode: {
    prototype: OscillatorNode;
    new (context: BaseAudioContext, options?: OscillatorOptions): OscillatorNode;
};
interface OverconstrainedError extends Error {
    readonly constraint: string;
}
declare var OverconstrainedError: {
    prototype: OverconstrainedError;
    new (constraint: string, message?: string): OverconstrainedError;
};
interface PageTransitionEvent extends Event {
    readonly persisted: boolean;
}
declare var PageTransitionEvent: {
    prototype: PageTransitionEvent;
    new (type: string, eventInitDict?: PageTransitionEventInit): PageTransitionEvent;
};
interface PannerNode extends AudioNode {
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceModel: DistanceModelType;
    maxDistance: number;
    readonly orientationX: AudioParam;
    readonly orientationY: AudioParam;
    readonly orientationZ: AudioParam;
    panningModel: PanningModelType;
    readonly positionX: AudioParam;
    readonly positionY: AudioParam;
    readonly positionZ: AudioParam;
    refDistance: number;
    rolloffFactor: number;
    setOrientation(x: number, y: number, z: number): void;
    setPosition(x: number, y: number, z: number): void;
}
declare var PannerNode: {
    prototype: PannerNode;
    new (context: BaseAudioContext, options?: PannerOptions): PannerNode;
};
interface ParentNode extends Node {
    readonly childElementCount: number;
    readonly children: HTMLCollection;
    readonly firstElementChild: Element | null;
    readonly lastElementChild: Element | null;
    append(...nodes: (Node | string)[]): void;
    prepend(...nodes: (Node | string)[]): void;
    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    querySelector<K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null;
    querySelector<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): HTMLElementDeprecatedTagNameMap[K] | null;
    querySelector<E extends Element = Element>(selectors: string): E | null;
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<MathMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
    replaceChildren(...nodes: (Node | string)[]): void;
}
interface Path2D extends CanvasPath {
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}
declare var Path2D: {
    prototype: Path2D;
    new (path?: Path2D | string): Path2D;
};
interface PaymentMethodChangeEvent extends PaymentRequestUpdateEvent {
    readonly methodDetails: any;
    readonly methodName: string;
}
declare var PaymentMethodChangeEvent: {
    prototype: PaymentMethodChangeEvent;
    new (type: string, eventInitDict?: PaymentMethodChangeEventInit): PaymentMethodChangeEvent;
};
interface PaymentRequestEventMap {
    "paymentmethodchange": Event;
}
interface PaymentRequest extends EventTarget {
    readonly id: string;
    onpaymentmethodchange: ((this: PaymentRequest, ev: Event) => any) | null;
    abort(): Promise<void>;
    canMakePayment(): Promise<boolean>;
    show(detailsPromise?: PaymentDetailsUpdate | PromiseLike<PaymentDetailsUpdate>): Promise<PaymentResponse>;
    addEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var PaymentRequest: {
    prototype: PaymentRequest;
    new (methodData: PaymentMethodData[], details: PaymentDetailsInit): PaymentRequest;
};
interface PaymentRequestUpdateEvent extends Event {
    updateWith(detailsPromise: PaymentDetailsUpdate | PromiseLike<PaymentDetailsUpdate>): void;
}
declare var PaymentRequestUpdateEvent: {
    prototype: PaymentRequestUpdateEvent;
    new (type: string, eventInitDict?: PaymentRequestUpdateEventInit): PaymentRequestUpdateEvent;
};
interface PaymentResponse extends EventTarget {
    readonly details: any;
    readonly methodName: string;
    readonly requestId: string;
    complete(result?: PaymentComplete): Promise<void>;
    retry(errorFields?: PaymentValidationErrors): Promise<void>;
    toJSON(): any;
}
declare var PaymentResponse: {
    prototype: PaymentResponse;
    new (): PaymentResponse;
};
interface PerformanceEventMap {
    "resourcetimingbufferfull": Event;
}
interface Performance extends EventTarget {
    readonly eventCounts: EventCounts;
    readonly navigation: PerformanceNavigation;
    onresourcetimingbufferfull: ((this: Performance, ev: Event) => any) | null;
    readonly timeOrigin: DOMHighResTimeStamp;
    readonly timing: PerformanceTiming;
    clearMarks(markName?: string): void;
    clearMeasures(measureName?: string): void;
    clearResourceTimings(): void;
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
    mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
    measure(measureName: string, startOrMeasureOptions?: string | PerformanceMeasureOptions, endMark?: string): PerformanceMeasure;
    now(): DOMHighResTimeStamp;
    setResourceTimingBufferSize(maxSize: number): void;
    toJSON(): any;
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var Performance: {
    prototype: Performance;
    new (): Performance;
};
interface PerformanceEntry {
    readonly duration: DOMHighResTimeStamp;
    readonly entryType: string;
    readonly name: string;
    readonly startTime: DOMHighResTimeStamp;
    toJSON(): any;
}
declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new (): PerformanceEntry;
};
interface PerformanceEventTiming extends PerformanceEntry {
    readonly cancelable: boolean;
    readonly processingEnd: DOMHighResTimeStamp;
    readonly processingStart: DOMHighResTimeStamp;
    readonly target: Node | null;
    toJSON(): any;
}
declare var PerformanceEventTiming: {
    prototype: PerformanceEventTiming;
    new (): PerformanceEventTiming;
};
interface PerformanceMark extends PerformanceEntry {
    readonly detail: any;
}
declare var PerformanceMark: {
    prototype: PerformanceMark;
    new (markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
};
interface PerformanceMeasure extends PerformanceEntry {
    readonly detail: any;
}
declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new (): PerformanceMeasure;
};
interface PerformanceNavigation {
    readonly redirectCount: number;
    readonly type: number;
    toJSON(): any;
    readonly TYPE_NAVIGATE: 0;
    readonly TYPE_RELOAD: 1;
    readonly TYPE_BACK_FORWARD: 2;
    readonly TYPE_RESERVED: 255;
}
declare var PerformanceNavigation: {
    prototype: PerformanceNavigation;
    new (): PerformanceNavigation;
    readonly TYPE_NAVIGATE: 0;
    readonly TYPE_RELOAD: 1;
    readonly TYPE_BACK_FORWARD: 2;
    readonly TYPE_RESERVED: 255;
};
interface PerformanceNavigationTiming extends PerformanceResourceTiming {
    readonly domComplete: DOMHighResTimeStamp;
    readonly domContentLoadedEventEnd: DOMHighResTimeStamp;
    readonly domContentLoadedEventStart: DOMHighResTimeStamp;
    readonly domInteractive: DOMHighResTimeStamp;
    readonly loadEventEnd: DOMHighResTimeStamp;
    readonly loadEventStart: DOMHighResTimeStamp;
    readonly redirectCount: number;
    readonly type: NavigationTimingType;
    readonly unloadEventEnd: DOMHighResTimeStamp;
    readonly unloadEventStart: DOMHighResTimeStamp;
    toJSON(): any;
}
declare var PerformanceNavigationTiming: {
    prototype: PerformanceNavigationTiming;
    new (): PerformanceNavigationTiming;
};
interface PerformanceObserver {
    disconnect(): void;
    observe(options?: PerformanceObserverInit): void;
    takeRecords(): PerformanceEntryList;
}
declare var PerformanceObserver: {
    prototype: PerformanceObserver;
    new (callback: PerformanceObserverCallback): PerformanceObserver;
    readonly supportedEntryTypes: ReadonlyArray<string>;
};
interface PerformanceObserverEntryList {
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
}
declare var PerformanceObserverEntryList: {
    prototype: PerformanceObserverEntryList;
    new (): PerformanceObserverEntryList;
};
interface PerformancePaintTiming extends PerformanceEntry {
}
declare var PerformancePaintTiming: {
    prototype: PerformancePaintTiming;
    new (): PerformancePaintTiming;
};
interface PerformanceResourceTiming extends PerformanceEntry {
    readonly connectEnd: DOMHighResTimeStamp;
    readonly connectStart: DOMHighResTimeStamp;
    readonly decodedBodySize: number;
    readonly domainLookupEnd: DOMHighResTimeStamp;
    readonly domainLookupStart: DOMHighResTimeStamp;
    readonly encodedBodySize: number;
    readonly fetchStart: DOMHighResTimeStamp;
    readonly initiatorType: string;
    readonly nextHopProtocol: string;
    readonly redirectEnd: DOMHighResTimeStamp;
    readonly redirectStart: DOMHighResTimeStamp;
    readonly requestStart: DOMHighResTimeStamp;
    readonly responseEnd: DOMHighResTimeStamp;
    readonly responseStart: DOMHighResTimeStamp;
    readonly secureConnectionStart: DOMHighResTimeStamp;
    readonly serverTiming: ReadonlyArray<PerformanceServerTiming>;
    readonly transferSize: number;
    readonly workerStart: DOMHighResTimeStamp;
    toJSON(): any;
}
declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new (): PerformanceResourceTiming;
};
interface PerformanceServerTiming {
    readonly description: string;
    readonly duration: DOMHighResTimeStamp;
    readonly name: string;
    toJSON(): any;
}
declare var PerformanceServerTiming: {
    prototype: PerformanceServerTiming;
    new (): PerformanceServerTiming;
};
interface PerformanceTiming {
    readonly connectEnd: number;
    readonly connectStart: number;
    readonly domComplete: number;
    readonly domContentLoadedEventEnd: number;
    readonly domContentLoadedEventStart: number;
    readonly domInteractive: number;
    readonly domLoading: number;
    readonly domainLookupEnd: number;
    readonly domainLookupStart: number;
    readonly fetchStart: number;
    readonly loadEventEnd: number;
    readonly loadEventStart: number;
    readonly navigationStart: number;
    readonly redirectEnd: number;
    readonly redirectStart: number;
    readonly requestStart: number;
    readonly responseEnd: number;
    readonly responseStart: number;
    readonly secureConnectionStart: number;
    readonly unloadEventEnd: number;
    readonly unloadEventStart: number;
    toJSON(): any;
}
declare var PerformanceTiming: {
    prototype: PerformanceTiming;
    new (): PerformanceTiming;
};
interface PeriodicWave {
}
declare var PeriodicWave: {
    prototype: PeriodicWave;
    new (context: BaseAudioContext, options?: PeriodicWaveOptions): PeriodicWave;
};
interface PermissionStatusEventMap {
    "change": Event;
}
interface PermissionStatus extends EventTarget {
    readonly name: string;
    onchange: ((this: PermissionStatus, ev: Event) => any) | null;
    readonly state: PermissionState;
    addEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var PermissionStatus: {
    prototype: PermissionStatus;
    new (): PermissionStatus;
};
interface Permissions {
    query(permissionDesc: PermissionDescriptor): Promise<PermissionStatus>;
}
declare var Permissions: {
    prototype: Permissions;
    new (): Permissions;
};
interface PictureInPictureEvent extends Event {
    readonly pictureInPictureWindow: PictureInPictureWindow;
}
declare var PictureInPictureEvent: {
    prototype: PictureInPictureEvent;
    new (type: string, eventInitDict: PictureInPictureEventInit): PictureInPictureEvent;
};
interface PictureInPictureWindowEventMap {
    "resize": Event;
}
interface PictureInPictureWindow extends EventTarget {
    readonly height: number;
    onresize: ((this: PictureInPictureWindow, ev: Event) => any) | null;
    readonly width: number;
    addEventListener<K extends keyof PictureInPictureWindowEventMap>(type: K, listener: (this: PictureInPictureWindow, ev: PictureInPictureWindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PictureInPictureWindowEventMap>(type: K, listener: (this: PictureInPictureWindow, ev: PictureInPictureWindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var PictureInPictureWindow: {
    prototype: PictureInPictureWindow;
    new (): PictureInPictureWindow;
};
interface Plugin {
    readonly description: string;
    readonly filename: string;
    readonly length: number;
    readonly name: string;
    item(index: number): MimeType | null;
    namedItem(name: string): MimeType | null;
    [index: number]: MimeType;
}
declare var Plugin: {
    prototype: Plugin;
    new (): Plugin;
};
interface PluginArray {
    readonly length: number;
    item(index: number): Plugin | null;
    namedItem(name: string): Plugin | null;
    refresh(): void;
    [index: number]: Plugin;
}
declare var PluginArray: {
    prototype: PluginArray;
    new (): PluginArray;
};
interface PointerEvent extends MouseEvent {
    readonly height: number;
    readonly isPrimary: boolean;
    readonly pointerId: number;
    readonly pointerType: string;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly width: number;
    getCoalescedEvents(): PointerEvent[];
    getPredictedEvents(): PointerEvent[];
}
declare var PointerEvent: {
    prototype: PointerEvent;
    new (type: string, eventInitDict?: PointerEventInit): PointerEvent;
};
interface PopStateEvent extends Event {
    readonly state: any;
}
declare var PopStateEvent: {
    prototype: PopStateEvent;
    new (type: string, eventInitDict?: PopStateEventInit): PopStateEvent;
};
interface ProcessingInstruction extends CharacterData, LinkStyle {
    readonly ownerDocument: Document;
    readonly target: string;
}
declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new (): ProcessingInstruction;
};
interface ProgressEvent<T extends EventTarget = EventTarget> extends Event {
    readonly lengthComputable: boolean;
    readonly loaded: number;
    readonly target: T | null;
    readonly total: number;
}
declare var ProgressEvent: {
    prototype: ProgressEvent;
    new (type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
};
interface PromiseRejectionEvent extends Event {
    readonly promise: Promise<any>;
    readonly reason: any;
}
declare var PromiseRejectionEvent: {
    prototype: PromiseRejectionEvent;
    new (type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
};
interface PublicKeyCredential extends Credential {
    readonly authenticatorAttachment: string | null;
    readonly rawId: ArrayBuffer;
    readonly response: AuthenticatorResponse;
    getClientExtensionResults(): AuthenticationExtensionsClientOutputs;
}
declare var PublicKeyCredential: {
    prototype: PublicKeyCredential;
    new (): PublicKeyCredential;
    isConditionalMediationAvailable(): Promise<boolean>;
    isUserVerifyingPlatformAuthenticatorAvailable(): Promise<boolean>;
};
interface PushManager {
    getSubscription(): Promise<PushSubscription | null>;
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PermissionState>;
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}
declare var PushManager: {
    prototype: PushManager;
    new (): PushManager;
    readonly supportedContentEncodings: ReadonlyArray<string>;
};
interface PushSubscription {
    readonly endpoint: string;
    readonly expirationTime: EpochTimeStamp | null;
    readonly options: PushSubscriptionOptions;
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    toJSON(): PushSubscriptionJSON;
    unsubscribe(): Promise<boolean>;
}
declare var PushSubscription: {
    prototype: PushSubscription;
    new (): PushSubscription;
};
interface PushSubscriptionOptions {
    readonly applicationServerKey: ArrayBuffer | null;
    readonly userVisibleOnly: boolean;
}
declare var PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    new (): PushSubscriptionOptions;
};
interface RTCCertificate {
    readonly expires: EpochTimeStamp;
    getFingerprints(): RTCDtlsFingerprint[];
}
declare var RTCCertificate: {
    prototype: RTCCertificate;
    new (): RTCCertificate;
};
interface RTCDTMFSenderEventMap {
    "tonechange": RTCDTMFToneChangeEvent;
}
interface RTCDTMFSender extends EventTarget {
    readonly canInsertDTMF: boolean;
    ontonechange: ((this: RTCDTMFSender, ev: RTCDTMFToneChangeEvent) => any) | null;
    readonly toneBuffer: string;
    insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
    addEventListener<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var RTCDTMFSender: {
    prototype: RTCDTMFSender;
    new (): RTCDTMFSender;
};
interface RTCDTMFToneChangeEvent extends Event {
    readonly tone: string;
}
declare var RTCDTMFToneChangeEvent: {
    prototype: RTCDTMFToneChangeEvent;
    new (type: string, eventInitDict?: RTCDTMFToneChangeEventInit): RTCDTMFToneChangeEvent;
};
interface RTCDataChannelEventMap {
    "bufferedamountlow": Event;
    "close": Event;
    "closing": Event;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}
interface RTCDataChannel extends EventTarget {
    binaryType: BinaryType;
    readonly bufferedAmount: number;
    bufferedAmountLowThreshold: number;
    readonly id: number | null;
    readonly label: string;
    readonly maxPacketLifeTime: number | null;
    readonly maxRetransmits: number | null;
    readonly negotiated: boolean;
    onbufferedamountlow: ((this: RTCDataChannel, ev: Event) => any) | null;
    onclose: ((this: RTCDataChannel, ev: Event) => any) | null;
    onclosing: ((this: RTCDataChannel, ev: Event) => any) | null;
    onerror: ((this: RTCDataChannel, ev: Event) => any) | null;
    onmessage: ((this: RTCDataChannel, ev: MessageEvent) => any) | null;
    onopen: ((this: RTCDataChannel, ev: Event) => any) | null;
    readonly ordered: boolean;
    readonly protocol: string;
    readonly readyState: RTCDataChannelState;
    close(): void;
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
    addEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var RTCDataChannel: {
    prototype: RTCDataChannel;
    new (): RTCDataChannel;
};
interface RTCDataChannelEvent extends Event {
    readonly channel: RTCDataChannel;
}
declare var RTCDataChannelEvent: {
    prototype: RTCDataChannelEvent;
    new (type: string, eventInitDict: RTCDataChannelEventInit): RTCDataChannelEvent;
};
interface RTCDtlsTransportEventMap {
    "error": Event;
    "statechange": Event;
}
interface RTCDtlsTransport extends EventTarget {
    readonly iceTransport: RTCIceTransport;
    onerror: ((this: RTCDtlsTransport, ev: Event) => any) | null;
    onstatechange: ((this: RTCDtlsTransport, ev: Event) => any) | null;
    readonly state: RTCDtlsTransportState;
    getRemoteCertificates(): ArrayBuffer[];
    addEventListener<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var RTCDtlsTransport: {
    prototype: RTCDtlsTransport;
    new (): RTCDtlsTransport;
};
interface RTCEncodedAudioFrame {
    data: ArrayBuffer;
    readonly timestamp: number;
    getMetadata(): RTCEncodedAudioFrameMetadata;
}
declare var RTCEncodedAudioFrame: {
    prototype: RTCEncodedAudioFrame;
    new (): RTCEncodedAudioFrame;
};
interface RTCEncodedVideoFrame {
    data: ArrayBuffer;
    readonly timestamp: number;
    readonly type: RTCEncodedVideoFrameType;
    getMetadata(): RTCEncodedVideoFrameMetadata;
}
declare var RTCEncodedVideoFrame: {
    prototype: RTCEncodedVideoFrame;
    new (): RTCEncodedVideoFrame;
};
interface RTCError extends DOMException {
    readonly errorDetail: RTCErrorDetailType;
    readonly receivedAlert: number | null;
    readonly sctpCauseCode: number | null;
    readonly sdpLineNumber: number | null;
    readonly sentAlert: number | null;
}
declare var RTCError: {
    prototype: RTCError;
    new (init: RTCErrorInit, message?: string): RTCError;
};
interface RTCErrorEvent extends Event {
    readonly error: RTCError;
}
declare var RTCErrorEvent: {
    prototype: RTCErrorEvent;
    new (type: string, eventInitDict: RTCErrorEventInit): RTCErrorEvent;
};
interface RTCIceCandidate {
    readonly address: string | null;
    readonly candidate: string;
    readonly component: RTCIceComponent | null;
    readonly foundation: string | null;
    readonly port: number | null;
    readonly priority: number | null;
    readonly protocol: RTCIceProtocol | null;
    readonly relatedAddress: string | null;
    readonly relatedPort: number | null;
    readonly sdpMLineIndex: number | null;
    readonly sdpMid: string | null;
    readonly tcpType: RTCIceTcpCandidateType | null;
    readonly type: RTCIceCandidateType | null;
    readonly usernameFragment: string | null;
    toJSON(): RTCIceCandidateInit;
}
declare var RTCIceCandidate: {
    prototype: RTCIceCandidate;
    new (candidateInitDict?: RTCIceCandidateInit): RTCIceCandidate;
};
interface RTCIceTransportEventMap {
    "gatheringstatechange": Event;
    "statechange": Event;
}
interface RTCIceTransport extends EventTarget {
    readonly gatheringState: RTCIceGathererState;
    ongatheringstatechange: ((this: RTCIceTransport, ev: Event) => any) | null;
    onstatechange: ((this: RTCIceTransport, ev: Event) => any) | null;
    readonly state: RTCIceTransportState;
    addEventListener<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var RTCIceTransport: {
    prototype: RTCIceTransport;
    new (): RTCIceTransport;
};
interface RTCPeerConnectionEventMap {
    "connectionstatechange": Event;
    "datachannel": RTCDataChannelEvent;
    "icecandidate": RTCPeerConnectionIceEvent;
    "icecandidateerror": Event;
    "iceconnectionstatechange": Event;
    "icegatheringstatechange": Event;
    "negotiationneeded": Event;
    "signalingstatechange": Event;
    "track": RTCTrackEvent;
}
interface RTCPeerConnection extends EventTarget {
    readonly canTrickleIceCandidates: boolean | null;
    readonly connectionState: RTCPeerConnectionState;
    readonly currentLocalDescription: RTCSessionDescription | null;
    readonly currentRemoteDescription: RTCSessionDescription | null;
    readonly iceConnectionState: RTCIceConnectionState;
    readonly iceGatheringState: RTCIceGatheringState;
    readonly localDescription: RTCSessionDescription | null;
    onconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    ondatachannel: ((this: RTCPeerConnection, ev: RTCDataChannelEvent) => any) | null;
    onicecandidate: ((this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => any) | null;
    onicecandidateerror: ((this: RTCPeerConnection, ev: Event) => any) | null;
    oniceconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onicegatheringstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onnegotiationneeded: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onsignalingstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    ontrack: ((this: RTCPeerConnection, ev: RTCTrackEvent) => any) | null;
    readonly pendingLocalDescription: RTCSessionDescription | null;
    readonly pendingRemoteDescription: RTCSessionDescription | null;
    readonly remoteDescription: RTCSessionDescription | null;
    readonly sctp: RTCSctpTransport | null;
    readonly signalingState: RTCSignalingState;
    addIceCandidate(candidate?: RTCIceCandidateInit): Promise<void>;
    addIceCandidate(candidate: RTCIceCandidateInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    addTrack(track: MediaStreamTrack, ...streams: MediaStream[]): RTCRtpSender;
    addTransceiver(trackOrKind: MediaStreamTrack | string, init?: RTCRtpTransceiverInit): RTCRtpTransceiver;
    close(): void;
    createAnswer(options?: RTCAnswerOptions): Promise<RTCSessionDescriptionInit>;
    createAnswer(successCallback: RTCSessionDescriptionCallback, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    createDataChannel(label: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
    createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    createOffer(successCallback: RTCSessionDescriptionCallback, failureCallback: RTCPeerConnectionErrorCallback, options?: RTCOfferOptions): Promise<void>;
    getConfiguration(): RTCConfiguration;
    getReceivers(): RTCRtpReceiver[];
    getSenders(): RTCRtpSender[];
    getStats(selector?: MediaStreamTrack | null): Promise<RTCStatsReport>;
    getTransceivers(): RTCRtpTransceiver[];
    removeTrack(sender: RTCRtpSender): void;
    restartIce(): void;
    setConfiguration(configuration?: RTCConfiguration): void;
    setLocalDescription(description?: RTCLocalSessionDescriptionInit): Promise<void>;
    setLocalDescription(description: RTCLocalSessionDescriptionInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    addEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var RTCPeerConnection: {
    prototype: RTCPeerConnection;
    new (configuration?: RTCConfiguration): RTCPeerConnection;
    generateCertificate(keygenAlgorithm: AlgorithmIdentifier): Promise<RTCCertificate>;
};
interface RTCPeerConnectionIceErrorEvent extends Event {
    readonly address: string | null;
    readonly errorCode: number;
    readonly errorText: string;
    readonly port: number | null;
    readonly url: string;
}
declare var RTCPeerConnectionIceErrorEvent: {
    prototype: RTCPeerConnectionIceErrorEvent;
    new (type: string, eventInitDict: RTCPeerConnectionIceErrorEventInit): RTCPeerConnectionIceErrorEvent;
};
interface RTCPeerConnectionIceEvent extends Event {
    readonly candidate: RTCIceCandidate | null;
}
declare var RTCPeerConnectionIceEvent: {
    prototype: RTCPeerConnectionIceEvent;
    new (type: string, eventInitDict?: RTCPeerConnectionIceEventInit): RTCPeerConnectionIceEvent;
};
interface RTCRtpReceiver {
    readonly track: MediaStreamTrack;
    readonly transport: RTCDtlsTransport | null;
    getContributingSources(): RTCRtpContributingSource[];
    getParameters(): RTCRtpReceiveParameters;
    getStats(): Promise<RTCStatsReport>;
    getSynchronizationSources(): RTCRtpSynchronizationSource[];
}
declare var RTCRtpReceiver: {
    prototype: RTCRtpReceiver;
    new (): RTCRtpReceiver;
    getCapabilities(kind: string): RTCRtpCapabilities | null;
};
interface RTCRtpSender {
    readonly dtmf: RTCDTMFSender | null;
    readonly track: MediaStreamTrack | null;
    readonly transport: RTCDtlsTransport | null;
    getParameters(): RTCRtpSendParameters;
    getStats(): Promise<RTCStatsReport>;
    replaceTrack(withTrack: MediaStreamTrack | null): Promise<void>;
    setParameters(parameters: RTCRtpSendParameters): Promise<void>;
    setStreams(...streams: MediaStream[]): void;
}
declare var RTCRtpSender: {
    prototype: RTCRtpSender;
    new (): RTCRtpSender;
    getCapabilities(kind: string): RTCRtpCapabilities | null;
};
interface RTCRtpTransceiver {
    readonly currentDirection: RTCRtpTransceiverDirection | null;
    direction: RTCRtpTransceiverDirection;
    readonly mid: string | null;
    readonly receiver: RTCRtpReceiver;
    readonly sender: RTCRtpSender;
    setCodecPreferences(codecs: RTCRtpCodecCapability[]): void;
    stop(): void;
}
declare var RTCRtpTransceiver: {
    prototype: RTCRtpTransceiver;
    new (): RTCRtpTransceiver;
};
interface RTCSctpTransportEventMap {
    "statechange": Event;
}
interface RTCSctpTransport extends EventTarget {
    readonly maxChannels: number | null;
    readonly maxMessageSize: number;
    onstatechange: ((this: RTCSctpTransport, ev: Event) => any) | null;
    readonly state: RTCSctpTransportState;
    readonly transport: RTCDtlsTransport;
    addEventListener<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var RTCSctpTransport: {
    prototype: RTCSctpTransport;
    new (): RTCSctpTransport;
};
interface RTCSessionDescription {
    readonly sdp: string;
    readonly type: RTCSdpType;
    toJSON(): any;
}
declare var RTCSessionDescription: {
    prototype: RTCSessionDescription;
    new (descriptionInitDict: RTCSessionDescriptionInit): RTCSessionDescription;
};
interface RTCStatsReport {
    forEach(callbackfn: (value: any, key: string, parent: RTCStatsReport) => void, thisArg?: any): void;
}
declare var RTCStatsReport: {
    prototype: RTCStatsReport;
    new (): RTCStatsReport;
};
interface RTCTrackEvent extends Event {
    readonly receiver: RTCRtpReceiver;
    readonly streams: ReadonlyArray<MediaStream>;
    readonly track: MediaStreamTrack;
    readonly transceiver: RTCRtpTransceiver;
}
declare var RTCTrackEvent: {
    prototype: RTCTrackEvent;
    new (type: string, eventInitDict: RTCTrackEventInit): RTCTrackEvent;
};
interface RadioNodeList extends NodeList {
    value: string;
}
declare var RadioNodeList: {
    prototype: RadioNodeList;
    new (): RadioNodeList;
};
interface Range extends AbstractRange {
    readonly commonAncestorContainer: Node;
    cloneContents(): DocumentFragment;
    cloneRange(): Range;
    collapse(toStart?: boolean): void;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    comparePoint(node: Node, offset: number): number;
    createContextualFragment(fragment: string): DocumentFragment;
    deleteContents(): void;
    detach(): void;
    extractContents(): DocumentFragment;
    getBoundingClientRect(): DOMRect;
    getClientRects(): DOMRectList;
    insertNode(node: Node): void;
    intersectsNode(node: Node): boolean;
    isPointInRange(node: Node, offset: number): boolean;
    selectNode(node: Node): void;
    selectNodeContents(node: Node): void;
    setEnd(node: Node, offset: number): void;
    setEndAfter(node: Node): void;
    setEndBefore(node: Node): void;
    setStart(node: Node, offset: number): void;
    setStartAfter(node: Node): void;
    setStartBefore(node: Node): void;
    surroundContents(newParent: Node): void;
    toString(): string;
    readonly START_TO_START: 0;
    readonly START_TO_END: 1;
    readonly END_TO_END: 2;
    readonly END_TO_START: 3;
}
declare var Range: {
    prototype: Range;
    new (): Range;
    readonly START_TO_START: 0;
    readonly START_TO_END: 1;
    readonly END_TO_END: 2;
    readonly END_TO_START: 3;
    toString(): string;
};
interface ReadableByteStreamController {
    readonly byobRequest: ReadableStreamBYOBRequest | null;
    readonly desiredSize: number | null;
    close(): void;
    enqueue(chunk: ArrayBufferView): void;
    error(e?: any): void;
}
declare var ReadableByteStreamController: {
    prototype: ReadableByteStreamController;
    new (): ReadableByteStreamController;
};
interface ReadableStream<R = any> {
    readonly locked: boolean;
    cancel(reason?: any): Promise<void>;
    getReader(options: {
        mode: "byob";
    }): ReadableStreamBYOBReader;
    getReader(): ReadableStreamDefaultReader<R>;
    getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamReader<R>;
    pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
    pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
    tee(): [ReadableStream<R>, ReadableStream<R>];
}
declare var ReadableStream: {
    prototype: ReadableStream;
    new (underlyingSource: UnderlyingByteSource, strategy?: {
        highWaterMark?: number;
    }): ReadableStream<Uint8Array>;
    new <R = any>(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
    new <R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
};
interface ReadableStreamBYOBReader extends ReadableStreamGenericReader {
    read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
    releaseLock(): void;
}
declare var ReadableStreamBYOBReader: {
    prototype: ReadableStreamBYOBReader;
    new (stream: ReadableStream): ReadableStreamBYOBReader;
};
interface ReadableStreamBYOBRequest {
    readonly view: ArrayBufferView | null;
    respond(bytesWritten: number): void;
    respondWithNewView(view: ArrayBufferView): void;
}
declare var ReadableStreamBYOBRequest: {
    prototype: ReadableStreamBYOBRequest;
    new (): ReadableStreamBYOBRequest;
};
interface ReadableStreamDefaultController<R = any> {
    readonly desiredSize: number | null;
    close(): void;
    enqueue(chunk?: R): void;
    error(e?: any): void;
}
declare var ReadableStreamDefaultController: {
    prototype: ReadableStreamDefaultController;
    new (): ReadableStreamDefaultController;
};
interface ReadableStreamDefaultReader<R = any> extends ReadableStreamGenericReader {
    read(): Promise<ReadableStreamReadResult<R>>;
    releaseLock(): void;
}
declare var ReadableStreamDefaultReader: {
    prototype: ReadableStreamDefaultReader;
    new <R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
};
interface ReadableStreamGenericReader {
    readonly closed: Promise<undefined>;
    cancel(reason?: any): Promise<void>;
}
interface RemotePlaybackEventMap {
    "connect": Event;
    "connecting": Event;
    "disconnect": Event;
}
interface RemotePlayback extends EventTarget {
    onconnect: ((this: RemotePlayback, ev: Event) => any) | null;
    onconnecting: ((this: RemotePlayback, ev: Event) => any) | null;
    ondisconnect: ((this: RemotePlayback, ev: Event) => any) | null;
    readonly state: RemotePlaybackState;
    cancelWatchAvailability(id?: number): Promise<void>;
    prompt(): Promise<void>;
    watchAvailability(callback: RemotePlaybackAvailabilityCallback): Promise<number>;
    addEventListener<K extends keyof RemotePlaybackEventMap>(type: K, listener: (this: RemotePlayback, ev: RemotePlaybackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RemotePlaybackEventMap>(type: K, listener: (this: RemotePlayback, ev: RemotePlaybackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var RemotePlayback: {
    prototype: RemotePlayback;
    new (): RemotePlayback;
};
interface Request extends Body {
    readonly cache: RequestCache;
    readonly credentials: RequestCredentials;
    readonly destination: RequestDestination;
    readonly headers: Headers;
    readonly integrity: string;
    readonly keepalive: boolean;
    readonly method: string;
    readonly mode: RequestMode;
    readonly redirect: RequestRedirect;
    readonly referrer: string;
    readonly referrerPolicy: ReferrerPolicy;
    readonly signal: AbortSignal;
    readonly url: string;
    clone(): Request;
}
declare var Request: {
    prototype: Request;
    new (input: RequestInfo | URL, init?: RequestInit): Request;
};
interface ResizeObserver {
    disconnect(): void;
    observe(target: Element, options?: ResizeObserverOptions): void;
    unobserve(target: Element): void;
}
declare var ResizeObserver: {
    prototype: ResizeObserver;
    new (callback: ResizeObserverCallback): ResizeObserver;
};
interface ResizeObserverEntry {
    readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>;
    readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>;
    readonly contentRect: DOMRectReadOnly;
    readonly devicePixelContentBoxSize: ReadonlyArray<ResizeObserverSize>;
    readonly target: Element;
}
declare var ResizeObserverEntry: {
    prototype: ResizeObserverEntry;
    new (): ResizeObserverEntry;
};
interface ResizeObserverSize {
    readonly blockSize: number;
    readonly inlineSize: number;
}
declare var ResizeObserverSize: {
    prototype: ResizeObserverSize;
    new (): ResizeObserverSize;
};
interface Response extends Body {
    readonly headers: Headers;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly type: ResponseType;
    readonly url: string;
    clone(): Response;
}
declare var Response: {
    prototype: Response;
    new (body?: BodyInit | null, init?: ResponseInit): Response;
    error(): Response;
    redirect(url: string | URL, status?: number): Response;
};
interface SVGAElement extends SVGGraphicsElement, SVGURIReference {
    rel: string;
    readonly relList: DOMTokenList;
    readonly target: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGAElement: {
    prototype: SVGAElement;
    new (): SVGAElement;
};
interface SVGAngle {
    readonly unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    readonly SVG_ANGLETYPE_UNKNOWN: 0;
    readonly SVG_ANGLETYPE_UNSPECIFIED: 1;
    readonly SVG_ANGLETYPE_DEG: 2;
    readonly SVG_ANGLETYPE_RAD: 3;
    readonly SVG_ANGLETYPE_GRAD: 4;
}
declare var SVGAngle: {
    prototype: SVGAngle;
    new (): SVGAngle;
    readonly SVG_ANGLETYPE_UNKNOWN: 0;
    readonly SVG_ANGLETYPE_UNSPECIFIED: 1;
    readonly SVG_ANGLETYPE_DEG: 2;
    readonly SVG_ANGLETYPE_RAD: 3;
    readonly SVG_ANGLETYPE_GRAD: 4;
};
interface SVGAnimateElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGAnimateElement: {
    prototype: SVGAnimateElement;
    new (): SVGAnimateElement;
};
interface SVGAnimateMotionElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateMotionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateMotionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGAnimateMotionElement: {
    prototype: SVGAnimateMotionElement;
    new (): SVGAnimateMotionElement;
};
interface SVGAnimateTransformElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateTransformElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateTransformElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGAnimateTransformElement: {
    prototype: SVGAnimateTransformElement;
    new (): SVGAnimateTransformElement;
};
interface SVGAnimatedAngle {
    readonly animVal: SVGAngle;
    readonly baseVal: SVGAngle;
}
declare var SVGAnimatedAngle: {
    prototype: SVGAnimatedAngle;
    new (): SVGAnimatedAngle;
};
interface SVGAnimatedBoolean {
    readonly animVal: boolean;
    baseVal: boolean;
}
declare var SVGAnimatedBoolean: {
    prototype: SVGAnimatedBoolean;
    new (): SVGAnimatedBoolean;
};
interface SVGAnimatedEnumeration {
    readonly animVal: number;
    baseVal: number;
}
declare var SVGAnimatedEnumeration: {
    prototype: SVGAnimatedEnumeration;
    new (): SVGAnimatedEnumeration;
};
interface SVGAnimatedInteger {
    readonly animVal: number;
    baseVal: number;
}
declare var SVGAnimatedInteger: {
    prototype: SVGAnimatedInteger;
    new (): SVGAnimatedInteger;
};
interface SVGAnimatedLength {
    readonly animVal: SVGLength;
    readonly baseVal: SVGLength;
}
declare var SVGAnimatedLength: {
    prototype: SVGAnimatedLength;
    new (): SVGAnimatedLength;
};
interface SVGAnimatedLengthList {
    readonly animVal: SVGLengthList;
    readonly baseVal: SVGLengthList;
}
declare var SVGAnimatedLengthList: {
    prototype: SVGAnimatedLengthList;
    new (): SVGAnimatedLengthList;
};
interface SVGAnimatedNumber {
    readonly animVal: number;
    baseVal: number;
}
declare var SVGAnimatedNumber: {
    prototype: SVGAnimatedNumber;
    new (): SVGAnimatedNumber;
};
interface SVGAnimatedNumberList {
    readonly animVal: SVGNumberList;
    readonly baseVal: SVGNumberList;
}
declare var SVGAnimatedNumberList: {
    prototype: SVGAnimatedNumberList;
    new (): SVGAnimatedNumberList;
};
interface SVGAnimatedPoints {
    readonly animatedPoints: SVGPointList;
    readonly points: SVGPointList;
}
interface SVGAnimatedPreserveAspectRatio {
    readonly animVal: SVGPreserveAspectRatio;
    readonly baseVal: SVGPreserveAspectRatio;
}
declare var SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    new (): SVGAnimatedPreserveAspectRatio;
};
interface SVGAnimatedRect {
    readonly animVal: DOMRectReadOnly;
    readonly baseVal: DOMRect;
}
declare var SVGAnimatedRect: {
    prototype: SVGAnimatedRect;
    new (): SVGAnimatedRect;
};
interface SVGAnimatedString {
    readonly animVal: string;
    baseVal: string;
}
declare var SVGAnimatedString: {
    prototype: SVGAnimatedString;
    new (): SVGAnimatedString;
};
interface SVGAnimatedTransformList {
    readonly animVal: SVGTransformList;
    readonly baseVal: SVGTransformList;
}
declare var SVGAnimatedTransformList: {
    prototype: SVGAnimatedTransformList;
    new (): SVGAnimatedTransformList;
};
interface SVGAnimationElement extends SVGElement, SVGTests {
    readonly targetElement: SVGElement | null;
    beginElement(): void;
    beginElementAt(offset: number): void;
    endElement(): void;
    endElementAt(offset: number): void;
    getCurrentTime(): number;
    getSimpleDuration(): number;
    getStartTime(): number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimationElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimationElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGAnimationElement: {
    prototype: SVGAnimationElement;
    new (): SVGAnimationElement;
};
interface SVGCircleElement extends SVGGeometryElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly r: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGCircleElement: {
    prototype: SVGCircleElement;
    new (): SVGCircleElement;
};
interface SVGClipPathElement extends SVGElement {
    readonly clipPathUnits: SVGAnimatedEnumeration;
    readonly transform: SVGAnimatedTransformList;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGClipPathElement: {
    prototype: SVGClipPathElement;
    new (): SVGClipPathElement;
};
interface SVGComponentTransferFunctionElement extends SVGElement {
    readonly amplitude: SVGAnimatedNumber;
    readonly exponent: SVGAnimatedNumber;
    readonly intercept: SVGAnimatedNumber;
    readonly offset: SVGAnimatedNumber;
    readonly slope: SVGAnimatedNumber;
    readonly tableValues: SVGAnimatedNumberList;
    readonly type: SVGAnimatedEnumeration;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: 0;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: 1;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: 2;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: 3;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: 4;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: 5;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGComponentTransferFunctionElement: {
    prototype: SVGComponentTransferFunctionElement;
    new (): SVGComponentTransferFunctionElement;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: 0;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: 1;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: 2;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: 3;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: 4;
    readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: 5;
};
interface SVGDefsElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGDefsElement: {
    prototype: SVGDefsElement;
    new (): SVGDefsElement;
};
interface SVGDescElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGDescElement: {
    prototype: SVGDescElement;
    new (): SVGDescElement;
};
interface SVGElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap {
}
interface SVGElement extends Element, ElementCSSInlineStyle, GlobalEventHandlers, HTMLOrSVGElement {
    readonly className: any;
    readonly ownerSVGElement: SVGSVGElement | null;
    readonly viewportElement: SVGElement | null;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGElement: {
    prototype: SVGElement;
    new (): SVGElement;
};
interface SVGEllipseElement extends SVGGeometryElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly rx: SVGAnimatedLength;
    readonly ry: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGEllipseElement: {
    prototype: SVGEllipseElement;
    new (): SVGEllipseElement;
};
interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly mode: SVGAnimatedEnumeration;
    readonly SVG_FEBLEND_MODE_UNKNOWN: 0;
    readonly SVG_FEBLEND_MODE_NORMAL: 1;
    readonly SVG_FEBLEND_MODE_MULTIPLY: 2;
    readonly SVG_FEBLEND_MODE_SCREEN: 3;
    readonly SVG_FEBLEND_MODE_DARKEN: 4;
    readonly SVG_FEBLEND_MODE_LIGHTEN: 5;
    readonly SVG_FEBLEND_MODE_OVERLAY: 6;
    readonly SVG_FEBLEND_MODE_COLOR_DODGE: 7;
    readonly SVG_FEBLEND_MODE_COLOR_BURN: 8;
    readonly SVG_FEBLEND_MODE_HARD_LIGHT: 9;
    readonly SVG_FEBLEND_MODE_SOFT_LIGHT: 10;
    readonly SVG_FEBLEND_MODE_DIFFERENCE: 11;
    readonly SVG_FEBLEND_MODE_EXCLUSION: 12;
    readonly SVG_FEBLEND_MODE_HUE: 13;
    readonly SVG_FEBLEND_MODE_SATURATION: 14;
    readonly SVG_FEBLEND_MODE_COLOR: 15;
    readonly SVG_FEBLEND_MODE_LUMINOSITY: 16;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEBlendElement: {
    prototype: SVGFEBlendElement;
    new (): SVGFEBlendElement;
    readonly SVG_FEBLEND_MODE_UNKNOWN: 0;
    readonly SVG_FEBLEND_MODE_NORMAL: 1;
    readonly SVG_FEBLEND_MODE_MULTIPLY: 2;
    readonly SVG_FEBLEND_MODE_SCREEN: 3;
    readonly SVG_FEBLEND_MODE_DARKEN: 4;
    readonly SVG_FEBLEND_MODE_LIGHTEN: 5;
    readonly SVG_FEBLEND_MODE_OVERLAY: 6;
    readonly SVG_FEBLEND_MODE_COLOR_DODGE: 7;
    readonly SVG_FEBLEND_MODE_COLOR_BURN: 8;
    readonly SVG_FEBLEND_MODE_HARD_LIGHT: 9;
    readonly SVG_FEBLEND_MODE_SOFT_LIGHT: 10;
    readonly SVG_FEBLEND_MODE_DIFFERENCE: 11;
    readonly SVG_FEBLEND_MODE_EXCLUSION: 12;
    readonly SVG_FEBLEND_MODE_HUE: 13;
    readonly SVG_FEBLEND_MODE_SATURATION: 14;
    readonly SVG_FEBLEND_MODE_COLOR: 15;
    readonly SVG_FEBLEND_MODE_LUMINOSITY: 16;
};
interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly type: SVGAnimatedEnumeration;
    readonly values: SVGAnimatedNumberList;
    readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: 0;
    readonly SVG_FECOLORMATRIX_TYPE_MATRIX: 1;
    readonly SVG_FECOLORMATRIX_TYPE_SATURATE: 2;
    readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: 3;
    readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: 4;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEColorMatrixElement: {
    prototype: SVGFEColorMatrixElement;
    new (): SVGFEColorMatrixElement;
    readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: 0;
    readonly SVG_FECOLORMATRIX_TYPE_MATRIX: 1;
    readonly SVG_FECOLORMATRIX_TYPE_SATURATE: 2;
    readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: 3;
    readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: 4;
};
interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEComponentTransferElement: {
    prototype: SVGFEComponentTransferElement;
    new (): SVGFEComponentTransferElement;
};
interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly k1: SVGAnimatedNumber;
    readonly k2: SVGAnimatedNumber;
    readonly k3: SVGAnimatedNumber;
    readonly k4: SVGAnimatedNumber;
    readonly operator: SVGAnimatedEnumeration;
    readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: 0;
    readonly SVG_FECOMPOSITE_OPERATOR_OVER: 1;
    readonly SVG_FECOMPOSITE_OPERATOR_IN: 2;
    readonly SVG_FECOMPOSITE_OPERATOR_OUT: 3;
    readonly SVG_FECOMPOSITE_OPERATOR_ATOP: 4;
    readonly SVG_FECOMPOSITE_OPERATOR_XOR: 5;
    readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: 6;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFECompositeElement: {
    prototype: SVGFECompositeElement;
    new (): SVGFECompositeElement;
    readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: 0;
    readonly SVG_FECOMPOSITE_OPERATOR_OVER: 1;
    readonly SVG_FECOMPOSITE_OPERATOR_IN: 2;
    readonly SVG_FECOMPOSITE_OPERATOR_OUT: 3;
    readonly SVG_FECOMPOSITE_OPERATOR_ATOP: 4;
    readonly SVG_FECOMPOSITE_OPERATOR_XOR: 5;
    readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: 6;
};
interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly bias: SVGAnimatedNumber;
    readonly divisor: SVGAnimatedNumber;
    readonly edgeMode: SVGAnimatedEnumeration;
    readonly in1: SVGAnimatedString;
    readonly kernelMatrix: SVGAnimatedNumberList;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly orderX: SVGAnimatedInteger;
    readonly orderY: SVGAnimatedInteger;
    readonly preserveAlpha: SVGAnimatedBoolean;
    readonly targetX: SVGAnimatedInteger;
    readonly targetY: SVGAnimatedInteger;
    readonly SVG_EDGEMODE_UNKNOWN: 0;
    readonly SVG_EDGEMODE_DUPLICATE: 1;
    readonly SVG_EDGEMODE_WRAP: 2;
    readonly SVG_EDGEMODE_NONE: 3;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEConvolveMatrixElement: {
    prototype: SVGFEConvolveMatrixElement;
    new (): SVGFEConvolveMatrixElement;
    readonly SVG_EDGEMODE_UNKNOWN: 0;
    readonly SVG_EDGEMODE_DUPLICATE: 1;
    readonly SVG_EDGEMODE_WRAP: 2;
    readonly SVG_EDGEMODE_NONE: 3;
};
interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly diffuseConstant: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly surfaceScale: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEDiffuseLightingElement: {
    prototype: SVGFEDiffuseLightingElement;
    new (): SVGFEDiffuseLightingElement;
};
interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly in2: SVGAnimatedString;
    readonly scale: SVGAnimatedNumber;
    readonly xChannelSelector: SVGAnimatedEnumeration;
    readonly yChannelSelector: SVGAnimatedEnumeration;
    readonly SVG_CHANNEL_UNKNOWN: 0;
    readonly SVG_CHANNEL_R: 1;
    readonly SVG_CHANNEL_G: 2;
    readonly SVG_CHANNEL_B: 3;
    readonly SVG_CHANNEL_A: 4;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEDisplacementMapElement: {
    prototype: SVGFEDisplacementMapElement;
    new (): SVGFEDisplacementMapElement;
    readonly SVG_CHANNEL_UNKNOWN: 0;
    readonly SVG_CHANNEL_R: 1;
    readonly SVG_CHANNEL_G: 2;
    readonly SVG_CHANNEL_B: 3;
    readonly SVG_CHANNEL_A: 4;
};
interface SVGFEDistantLightElement extends SVGElement {
    readonly azimuth: SVGAnimatedNumber;
    readonly elevation: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEDistantLightElement: {
    prototype: SVGFEDistantLightElement;
    new (): SVGFEDistantLightElement;
};
interface SVGFEDropShadowElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly dx: SVGAnimatedNumber;
    readonly dy: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    readonly stdDeviationX: SVGAnimatedNumber;
    readonly stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDropShadowElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDropShadowElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEDropShadowElement: {
    prototype: SVGFEDropShadowElement;
    new (): SVGFEDropShadowElement;
};
interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEFloodElement: {
    prototype: SVGFEFloodElement;
    new (): SVGFEFloodElement;
};
interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEFuncAElement: {
    prototype: SVGFEFuncAElement;
    new (): SVGFEFuncAElement;
};
interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEFuncBElement: {
    prototype: SVGFEFuncBElement;
    new (): SVGFEFuncBElement;
};
interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEFuncGElement: {
    prototype: SVGFEFuncGElement;
    new (): SVGFEFuncGElement;
};
interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEFuncRElement: {
    prototype: SVGFEFuncRElement;
    new (): SVGFEFuncRElement;
};
interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly stdDeviationX: SVGAnimatedNumber;
    readonly stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEGaussianBlurElement: {
    prototype: SVGFEGaussianBlurElement;
    new (): SVGFEGaussianBlurElement;
};
interface SVGFEImageElement extends SVGElement, SVGFilterPrimitiveStandardAttributes, SVGURIReference {
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEImageElement: {
    prototype: SVGFEImageElement;
    new (): SVGFEImageElement;
};
interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEMergeElement: {
    prototype: SVGFEMergeElement;
    new (): SVGFEMergeElement;
};
interface SVGFEMergeNodeElement extends SVGElement {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEMergeNodeElement: {
    prototype: SVGFEMergeNodeElement;
    new (): SVGFEMergeNodeElement;
};
interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly operator: SVGAnimatedEnumeration;
    readonly radiusX: SVGAnimatedNumber;
    readonly radiusY: SVGAnimatedNumber;
    readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: 0;
    readonly SVG_MORPHOLOGY_OPERATOR_ERODE: 1;
    readonly SVG_MORPHOLOGY_OPERATOR_DILATE: 2;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEMorphologyElement: {
    prototype: SVGFEMorphologyElement;
    new (): SVGFEMorphologyElement;
    readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: 0;
    readonly SVG_MORPHOLOGY_OPERATOR_ERODE: 1;
    readonly SVG_MORPHOLOGY_OPERATOR_DILATE: 2;
};
interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly dx: SVGAnimatedNumber;
    readonly dy: SVGAnimatedNumber;
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEOffsetElement: {
    prototype: SVGFEOffsetElement;
    new (): SVGFEOffsetElement;
};
interface SVGFEPointLightElement extends SVGElement {
    readonly x: SVGAnimatedNumber;
    readonly y: SVGAnimatedNumber;
    readonly z: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFEPointLightElement: {
    prototype: SVGFEPointLightElement;
    new (): SVGFEPointLightElement;
};
interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    readonly kernelUnitLengthX: SVGAnimatedNumber;
    readonly kernelUnitLengthY: SVGAnimatedNumber;
    readonly specularConstant: SVGAnimatedNumber;
    readonly specularExponent: SVGAnimatedNumber;
    readonly surfaceScale: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFESpecularLightingElement: {
    prototype: SVGFESpecularLightingElement;
    new (): SVGFESpecularLightingElement;
};
interface SVGFESpotLightElement extends SVGElement {
    readonly limitingConeAngle: SVGAnimatedNumber;
    readonly pointsAtX: SVGAnimatedNumber;
    readonly pointsAtY: SVGAnimatedNumber;
    readonly pointsAtZ: SVGAnimatedNumber;
    readonly specularExponent: SVGAnimatedNumber;
    readonly x: SVGAnimatedNumber;
    readonly y: SVGAnimatedNumber;
    readonly z: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFESpotLightElement: {
    prototype: SVGFESpotLightElement;
    new (): SVGFESpotLightElement;
};
interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFETileElement: {
    prototype: SVGFETileElement;
    new (): SVGFETileElement;
};
interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    readonly baseFrequencyX: SVGAnimatedNumber;
    readonly baseFrequencyY: SVGAnimatedNumber;
    readonly numOctaves: SVGAnimatedInteger;
    readonly seed: SVGAnimatedNumber;
    readonly stitchTiles: SVGAnimatedEnumeration;
    readonly type: SVGAnimatedEnumeration;
    readonly SVG_TURBULENCE_TYPE_UNKNOWN: 0;
    readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: 1;
    readonly SVG_TURBULENCE_TYPE_TURBULENCE: 2;
    readonly SVG_STITCHTYPE_UNKNOWN: 0;
    readonly SVG_STITCHTYPE_STITCH: 1;
    readonly SVG_STITCHTYPE_NOSTITCH: 2;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFETurbulenceElement: {
    prototype: SVGFETurbulenceElement;
    new (): SVGFETurbulenceElement;
    readonly SVG_TURBULENCE_TYPE_UNKNOWN: 0;
    readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: 1;
    readonly SVG_TURBULENCE_TYPE_TURBULENCE: 2;
    readonly SVG_STITCHTYPE_UNKNOWN: 0;
    readonly SVG_STITCHTYPE_STITCH: 1;
    readonly SVG_STITCHTYPE_NOSTITCH: 2;
};
interface SVGFilterElement extends SVGElement, SVGURIReference {
    readonly filterUnits: SVGAnimatedEnumeration;
    readonly height: SVGAnimatedLength;
    readonly primitiveUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGFilterElement: {
    prototype: SVGFilterElement;
    new (): SVGFilterElement;
};
interface SVGFilterPrimitiveStandardAttributes {
    readonly height: SVGAnimatedLength;
    readonly result: SVGAnimatedString;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
}
interface SVGFitToViewBox {
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    readonly viewBox: SVGAnimatedRect;
}
interface SVGForeignObjectElement extends SVGGraphicsElement {
    readonly height: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGForeignObjectElement: {
    prototype: SVGForeignObjectElement;
    new (): SVGForeignObjectElement;
};
interface SVGGElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGGElement: {
    prototype: SVGGElement;
    new (): SVGGElement;
};
interface SVGGeometryElement extends SVGGraphicsElement {
    readonly pathLength: SVGAnimatedNumber;
    getPointAtLength(distance: number): DOMPoint;
    getTotalLength(): number;
    isPointInFill(point?: DOMPointInit): boolean;
    isPointInStroke(point?: DOMPointInit): boolean;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGGeometryElement: {
    prototype: SVGGeometryElement;
    new (): SVGGeometryElement;
};
interface SVGGradientElement extends SVGElement, SVGURIReference {
    readonly gradientTransform: SVGAnimatedTransformList;
    readonly gradientUnits: SVGAnimatedEnumeration;
    readonly spreadMethod: SVGAnimatedEnumeration;
    readonly SVG_SPREADMETHOD_UNKNOWN: 0;
    readonly SVG_SPREADMETHOD_PAD: 1;
    readonly SVG_SPREADMETHOD_REFLECT: 2;
    readonly SVG_SPREADMETHOD_REPEAT: 3;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGGradientElement: {
    prototype: SVGGradientElement;
    new (): SVGGradientElement;
    readonly SVG_SPREADMETHOD_UNKNOWN: 0;
    readonly SVG_SPREADMETHOD_PAD: 1;
    readonly SVG_SPREADMETHOD_REFLECT: 2;
    readonly SVG_SPREADMETHOD_REPEAT: 3;
};
interface SVGGraphicsElement extends SVGElement, SVGTests {
    readonly transform: SVGAnimatedTransformList;
    getBBox(options?: SVGBoundingBoxOptions): DOMRect;
    getCTM(): DOMMatrix | null;
    getScreenCTM(): DOMMatrix | null;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGGraphicsElement: {
    prototype: SVGGraphicsElement;
    new (): SVGGraphicsElement;
};
interface SVGImageElement extends SVGGraphicsElement, SVGURIReference {
    readonly height: SVGAnimatedLength;
    readonly preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGImageElement: {
    prototype: SVGImageElement;
    new (): SVGImageElement;
};
interface SVGLength {
    readonly unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    readonly SVG_LENGTHTYPE_UNKNOWN: 0;
    readonly SVG_LENGTHTYPE_NUMBER: 1;
    readonly SVG_LENGTHTYPE_PERCENTAGE: 2;
    readonly SVG_LENGTHTYPE_EMS: 3;
    readonly SVG_LENGTHTYPE_EXS: 4;
    readonly SVG_LENGTHTYPE_PX: 5;
    readonly SVG_LENGTHTYPE_CM: 6;
    readonly SVG_LENGTHTYPE_MM: 7;
    readonly SVG_LENGTHTYPE_IN: 8;
    readonly SVG_LENGTHTYPE_PT: 9;
    readonly SVG_LENGTHTYPE_PC: 10;
}
declare var SVGLength: {
    prototype: SVGLength;
    new (): SVGLength;
    readonly SVG_LENGTHTYPE_UNKNOWN: 0;
    readonly SVG_LENGTHTYPE_NUMBER: 1;
    readonly SVG_LENGTHTYPE_PERCENTAGE: 2;
    readonly SVG_LENGTHTYPE_EMS: 3;
    readonly SVG_LENGTHTYPE_EXS: 4;
    readonly SVG_LENGTHTYPE_PX: 5;
    readonly SVG_LENGTHTYPE_CM: 6;
    readonly SVG_LENGTHTYPE_MM: 7;
    readonly SVG_LENGTHTYPE_IN: 8;
    readonly SVG_LENGTHTYPE_PT: 9;
    readonly SVG_LENGTHTYPE_PC: 10;
};
interface SVGLengthList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGLength): SVGLength;
    clear(): void;
    getItem(index: number): SVGLength;
    initialize(newItem: SVGLength): SVGLength;
    insertItemBefore(newItem: SVGLength, index: number): SVGLength;
    removeItem(index: number): SVGLength;
    replaceItem(newItem: SVGLength, index: number): SVGLength;
    [index: number]: SVGLength;
}
declare var SVGLengthList: {
    prototype: SVGLengthList;
    new (): SVGLengthList;
};
interface SVGLineElement extends SVGGeometryElement {
    readonly x1: SVGAnimatedLength;
    readonly x2: SVGAnimatedLength;
    readonly y1: SVGAnimatedLength;
    readonly y2: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGLineElement: {
    prototype: SVGLineElement;
    new (): SVGLineElement;
};
interface SVGLinearGradientElement extends SVGGradientElement {
    readonly x1: SVGAnimatedLength;
    readonly x2: SVGAnimatedLength;
    readonly y1: SVGAnimatedLength;
    readonly y2: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGLinearGradientElement: {
    prototype: SVGLinearGradientElement;
    new (): SVGLinearGradientElement;
};
interface SVGMPathElement extends SVGElement, SVGURIReference {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGMPathElement: {
    prototype: SVGMPathElement;
    new (): SVGMPathElement;
};
interface SVGMarkerElement extends SVGElement, SVGFitToViewBox {
    readonly markerHeight: SVGAnimatedLength;
    readonly markerUnits: SVGAnimatedEnumeration;
    readonly markerWidth: SVGAnimatedLength;
    readonly orientAngle: SVGAnimatedAngle;
    readonly orientType: SVGAnimatedEnumeration;
    readonly refX: SVGAnimatedLength;
    readonly refY: SVGAnimatedLength;
    setOrientToAngle(angle: SVGAngle): void;
    setOrientToAuto(): void;
    readonly SVG_MARKERUNITS_UNKNOWN: 0;
    readonly SVG_MARKERUNITS_USERSPACEONUSE: 1;
    readonly SVG_MARKERUNITS_STROKEWIDTH: 2;
    readonly SVG_MARKER_ORIENT_UNKNOWN: 0;
    readonly SVG_MARKER_ORIENT_AUTO: 1;
    readonly SVG_MARKER_ORIENT_ANGLE: 2;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGMarkerElement: {
    prototype: SVGMarkerElement;
    new (): SVGMarkerElement;
    readonly SVG_MARKERUNITS_UNKNOWN: 0;
    readonly SVG_MARKERUNITS_USERSPACEONUSE: 1;
    readonly SVG_MARKERUNITS_STROKEWIDTH: 2;
    readonly SVG_MARKER_ORIENT_UNKNOWN: 0;
    readonly SVG_MARKER_ORIENT_AUTO: 1;
    readonly SVG_MARKER_ORIENT_ANGLE: 2;
};
interface SVGMaskElement extends SVGElement {
    readonly height: SVGAnimatedLength;
    readonly maskContentUnits: SVGAnimatedEnumeration;
    readonly maskUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGMaskElement: {
    prototype: SVGMaskElement;
    new (): SVGMaskElement;
};
interface SVGMetadataElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGMetadataElement: {
    prototype: SVGMetadataElement;
    new (): SVGMetadataElement;
};
interface SVGNumber {
    value: number;
}
declare var SVGNumber: {
    prototype: SVGNumber;
    new (): SVGNumber;
};
interface SVGNumberList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGNumber): SVGNumber;
    clear(): void;
    getItem(index: number): SVGNumber;
    initialize(newItem: SVGNumber): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
    removeItem(index: number): SVGNumber;
    replaceItem(newItem: SVGNumber, index: number): SVGNumber;
    [index: number]: SVGNumber;
}
declare var SVGNumberList: {
    prototype: SVGNumberList;
    new (): SVGNumberList;
};
interface SVGPathElement extends SVGGeometryElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGPathElement: {
    prototype: SVGPathElement;
    new (): SVGPathElement;
};
interface SVGPatternElement extends SVGElement, SVGFitToViewBox, SVGURIReference {
    readonly height: SVGAnimatedLength;
    readonly patternContentUnits: SVGAnimatedEnumeration;
    readonly patternTransform: SVGAnimatedTransformList;
    readonly patternUnits: SVGAnimatedEnumeration;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGPatternElement: {
    prototype: SVGPatternElement;
    new (): SVGPatternElement;
};
interface SVGPointList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: DOMPoint): DOMPoint;
    clear(): void;
    getItem(index: number): DOMPoint;
    initialize(newItem: DOMPoint): DOMPoint;
    insertItemBefore(newItem: DOMPoint, index: number): DOMPoint;
    removeItem(index: number): DOMPoint;
    replaceItem(newItem: DOMPoint, index: number): DOMPoint;
    [index: number]: DOMPoint;
}
declare var SVGPointList: {
    prototype: SVGPointList;
    new (): SVGPointList;
};
interface SVGPolygonElement extends SVGGeometryElement, SVGAnimatedPoints {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGPolygonElement: {
    prototype: SVGPolygonElement;
    new (): SVGPolygonElement;
};
interface SVGPolylineElement extends SVGGeometryElement, SVGAnimatedPoints {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGPolylineElement: {
    prototype: SVGPolylineElement;
    new (): SVGPolylineElement;
};
interface SVGPreserveAspectRatio {
    align: number;
    meetOrSlice: number;
    readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: 0;
    readonly SVG_PRESERVEASPECTRATIO_NONE: 1;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: 2;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: 3;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: 4;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMID: 5;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: 6;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: 7;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: 8;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: 9;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: 10;
    readonly SVG_MEETORSLICE_UNKNOWN: 0;
    readonly SVG_MEETORSLICE_MEET: 1;
    readonly SVG_MEETORSLICE_SLICE: 2;
}
declare var SVGPreserveAspectRatio: {
    prototype: SVGPreserveAspectRatio;
    new (): SVGPreserveAspectRatio;
    readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: 0;
    readonly SVG_PRESERVEASPECTRATIO_NONE: 1;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: 2;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: 3;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: 4;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMID: 5;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: 6;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: 7;
    readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: 8;
    readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: 9;
    readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: 10;
    readonly SVG_MEETORSLICE_UNKNOWN: 0;
    readonly SVG_MEETORSLICE_MEET: 1;
    readonly SVG_MEETORSLICE_SLICE: 2;
};
interface SVGRadialGradientElement extends SVGGradientElement {
    readonly cx: SVGAnimatedLength;
    readonly cy: SVGAnimatedLength;
    readonly fr: SVGAnimatedLength;
    readonly fx: SVGAnimatedLength;
    readonly fy: SVGAnimatedLength;
    readonly r: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGRadialGradientElement: {
    prototype: SVGRadialGradientElement;
    new (): SVGRadialGradientElement;
};
interface SVGRectElement extends SVGGeometryElement {
    readonly height: SVGAnimatedLength;
    readonly rx: SVGAnimatedLength;
    readonly ry: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGRectElement: {
    prototype: SVGRectElement;
    new (): SVGRectElement;
};
interface SVGSVGElementEventMap extends SVGElementEventMap, WindowEventHandlersEventMap {
}
interface SVGSVGElement extends SVGGraphicsElement, SVGFitToViewBox, WindowEventHandlers {
    currentScale: number;
    readonly currentTranslate: DOMPointReadOnly;
    readonly height: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    animationsPaused(): boolean;
    checkEnclosure(element: SVGElement, rect: DOMRectReadOnly): boolean;
    checkIntersection(element: SVGElement, rect: DOMRectReadOnly): boolean;
    createSVGAngle(): SVGAngle;
    createSVGLength(): SVGLength;
    createSVGMatrix(): DOMMatrix;
    createSVGNumber(): SVGNumber;
    createSVGPoint(): DOMPoint;
    createSVGRect(): DOMRect;
    createSVGTransform(): SVGTransform;
    createSVGTransformFromMatrix(matrix?: DOMMatrix2DInit): SVGTransform;
    deselectAll(): void;
    forceRedraw(): void;
    getCurrentTime(): number;
    getElementById(elementId: string): Element;
    getEnclosureList(rect: DOMRectReadOnly, referenceElement: SVGElement | null): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    getIntersectionList(rect: DOMRectReadOnly, referenceElement: SVGElement | null): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    pauseAnimations(): void;
    setCurrentTime(seconds: number): void;
    suspendRedraw(maxWaitMilliseconds: number): number;
    unpauseAnimations(): void;
    unsuspendRedraw(suspendHandleID: number): void;
    unsuspendRedrawAll(): void;
    addEventListener<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGSVGElement: {
    prototype: SVGSVGElement;
    new (): SVGSVGElement;
};
interface SVGScriptElement extends SVGElement, SVGURIReference {
    type: string;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGScriptElement: {
    prototype: SVGScriptElement;
    new (): SVGScriptElement;
};
interface SVGSetElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGSetElement: {
    prototype: SVGSetElement;
    new (): SVGSetElement;
};
interface SVGStopElement extends SVGElement {
    readonly offset: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGStopElement: {
    prototype: SVGStopElement;
    new (): SVGStopElement;
};
interface SVGStringList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: string): string;
    clear(): void;
    getItem(index: number): string;
    initialize(newItem: string): string;
    insertItemBefore(newItem: string, index: number): string;
    removeItem(index: number): string;
    replaceItem(newItem: string, index: number): string;
    [index: number]: string;
}
declare var SVGStringList: {
    prototype: SVGStringList;
    new (): SVGStringList;
};
interface SVGStyleElement extends SVGElement, LinkStyle {
    disabled: boolean;
    media: string;
    title: string;
    type: string;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGStyleElement: {
    prototype: SVGStyleElement;
    new (): SVGStyleElement;
};
interface SVGSwitchElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGSwitchElement: {
    prototype: SVGSwitchElement;
    new (): SVGSwitchElement;
};
interface SVGSymbolElement extends SVGElement, SVGFitToViewBox {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGSymbolElement: {
    prototype: SVGSymbolElement;
    new (): SVGSymbolElement;
};
interface SVGTSpanElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGTSpanElement: {
    prototype: SVGTSpanElement;
    new (): SVGTSpanElement;
};
interface SVGTests {
    readonly requiredExtensions: SVGStringList;
    readonly systemLanguage: SVGStringList;
}
interface SVGTextContentElement extends SVGGraphicsElement {
    readonly lengthAdjust: SVGAnimatedEnumeration;
    readonly textLength: SVGAnimatedLength;
    getCharNumAtPosition(point?: DOMPointInit): number;
    getComputedTextLength(): number;
    getEndPositionOfChar(charnum: number): DOMPoint;
    getExtentOfChar(charnum: number): DOMRect;
    getNumberOfChars(): number;
    getRotationOfChar(charnum: number): number;
    getStartPositionOfChar(charnum: number): DOMPoint;
    getSubStringLength(charnum: number, nchars: number): number;
    selectSubString(charnum: number, nchars: number): void;
    readonly LENGTHADJUST_UNKNOWN: 0;
    readonly LENGTHADJUST_SPACING: 1;
    readonly LENGTHADJUST_SPACINGANDGLYPHS: 2;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGTextContentElement: {
    prototype: SVGTextContentElement;
    new (): SVGTextContentElement;
    readonly LENGTHADJUST_UNKNOWN: 0;
    readonly LENGTHADJUST_SPACING: 1;
    readonly LENGTHADJUST_SPACINGANDGLYPHS: 2;
};
interface SVGTextElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGTextElement: {
    prototype: SVGTextElement;
    new (): SVGTextElement;
};
interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    readonly method: SVGAnimatedEnumeration;
    readonly spacing: SVGAnimatedEnumeration;
    readonly startOffset: SVGAnimatedLength;
    readonly TEXTPATH_METHODTYPE_UNKNOWN: 0;
    readonly TEXTPATH_METHODTYPE_ALIGN: 1;
    readonly TEXTPATH_METHODTYPE_STRETCH: 2;
    readonly TEXTPATH_SPACINGTYPE_UNKNOWN: 0;
    readonly TEXTPATH_SPACINGTYPE_AUTO: 1;
    readonly TEXTPATH_SPACINGTYPE_EXACT: 2;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGTextPathElement: {
    prototype: SVGTextPathElement;
    new (): SVGTextPathElement;
    readonly TEXTPATH_METHODTYPE_UNKNOWN: 0;
    readonly TEXTPATH_METHODTYPE_ALIGN: 1;
    readonly TEXTPATH_METHODTYPE_STRETCH: 2;
    readonly TEXTPATH_SPACINGTYPE_UNKNOWN: 0;
    readonly TEXTPATH_SPACINGTYPE_AUTO: 1;
    readonly TEXTPATH_SPACINGTYPE_EXACT: 2;
};
interface SVGTextPositioningElement extends SVGTextContentElement {
    readonly dx: SVGAnimatedLengthList;
    readonly dy: SVGAnimatedLengthList;
    readonly rotate: SVGAnimatedNumberList;
    readonly x: SVGAnimatedLengthList;
    readonly y: SVGAnimatedLengthList;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGTextPositioningElement: {
    prototype: SVGTextPositioningElement;
    new (): SVGTextPositioningElement;
};
interface SVGTitleElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGTitleElement: {
    prototype: SVGTitleElement;
    new (): SVGTitleElement;
};
interface SVGTransform {
    readonly angle: number;
    readonly matrix: DOMMatrix;
    readonly type: number;
    setMatrix(matrix?: DOMMatrix2DInit): void;
    setRotate(angle: number, cx: number, cy: number): void;
    setScale(sx: number, sy: number): void;
    setSkewX(angle: number): void;
    setSkewY(angle: number): void;
    setTranslate(tx: number, ty: number): void;
    readonly SVG_TRANSFORM_UNKNOWN: 0;
    readonly SVG_TRANSFORM_MATRIX: 1;
    readonly SVG_TRANSFORM_TRANSLATE: 2;
    readonly SVG_TRANSFORM_SCALE: 3;
    readonly SVG_TRANSFORM_ROTATE: 4;
    readonly SVG_TRANSFORM_SKEWX: 5;
    readonly SVG_TRANSFORM_SKEWY: 6;
}
declare var SVGTransform: {
    prototype: SVGTransform;
    new (): SVGTransform;
    readonly SVG_TRANSFORM_UNKNOWN: 0;
    readonly SVG_TRANSFORM_MATRIX: 1;
    readonly SVG_TRANSFORM_TRANSLATE: 2;
    readonly SVG_TRANSFORM_SCALE: 3;
    readonly SVG_TRANSFORM_ROTATE: 4;
    readonly SVG_TRANSFORM_SKEWX: 5;
    readonly SVG_TRANSFORM_SKEWY: 6;
};
interface SVGTransformList {
    readonly length: number;
    readonly numberOfItems: number;
    appendItem(newItem: SVGTransform): SVGTransform;
    clear(): void;
    consolidate(): SVGTransform | null;
    createSVGTransformFromMatrix(matrix?: DOMMatrix2DInit): SVGTransform;
    getItem(index: number): SVGTransform;
    initialize(newItem: SVGTransform): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
    removeItem(index: number): SVGTransform;
    replaceItem(newItem: SVGTransform, index: number): SVGTransform;
    [index: number]: SVGTransform;
}
declare var SVGTransformList: {
    prototype: SVGTransformList;
    new (): SVGTransformList;
};
interface SVGURIReference {
    readonly href: SVGAnimatedString;
}
interface SVGUnitTypes {
    readonly SVG_UNIT_TYPE_UNKNOWN: 0;
    readonly SVG_UNIT_TYPE_USERSPACEONUSE: 1;
    readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: 2;
}
declare var SVGUnitTypes: {
    prototype: SVGUnitTypes;
    new (): SVGUnitTypes;
    readonly SVG_UNIT_TYPE_UNKNOWN: 0;
    readonly SVG_UNIT_TYPE_USERSPACEONUSE: 1;
    readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: 2;
};
interface SVGUseElement extends SVGGraphicsElement, SVGURIReference {
    readonly height: SVGAnimatedLength;
    readonly width: SVGAnimatedLength;
    readonly x: SVGAnimatedLength;
    readonly y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGUseElement: {
    prototype: SVGUseElement;
    new (): SVGUseElement;
};
interface SVGViewElement extends SVGElement, SVGFitToViewBox {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SVGViewElement: {
    prototype: SVGViewElement;
    new (): SVGViewElement;
};
interface Screen {
    readonly availHeight: number;
    readonly availWidth: number;
    readonly colorDepth: number;
    readonly height: number;
    readonly orientation: ScreenOrientation;
    readonly pixelDepth: number;
    readonly width: number;
}
declare var Screen: {
    prototype: Screen;
    new (): Screen;
};
interface ScreenOrientationEventMap {
    "change": Event;
}
interface ScreenOrientation extends EventTarget {
    readonly angle: number;
    onchange: ((this: ScreenOrientation, ev: Event) => any) | null;
    readonly type: OrientationType;
    lock(orientation: OrientationLockType): Promise<void>;
    unlock(): void;
    addEventListener<K extends keyof ScreenOrientationEventMap>(type: K, listener: (this: ScreenOrientation, ev: ScreenOrientationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ScreenOrientationEventMap>(type: K, listener: (this: ScreenOrientation, ev: ScreenOrientationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var ScreenOrientation: {
    prototype: ScreenOrientation;
    new (): ScreenOrientation;
};
interface ScriptProcessorNodeEventMap {
    "audioprocess": AudioProcessingEvent;
}
interface ScriptProcessorNode extends AudioNode {
    readonly bufferSize: number;
    onaudioprocess: ((this: ScriptProcessorNode, ev: AudioProcessingEvent) => any) | null;
    addEventListener<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var ScriptProcessorNode: {
    prototype: ScriptProcessorNode;
    new (): ScriptProcessorNode;
};
interface SecurityPolicyViolationEvent extends Event {
    readonly blockedURI: string;
    readonly columnNumber: number;
    readonly disposition: SecurityPolicyViolationEventDisposition;
    readonly documentURI: string;
    readonly effectiveDirective: string;
    readonly lineNumber: number;
    readonly originalPolicy: string;
    readonly referrer: string;
    readonly sample: string;
    readonly sourceFile: string;
    readonly statusCode: number;
    readonly violatedDirective: string;
}
declare var SecurityPolicyViolationEvent: {
    prototype: SecurityPolicyViolationEvent;
    new (type: string, eventInitDict?: SecurityPolicyViolationEventInit): SecurityPolicyViolationEvent;
};
interface Selection {
    readonly anchorNode: Node | null;
    readonly anchorOffset: number;
    readonly focusNode: Node | null;
    readonly focusOffset: number;
    readonly isCollapsed: boolean;
    readonly rangeCount: number;
    readonly type: string;
    addRange(range: Range): void;
    collapse(node: Node | null, offset?: number): void;
    collapseToEnd(): void;
    collapseToStart(): void;
    containsNode(node: Node, allowPartialContainment?: boolean): boolean;
    deleteFromDocument(): void;
    empty(): void;
    extend(node: Node, offset?: number): void;
    getRangeAt(index: number): Range;
    modify(alter?: string, direction?: string, granularity?: string): void;
    removeAllRanges(): void;
    removeRange(range: Range): void;
    selectAllChildren(node: Node): void;
    setBaseAndExtent(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): void;
    setPosition(node: Node | null, offset?: number): void;
    toString(): string;
}
declare var Selection: {
    prototype: Selection;
    new (): Selection;
    toString(): string;
};
interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}
interface ServiceWorker extends EventTarget, AbstractWorker {
    onstatechange: ((this: ServiceWorker, ev: Event) => any) | null;
    readonly scriptURL: string;
    readonly state: ServiceWorkerState;
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var ServiceWorker: {
    prototype: ServiceWorker;
    new (): ServiceWorker;
};
interface ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
}
interface ServiceWorkerContainer extends EventTarget {
    readonly controller: ServiceWorker | null;
    oncontrollerchange: ((this: ServiceWorkerContainer, ev: Event) => any) | null;
    onmessage: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    readonly ready: Promise<ServiceWorkerRegistration>;
    getRegistration(clientURL?: string | URL): Promise<ServiceWorkerRegistration | undefined>;
    getRegistrations(): Promise<ReadonlyArray<ServiceWorkerRegistration>>;
    register(scriptURL: string | URL, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    startMessages(): void;
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var ServiceWorkerContainer: {
    prototype: ServiceWorkerContainer;
    new (): ServiceWorkerContainer;
};
interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}
interface ServiceWorkerRegistration extends EventTarget {
    readonly active: ServiceWorker | null;
    readonly installing: ServiceWorker | null;
    readonly navigationPreload: NavigationPreloadManager;
    onupdatefound: ((this: ServiceWorkerRegistration, ev: Event) => any) | null;
    readonly pushManager: PushManager;
    readonly scope: string;
    readonly updateViaCache: ServiceWorkerUpdateViaCache;
    readonly waiting: ServiceWorker | null;
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    unregister(): Promise<boolean>;
    update(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var ServiceWorkerRegistration: {
    prototype: ServiceWorkerRegistration;
    new (): ServiceWorkerRegistration;
};
interface ShadowRootEventMap {
    "slotchange": Event;
}
interface ShadowRoot extends DocumentFragment, DocumentOrShadowRoot, InnerHTML {
    readonly delegatesFocus: boolean;
    readonly host: Element;
    readonly mode: ShadowRootMode;
    onslotchange: ((this: ShadowRoot, ev: Event) => any) | null;
    readonly slotAssignment: SlotAssignmentMode;
    addEventListener<K extends keyof ShadowRootEventMap>(type: K, listener: (this: ShadowRoot, ev: ShadowRootEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ShadowRootEventMap>(type: K, listener: (this: ShadowRoot, ev: ShadowRootEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var ShadowRoot: {
    prototype: ShadowRoot;
    new (): ShadowRoot;
};
interface SharedWorker extends EventTarget, AbstractWorker {
    readonly port: MessagePort;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SharedWorker: {
    prototype: SharedWorker;
    new (scriptURL: string | URL, options?: string | WorkerOptions): SharedWorker;
};
interface Slottable {
    readonly assignedSlot: HTMLSlotElement | null;
}
interface SourceBufferEventMap {
    "abort": Event;
    "error": Event;
    "update": Event;
    "updateend": Event;
    "updatestart": Event;
}
interface SourceBuffer extends EventTarget {
    appendWindowEnd: number;
    appendWindowStart: number;
    readonly buffered: TimeRanges;
    mode: AppendMode;
    onabort: ((this: SourceBuffer, ev: Event) => any) | null;
    onerror: ((this: SourceBuffer, ev: Event) => any) | null;
    onupdate: ((this: SourceBuffer, ev: Event) => any) | null;
    onupdateend: ((this: SourceBuffer, ev: Event) => any) | null;
    onupdatestart: ((this: SourceBuffer, ev: Event) => any) | null;
    timestampOffset: number;
    readonly updating: boolean;
    abort(): void;
    appendBuffer(data: BufferSource): void;
    changeType(type: string): void;
    remove(start: number, end: number): void;
    addEventListener<K extends keyof SourceBufferEventMap>(type: K, listener: (this: SourceBuffer, ev: SourceBufferEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SourceBufferEventMap>(type: K, listener: (this: SourceBuffer, ev: SourceBufferEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SourceBuffer: {
    prototype: SourceBuffer;
    new (): SourceBuffer;
};
interface SourceBufferListEventMap {
    "addsourcebuffer": Event;
    "removesourcebuffer": Event;
}
interface SourceBufferList extends EventTarget {
    readonly length: number;
    onaddsourcebuffer: ((this: SourceBufferList, ev: Event) => any) | null;
    onremovesourcebuffer: ((this: SourceBufferList, ev: Event) => any) | null;
    addEventListener<K extends keyof SourceBufferListEventMap>(type: K, listener: (this: SourceBufferList, ev: SourceBufferListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SourceBufferListEventMap>(type: K, listener: (this: SourceBufferList, ev: SourceBufferListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: SourceBuffer;
}
declare var SourceBufferList: {
    prototype: SourceBufferList;
    new (): SourceBufferList;
};
interface SpeechRecognitionAlternative {
    readonly confidence: number;
    readonly transcript: string;
}
declare var SpeechRecognitionAlternative: {
    prototype: SpeechRecognitionAlternative;
    new (): SpeechRecognitionAlternative;
};
interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}
declare var SpeechRecognitionResult: {
    prototype: SpeechRecognitionResult;
    new (): SpeechRecognitionResult;
};
interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}
declare var SpeechRecognitionResultList: {
    prototype: SpeechRecognitionResultList;
    new (): SpeechRecognitionResultList;
};
interface SpeechSynthesisEventMap {
    "voiceschanged": Event;
}
interface SpeechSynthesis extends EventTarget {
    onvoiceschanged: ((this: SpeechSynthesis, ev: Event) => any) | null;
    readonly paused: boolean;
    readonly pending: boolean;
    readonly speaking: boolean;
    cancel(): void;
    getVoices(): SpeechSynthesisVoice[];
    pause(): void;
    resume(): void;
    speak(utterance: SpeechSynthesisUtterance): void;
    addEventListener<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SpeechSynthesis: {
    prototype: SpeechSynthesis;
    new (): SpeechSynthesis;
};
interface SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
    readonly error: SpeechSynthesisErrorCode;
}
declare var SpeechSynthesisErrorEvent: {
    prototype: SpeechSynthesisErrorEvent;
    new (type: string, eventInitDict: SpeechSynthesisErrorEventInit): SpeechSynthesisErrorEvent;
};
interface SpeechSynthesisEvent extends Event {
    readonly charIndex: number;
    readonly charLength: number;
    readonly elapsedTime: number;
    readonly name: string;
    readonly utterance: SpeechSynthesisUtterance;
}
declare var SpeechSynthesisEvent: {
    prototype: SpeechSynthesisEvent;
    new (type: string, eventInitDict: SpeechSynthesisEventInit): SpeechSynthesisEvent;
};
interface SpeechSynthesisUtteranceEventMap {
    "boundary": SpeechSynthesisEvent;
    "end": SpeechSynthesisEvent;
    "error": SpeechSynthesisErrorEvent;
    "mark": SpeechSynthesisEvent;
    "pause": SpeechSynthesisEvent;
    "resume": SpeechSynthesisEvent;
    "start": SpeechSynthesisEvent;
}
interface SpeechSynthesisUtterance extends EventTarget {
    lang: string;
    onboundary: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onend: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onerror: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisErrorEvent) => any) | null;
    onmark: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onpause: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onresume: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onstart: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    pitch: number;
    rate: number;
    text: string;
    voice: SpeechSynthesisVoice | null;
    volume: number;
    addEventListener<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var SpeechSynthesisUtterance: {
    prototype: SpeechSynthesisUtterance;
    new (text?: string): SpeechSynthesisUtterance;
};
interface SpeechSynthesisVoice {
    readonly default: boolean;
    readonly lang: string;
    readonly localService: boolean;
    readonly name: string;
    readonly voiceURI: string;
}
declare var SpeechSynthesisVoice: {
    prototype: SpeechSynthesisVoice;
    new (): SpeechSynthesisVoice;
};
interface StaticRange extends AbstractRange {
}
declare var StaticRange: {
    prototype: StaticRange;
    new (init: StaticRangeInit): StaticRange;
};
interface StereoPannerNode extends AudioNode {
    readonly pan: AudioParam;
}
declare var StereoPannerNode: {
    prototype: StereoPannerNode;
    new (context: BaseAudioContext, options?: StereoPannerOptions): StereoPannerNode;
};
interface Storage {
    readonly length: number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
    [name: string]: any;
}
declare var Storage: {
    prototype: Storage;
    new (): Storage;
};
interface StorageEvent extends Event {
    readonly key: string | null;
    readonly newValue: string | null;
    readonly oldValue: string | null;
    readonly storageArea: Storage | null;
    readonly url: string;
    initStorageEvent(type: string, bubbles?: boolean, cancelable?: boolean, key?: string | null, oldValue?: string | null, newValue?: string | null, url?: string | URL, storageArea?: Storage | null): void;
}
declare var StorageEvent: {
    prototype: StorageEvent;
    new (type: string, eventInitDict?: StorageEventInit): StorageEvent;
};
interface StorageManager {
    estimate(): Promise<StorageEstimate>;
    getDirectory(): Promise<FileSystemDirectoryHandle>;
    persist(): Promise<boolean>;
    persisted(): Promise<boolean>;
}
declare var StorageManager: {
    prototype: StorageManager;
    new (): StorageManager;
};
interface StyleMedia {
    type: string;
    matchMedium(mediaquery: string): boolean;
}
interface StyleSheet {
    disabled: boolean;
    readonly href: string | null;
    readonly media: MediaList;
    readonly ownerNode: Element | ProcessingInstruction | null;
    readonly parentStyleSheet: CSSStyleSheet | null;
    readonly title: string | null;
    readonly type: string;
}
declare var StyleSheet: {
    prototype: StyleSheet;
    new (): StyleSheet;
};
interface StyleSheetList {
    readonly length: number;
    item(index: number): CSSStyleSheet | null;
    [index: number]: CSSStyleSheet;
}
declare var StyleSheetList: {
    prototype: StyleSheetList;
    new (): StyleSheetList;
};
interface SubmitEvent extends Event {
    readonly submitter: HTMLElement | null;
}
declare var SubmitEvent: {
    prototype: SubmitEvent;
    new (type: string, eventInitDict?: SubmitEventInit): SubmitEvent;
};
interface SubtleCrypto {
    decrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    deriveBits(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, length: number): Promise<ArrayBuffer>;
    deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    digest(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<ArrayBuffer>;
    encrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    exportKey(format: "jwk", key: CryptoKey): Promise<JsonWebKey>;
    exportKey(format: Exclude<KeyFormat, "jwk">, key: CryptoKey): Promise<ArrayBuffer>;
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKeyPair>;
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair | CryptoKey>;
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    importKey(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    sign(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    verify(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<boolean>;
    wrapKey(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<ArrayBuffer>;
}
declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new (): SubtleCrypto;
};
interface Text extends CharacterData, Slottable {
    readonly wholeText: string;
    splitText(offset: number): Text;
}
declare var Text: {
    prototype: Text;
    new (data?: string): Text;
};
interface TextDecoder extends TextDecoderCommon {
    decode(input?: BufferSource, options?: TextDecodeOptions): string;
}
declare var TextDecoder: {
    prototype: TextDecoder;
    new (label?: string, options?: TextDecoderOptions): TextDecoder;
};
interface TextDecoderCommon {
    readonly encoding: string;
    readonly fatal: boolean;
    readonly ignoreBOM: boolean;
}
interface TextDecoderStream extends GenericTransformStream, TextDecoderCommon {
    readonly readable: ReadableStream<string>;
    readonly writable: WritableStream<BufferSource>;
}
declare var TextDecoderStream: {
    prototype: TextDecoderStream;
    new (label?: string, options?: TextDecoderOptions): TextDecoderStream;
};
interface TextEncoder extends TextEncoderCommon {
    encode(input?: string): Uint8Array;
    encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult;
}
declare var TextEncoder: {
    prototype: TextEncoder;
    new (): TextEncoder;
};
interface TextEncoderCommon {
    readonly encoding: string;
}
interface TextEncoderStream extends GenericTransformStream, TextEncoderCommon {
    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<string>;
}
declare var TextEncoderStream: {
    prototype: TextEncoderStream;
    new (): TextEncoderStream;
};
interface TextMetrics {
    readonly actualBoundingBoxAscent: number;
    readonly actualBoundingBoxDescent: number;
    readonly actualBoundingBoxLeft: number;
    readonly actualBoundingBoxRight: number;
    readonly fontBoundingBoxAscent: number;
    readonly fontBoundingBoxDescent: number;
    readonly width: number;
}
declare var TextMetrics: {
    prototype: TextMetrics;
    new (): TextMetrics;
};
interface TextTrackEventMap {
    "cuechange": Event;
}
interface TextTrack extends EventTarget {
    readonly activeCues: TextTrackCueList | null;
    readonly cues: TextTrackCueList | null;
    readonly id: string;
    readonly inBandMetadataTrackDispatchType: string;
    readonly kind: TextTrackKind;
    readonly label: string;
    readonly language: string;
    mode: TextTrackMode;
    oncuechange: ((this: TextTrack, ev: Event) => any) | null;
    addCue(cue: TextTrackCue): void;
    removeCue(cue: TextTrackCue): void;
    addEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var TextTrack: {
    prototype: TextTrack;
    new (): TextTrack;
};
interface TextTrackCueEventMap {
    "enter": Event;
    "exit": Event;
}
interface TextTrackCue extends EventTarget {
    endTime: number;
    id: string;
    onenter: ((this: TextTrackCue, ev: Event) => any) | null;
    onexit: ((this: TextTrackCue, ev: Event) => any) | null;
    pauseOnExit: boolean;
    startTime: number;
    readonly track: TextTrack | null;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var TextTrackCue: {
    prototype: TextTrackCue;
    new (): TextTrackCue;
};
interface TextTrackCueList {
    readonly length: number;
    getCueById(id: string): TextTrackCue | null;
    [index: number]: TextTrackCue;
}
declare var TextTrackCueList: {
    prototype: TextTrackCueList;
    new (): TextTrackCueList;
};
interface TextTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;
}
interface TextTrackList extends EventTarget {
    readonly length: number;
    onaddtrack: ((this: TextTrackList, ev: TrackEvent) => any) | null;
    onchange: ((this: TextTrackList, ev: Event) => any) | null;
    onremovetrack: ((this: TextTrackList, ev: TrackEvent) => any) | null;
    getTrackById(id: string): TextTrack | null;
    addEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: TextTrack;
}
declare var TextTrackList: {
    prototype: TextTrackList;
    new (): TextTrackList;
};
interface TimeRanges {
    readonly length: number;
    end(index: number): number;
    start(index: number): number;
}
declare var TimeRanges: {
    prototype: TimeRanges;
    new (): TimeRanges;
};
interface Touch {
    readonly clientX: number;
    readonly clientY: number;
    readonly force: number;
    readonly identifier: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly radiusX: number;
    readonly radiusY: number;
    readonly rotationAngle: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly target: EventTarget;
}
declare var Touch: {
    prototype: Touch;
    new (touchInitDict: TouchInit): Touch;
};
interface TouchEvent extends UIEvent {
    readonly altKey: boolean;
    readonly changedTouches: TouchList;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly shiftKey: boolean;
    readonly targetTouches: TouchList;
    readonly touches: TouchList;
}
declare var TouchEvent: {
    prototype: TouchEvent;
    new (type: string, eventInitDict?: TouchEventInit): TouchEvent;
};
interface TouchList {
    readonly length: number;
    item(index: number): Touch | null;
    [index: number]: Touch;
}
declare var TouchList: {
    prototype: TouchList;
    new (): TouchList;
};
interface TrackEvent extends Event {
    readonly track: TextTrack | null;
}
declare var TrackEvent: {
    prototype: TrackEvent;
    new (type: string, eventInitDict?: TrackEventInit): TrackEvent;
};
interface TransformStream<I = any, O = any> {
    readonly readable: ReadableStream<O>;
    readonly writable: WritableStream<I>;
}
declare var TransformStream: {
    prototype: TransformStream;
    new <I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
};
interface TransformStreamDefaultController<O = any> {
    readonly desiredSize: number | null;
    enqueue(chunk?: O): void;
    error(reason?: any): void;
    terminate(): void;
}
declare var TransformStreamDefaultController: {
    prototype: TransformStreamDefaultController;
    new (): TransformStreamDefaultController;
};
interface TransitionEvent extends Event {
    readonly elapsedTime: number;
    readonly propertyName: string;
    readonly pseudoElement: string;
}
declare var TransitionEvent: {
    prototype: TransitionEvent;
    new (type: string, transitionEventInitDict?: TransitionEventInit): TransitionEvent;
};
interface TreeWalker {
    currentNode: Node;
    readonly filter: NodeFilter | null;
    readonly root: Node;
    readonly whatToShow: number;
    firstChild(): Node | null;
    lastChild(): Node | null;
    nextNode(): Node | null;
    nextSibling(): Node | null;
    parentNode(): Node | null;
    previousNode(): Node | null;
    previousSibling(): Node | null;
}
declare var TreeWalker: {
    prototype: TreeWalker;
    new (): TreeWalker;
};
interface UIEvent extends Event {
    readonly detail: number;
    readonly view: Window | null;
    readonly which: number;
    initUIEvent(typeArg: string, bubblesArg?: boolean, cancelableArg?: boolean, viewArg?: Window | null, detailArg?: number): void;
}
declare var UIEvent: {
    prototype: UIEvent;
    new (type: string, eventInitDict?: UIEventInit): UIEvent;
};
interface URL {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    toString(): string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    readonly searchParams: URLSearchParams;
    username: string;
    toJSON(): string;
}
declare var URL: {
    prototype: URL;
    new (url: string | URL, base?: string | URL): URL;
    createObjectURL(obj: Blob | MediaSource): string;
    revokeObjectURL(url: string): void;
};
type webkitURL = URL;
declare var webkitURL: typeof URL;
interface URLSearchParams {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    sort(): void;
    toString(): string;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}
declare var URLSearchParams: {
    prototype: URLSearchParams;
    new (init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
    toString(): string;
};
interface VTTCue extends TextTrackCue {
    align: AlignSetting;
    line: LineAndPositionSetting;
    lineAlign: LineAlignSetting;
    position: LineAndPositionSetting;
    positionAlign: PositionAlignSetting;
    region: VTTRegion | null;
    size: number;
    snapToLines: boolean;
    text: string;
    vertical: DirectionSetting;
    getCueAsHTML(): DocumentFragment;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var VTTCue: {
    prototype: VTTCue;
    new (startTime: number, endTime: number, text: string): VTTCue;
};
interface VTTRegion {
    id: string;
    lines: number;
    regionAnchorX: number;
    regionAnchorY: number;
    scroll: ScrollSetting;
    viewportAnchorX: number;
    viewportAnchorY: number;
    width: number;
}
declare var VTTRegion: {
    prototype: VTTRegion;
    new (): VTTRegion;
};
interface ValidityState {
    readonly badInput: boolean;
    readonly customError: boolean;
    readonly patternMismatch: boolean;
    readonly rangeOverflow: boolean;
    readonly rangeUnderflow: boolean;
    readonly stepMismatch: boolean;
    readonly tooLong: boolean;
    readonly tooShort: boolean;
    readonly typeMismatch: boolean;
    readonly valid: boolean;
    readonly valueMissing: boolean;
}
declare var ValidityState: {
    prototype: ValidityState;
    new (): ValidityState;
};
interface VideoColorSpace {
    readonly fullRange: boolean | null;
    readonly matrix: VideoMatrixCoefficients | null;
    readonly primaries: VideoColorPrimaries | null;
    readonly transfer: VideoTransferCharacteristics | null;
    toJSON(): VideoColorSpaceInit;
}
declare var VideoColorSpace: {
    prototype: VideoColorSpace;
    new (init?: VideoColorSpaceInit): VideoColorSpace;
};
interface VideoPlaybackQuality {
    readonly corruptedVideoFrames: number;
    readonly creationTime: DOMHighResTimeStamp;
    readonly droppedVideoFrames: number;
    readonly totalVideoFrames: number;
}
declare var VideoPlaybackQuality: {
    prototype: VideoPlaybackQuality;
    new (): VideoPlaybackQuality;
};
interface VisualViewportEventMap {
    "resize": Event;
    "scroll": Event;
}
interface VisualViewport extends EventTarget {
    readonly height: number;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    onresize: ((this: VisualViewport, ev: Event) => any) | null;
    onscroll: ((this: VisualViewport, ev: Event) => any) | null;
    readonly pageLeft: number;
    readonly pageTop: number;
    readonly scale: number;
    readonly width: number;
    addEventListener<K extends keyof VisualViewportEventMap>(type: K, listener: (this: VisualViewport, ev: VisualViewportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof VisualViewportEventMap>(type: K, listener: (this: VisualViewport, ev: VisualViewportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var VisualViewport: {
    prototype: VisualViewport;
    new (): VisualViewport;
};
interface WEBGL_color_buffer_float {
    readonly RGBA32F_EXT: 0x8814;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211;
    readonly UNSIGNED_NORMALIZED_EXT: 0x8C17;
}
interface WEBGL_compressed_texture_astc {
    getSupportedProfiles(): string[];
    readonly COMPRESSED_RGBA_ASTC_4x4_KHR: 0x93B0;
    readonly COMPRESSED_RGBA_ASTC_5x4_KHR: 0x93B1;
    readonly COMPRESSED_RGBA_ASTC_5x5_KHR: 0x93B2;
    readonly COMPRESSED_RGBA_ASTC_6x5_KHR: 0x93B3;
    readonly COMPRESSED_RGBA_ASTC_6x6_KHR: 0x93B4;
    readonly COMPRESSED_RGBA_ASTC_8x5_KHR: 0x93B5;
    readonly COMPRESSED_RGBA_ASTC_8x6_KHR: 0x93B6;
    readonly COMPRESSED_RGBA_ASTC_8x8_KHR: 0x93B7;
    readonly COMPRESSED_RGBA_ASTC_10x5_KHR: 0x93B8;
    readonly COMPRESSED_RGBA_ASTC_10x6_KHR: 0x93B9;
    readonly COMPRESSED_RGBA_ASTC_10x8_KHR: 0x93BA;
    readonly COMPRESSED_RGBA_ASTC_10x10_KHR: 0x93BB;
    readonly COMPRESSED_RGBA_ASTC_12x10_KHR: 0x93BC;
    readonly COMPRESSED_RGBA_ASTC_12x12_KHR: 0x93BD;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: 0x93D0;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: 0x93D1;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: 0x93D2;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: 0x93D3;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: 0x93D4;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: 0x93D5;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: 0x93D6;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: 0x93D7;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: 0x93D8;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: 0x93D9;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: 0x93DA;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: 0x93DB;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: 0x93DC;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: 0x93DD;
}
interface WEBGL_compressed_texture_etc {
    readonly COMPRESSED_R11_EAC: 0x9270;
    readonly COMPRESSED_SIGNED_R11_EAC: 0x9271;
    readonly COMPRESSED_RG11_EAC: 0x9272;
    readonly COMPRESSED_SIGNED_RG11_EAC: 0x9273;
    readonly COMPRESSED_RGB8_ETC2: 0x9274;
    readonly COMPRESSED_SRGB8_ETC2: 0x9275;
    readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9276;
    readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9277;
    readonly COMPRESSED_RGBA8_ETC2_EAC: 0x9278;
    readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9279;
}
interface WEBGL_compressed_texture_etc1 {
    readonly COMPRESSED_RGB_ETC1_WEBGL: 0x8D64;
}
interface WEBGL_compressed_texture_s3tc {
    readonly COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83F0;
    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83F1;
    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83F2;
    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83F3;
}
interface WEBGL_compressed_texture_s3tc_srgb {
    readonly COMPRESSED_SRGB_S3TC_DXT1_EXT: 0x8C4C;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 0x8C4D;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 0x8C4E;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 0x8C4F;
}
interface WEBGL_debug_renderer_info {
    readonly UNMASKED_VENDOR_WEBGL: 0x9245;
    readonly UNMASKED_RENDERER_WEBGL: 0x9246;
}
interface WEBGL_debug_shaders {
    getTranslatedShaderSource(shader: WebGLShader): string;
}
interface WEBGL_depth_texture {
    readonly UNSIGNED_INT_24_8_WEBGL: 0x84FA;
}
interface WEBGL_draw_buffers {
    drawBuffersWEBGL(buffers: GLenum[]): void;
    readonly COLOR_ATTACHMENT0_WEBGL: 0x8CE0;
    readonly COLOR_ATTACHMENT1_WEBGL: 0x8CE1;
    readonly COLOR_ATTACHMENT2_WEBGL: 0x8CE2;
    readonly COLOR_ATTACHMENT3_WEBGL: 0x8CE3;
    readonly COLOR_ATTACHMENT4_WEBGL: 0x8CE4;
    readonly COLOR_ATTACHMENT5_WEBGL: 0x8CE5;
    readonly COLOR_ATTACHMENT6_WEBGL: 0x8CE6;
    readonly COLOR_ATTACHMENT7_WEBGL: 0x8CE7;
    readonly COLOR_ATTACHMENT8_WEBGL: 0x8CE8;
    readonly COLOR_ATTACHMENT9_WEBGL: 0x8CE9;
    readonly COLOR_ATTACHMENT10_WEBGL: 0x8CEA;
    readonly COLOR_ATTACHMENT11_WEBGL: 0x8CEB;
    readonly COLOR_ATTACHMENT12_WEBGL: 0x8CEC;
    readonly COLOR_ATTACHMENT13_WEBGL: 0x8CED;
    readonly COLOR_ATTACHMENT14_WEBGL: 0x8CEE;
    readonly COLOR_ATTACHMENT15_WEBGL: 0x8CEF;
    readonly DRAW_BUFFER0_WEBGL: 0x8825;
    readonly DRAW_BUFFER1_WEBGL: 0x8826;
    readonly DRAW_BUFFER2_WEBGL: 0x8827;
    readonly DRAW_BUFFER3_WEBGL: 0x8828;
    readonly DRAW_BUFFER4_WEBGL: 0x8829;
    readonly DRAW_BUFFER5_WEBGL: 0x882A;
    readonly DRAW_BUFFER6_WEBGL: 0x882B;
    readonly DRAW_BUFFER7_WEBGL: 0x882C;
    readonly DRAW_BUFFER8_WEBGL: 0x882D;
    readonly DRAW_BUFFER9_WEBGL: 0x882E;
    readonly DRAW_BUFFER10_WEBGL: 0x882F;
    readonly DRAW_BUFFER11_WEBGL: 0x8830;
    readonly DRAW_BUFFER12_WEBGL: 0x8831;
    readonly DRAW_BUFFER13_WEBGL: 0x8832;
    readonly DRAW_BUFFER14_WEBGL: 0x8833;
    readonly DRAW_BUFFER15_WEBGL: 0x8834;
    readonly MAX_COLOR_ATTACHMENTS_WEBGL: 0x8CDF;
    readonly MAX_DRAW_BUFFERS_WEBGL: 0x8824;
}
interface WEBGL_lose_context {
    loseContext(): void;
    restoreContext(): void;
}
interface WEBGL_multi_draw {
    multiDrawArraysInstancedWEBGL(mode: GLenum, firstsList: Int32Array | GLint[], firstsOffset: GLuint, countsList: Int32Array | GLsizei[], countsOffset: GLuint, instanceCountsList: Int32Array | GLsizei[], instanceCountsOffset: GLuint, drawcount: GLsizei): void;
    multiDrawArraysWEBGL(mode: GLenum, firstsList: Int32Array | GLint[], firstsOffset: GLuint, countsList: Int32Array | GLsizei[], countsOffset: GLuint, drawcount: GLsizei): void;
    multiDrawElementsInstancedWEBGL(mode: GLenum, countsList: Int32Array | GLsizei[], countsOffset: GLuint, type: GLenum, offsetsList: Int32Array | GLsizei[], offsetsOffset: GLuint, instanceCountsList: Int32Array | GLsizei[], instanceCountsOffset: GLuint, drawcount: GLsizei): void;
    multiDrawElementsWEBGL(mode: GLenum, countsList: Int32Array | GLsizei[], countsOffset: GLuint, type: GLenum, offsetsList: Int32Array | GLsizei[], offsetsOffset: GLuint, drawcount: GLsizei): void;
}
interface WaveShaperNode extends AudioNode {
    curve: Float32Array | null;
    oversample: OverSampleType;
}
declare var WaveShaperNode: {
    prototype: WaveShaperNode;
    new (context: BaseAudioContext, options?: WaveShaperOptions): WaveShaperNode;
};
interface WebGL2RenderingContext extends WebGL2RenderingContextBase, WebGL2RenderingContextOverloads, WebGLRenderingContextBase {
}
declare var WebGL2RenderingContext: {
    prototype: WebGL2RenderingContext;
    new (): WebGL2RenderingContext;
    readonly READ_BUFFER: 0x0C02;
    readonly UNPACK_ROW_LENGTH: 0x0CF2;
    readonly UNPACK_SKIP_ROWS: 0x0CF3;
    readonly UNPACK_SKIP_PIXELS: 0x0CF4;
    readonly PACK_ROW_LENGTH: 0x0D02;
    readonly PACK_SKIP_ROWS: 0x0D03;
    readonly PACK_SKIP_PIXELS: 0x0D04;
    readonly COLOR: 0x1800;
    readonly DEPTH: 0x1801;
    readonly STENCIL: 0x1802;
    readonly RED: 0x1903;
    readonly RGB8: 0x8051;
    readonly RGBA8: 0x8058;
    readonly RGB10_A2: 0x8059;
    readonly TEXTURE_BINDING_3D: 0x806A;
    readonly UNPACK_SKIP_IMAGES: 0x806D;
    readonly UNPACK_IMAGE_HEIGHT: 0x806E;
    readonly TEXTURE_3D: 0x806F;
    readonly TEXTURE_WRAP_R: 0x8072;
    readonly MAX_3D_TEXTURE_SIZE: 0x8073;
    readonly UNSIGNED_INT_2_10_10_10_REV: 0x8368;
    readonly MAX_ELEMENTS_VERTICES: 0x80E8;
    readonly MAX_ELEMENTS_INDICES: 0x80E9;
    readonly TEXTURE_MIN_LOD: 0x813A;
    readonly TEXTURE_MAX_LOD: 0x813B;
    readonly TEXTURE_BASE_LEVEL: 0x813C;
    readonly TEXTURE_MAX_LEVEL: 0x813D;
    readonly MIN: 0x8007;
    readonly MAX: 0x8008;
    readonly DEPTH_COMPONENT24: 0x81A6;
    readonly MAX_TEXTURE_LOD_BIAS: 0x84FD;
    readonly TEXTURE_COMPARE_MODE: 0x884C;
    readonly TEXTURE_COMPARE_FUNC: 0x884D;
    readonly CURRENT_QUERY: 0x8865;
    readonly QUERY_RESULT: 0x8866;
    readonly QUERY_RESULT_AVAILABLE: 0x8867;
    readonly STREAM_READ: 0x88E1;
    readonly STREAM_COPY: 0x88E2;
    readonly STATIC_READ: 0x88E5;
    readonly STATIC_COPY: 0x88E6;
    readonly DYNAMIC_READ: 0x88E9;
    readonly DYNAMIC_COPY: 0x88EA;
    readonly MAX_DRAW_BUFFERS: 0x8824;
    readonly DRAW_BUFFER0: 0x8825;
    readonly DRAW_BUFFER1: 0x8826;
    readonly DRAW_BUFFER2: 0x8827;
    readonly DRAW_BUFFER3: 0x8828;
    readonly DRAW_BUFFER4: 0x8829;
    readonly DRAW_BUFFER5: 0x882A;
    readonly DRAW_BUFFER6: 0x882B;
    readonly DRAW_BUFFER7: 0x882C;
    readonly DRAW_BUFFER8: 0x882D;
    readonly DRAW_BUFFER9: 0x882E;
    readonly DRAW_BUFFER10: 0x882F;
    readonly DRAW_BUFFER11: 0x8830;
    readonly DRAW_BUFFER12: 0x8831;
    readonly DRAW_BUFFER13: 0x8832;
    readonly DRAW_BUFFER14: 0x8833;
    readonly DRAW_BUFFER15: 0x8834;
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49;
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A;
    readonly SAMPLER_3D: 0x8B5F;
    readonly SAMPLER_2D_SHADOW: 0x8B62;
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B;
    readonly PIXEL_PACK_BUFFER: 0x88EB;
    readonly PIXEL_UNPACK_BUFFER: 0x88EC;
    readonly PIXEL_PACK_BUFFER_BINDING: 0x88ED;
    readonly PIXEL_UNPACK_BUFFER_BINDING: 0x88EF;
    readonly FLOAT_MAT2x3: 0x8B65;
    readonly FLOAT_MAT2x4: 0x8B66;
    readonly FLOAT_MAT3x2: 0x8B67;
    readonly FLOAT_MAT3x4: 0x8B68;
    readonly FLOAT_MAT4x2: 0x8B69;
    readonly FLOAT_MAT4x3: 0x8B6A;
    readonly SRGB: 0x8C40;
    readonly SRGB8: 0x8C41;
    readonly SRGB8_ALPHA8: 0x8C43;
    readonly COMPARE_REF_TO_TEXTURE: 0x884E;
    readonly RGBA32F: 0x8814;
    readonly RGB32F: 0x8815;
    readonly RGBA16F: 0x881A;
    readonly RGB16F: 0x881B;
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD;
    readonly MAX_ARRAY_TEXTURE_LAYERS: 0x88FF;
    readonly MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
    readonly MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
    readonly MAX_VARYING_COMPONENTS: 0x8B4B;
    readonly TEXTURE_2D_ARRAY: 0x8C1A;
    readonly TEXTURE_BINDING_2D_ARRAY: 0x8C1D;
    readonly R11F_G11F_B10F: 0x8C3A;
    readonly UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B;
    readonly RGB9_E5: 0x8C3D;
    readonly UNSIGNED_INT_5_9_9_9_REV: 0x8C3E;
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80;
    readonly TRANSFORM_FEEDBACK_VARYINGS: 0x8C83;
    readonly TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84;
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85;
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88;
    readonly RASTERIZER_DISCARD: 0x8C89;
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B;
    readonly INTERLEAVED_ATTRIBS: 0x8C8C;
    readonly SEPARATE_ATTRIBS: 0x8C8D;
    readonly TRANSFORM_FEEDBACK_BUFFER: 0x8C8E;
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F;
    readonly RGBA32UI: 0x8D70;
    readonly RGB32UI: 0x8D71;
    readonly RGBA16UI: 0x8D76;
    readonly RGB16UI: 0x8D77;
    readonly RGBA8UI: 0x8D7C;
    readonly RGB8UI: 0x8D7D;
    readonly RGBA32I: 0x8D82;
    readonly RGB32I: 0x8D83;
    readonly RGBA16I: 0x8D88;
    readonly RGB16I: 0x8D89;
    readonly RGBA8I: 0x8D8E;
    readonly RGB8I: 0x8D8F;
    readonly RED_INTEGER: 0x8D94;
    readonly RGB_INTEGER: 0x8D98;
    readonly RGBA_INTEGER: 0x8D99;
    readonly SAMPLER_2D_ARRAY: 0x8DC1;
    readonly SAMPLER_2D_ARRAY_SHADOW: 0x8DC4;
    readonly SAMPLER_CUBE_SHADOW: 0x8DC5;
    readonly UNSIGNED_INT_VEC2: 0x8DC6;
    readonly UNSIGNED_INT_VEC3: 0x8DC7;
    readonly UNSIGNED_INT_VEC4: 0x8DC8;
    readonly INT_SAMPLER_2D: 0x8DCA;
    readonly INT_SAMPLER_3D: 0x8DCB;
    readonly INT_SAMPLER_CUBE: 0x8DCC;
    readonly INT_SAMPLER_2D_ARRAY: 0x8DCF;
    readonly UNSIGNED_INT_SAMPLER_2D: 0x8DD2;
    readonly UNSIGNED_INT_SAMPLER_3D: 0x8DD3;
    readonly UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4;
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7;
    readonly DEPTH_COMPONENT32F: 0x8CAC;
    readonly DEPTH32F_STENCIL8: 0x8CAD;
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
    readonly FRAMEBUFFER_DEFAULT: 0x8218;
    readonly UNSIGNED_INT_24_8: 0x84FA;
    readonly DEPTH24_STENCIL8: 0x88F0;
    readonly UNSIGNED_NORMALIZED: 0x8C17;
    readonly DRAW_FRAMEBUFFER_BINDING: 0x8CA6;
    readonly READ_FRAMEBUFFER: 0x8CA8;
    readonly DRAW_FRAMEBUFFER: 0x8CA9;
    readonly READ_FRAMEBUFFER_BINDING: 0x8CAA;
    readonly RENDERBUFFER_SAMPLES: 0x8CAB;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4;
    readonly MAX_COLOR_ATTACHMENTS: 0x8CDF;
    readonly COLOR_ATTACHMENT1: 0x8CE1;
    readonly COLOR_ATTACHMENT2: 0x8CE2;
    readonly COLOR_ATTACHMENT3: 0x8CE3;
    readonly COLOR_ATTACHMENT4: 0x8CE4;
    readonly COLOR_ATTACHMENT5: 0x8CE5;
    readonly COLOR_ATTACHMENT6: 0x8CE6;
    readonly COLOR_ATTACHMENT7: 0x8CE7;
    readonly COLOR_ATTACHMENT8: 0x8CE8;
    readonly COLOR_ATTACHMENT9: 0x8CE9;
    readonly COLOR_ATTACHMENT10: 0x8CEA;
    readonly COLOR_ATTACHMENT11: 0x8CEB;
    readonly COLOR_ATTACHMENT12: 0x8CEC;
    readonly COLOR_ATTACHMENT13: 0x8CED;
    readonly COLOR_ATTACHMENT14: 0x8CEE;
    readonly COLOR_ATTACHMENT15: 0x8CEF;
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56;
    readonly MAX_SAMPLES: 0x8D57;
    readonly HALF_FLOAT: 0x140B;
    readonly RG: 0x8227;
    readonly RG_INTEGER: 0x8228;
    readonly R8: 0x8229;
    readonly RG8: 0x822B;
    readonly R16F: 0x822D;
    readonly R32F: 0x822E;
    readonly RG16F: 0x822F;
    readonly RG32F: 0x8230;
    readonly R8I: 0x8231;
    readonly R8UI: 0x8232;
    readonly R16I: 0x8233;
    readonly R16UI: 0x8234;
    readonly R32I: 0x8235;
    readonly R32UI: 0x8236;
    readonly RG8I: 0x8237;
    readonly RG8UI: 0x8238;
    readonly RG16I: 0x8239;
    readonly RG16UI: 0x823A;
    readonly RG32I: 0x823B;
    readonly RG32UI: 0x823C;
    readonly VERTEX_ARRAY_BINDING: 0x85B5;
    readonly R8_SNORM: 0x8F94;
    readonly RG8_SNORM: 0x8F95;
    readonly RGB8_SNORM: 0x8F96;
    readonly RGBA8_SNORM: 0x8F97;
    readonly SIGNED_NORMALIZED: 0x8F9C;
    readonly COPY_READ_BUFFER: 0x8F36;
    readonly COPY_WRITE_BUFFER: 0x8F37;
    readonly COPY_READ_BUFFER_BINDING: 0x8F36;
    readonly COPY_WRITE_BUFFER_BINDING: 0x8F37;
    readonly UNIFORM_BUFFER: 0x8A11;
    readonly UNIFORM_BUFFER_BINDING: 0x8A28;
    readonly UNIFORM_BUFFER_START: 0x8A29;
    readonly UNIFORM_BUFFER_SIZE: 0x8A2A;
    readonly MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B;
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D;
    readonly MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E;
    readonly MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F;
    readonly MAX_UNIFORM_BLOCK_SIZE: 0x8A30;
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31;
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33;
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34;
    readonly ACTIVE_UNIFORM_BLOCKS: 0x8A36;
    readonly UNIFORM_TYPE: 0x8A37;
    readonly UNIFORM_SIZE: 0x8A38;
    readonly UNIFORM_BLOCK_INDEX: 0x8A3A;
    readonly UNIFORM_OFFSET: 0x8A3B;
    readonly UNIFORM_ARRAY_STRIDE: 0x8A3C;
    readonly UNIFORM_MATRIX_STRIDE: 0x8A3D;
    readonly UNIFORM_IS_ROW_MAJOR: 0x8A3E;
    readonly UNIFORM_BLOCK_BINDING: 0x8A3F;
    readonly UNIFORM_BLOCK_DATA_SIZE: 0x8A40;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43;
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44;
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46;
    readonly INVALID_INDEX: 0xFFFFFFFF;
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
    readonly MAX_SERVER_WAIT_TIMEOUT: 0x9111;
    readonly OBJECT_TYPE: 0x9112;
    readonly SYNC_CONDITION: 0x9113;
    readonly SYNC_STATUS: 0x9114;
    readonly SYNC_FLAGS: 0x9115;
    readonly SYNC_FENCE: 0x9116;
    readonly SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
    readonly UNSIGNALED: 0x9118;
    readonly SIGNALED: 0x9119;
    readonly ALREADY_SIGNALED: 0x911A;
    readonly TIMEOUT_EXPIRED: 0x911B;
    readonly CONDITION_SATISFIED: 0x911C;
    readonly WAIT_FAILED: 0x911D;
    readonly SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE;
    readonly ANY_SAMPLES_PASSED: 0x8C2F;
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A;
    readonly SAMPLER_BINDING: 0x8919;
    readonly RGB10_A2UI: 0x906F;
    readonly INT_2_10_10_10_REV: 0x8D9F;
    readonly TRANSFORM_FEEDBACK: 0x8E22;
    readonly TRANSFORM_FEEDBACK_PAUSED: 0x8E23;
    readonly TRANSFORM_FEEDBACK_ACTIVE: 0x8E24;
    readonly TRANSFORM_FEEDBACK_BINDING: 0x8E25;
    readonly TEXTURE_IMMUTABLE_FORMAT: 0x912F;
    readonly MAX_ELEMENT_INDEX: 0x8D6B;
    readonly TEXTURE_IMMUTABLE_LEVELS: 0x82DF;
    readonly TIMEOUT_IGNORED: -1;
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    readonly COLOR_BUFFER_BIT: 0x00004000;
    readonly POINTS: 0x0000;
    readonly LINES: 0x0001;
    readonly LINE_LOOP: 0x0002;
    readonly LINE_STRIP: 0x0003;
    readonly TRIANGLES: 0x0004;
    readonly TRIANGLE_STRIP: 0x0005;
    readonly TRIANGLE_FAN: 0x0006;
    readonly ZERO: 0;
    readonly ONE: 1;
    readonly SRC_COLOR: 0x0300;
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    readonly SRC_ALPHA: 0x0302;
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    readonly DST_ALPHA: 0x0304;
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    readonly DST_COLOR: 0x0306;
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    readonly SRC_ALPHA_SATURATE: 0x0308;
    readonly FUNC_ADD: 0x8006;
    readonly BLEND_EQUATION: 0x8009;
    readonly BLEND_EQUATION_RGB: 0x8009;
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    readonly FUNC_SUBTRACT: 0x800A;
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    readonly BLEND_DST_RGB: 0x80C8;
    readonly BLEND_SRC_RGB: 0x80C9;
    readonly BLEND_DST_ALPHA: 0x80CA;
    readonly BLEND_SRC_ALPHA: 0x80CB;
    readonly CONSTANT_COLOR: 0x8001;
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    readonly CONSTANT_ALPHA: 0x8003;
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    readonly BLEND_COLOR: 0x8005;
    readonly ARRAY_BUFFER: 0x8892;
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    readonly STREAM_DRAW: 0x88E0;
    readonly STATIC_DRAW: 0x88E4;
    readonly DYNAMIC_DRAW: 0x88E8;
    readonly BUFFER_SIZE: 0x8764;
    readonly BUFFER_USAGE: 0x8765;
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    readonly FRONT: 0x0404;
    readonly BACK: 0x0405;
    readonly FRONT_AND_BACK: 0x0408;
    readonly CULL_FACE: 0x0B44;
    readonly BLEND: 0x0BE2;
    readonly DITHER: 0x0BD0;
    readonly STENCIL_TEST: 0x0B90;
    readonly DEPTH_TEST: 0x0B71;
    readonly SCISSOR_TEST: 0x0C11;
    readonly POLYGON_OFFSET_FILL: 0x8037;
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    readonly SAMPLE_COVERAGE: 0x80A0;
    readonly NO_ERROR: 0;
    readonly INVALID_ENUM: 0x0500;
    readonly INVALID_VALUE: 0x0501;
    readonly INVALID_OPERATION: 0x0502;
    readonly OUT_OF_MEMORY: 0x0505;
    readonly CW: 0x0900;
    readonly CCW: 0x0901;
    readonly LINE_WIDTH: 0x0B21;
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    readonly CULL_FACE_MODE: 0x0B45;
    readonly FRONT_FACE: 0x0B46;
    readonly DEPTH_RANGE: 0x0B70;
    readonly DEPTH_WRITEMASK: 0x0B72;
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    readonly DEPTH_FUNC: 0x0B74;
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    readonly STENCIL_FUNC: 0x0B92;
    readonly STENCIL_FAIL: 0x0B94;
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    readonly STENCIL_REF: 0x0B97;
    readonly STENCIL_VALUE_MASK: 0x0B93;
    readonly STENCIL_WRITEMASK: 0x0B98;
    readonly STENCIL_BACK_FUNC: 0x8800;
    readonly STENCIL_BACK_FAIL: 0x8801;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    readonly STENCIL_BACK_REF: 0x8CA3;
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    readonly VIEWPORT: 0x0BA2;
    readonly SCISSOR_BOX: 0x0C10;
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    readonly COLOR_WRITEMASK: 0x0C23;
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    readonly PACK_ALIGNMENT: 0x0D05;
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    readonly SUBPIXEL_BITS: 0x0D50;
    readonly RED_BITS: 0x0D52;
    readonly GREEN_BITS: 0x0D53;
    readonly BLUE_BITS: 0x0D54;
    readonly ALPHA_BITS: 0x0D55;
    readonly DEPTH_BITS: 0x0D56;
    readonly STENCIL_BITS: 0x0D57;
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    readonly TEXTURE_BINDING_2D: 0x8069;
    readonly SAMPLE_BUFFERS: 0x80A8;
    readonly SAMPLES: 0x80A9;
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    readonly DONT_CARE: 0x1100;
    readonly FASTEST: 0x1101;
    readonly NICEST: 0x1102;
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    readonly BYTE: 0x1400;
    readonly UNSIGNED_BYTE: 0x1401;
    readonly SHORT: 0x1402;
    readonly UNSIGNED_SHORT: 0x1403;
    readonly INT: 0x1404;
    readonly UNSIGNED_INT: 0x1405;
    readonly FLOAT: 0x1406;
    readonly DEPTH_COMPONENT: 0x1902;
    readonly ALPHA: 0x1906;
    readonly RGB: 0x1907;
    readonly RGBA: 0x1908;
    readonly LUMINANCE: 0x1909;
    readonly LUMINANCE_ALPHA: 0x190A;
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    readonly FRAGMENT_SHADER: 0x8B30;
    readonly VERTEX_SHADER: 0x8B31;
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    readonly SHADER_TYPE: 0x8B4F;
    readonly DELETE_STATUS: 0x8B80;
    readonly LINK_STATUS: 0x8B82;
    readonly VALIDATE_STATUS: 0x8B83;
    readonly ATTACHED_SHADERS: 0x8B85;
    readonly ACTIVE_UNIFORMS: 0x8B86;
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    readonly CURRENT_PROGRAM: 0x8B8D;
    readonly NEVER: 0x0200;
    readonly LESS: 0x0201;
    readonly EQUAL: 0x0202;
    readonly LEQUAL: 0x0203;
    readonly GREATER: 0x0204;
    readonly NOTEQUAL: 0x0205;
    readonly GEQUAL: 0x0206;
    readonly ALWAYS: 0x0207;
    readonly KEEP: 0x1E00;
    readonly REPLACE: 0x1E01;
    readonly INCR: 0x1E02;
    readonly DECR: 0x1E03;
    readonly INVERT: 0x150A;
    readonly INCR_WRAP: 0x8507;
    readonly DECR_WRAP: 0x8508;
    readonly VENDOR: 0x1F00;
    readonly RENDERER: 0x1F01;
    readonly VERSION: 0x1F02;
    readonly NEAREST: 0x2600;
    readonly LINEAR: 0x2601;
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    readonly TEXTURE_MAG_FILTER: 0x2800;
    readonly TEXTURE_MIN_FILTER: 0x2801;
    readonly TEXTURE_WRAP_S: 0x2802;
    readonly TEXTURE_WRAP_T: 0x2803;
    readonly TEXTURE_2D: 0x0DE1;
    readonly TEXTURE: 0x1702;
    readonly TEXTURE_CUBE_MAP: 0x8513;
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    readonly TEXTURE0: 0x84C0;
    readonly TEXTURE1: 0x84C1;
    readonly TEXTURE2: 0x84C2;
    readonly TEXTURE3: 0x84C3;
    readonly TEXTURE4: 0x84C4;
    readonly TEXTURE5: 0x84C5;
    readonly TEXTURE6: 0x84C6;
    readonly TEXTURE7: 0x84C7;
    readonly TEXTURE8: 0x84C8;
    readonly TEXTURE9: 0x84C9;
    readonly TEXTURE10: 0x84CA;
    readonly TEXTURE11: 0x84CB;
    readonly TEXTURE12: 0x84CC;
    readonly TEXTURE13: 0x84CD;
    readonly TEXTURE14: 0x84CE;
    readonly TEXTURE15: 0x84CF;
    readonly TEXTURE16: 0x84D0;
    readonly TEXTURE17: 0x84D1;
    readonly TEXTURE18: 0x84D2;
    readonly TEXTURE19: 0x84D3;
    readonly TEXTURE20: 0x84D4;
    readonly TEXTURE21: 0x84D5;
    readonly TEXTURE22: 0x84D6;
    readonly TEXTURE23: 0x84D7;
    readonly TEXTURE24: 0x84D8;
    readonly TEXTURE25: 0x84D9;
    readonly TEXTURE26: 0x84DA;
    readonly TEXTURE27: 0x84DB;
    readonly TEXTURE28: 0x84DC;
    readonly TEXTURE29: 0x84DD;
    readonly TEXTURE30: 0x84DE;
    readonly TEXTURE31: 0x84DF;
    readonly ACTIVE_TEXTURE: 0x84E0;
    readonly REPEAT: 0x2901;
    readonly CLAMP_TO_EDGE: 0x812F;
    readonly MIRRORED_REPEAT: 0x8370;
    readonly FLOAT_VEC2: 0x8B50;
    readonly FLOAT_VEC3: 0x8B51;
    readonly FLOAT_VEC4: 0x8B52;
    readonly INT_VEC2: 0x8B53;
    readonly INT_VEC3: 0x8B54;
    readonly INT_VEC4: 0x8B55;
    readonly BOOL: 0x8B56;
    readonly BOOL_VEC2: 0x8B57;
    readonly BOOL_VEC3: 0x8B58;
    readonly BOOL_VEC4: 0x8B59;
    readonly FLOAT_MAT2: 0x8B5A;
    readonly FLOAT_MAT3: 0x8B5B;
    readonly FLOAT_MAT4: 0x8B5C;
    readonly SAMPLER_2D: 0x8B5E;
    readonly SAMPLER_CUBE: 0x8B60;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    readonly COMPILE_STATUS: 0x8B81;
    readonly LOW_FLOAT: 0x8DF0;
    readonly MEDIUM_FLOAT: 0x8DF1;
    readonly HIGH_FLOAT: 0x8DF2;
    readonly LOW_INT: 0x8DF3;
    readonly MEDIUM_INT: 0x8DF4;
    readonly HIGH_INT: 0x8DF5;
    readonly FRAMEBUFFER: 0x8D40;
    readonly RENDERBUFFER: 0x8D41;
    readonly RGBA4: 0x8056;
    readonly RGB5_A1: 0x8057;
    readonly RGB565: 0x8D62;
    readonly DEPTH_COMPONENT16: 0x81A5;
    readonly STENCIL_INDEX8: 0x8D48;
    readonly DEPTH_STENCIL: 0x84F9;
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    readonly DEPTH_ATTACHMENT: 0x8D00;
    readonly STENCIL_ATTACHMENT: 0x8D20;
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    readonly NONE: 0;
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
};
interface WebGL2RenderingContextBase {
    beginQuery(target: GLenum, query: WebGLQuery): void;
    beginTransformFeedback(primitiveMode: GLenum): void;
    bindBufferBase(target: GLenum, index: GLuint, buffer: WebGLBuffer | null): void;
    bindBufferRange(target: GLenum, index: GLuint, buffer: WebGLBuffer | null, offset: GLintptr, size: GLsizeiptr): void;
    bindSampler(unit: GLuint, sampler: WebGLSampler | null): void;
    bindTransformFeedback(target: GLenum, tf: WebGLTransformFeedback | null): void;
    bindVertexArray(array: WebGLVertexArrayObject | null): void;
    blitFramebuffer(srcX0: GLint, srcY0: GLint, srcX1: GLint, srcY1: GLint, dstX0: GLint, dstY0: GLint, dstX1: GLint, dstY1: GLint, mask: GLbitfield, filter: GLenum): void;
    clearBufferfi(buffer: GLenum, drawbuffer: GLint, depth: GLfloat, stencil: GLint): void;
    clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: Float32List, srcOffset?: GLuint): void;
    clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: Int32List, srcOffset?: GLuint): void;
    clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: Uint32List, srcOffset?: GLuint): void;
    clientWaitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum;
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
    copyBufferSubData(readTarget: GLenum, writeTarget: GLenum, readOffset: GLintptr, writeOffset: GLintptr, size: GLsizeiptr): void;
    copyTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createQuery(): WebGLQuery | null;
    createSampler(): WebGLSampler | null;
    createTransformFeedback(): WebGLTransformFeedback | null;
    createVertexArray(): WebGLVertexArrayObject | null;
    deleteQuery(query: WebGLQuery | null): void;
    deleteSampler(sampler: WebGLSampler | null): void;
    deleteSync(sync: WebGLSync | null): void;
    deleteTransformFeedback(tf: WebGLTransformFeedback | null): void;
    deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void;
    drawArraysInstanced(mode: GLenum, first: GLint, count: GLsizei, instanceCount: GLsizei): void;
    drawBuffers(buffers: GLenum[]): void;
    drawElementsInstanced(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, instanceCount: GLsizei): void;
    drawRangeElements(mode: GLenum, start: GLuint, end: GLuint, count: GLsizei, type: GLenum, offset: GLintptr): void;
    endQuery(target: GLenum): void;
    endTransformFeedback(): void;
    fenceSync(condition: GLenum, flags: GLbitfield): WebGLSync | null;
    framebufferTextureLayer(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, layer: GLint): void;
    getActiveUniformBlockName(program: WebGLProgram, uniformBlockIndex: GLuint): string | null;
    getActiveUniformBlockParameter(program: WebGLProgram, uniformBlockIndex: GLuint, pname: GLenum): any;
    getActiveUniforms(program: WebGLProgram, uniformIndices: GLuint[], pname: GLenum): any;
    getBufferSubData(target: GLenum, srcByteOffset: GLintptr, dstBuffer: ArrayBufferView, dstOffset?: GLuint, length?: GLuint): void;
    getFragDataLocation(program: WebGLProgram, name: string): GLint;
    getIndexedParameter(target: GLenum, index: GLuint): any;
    getInternalformatParameter(target: GLenum, internalformat: GLenum, pname: GLenum): any;
    getQuery(target: GLenum, pname: GLenum): WebGLQuery | null;
    getQueryParameter(query: WebGLQuery, pname: GLenum): any;
    getSamplerParameter(sampler: WebGLSampler, pname: GLenum): any;
    getSyncParameter(sync: WebGLSync, pname: GLenum): any;
    getTransformFeedbackVarying(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): GLuint;
    getUniformIndices(program: WebGLProgram, uniformNames: string[]): GLuint[] | null;
    invalidateFramebuffer(target: GLenum, attachments: GLenum[]): void;
    invalidateSubFramebuffer(target: GLenum, attachments: GLenum[], x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    isQuery(query: WebGLQuery | null): GLboolean;
    isSampler(sampler: WebGLSampler | null): GLboolean;
    isSync(sync: WebGLSync | null): GLboolean;
    isTransformFeedback(tf: WebGLTransformFeedback | null): GLboolean;
    isVertexArray(vertexArray: WebGLVertexArrayObject | null): GLboolean;
    pauseTransformFeedback(): void;
    readBuffer(src: GLenum): void;
    renderbufferStorageMultisample(target: GLenum, samples: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    resumeTransformFeedback(): void;
    samplerParameterf(sampler: WebGLSampler, pname: GLenum, param: GLfloat): void;
    samplerParameteri(sampler: WebGLSampler, pname: GLenum, param: GLint): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView | null): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void;
    texStorage2D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    texStorage3D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView | null, srcOffset?: GLuint): void;
    transformFeedbackVaryings(program: WebGLProgram, varyings: string[], bufferMode: GLenum): void;
    uniform1ui(location: WebGLUniformLocation | null, v0: GLuint): void;
    uniform1uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform2ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint): void;
    uniform2uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform3ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint): void;
    uniform3uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform4ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint, v3: GLuint): void;
    uniform4uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: GLuint, uniformBlockBinding: GLuint): void;
    uniformMatrix2x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix2x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix3x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix3x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix4x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix4x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    vertexAttribDivisor(index: GLuint, divisor: GLuint): void;
    vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;
    vertexAttribI4iv(index: GLuint, values: Int32List): void;
    vertexAttribI4ui(index: GLuint, x: GLuint, y: GLuint, z: GLuint, w: GLuint): void;
    vertexAttribI4uiv(index: GLuint, values: Uint32List): void;
    vertexAttribIPointer(index: GLuint, size: GLint, type: GLenum, stride: GLsizei, offset: GLintptr): void;
    waitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void;
    readonly READ_BUFFER: 0x0C02;
    readonly UNPACK_ROW_LENGTH: 0x0CF2;
    readonly UNPACK_SKIP_ROWS: 0x0CF3;
    readonly UNPACK_SKIP_PIXELS: 0x0CF4;
    readonly PACK_ROW_LENGTH: 0x0D02;
    readonly PACK_SKIP_ROWS: 0x0D03;
    readonly PACK_SKIP_PIXELS: 0x0D04;
    readonly COLOR: 0x1800;
    readonly DEPTH: 0x1801;
    readonly STENCIL: 0x1802;
    readonly RED: 0x1903;
    readonly RGB8: 0x8051;
    readonly RGBA8: 0x8058;
    readonly RGB10_A2: 0x8059;
    readonly TEXTURE_BINDING_3D: 0x806A;
    readonly UNPACK_SKIP_IMAGES: 0x806D;
    readonly UNPACK_IMAGE_HEIGHT: 0x806E;
    readonly TEXTURE_3D: 0x806F;
    readonly TEXTURE_WRAP_R: 0x8072;
    readonly MAX_3D_TEXTURE_SIZE: 0x8073;
    readonly UNSIGNED_INT_2_10_10_10_REV: 0x8368;
    readonly MAX_ELEMENTS_VERTICES: 0x80E8;
    readonly MAX_ELEMENTS_INDICES: 0x80E9;
    readonly TEXTURE_MIN_LOD: 0x813A;
    readonly TEXTURE_MAX_LOD: 0x813B;
    readonly TEXTURE_BASE_LEVEL: 0x813C;
    readonly TEXTURE_MAX_LEVEL: 0x813D;
    readonly MIN: 0x8007;
    readonly MAX: 0x8008;
    readonly DEPTH_COMPONENT24: 0x81A6;
    readonly MAX_TEXTURE_LOD_BIAS: 0x84FD;
    readonly TEXTURE_COMPARE_MODE: 0x884C;
    readonly TEXTURE_COMPARE_FUNC: 0x884D;
    readonly CURRENT_QUERY: 0x8865;
    readonly QUERY_RESULT: 0x8866;
    readonly QUERY_RESULT_AVAILABLE: 0x8867;
    readonly STREAM_READ: 0x88E1;
    readonly STREAM_COPY: 0x88E2;
    readonly STATIC_READ: 0x88E5;
    readonly STATIC_COPY: 0x88E6;
    readonly DYNAMIC_READ: 0x88E9;
    readonly DYNAMIC_COPY: 0x88EA;
    readonly MAX_DRAW_BUFFERS: 0x8824;
    readonly DRAW_BUFFER0: 0x8825;
    readonly DRAW_BUFFER1: 0x8826;
    readonly DRAW_BUFFER2: 0x8827;
    readonly DRAW_BUFFER3: 0x8828;
    readonly DRAW_BUFFER4: 0x8829;
    readonly DRAW_BUFFER5: 0x882A;
    readonly DRAW_BUFFER6: 0x882B;
    readonly DRAW_BUFFER7: 0x882C;
    readonly DRAW_BUFFER8: 0x882D;
    readonly DRAW_BUFFER9: 0x882E;
    readonly DRAW_BUFFER10: 0x882F;
    readonly DRAW_BUFFER11: 0x8830;
    readonly DRAW_BUFFER12: 0x8831;
    readonly DRAW_BUFFER13: 0x8832;
    readonly DRAW_BUFFER14: 0x8833;
    readonly DRAW_BUFFER15: 0x8834;
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49;
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A;
    readonly SAMPLER_3D: 0x8B5F;
    readonly SAMPLER_2D_SHADOW: 0x8B62;
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B;
    readonly PIXEL_PACK_BUFFER: 0x88EB;
    readonly PIXEL_UNPACK_BUFFER: 0x88EC;
    readonly PIXEL_PACK_BUFFER_BINDING: 0x88ED;
    readonly PIXEL_UNPACK_BUFFER_BINDING: 0x88EF;
    readonly FLOAT_MAT2x3: 0x8B65;
    readonly FLOAT_MAT2x4: 0x8B66;
    readonly FLOAT_MAT3x2: 0x8B67;
    readonly FLOAT_MAT3x4: 0x8B68;
    readonly FLOAT_MAT4x2: 0x8B69;
    readonly FLOAT_MAT4x3: 0x8B6A;
    readonly SRGB: 0x8C40;
    readonly SRGB8: 0x8C41;
    readonly SRGB8_ALPHA8: 0x8C43;
    readonly COMPARE_REF_TO_TEXTURE: 0x884E;
    readonly RGBA32F: 0x8814;
    readonly RGB32F: 0x8815;
    readonly RGBA16F: 0x881A;
    readonly RGB16F: 0x881B;
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD;
    readonly MAX_ARRAY_TEXTURE_LAYERS: 0x88FF;
    readonly MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
    readonly MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
    readonly MAX_VARYING_COMPONENTS: 0x8B4B;
    readonly TEXTURE_2D_ARRAY: 0x8C1A;
    readonly TEXTURE_BINDING_2D_ARRAY: 0x8C1D;
    readonly R11F_G11F_B10F: 0x8C3A;
    readonly UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B;
    readonly RGB9_E5: 0x8C3D;
    readonly UNSIGNED_INT_5_9_9_9_REV: 0x8C3E;
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80;
    readonly TRANSFORM_FEEDBACK_VARYINGS: 0x8C83;
    readonly TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84;
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85;
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88;
    readonly RASTERIZER_DISCARD: 0x8C89;
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B;
    readonly INTERLEAVED_ATTRIBS: 0x8C8C;
    readonly SEPARATE_ATTRIBS: 0x8C8D;
    readonly TRANSFORM_FEEDBACK_BUFFER: 0x8C8E;
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F;
    readonly RGBA32UI: 0x8D70;
    readonly RGB32UI: 0x8D71;
    readonly RGBA16UI: 0x8D76;
    readonly RGB16UI: 0x8D77;
    readonly RGBA8UI: 0x8D7C;
    readonly RGB8UI: 0x8D7D;
    readonly RGBA32I: 0x8D82;
    readonly RGB32I: 0x8D83;
    readonly RGBA16I: 0x8D88;
    readonly RGB16I: 0x8D89;
    readonly RGBA8I: 0x8D8E;
    readonly RGB8I: 0x8D8F;
    readonly RED_INTEGER: 0x8D94;
    readonly RGB_INTEGER: 0x8D98;
    readonly RGBA_INTEGER: 0x8D99;
    readonly SAMPLER_2D_ARRAY: 0x8DC1;
    readonly SAMPLER_2D_ARRAY_SHADOW: 0x8DC4;
    readonly SAMPLER_CUBE_SHADOW: 0x8DC5;
    readonly UNSIGNED_INT_VEC2: 0x8DC6;
    readonly UNSIGNED_INT_VEC3: 0x8DC7;
    readonly UNSIGNED_INT_VEC4: 0x8DC8;
    readonly INT_SAMPLER_2D: 0x8DCA;
    readonly INT_SAMPLER_3D: 0x8DCB;
    readonly INT_SAMPLER_CUBE: 0x8DCC;
    readonly INT_SAMPLER_2D_ARRAY: 0x8DCF;
    readonly UNSIGNED_INT_SAMPLER_2D: 0x8DD2;
    readonly UNSIGNED_INT_SAMPLER_3D: 0x8DD3;
    readonly UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4;
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7;
    readonly DEPTH_COMPONENT32F: 0x8CAC;
    readonly DEPTH32F_STENCIL8: 0x8CAD;
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
    readonly FRAMEBUFFER_DEFAULT: 0x8218;
    readonly UNSIGNED_INT_24_8: 0x84FA;
    readonly DEPTH24_STENCIL8: 0x88F0;
    readonly UNSIGNED_NORMALIZED: 0x8C17;
    readonly DRAW_FRAMEBUFFER_BINDING: 0x8CA6;
    readonly READ_FRAMEBUFFER: 0x8CA8;
    readonly DRAW_FRAMEBUFFER: 0x8CA9;
    readonly READ_FRAMEBUFFER_BINDING: 0x8CAA;
    readonly RENDERBUFFER_SAMPLES: 0x8CAB;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4;
    readonly MAX_COLOR_ATTACHMENTS: 0x8CDF;
    readonly COLOR_ATTACHMENT1: 0x8CE1;
    readonly COLOR_ATTACHMENT2: 0x8CE2;
    readonly COLOR_ATTACHMENT3: 0x8CE3;
    readonly COLOR_ATTACHMENT4: 0x8CE4;
    readonly COLOR_ATTACHMENT5: 0x8CE5;
    readonly COLOR_ATTACHMENT6: 0x8CE6;
    readonly COLOR_ATTACHMENT7: 0x8CE7;
    readonly COLOR_ATTACHMENT8: 0x8CE8;
    readonly COLOR_ATTACHMENT9: 0x8CE9;
    readonly COLOR_ATTACHMENT10: 0x8CEA;
    readonly COLOR_ATTACHMENT11: 0x8CEB;
    readonly COLOR_ATTACHMENT12: 0x8CEC;
    readonly COLOR_ATTACHMENT13: 0x8CED;
    readonly COLOR_ATTACHMENT14: 0x8CEE;
    readonly COLOR_ATTACHMENT15: 0x8CEF;
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56;
    readonly MAX_SAMPLES: 0x8D57;
    readonly HALF_FLOAT: 0x140B;
    readonly RG: 0x8227;
    readonly RG_INTEGER: 0x8228;
    readonly R8: 0x8229;
    readonly RG8: 0x822B;
    readonly R16F: 0x822D;
    readonly R32F: 0x822E;
    readonly RG16F: 0x822F;
    readonly RG32F: 0x8230;
    readonly R8I: 0x8231;
    readonly R8UI: 0x8232;
    readonly R16I: 0x8233;
    readonly R16UI: 0x8234;
    readonly R32I: 0x8235;
    readonly R32UI: 0x8236;
    readonly RG8I: 0x8237;
    readonly RG8UI: 0x8238;
    readonly RG16I: 0x8239;
    readonly RG16UI: 0x823A;
    readonly RG32I: 0x823B;
    readonly RG32UI: 0x823C;
    readonly VERTEX_ARRAY_BINDING: 0x85B5;
    readonly R8_SNORM: 0x8F94;
    readonly RG8_SNORM: 0x8F95;
    readonly RGB8_SNORM: 0x8F96;
    readonly RGBA8_SNORM: 0x8F97;
    readonly SIGNED_NORMALIZED: 0x8F9C;
    readonly COPY_READ_BUFFER: 0x8F36;
    readonly COPY_WRITE_BUFFER: 0x8F37;
    readonly COPY_READ_BUFFER_BINDING: 0x8F36;
    readonly COPY_WRITE_BUFFER_BINDING: 0x8F37;
    readonly UNIFORM_BUFFER: 0x8A11;
    readonly UNIFORM_BUFFER_BINDING: 0x8A28;
    readonly UNIFORM_BUFFER_START: 0x8A29;
    readonly UNIFORM_BUFFER_SIZE: 0x8A2A;
    readonly MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B;
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D;
    readonly MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E;
    readonly MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F;
    readonly MAX_UNIFORM_BLOCK_SIZE: 0x8A30;
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31;
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33;
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34;
    readonly ACTIVE_UNIFORM_BLOCKS: 0x8A36;
    readonly UNIFORM_TYPE: 0x8A37;
    readonly UNIFORM_SIZE: 0x8A38;
    readonly UNIFORM_BLOCK_INDEX: 0x8A3A;
    readonly UNIFORM_OFFSET: 0x8A3B;
    readonly UNIFORM_ARRAY_STRIDE: 0x8A3C;
    readonly UNIFORM_MATRIX_STRIDE: 0x8A3D;
    readonly UNIFORM_IS_ROW_MAJOR: 0x8A3E;
    readonly UNIFORM_BLOCK_BINDING: 0x8A3F;
    readonly UNIFORM_BLOCK_DATA_SIZE: 0x8A40;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43;
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44;
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46;
    readonly INVALID_INDEX: 0xFFFFFFFF;
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
    readonly MAX_SERVER_WAIT_TIMEOUT: 0x9111;
    readonly OBJECT_TYPE: 0x9112;
    readonly SYNC_CONDITION: 0x9113;
    readonly SYNC_STATUS: 0x9114;
    readonly SYNC_FLAGS: 0x9115;
    readonly SYNC_FENCE: 0x9116;
    readonly SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
    readonly UNSIGNALED: 0x9118;
    readonly SIGNALED: 0x9119;
    readonly ALREADY_SIGNALED: 0x911A;
    readonly TIMEOUT_EXPIRED: 0x911B;
    readonly CONDITION_SATISFIED: 0x911C;
    readonly WAIT_FAILED: 0x911D;
    readonly SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE;
    readonly ANY_SAMPLES_PASSED: 0x8C2F;
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A;
    readonly SAMPLER_BINDING: 0x8919;
    readonly RGB10_A2UI: 0x906F;
    readonly INT_2_10_10_10_REV: 0x8D9F;
    readonly TRANSFORM_FEEDBACK: 0x8E22;
    readonly TRANSFORM_FEEDBACK_PAUSED: 0x8E23;
    readonly TRANSFORM_FEEDBACK_ACTIVE: 0x8E24;
    readonly TRANSFORM_FEEDBACK_BINDING: 0x8E25;
    readonly TEXTURE_IMMUTABLE_FORMAT: 0x912F;
    readonly MAX_ELEMENT_INDEX: 0x8D6B;
    readonly TEXTURE_IMMUTABLE_LEVELS: 0x82DF;
    readonly TIMEOUT_IGNORED: -1;
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
}
interface WebGL2RenderingContextOverloads {
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, srcData: BufferSource | null, usage: GLenum): void;
    bufferData(target: GLenum, srcData: ArrayBufferView, usage: GLenum, srcOffset: GLuint, length?: GLuint): void;
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: BufferSource): void;
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: ArrayBufferView, srcOffset: GLuint, length?: GLuint): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView | null): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, offset: GLintptr): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView, dstOffset: GLuint): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void;
    uniform1fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform1iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform2fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform2iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform3fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform3iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform4fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform4iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void;
}
interface WebGLActiveInfo {
    readonly name: string;
    readonly size: GLint;
    readonly type: GLenum;
}
declare var WebGLActiveInfo: {
    prototype: WebGLActiveInfo;
    new (): WebGLActiveInfo;
};
interface WebGLBuffer {
}
declare var WebGLBuffer: {
    prototype: WebGLBuffer;
    new (): WebGLBuffer;
};
interface WebGLContextEvent extends Event {
    readonly statusMessage: string;
}
declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new (type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent;
};
interface WebGLFramebuffer {
}
declare var WebGLFramebuffer: {
    prototype: WebGLFramebuffer;
    new (): WebGLFramebuffer;
};
interface WebGLProgram {
}
declare var WebGLProgram: {
    prototype: WebGLProgram;
    new (): WebGLProgram;
};
interface WebGLQuery {
}
declare var WebGLQuery: {
    prototype: WebGLQuery;
    new (): WebGLQuery;
};
interface WebGLRenderbuffer {
}
declare var WebGLRenderbuffer: {
    prototype: WebGLRenderbuffer;
    new (): WebGLRenderbuffer;
};
interface WebGLRenderingContext extends WebGLRenderingContextBase, WebGLRenderingContextOverloads {
}
declare var WebGLRenderingContext: {
    prototype: WebGLRenderingContext;
    new (): WebGLRenderingContext;
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    readonly COLOR_BUFFER_BIT: 0x00004000;
    readonly POINTS: 0x0000;
    readonly LINES: 0x0001;
    readonly LINE_LOOP: 0x0002;
    readonly LINE_STRIP: 0x0003;
    readonly TRIANGLES: 0x0004;
    readonly TRIANGLE_STRIP: 0x0005;
    readonly TRIANGLE_FAN: 0x0006;
    readonly ZERO: 0;
    readonly ONE: 1;
    readonly SRC_COLOR: 0x0300;
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    readonly SRC_ALPHA: 0x0302;
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    readonly DST_ALPHA: 0x0304;
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    readonly DST_COLOR: 0x0306;
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    readonly SRC_ALPHA_SATURATE: 0x0308;
    readonly FUNC_ADD: 0x8006;
    readonly BLEND_EQUATION: 0x8009;
    readonly BLEND_EQUATION_RGB: 0x8009;
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    readonly FUNC_SUBTRACT: 0x800A;
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    readonly BLEND_DST_RGB: 0x80C8;
    readonly BLEND_SRC_RGB: 0x80C9;
    readonly BLEND_DST_ALPHA: 0x80CA;
    readonly BLEND_SRC_ALPHA: 0x80CB;
    readonly CONSTANT_COLOR: 0x8001;
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    readonly CONSTANT_ALPHA: 0x8003;
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    readonly BLEND_COLOR: 0x8005;
    readonly ARRAY_BUFFER: 0x8892;
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    readonly STREAM_DRAW: 0x88E0;
    readonly STATIC_DRAW: 0x88E4;
    readonly DYNAMIC_DRAW: 0x88E8;
    readonly BUFFER_SIZE: 0x8764;
    readonly BUFFER_USAGE: 0x8765;
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    readonly FRONT: 0x0404;
    readonly BACK: 0x0405;
    readonly FRONT_AND_BACK: 0x0408;
    readonly CULL_FACE: 0x0B44;
    readonly BLEND: 0x0BE2;
    readonly DITHER: 0x0BD0;
    readonly STENCIL_TEST: 0x0B90;
    readonly DEPTH_TEST: 0x0B71;
    readonly SCISSOR_TEST: 0x0C11;
    readonly POLYGON_OFFSET_FILL: 0x8037;
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    readonly SAMPLE_COVERAGE: 0x80A0;
    readonly NO_ERROR: 0;
    readonly INVALID_ENUM: 0x0500;
    readonly INVALID_VALUE: 0x0501;
    readonly INVALID_OPERATION: 0x0502;
    readonly OUT_OF_MEMORY: 0x0505;
    readonly CW: 0x0900;
    readonly CCW: 0x0901;
    readonly LINE_WIDTH: 0x0B21;
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    readonly CULL_FACE_MODE: 0x0B45;
    readonly FRONT_FACE: 0x0B46;
    readonly DEPTH_RANGE: 0x0B70;
    readonly DEPTH_WRITEMASK: 0x0B72;
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    readonly DEPTH_FUNC: 0x0B74;
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    readonly STENCIL_FUNC: 0x0B92;
    readonly STENCIL_FAIL: 0x0B94;
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    readonly STENCIL_REF: 0x0B97;
    readonly STENCIL_VALUE_MASK: 0x0B93;
    readonly STENCIL_WRITEMASK: 0x0B98;
    readonly STENCIL_BACK_FUNC: 0x8800;
    readonly STENCIL_BACK_FAIL: 0x8801;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    readonly STENCIL_BACK_REF: 0x8CA3;
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    readonly VIEWPORT: 0x0BA2;
    readonly SCISSOR_BOX: 0x0C10;
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    readonly COLOR_WRITEMASK: 0x0C23;
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    readonly PACK_ALIGNMENT: 0x0D05;
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    readonly SUBPIXEL_BITS: 0x0D50;
    readonly RED_BITS: 0x0D52;
    readonly GREEN_BITS: 0x0D53;
    readonly BLUE_BITS: 0x0D54;
    readonly ALPHA_BITS: 0x0D55;
    readonly DEPTH_BITS: 0x0D56;
    readonly STENCIL_BITS: 0x0D57;
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    readonly TEXTURE_BINDING_2D: 0x8069;
    readonly SAMPLE_BUFFERS: 0x80A8;
    readonly SAMPLES: 0x80A9;
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    readonly DONT_CARE: 0x1100;
    readonly FASTEST: 0x1101;
    readonly NICEST: 0x1102;
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    readonly BYTE: 0x1400;
    readonly UNSIGNED_BYTE: 0x1401;
    readonly SHORT: 0x1402;
    readonly UNSIGNED_SHORT: 0x1403;
    readonly INT: 0x1404;
    readonly UNSIGNED_INT: 0x1405;
    readonly FLOAT: 0x1406;
    readonly DEPTH_COMPONENT: 0x1902;
    readonly ALPHA: 0x1906;
    readonly RGB: 0x1907;
    readonly RGBA: 0x1908;
    readonly LUMINANCE: 0x1909;
    readonly LUMINANCE_ALPHA: 0x190A;
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    readonly FRAGMENT_SHADER: 0x8B30;
    readonly VERTEX_SHADER: 0x8B31;
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    readonly SHADER_TYPE: 0x8B4F;
    readonly DELETE_STATUS: 0x8B80;
    readonly LINK_STATUS: 0x8B82;
    readonly VALIDATE_STATUS: 0x8B83;
    readonly ATTACHED_SHADERS: 0x8B85;
    readonly ACTIVE_UNIFORMS: 0x8B86;
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    readonly CURRENT_PROGRAM: 0x8B8D;
    readonly NEVER: 0x0200;
    readonly LESS: 0x0201;
    readonly EQUAL: 0x0202;
    readonly LEQUAL: 0x0203;
    readonly GREATER: 0x0204;
    readonly NOTEQUAL: 0x0205;
    readonly GEQUAL: 0x0206;
    readonly ALWAYS: 0x0207;
    readonly KEEP: 0x1E00;
    readonly REPLACE: 0x1E01;
    readonly INCR: 0x1E02;
    readonly DECR: 0x1E03;
    readonly INVERT: 0x150A;
    readonly INCR_WRAP: 0x8507;
    readonly DECR_WRAP: 0x8508;
    readonly VENDOR: 0x1F00;
    readonly RENDERER: 0x1F01;
    readonly VERSION: 0x1F02;
    readonly NEAREST: 0x2600;
    readonly LINEAR: 0x2601;
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    readonly TEXTURE_MAG_FILTER: 0x2800;
    readonly TEXTURE_MIN_FILTER: 0x2801;
    readonly TEXTURE_WRAP_S: 0x2802;
    readonly TEXTURE_WRAP_T: 0x2803;
    readonly TEXTURE_2D: 0x0DE1;
    readonly TEXTURE: 0x1702;
    readonly TEXTURE_CUBE_MAP: 0x8513;
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    readonly TEXTURE0: 0x84C0;
    readonly TEXTURE1: 0x84C1;
    readonly TEXTURE2: 0x84C2;
    readonly TEXTURE3: 0x84C3;
    readonly TEXTURE4: 0x84C4;
    readonly TEXTURE5: 0x84C5;
    readonly TEXTURE6: 0x84C6;
    readonly TEXTURE7: 0x84C7;
    readonly TEXTURE8: 0x84C8;
    readonly TEXTURE9: 0x84C9;
    readonly TEXTURE10: 0x84CA;
    readonly TEXTURE11: 0x84CB;
    readonly TEXTURE12: 0x84CC;
    readonly TEXTURE13: 0x84CD;
    readonly TEXTURE14: 0x84CE;
    readonly TEXTURE15: 0x84CF;
    readonly TEXTURE16: 0x84D0;
    readonly TEXTURE17: 0x84D1;
    readonly TEXTURE18: 0x84D2;
    readonly TEXTURE19: 0x84D3;
    readonly TEXTURE20: 0x84D4;
    readonly TEXTURE21: 0x84D5;
    readonly TEXTURE22: 0x84D6;
    readonly TEXTURE23: 0x84D7;
    readonly TEXTURE24: 0x84D8;
    readonly TEXTURE25: 0x84D9;
    readonly TEXTURE26: 0x84DA;
    readonly TEXTURE27: 0x84DB;
    readonly TEXTURE28: 0x84DC;
    readonly TEXTURE29: 0x84DD;
    readonly TEXTURE30: 0x84DE;
    readonly TEXTURE31: 0x84DF;
    readonly ACTIVE_TEXTURE: 0x84E0;
    readonly REPEAT: 0x2901;
    readonly CLAMP_TO_EDGE: 0x812F;
    readonly MIRRORED_REPEAT: 0x8370;
    readonly FLOAT_VEC2: 0x8B50;
    readonly FLOAT_VEC3: 0x8B51;
    readonly FLOAT_VEC4: 0x8B52;
    readonly INT_VEC2: 0x8B53;
    readonly INT_VEC3: 0x8B54;
    readonly INT_VEC4: 0x8B55;
    readonly BOOL: 0x8B56;
    readonly BOOL_VEC2: 0x8B57;
    readonly BOOL_VEC3: 0x8B58;
    readonly BOOL_VEC4: 0x8B59;
    readonly FLOAT_MAT2: 0x8B5A;
    readonly FLOAT_MAT3: 0x8B5B;
    readonly FLOAT_MAT4: 0x8B5C;
    readonly SAMPLER_2D: 0x8B5E;
    readonly SAMPLER_CUBE: 0x8B60;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    readonly COMPILE_STATUS: 0x8B81;
    readonly LOW_FLOAT: 0x8DF0;
    readonly MEDIUM_FLOAT: 0x8DF1;
    readonly HIGH_FLOAT: 0x8DF2;
    readonly LOW_INT: 0x8DF3;
    readonly MEDIUM_INT: 0x8DF4;
    readonly HIGH_INT: 0x8DF5;
    readonly FRAMEBUFFER: 0x8D40;
    readonly RENDERBUFFER: 0x8D41;
    readonly RGBA4: 0x8056;
    readonly RGB5_A1: 0x8057;
    readonly RGB565: 0x8D62;
    readonly DEPTH_COMPONENT16: 0x81A5;
    readonly STENCIL_INDEX8: 0x8D48;
    readonly DEPTH_STENCIL: 0x84F9;
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    readonly DEPTH_ATTACHMENT: 0x8D00;
    readonly STENCIL_ATTACHMENT: 0x8D20;
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    readonly NONE: 0;
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
};
interface WebGLRenderingContextBase {
    readonly canvas: HTMLCanvasElement | OffscreenCanvas;
    readonly drawingBufferHeight: GLsizei;
    readonly drawingBufferWidth: GLsizei;
    activeTexture(texture: GLenum): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    blendEquation(mode: GLenum): void;
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    checkFramebufferStatus(target: GLenum): GLenum;
    clear(mask: GLbitfield): void;
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    clearDepth(depth: GLclampf): void;
    clearStencil(s: GLint): void;
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    compileShader(shader: WebGLShader): void;
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createBuffer(): WebGLBuffer | null;
    createFramebuffer(): WebGLFramebuffer | null;
    createProgram(): WebGLProgram | null;
    createRenderbuffer(): WebGLRenderbuffer | null;
    createShader(type: GLenum): WebGLShader | null;
    createTexture(): WebGLTexture | null;
    cullFace(mode: GLenum): void;
    deleteBuffer(buffer: WebGLBuffer | null): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    deleteProgram(program: WebGLProgram | null): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    deleteShader(shader: WebGLShader | null): void;
    deleteTexture(texture: WebGLTexture | null): void;
    depthFunc(func: GLenum): void;
    depthMask(flag: GLboolean): void;
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: GLenum): void;
    disableVertexAttribArray(index: GLuint): void;
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    enable(cap: GLenum): void;
    enableVertexAttribArray(index: GLuint): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    frontFace(mode: GLenum): void;
    generateMipmap(target: GLenum): void;
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    getBufferParameter(target: GLenum, pname: GLenum): any;
    getContextAttributes(): WebGLContextAttributes | null;
    getError(): GLenum;
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_color_buffer_float"): EXT_color_buffer_float | null;
    getExtension(extensionName: "EXT_color_buffer_half_float"): EXT_color_buffer_half_float | null;
    getExtension(extensionName: "EXT_float_blend"): EXT_float_blend | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_texture_compression_bptc"): EXT_texture_compression_bptc | null;
    getExtension(extensionName: "EXT_texture_compression_rgtc"): EXT_texture_compression_rgtc | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "KHR_parallel_shader_compile"): KHR_parallel_shader_compile | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "OES_fbo_render_mipmap"): OES_fbo_render_mipmap | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "OVR_multiview2"): OVR_multiview2 | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_etc"): WEBGL_compressed_texture_etc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_etc1"): WEBGL_compressed_texture_etc1 | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_multi_draw"): WEBGL_multi_draw | null;
    getExtension(name: string): any;
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    getParameter(pname: GLenum): any;
    getProgramInfoLog(program: WebGLProgram): string | null;
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    getShaderInfoLog(shader: WebGLShader): string | null;
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    getShaderSource(shader: WebGLShader): string | null;
    getSupportedExtensions(): string[] | null;
    getTexParameter(target: GLenum, pname: GLenum): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    hint(target: GLenum, mode: GLenum): void;
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    isContextLost(): boolean;
    isEnabled(cap: GLenum): GLboolean;
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    isProgram(program: WebGLProgram | null): GLboolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    isShader(shader: WebGLShader | null): GLboolean;
    isTexture(texture: WebGLTexture | null): GLboolean;
    lineWidth(width: GLfloat): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: GLenum, param: GLint | GLboolean): void;
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    stencilMask(mask: GLuint): void;
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    useProgram(program: WebGLProgram | null): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    readonly COLOR_BUFFER_BIT: 0x00004000;
    readonly POINTS: 0x0000;
    readonly LINES: 0x0001;
    readonly LINE_LOOP: 0x0002;
    readonly LINE_STRIP: 0x0003;
    readonly TRIANGLES: 0x0004;
    readonly TRIANGLE_STRIP: 0x0005;
    readonly TRIANGLE_FAN: 0x0006;
    readonly ZERO: 0;
    readonly ONE: 1;
    readonly SRC_COLOR: 0x0300;
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    readonly SRC_ALPHA: 0x0302;
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    readonly DST_ALPHA: 0x0304;
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    readonly DST_COLOR: 0x0306;
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    readonly SRC_ALPHA_SATURATE: 0x0308;
    readonly FUNC_ADD: 0x8006;
    readonly BLEND_EQUATION: 0x8009;
    readonly BLEND_EQUATION_RGB: 0x8009;
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    readonly FUNC_SUBTRACT: 0x800A;
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    readonly BLEND_DST_RGB: 0x80C8;
    readonly BLEND_SRC_RGB: 0x80C9;
    readonly BLEND_DST_ALPHA: 0x80CA;
    readonly BLEND_SRC_ALPHA: 0x80CB;
    readonly CONSTANT_COLOR: 0x8001;
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    readonly CONSTANT_ALPHA: 0x8003;
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    readonly BLEND_COLOR: 0x8005;
    readonly ARRAY_BUFFER: 0x8892;
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    readonly STREAM_DRAW: 0x88E0;
    readonly STATIC_DRAW: 0x88E4;
    readonly DYNAMIC_DRAW: 0x88E8;
    readonly BUFFER_SIZE: 0x8764;
    readonly BUFFER_USAGE: 0x8765;
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    readonly FRONT: 0x0404;
    readonly BACK: 0x0405;
    readonly FRONT_AND_BACK: 0x0408;
    readonly CULL_FACE: 0x0B44;
    readonly BLEND: 0x0BE2;
    readonly DITHER: 0x0BD0;
    readonly STENCIL_TEST: 0x0B90;
    readonly DEPTH_TEST: 0x0B71;
    readonly SCISSOR_TEST: 0x0C11;
    readonly POLYGON_OFFSET_FILL: 0x8037;
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    readonly SAMPLE_COVERAGE: 0x80A0;
    readonly NO_ERROR: 0;
    readonly INVALID_ENUM: 0x0500;
    readonly INVALID_VALUE: 0x0501;
    readonly INVALID_OPERATION: 0x0502;
    readonly OUT_OF_MEMORY: 0x0505;
    readonly CW: 0x0900;
    readonly CCW: 0x0901;
    readonly LINE_WIDTH: 0x0B21;
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    readonly CULL_FACE_MODE: 0x0B45;
    readonly FRONT_FACE: 0x0B46;
    readonly DEPTH_RANGE: 0x0B70;
    readonly DEPTH_WRITEMASK: 0x0B72;
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    readonly DEPTH_FUNC: 0x0B74;
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    readonly STENCIL_FUNC: 0x0B92;
    readonly STENCIL_FAIL: 0x0B94;
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    readonly STENCIL_REF: 0x0B97;
    readonly STENCIL_VALUE_MASK: 0x0B93;
    readonly STENCIL_WRITEMASK: 0x0B98;
    readonly STENCIL_BACK_FUNC: 0x8800;
    readonly STENCIL_BACK_FAIL: 0x8801;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    readonly STENCIL_BACK_REF: 0x8CA3;
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    readonly VIEWPORT: 0x0BA2;
    readonly SCISSOR_BOX: 0x0C10;
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    readonly COLOR_WRITEMASK: 0x0C23;
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    readonly PACK_ALIGNMENT: 0x0D05;
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    readonly SUBPIXEL_BITS: 0x0D50;
    readonly RED_BITS: 0x0D52;
    readonly GREEN_BITS: 0x0D53;
    readonly BLUE_BITS: 0x0D54;
    readonly ALPHA_BITS: 0x0D55;
    readonly DEPTH_BITS: 0x0D56;
    readonly STENCIL_BITS: 0x0D57;
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    readonly TEXTURE_BINDING_2D: 0x8069;
    readonly SAMPLE_BUFFERS: 0x80A8;
    readonly SAMPLES: 0x80A9;
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    readonly DONT_CARE: 0x1100;
    readonly FASTEST: 0x1101;
    readonly NICEST: 0x1102;
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    readonly BYTE: 0x1400;
    readonly UNSIGNED_BYTE: 0x1401;
    readonly SHORT: 0x1402;
    readonly UNSIGNED_SHORT: 0x1403;
    readonly INT: 0x1404;
    readonly UNSIGNED_INT: 0x1405;
    readonly FLOAT: 0x1406;
    readonly DEPTH_COMPONENT: 0x1902;
    readonly ALPHA: 0x1906;
    readonly RGB: 0x1907;
    readonly RGBA: 0x1908;
    readonly LUMINANCE: 0x1909;
    readonly LUMINANCE_ALPHA: 0x190A;
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    readonly FRAGMENT_SHADER: 0x8B30;
    readonly VERTEX_SHADER: 0x8B31;
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    readonly SHADER_TYPE: 0x8B4F;
    readonly DELETE_STATUS: 0x8B80;
    readonly LINK_STATUS: 0x8B82;
    readonly VALIDATE_STATUS: 0x8B83;
    readonly ATTACHED_SHADERS: 0x8B85;
    readonly ACTIVE_UNIFORMS: 0x8B86;
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    readonly CURRENT_PROGRAM: 0x8B8D;
    readonly NEVER: 0x0200;
    readonly LESS: 0x0201;
    readonly EQUAL: 0x0202;
    readonly LEQUAL: 0x0203;
    readonly GREATER: 0x0204;
    readonly NOTEQUAL: 0x0205;
    readonly GEQUAL: 0x0206;
    readonly ALWAYS: 0x0207;
    readonly KEEP: 0x1E00;
    readonly REPLACE: 0x1E01;
    readonly INCR: 0x1E02;
    readonly DECR: 0x1E03;
    readonly INVERT: 0x150A;
    readonly INCR_WRAP: 0x8507;
    readonly DECR_WRAP: 0x8508;
    readonly VENDOR: 0x1F00;
    readonly RENDERER: 0x1F01;
    readonly VERSION: 0x1F02;
    readonly NEAREST: 0x2600;
    readonly LINEAR: 0x2601;
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    readonly TEXTURE_MAG_FILTER: 0x2800;
    readonly TEXTURE_MIN_FILTER: 0x2801;
    readonly TEXTURE_WRAP_S: 0x2802;
    readonly TEXTURE_WRAP_T: 0x2803;
    readonly TEXTURE_2D: 0x0DE1;
    readonly TEXTURE: 0x1702;
    readonly TEXTURE_CUBE_MAP: 0x8513;
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    readonly TEXTURE0: 0x84C0;
    readonly TEXTURE1: 0x84C1;
    readonly TEXTURE2: 0x84C2;
    readonly TEXTURE3: 0x84C3;
    readonly TEXTURE4: 0x84C4;
    readonly TEXTURE5: 0x84C5;
    readonly TEXTURE6: 0x84C6;
    readonly TEXTURE7: 0x84C7;
    readonly TEXTURE8: 0x84C8;
    readonly TEXTURE9: 0x84C9;
    readonly TEXTURE10: 0x84CA;
    readonly TEXTURE11: 0x84CB;
    readonly TEXTURE12: 0x84CC;
    readonly TEXTURE13: 0x84CD;
    readonly TEXTURE14: 0x84CE;
    readonly TEXTURE15: 0x84CF;
    readonly TEXTURE16: 0x84D0;
    readonly TEXTURE17: 0x84D1;
    readonly TEXTURE18: 0x84D2;
    readonly TEXTURE19: 0x84D3;
    readonly TEXTURE20: 0x84D4;
    readonly TEXTURE21: 0x84D5;
    readonly TEXTURE22: 0x84D6;
    readonly TEXTURE23: 0x84D7;
    readonly TEXTURE24: 0x84D8;
    readonly TEXTURE25: 0x84D9;
    readonly TEXTURE26: 0x84DA;
    readonly TEXTURE27: 0x84DB;
    readonly TEXTURE28: 0x84DC;
    readonly TEXTURE29: 0x84DD;
    readonly TEXTURE30: 0x84DE;
    readonly TEXTURE31: 0x84DF;
    readonly ACTIVE_TEXTURE: 0x84E0;
    readonly REPEAT: 0x2901;
    readonly CLAMP_TO_EDGE: 0x812F;
    readonly MIRRORED_REPEAT: 0x8370;
    readonly FLOAT_VEC2: 0x8B50;
    readonly FLOAT_VEC3: 0x8B51;
    readonly FLOAT_VEC4: 0x8B52;
    readonly INT_VEC2: 0x8B53;
    readonly INT_VEC3: 0x8B54;
    readonly INT_VEC4: 0x8B55;
    readonly BOOL: 0x8B56;
    readonly BOOL_VEC2: 0x8B57;
    readonly BOOL_VEC3: 0x8B58;
    readonly BOOL_VEC4: 0x8B59;
    readonly FLOAT_MAT2: 0x8B5A;
    readonly FLOAT_MAT3: 0x8B5B;
    readonly FLOAT_MAT4: 0x8B5C;
    readonly SAMPLER_2D: 0x8B5E;
    readonly SAMPLER_CUBE: 0x8B60;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    readonly COMPILE_STATUS: 0x8B81;
    readonly LOW_FLOAT: 0x8DF0;
    readonly MEDIUM_FLOAT: 0x8DF1;
    readonly HIGH_FLOAT: 0x8DF2;
    readonly LOW_INT: 0x8DF3;
    readonly MEDIUM_INT: 0x8DF4;
    readonly HIGH_INT: 0x8DF5;
    readonly FRAMEBUFFER: 0x8D40;
    readonly RENDERBUFFER: 0x8D41;
    readonly RGBA4: 0x8056;
    readonly RGB5_A1: 0x8057;
    readonly RGB565: 0x8D62;
    readonly DEPTH_COMPONENT16: 0x81A5;
    readonly STENCIL_INDEX8: 0x8D48;
    readonly DEPTH_STENCIL: 0x84F9;
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    readonly DEPTH_ATTACHMENT: 0x8D00;
    readonly STENCIL_ATTACHMENT: 0x8D20;
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    readonly NONE: 0;
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
}
interface WebGLRenderingContextOverloads {
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void;
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
}
interface WebGLSampler {
}
declare var WebGLSampler: {
    prototype: WebGLSampler;
    new (): WebGLSampler;
};
interface WebGLShader {
}
declare var WebGLShader: {
    prototype: WebGLShader;
    new (): WebGLShader;
};
interface WebGLShaderPrecisionFormat {
    readonly precision: GLint;
    readonly rangeMax: GLint;
    readonly rangeMin: GLint;
}
declare var WebGLShaderPrecisionFormat: {
    prototype: WebGLShaderPrecisionFormat;
    new (): WebGLShaderPrecisionFormat;
};
interface WebGLSync {
}
declare var WebGLSync: {
    prototype: WebGLSync;
    new (): WebGLSync;
};
interface WebGLTexture {
}
declare var WebGLTexture: {
    prototype: WebGLTexture;
    new (): WebGLTexture;
};
interface WebGLTransformFeedback {
}
declare var WebGLTransformFeedback: {
    prototype: WebGLTransformFeedback;
    new (): WebGLTransformFeedback;
};
interface WebGLUniformLocation {
}
declare var WebGLUniformLocation: {
    prototype: WebGLUniformLocation;
    new (): WebGLUniformLocation;
};
interface WebGLVertexArrayObject {
}
declare var WebGLVertexArrayObject: {
    prototype: WebGLVertexArrayObject;
    new (): WebGLVertexArrayObject;
};
interface WebGLVertexArrayObjectOES {
}
interface WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}
interface WebSocket extends EventTarget {
    binaryType: BinaryType;
    readonly bufferedAmount: number;
    readonly extensions: string;
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
    onerror: ((this: WebSocket, ev: Event) => any) | null;
    onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
    onopen: ((this: WebSocket, ev: Event) => any) | null;
    readonly protocol: string;
    readonly readyState: number;
    readonly url: string;
    close(code?: number, reason?: string): void;
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var WebSocket: {
    prototype: WebSocket;
    new (url: string | URL, protocols?: string | string[]): WebSocket;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
};
interface WheelEvent extends MouseEvent {
    readonly deltaMode: number;
    readonly deltaX: number;
    readonly deltaY: number;
    readonly deltaZ: number;
    readonly DOM_DELTA_PIXEL: 0x00;
    readonly DOM_DELTA_LINE: 0x01;
    readonly DOM_DELTA_PAGE: 0x02;
}
declare var WheelEvent: {
    prototype: WheelEvent;
    new (type: string, eventInitDict?: WheelEventInit): WheelEvent;
    readonly DOM_DELTA_PIXEL: 0x00;
    readonly DOM_DELTA_LINE: 0x01;
    readonly DOM_DELTA_PAGE: 0x02;
};
interface WindowEventMap extends GlobalEventHandlersEventMap, WindowEventHandlersEventMap {
    "DOMContentLoaded": Event;
    "devicemotion": DeviceMotionEvent;
    "deviceorientation": DeviceOrientationEvent;
    "gamepadconnected": GamepadEvent;
    "gamepaddisconnected": GamepadEvent;
    "orientationchange": Event;
}
interface Window extends EventTarget, AnimationFrameProvider, GlobalEventHandlers, WindowEventHandlers, WindowLocalStorage, WindowOrWorkerGlobalScope, WindowSessionStorage {
    readonly clientInformation: Navigator;
    readonly closed: boolean;
    readonly customElements: CustomElementRegistry;
    readonly devicePixelRatio: number;
    readonly document: Document;
    readonly event: Event | undefined;
    readonly external: External;
    readonly frameElement: Element | null;
    readonly frames: WindowProxy;
    readonly history: History;
    readonly innerHeight: number;
    readonly innerWidth: number;
    readonly length: number;
    get location(): Location;
    set location(href: string | Location);
    readonly locationbar: BarProp;
    readonly menubar: BarProp;
    name: string;
    readonly navigator: Navigator;
    ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
    ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
    onorientationchange: ((this: Window, ev: Event) => any) | null;
    opener: any;
    readonly orientation: number;
    readonly outerHeight: number;
    readonly outerWidth: number;
    readonly pageXOffset: number;
    readonly pageYOffset: number;
    readonly parent: WindowProxy;
    readonly personalbar: BarProp;
    readonly screen: Screen;
    readonly screenLeft: number;
    readonly screenTop: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly scrollX: number;
    readonly scrollY: number;
    readonly scrollbars: BarProp;
    readonly self: Window & typeof globalThis;
    readonly speechSynthesis: SpeechSynthesis;
    status: string;
    readonly statusbar: BarProp;
    readonly toolbar: BarProp;
    readonly top: WindowProxy | null;
    readonly visualViewport: VisualViewport | null;
    readonly window: Window & typeof globalThis;
    alert(message?: any): void;
    blur(): void;
    cancelIdleCallback(handle: number): void;
    captureEvents(): void;
    close(): void;
    confirm(message?: string): boolean;
    focus(): void;
    getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
    getSelection(): Selection | null;
    matchMedia(query: string): MediaQueryList;
    moveBy(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    open(url?: string | URL, target?: string, features?: string): WindowProxy | null;
    postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void;
    postMessage(message: any, options?: WindowPostMessageOptions): void;
    print(): void;
    prompt(message?: string, _default?: string): string | null;
    releaseEvents(): void;
    requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): number;
    resizeBy(x: number, y: number): void;
    resizeTo(width: number, height: number): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    stop(): void;
    addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: Window;
}
declare var Window: {
    prototype: Window;
    new (): Window;
};
interface WindowEventHandlersEventMap {
    "afterprint": Event;
    "beforeprint": Event;
    "beforeunload": BeforeUnloadEvent;
    "gamepadconnected": GamepadEvent;
    "gamepaddisconnected": GamepadEvent;
    "hashchange": HashChangeEvent;
    "languagechange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
    "offline": Event;
    "online": Event;
    "pagehide": PageTransitionEvent;
    "pageshow": PageTransitionEvent;
    "popstate": PopStateEvent;
    "rejectionhandled": PromiseRejectionEvent;
    "storage": StorageEvent;
    "unhandledrejection": PromiseRejectionEvent;
    "unload": Event;
}
interface WindowEventHandlers {
    onafterprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onbeforeprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onbeforeunload: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null;
    ongamepadconnected: ((this: WindowEventHandlers, ev: GamepadEvent) => any) | null;
    ongamepaddisconnected: ((this: WindowEventHandlers, ev: GamepadEvent) => any) | null;
    onhashchange: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null;
    onlanguagechange: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onmessage: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    onoffline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    ononline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onpagehide: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    onpageshow: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    onpopstate: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null;
    onrejectionhandled: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
    onstorage: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null;
    onunhandledrejection: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
    onunload: ((this: WindowEventHandlers, ev: Event) => any) | null;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
interface WindowLocalStorage {
    readonly localStorage: Storage;
}
interface WindowOrWorkerGlobalScope {
    readonly caches: CacheStorage;
    readonly crossOriginIsolated: boolean;
    readonly crypto: Crypto;
    readonly indexedDB: IDBFactory;
    readonly isSecureContext: boolean;
    readonly origin: string;
    readonly performance: Performance;
    atob(data: string): string;
    btoa(data: string): string;
    clearInterval(id: number | undefined): void;
    clearTimeout(id: number | undefined): void;
    createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    queueMicrotask(callback: VoidFunction): void;
    reportError(e: any): void;
    setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    structuredClone(value: any, options?: StructuredSerializeOptions): any;
}
interface WindowSessionStorage {
    readonly sessionStorage: Storage;
}
interface WorkerEventMap extends AbstractWorkerEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}
interface Worker extends EventTarget, AbstractWorker {
    onmessage: ((this: Worker, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: Worker, ev: MessageEvent) => any) | null;
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var Worker: {
    prototype: Worker;
    new (scriptURL: string | URL, options?: WorkerOptions): Worker;
};
interface Worklet {
    addModule(moduleURL: string | URL, options?: WorkletOptions): Promise<void>;
}
declare var Worklet: {
    prototype: Worklet;
    new (): Worklet;
};
interface WritableStream<W = any> {
    readonly locked: boolean;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    getWriter(): WritableStreamDefaultWriter<W>;
}
declare var WritableStream: {
    prototype: WritableStream;
    new <W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
};
interface WritableStreamDefaultController {
    readonly signal: AbortSignal;
    error(e?: any): void;
}
declare var WritableStreamDefaultController: {
    prototype: WritableStreamDefaultController;
    new (): WritableStreamDefaultController;
};
interface WritableStreamDefaultWriter<W = any> {
    readonly closed: Promise<undefined>;
    readonly desiredSize: number | null;
    readonly ready: Promise<undefined>;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    releaseLock(): void;
    write(chunk?: W): Promise<void>;
}
declare var WritableStreamDefaultWriter: {
    prototype: WritableStreamDefaultWriter;
    new <W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
};
interface XMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var XMLDocument: {
    prototype: XMLDocument;
    new (): XMLDocument;
};
interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}
interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    readonly readyState: number;
    readonly response: any;
    readonly responseText: string;
    responseType: XMLHttpRequestResponseType;
    readonly responseURL: string;
    readonly responseXML: Document | null;
    readonly status: number;
    readonly statusText: string;
    timeout: number;
    readonly upload: XMLHttpRequestUpload;
    withCredentials: boolean;
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(name: string): string | null;
    open(method: string, url: string | URL): void;
    open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
    overrideMimeType(mime: string): void;
    send(body?: Document | XMLHttpRequestBodyInit | null): void;
    setRequestHeader(name: string, value: string): void;
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new (): XMLHttpRequest;
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
};
interface XMLHttpRequestEventTargetEventMap {
    "abort": ProgressEvent<XMLHttpRequestEventTarget>;
    "error": ProgressEvent<XMLHttpRequestEventTarget>;
    "load": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadend": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadstart": ProgressEvent<XMLHttpRequestEventTarget>;
    "progress": ProgressEvent<XMLHttpRequestEventTarget>;
    "timeout": ProgressEvent<XMLHttpRequestEventTarget>;
}
interface XMLHttpRequestEventTarget extends EventTarget {
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new (): XMLHttpRequestEventTarget;
};
interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}
declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new (): XMLHttpRequestUpload;
};
interface XMLSerializer {
    serializeToString(root: Node): string;
}
declare var XMLSerializer: {
    prototype: XMLSerializer;
    new (): XMLSerializer;
};
interface XPathEvaluator extends XPathEvaluatorBase {
}
declare var XPathEvaluator: {
    prototype: XPathEvaluator;
    new (): XPathEvaluator;
};
interface XPathEvaluatorBase {
    createExpression(expression: string, resolver?: XPathNSResolver | null): XPathExpression;
    createNSResolver(nodeResolver: Node): XPathNSResolver;
    evaluate(expression: string, contextNode: Node, resolver?: XPathNSResolver | null, type?: number, result?: XPathResult | null): XPathResult;
}
interface XPathExpression {
    evaluate(contextNode: Node, type?: number, result?: XPathResult | null): XPathResult;
}
declare var XPathExpression: {
    prototype: XPathExpression;
    new (): XPathExpression;
};
interface XPathResult {
    readonly booleanValue: boolean;
    readonly invalidIteratorState: boolean;
    readonly numberValue: number;
    readonly resultType: number;
    readonly singleNodeValue: Node | null;
    readonly snapshotLength: number;
    readonly stringValue: string;
    iterateNext(): Node | null;
    snapshotItem(index: number): Node | null;
    readonly ANY_TYPE: 0;
    readonly NUMBER_TYPE: 1;
    readonly STRING_TYPE: 2;
    readonly BOOLEAN_TYPE: 3;
    readonly UNORDERED_NODE_ITERATOR_TYPE: 4;
    readonly ORDERED_NODE_ITERATOR_TYPE: 5;
    readonly UNORDERED_NODE_SNAPSHOT_TYPE: 6;
    readonly ORDERED_NODE_SNAPSHOT_TYPE: 7;
    readonly ANY_UNORDERED_NODE_TYPE: 8;
    readonly FIRST_ORDERED_NODE_TYPE: 9;
}
declare var XPathResult: {
    prototype: XPathResult;
    new (): XPathResult;
    readonly ANY_TYPE: 0;
    readonly NUMBER_TYPE: 1;
    readonly STRING_TYPE: 2;
    readonly BOOLEAN_TYPE: 3;
    readonly UNORDERED_NODE_ITERATOR_TYPE: 4;
    readonly ORDERED_NODE_ITERATOR_TYPE: 5;
    readonly UNORDERED_NODE_SNAPSHOT_TYPE: 6;
    readonly ORDERED_NODE_SNAPSHOT_TYPE: 7;
    readonly ANY_UNORDERED_NODE_TYPE: 8;
    readonly FIRST_ORDERED_NODE_TYPE: 9;
};
interface XSLTProcessor {
    clearParameters(): void;
    getParameter(namespaceURI: string | null, localName: string): any;
    importStylesheet(style: Node): void;
    removeParameter(namespaceURI: string | null, localName: string): void;
    reset(): void;
    setParameter(namespaceURI: string | null, localName: string, value: any): void;
    transformToDocument(source: Node): Document;
    transformToFragment(source: Node, output: Document): DocumentFragment;
}
declare var XSLTProcessor: {
    prototype: XSLTProcessor;
    new (): XSLTProcessor;
};
interface Console {
    assert(condition?: boolean, ...data: any[]): void;
    clear(): void;
    count(label?: string): void;
    countReset(label?: string): void;
    debug(...data: any[]): void;
    dir(item?: any, options?: any): void;
    dirxml(...data: any[]): void;
    error(...data: any[]): void;
    group(...data: any[]): void;
    groupCollapsed(...data: any[]): void;
    groupEnd(): void;
    info(...data: any[]): void;
    log(...data: any[]): void;
    table(tabularData?: any, properties?: string[]): void;
    time(label?: string): void;
    timeEnd(label?: string): void;
    timeLog(label?: string, ...data: any[]): void;
    timeStamp(label?: string): void;
    trace(...data: any[]): void;
    warn(...data: any[]): void;
}
declare var console: Console;
declare namespace CSS {
    function escape(ident: string): string;
    function supports(property: string, value: string): boolean;
    function supports(conditionText: string): boolean;
}
declare namespace WebAssembly {
    interface CompileError extends Error {
    }
    var CompileError: {
        prototype: CompileError;
        new (message?: string): CompileError;
        (message?: string): CompileError;
    };
    interface Global {
        value: any;
        valueOf(): any;
    }
    var Global: {
        prototype: Global;
        new (descriptor: GlobalDescriptor, v?: any): Global;
    };
    interface Instance {
        readonly exports: Exports;
    }
    var Instance: {
        prototype: Instance;
        new (module: Module, importObject?: Imports): Instance;
    };
    interface LinkError extends Error {
    }
    var LinkError: {
        prototype: LinkError;
        new (message?: string): LinkError;
        (message?: string): LinkError;
    };
    interface Memory {
        readonly buffer: ArrayBuffer;
        grow(delta: number): number;
    }
    var Memory: {
        prototype: Memory;
        new (descriptor: MemoryDescriptor): Memory;
    };
    interface Module {
    }
    var Module: {
        prototype: Module;
        new (bytes: BufferSource): Module;
        customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
        exports(moduleObject: Module): ModuleExportDescriptor[];
        imports(moduleObject: Module): ModuleImportDescriptor[];
    };
    interface RuntimeError extends Error {
    }
    var RuntimeError: {
        prototype: RuntimeError;
        new (message?: string): RuntimeError;
        (message?: string): RuntimeError;
    };
    interface Table {
        readonly length: number;
        get(index: number): any;
        grow(delta: number, value?: any): number;
        set(index: number, value?: any): void;
    }
    var Table: {
        prototype: Table;
        new (descriptor: TableDescriptor, value?: any): Table;
    };
    interface GlobalDescriptor {
        mutable?: boolean;
        value: ValueType;
    }
    interface MemoryDescriptor {
        initial: number;
        maximum?: number;
        shared?: boolean;
    }
    interface ModuleExportDescriptor {
        kind: ImportExportKind;
        name: string;
    }
    interface ModuleImportDescriptor {
        kind: ImportExportKind;
        module: string;
        name: string;
    }
    interface TableDescriptor {
        element: TableKind;
        initial: number;
        maximum?: number;
    }
    interface WebAssemblyInstantiatedSource {
        instance: Instance;
        module: Module;
    }
    type ImportExportKind = "function" | "global" | "memory" | "table";
    type TableKind = "anyfunc" | "externref";
    type ValueType = "anyfunc" | "externref" | "f32" | "f64" | "i32" | "i64" | "v128";
    type ExportValue = Function | Global | Memory | Table;
    type Exports = Record<string, ExportValue>;
    type ImportValue = ExportValue | number;
    type Imports = Record<string, ModuleImports>;
    type ModuleImports = Record<string, ImportValue>;
    function compile(bytes: BufferSource): Promise<Module>;
    function compileStreaming(source: Response | PromiseLike<Response>): Promise<Module>;
    function instantiate(bytes: BufferSource, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
    function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>;
    function instantiateStreaming(source: Response | PromiseLike<Response>, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
    function validate(bytes: BufferSource): boolean;
}
interface BlobCallback {
    (blob: Blob | null): void;
}
interface CustomElementConstructor {
    new (...params: any[]): HTMLElement;
}
interface DecodeErrorCallback {
    (error: DOMException): void;
}
interface DecodeSuccessCallback {
    (decodedData: AudioBuffer): void;
}
interface ErrorCallback {
    (err: DOMException): void;
}
interface FileCallback {
    (file: File): void;
}
interface FileSystemEntriesCallback {
    (entries: FileSystemEntry[]): void;
}
interface FileSystemEntryCallback {
    (entry: FileSystemEntry): void;
}
interface FrameRequestCallback {
    (time: DOMHighResTimeStamp): void;
}
interface FunctionStringCallback {
    (data: string): void;
}
interface IdleRequestCallback {
    (deadline: IdleDeadline): void;
}
interface IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}
interface LockGrantedCallback {
    (lock: Lock | null): any;
}
interface MediaSessionActionHandler {
    (details: MediaSessionActionDetails): void;
}
interface MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): void;
}
interface NotificationPermissionCallback {
    (permission: NotificationPermission): void;
}
interface OnBeforeUnloadEventHandlerNonNull {
    (event: Event): string | null;
}
interface OnErrorEventHandlerNonNull {
    (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error): any;
}
interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}
interface PositionCallback {
    (position: GeolocationPosition): void;
}
interface PositionErrorCallback {
    (positionError: GeolocationPositionError): void;
}
interface QueuingStrategySize<T = any> {
    (chunk: T): number;
}
interface RTCPeerConnectionErrorCallback {
    (error: DOMException): void;
}
interface RTCSessionDescriptionCallback {
    (description: RTCSessionDescriptionInit): void;
}
interface RemotePlaybackAvailabilityCallback {
    (available: boolean): void;
}
interface ResizeObserverCallback {
    (entries: ResizeObserverEntry[], observer: ResizeObserver): void;
}
interface TransformerFlushCallback<O> {
    (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}
interface TransformerStartCallback<O> {
    (controller: TransformStreamDefaultController<O>): any;
}
interface TransformerTransformCallback<I, O> {
    (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}
interface UnderlyingSinkAbortCallback {
    (reason?: any): void | PromiseLike<void>;
}
interface UnderlyingSinkCloseCallback {
    (): void | PromiseLike<void>;
}
interface UnderlyingSinkStartCallback {
    (controller: WritableStreamDefaultController): any;
}
interface UnderlyingSinkWriteCallback<W> {
    (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
}
interface UnderlyingSourceCancelCallback {
    (reason?: any): void | PromiseLike<void>;
}
interface UnderlyingSourcePullCallback<R> {
    (controller: ReadableStreamController<R>): void | PromiseLike<void>;
}
interface UnderlyingSourceStartCallback<R> {
    (controller: ReadableStreamController<R>): any;
}
interface VideoFrameRequestCallback {
    (now: DOMHighResTimeStamp, metadata: VideoFrameCallbackMetadata): void;
}
interface VoidFunction {
    (): void;
}
interface HTMLElementTagNameMap {
    "a": HTMLAnchorElement;
    "abbr": HTMLElement;
    "address": HTMLElement;
    "area": HTMLAreaElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    "audio": HTMLAudioElement;
    "b": HTMLElement;
    "base": HTMLBaseElement;
    "bdi": HTMLElement;
    "bdo": HTMLElement;
    "blockquote": HTMLQuoteElement;
    "body": HTMLBodyElement;
    "br": HTMLBRElement;
    "button": HTMLButtonElement;
    "canvas": HTMLCanvasElement;
    "caption": HTMLTableCaptionElement;
    "cite": HTMLElement;
    "code": HTMLElement;
    "col": HTMLTableColElement;
    "colgroup": HTMLTableColElement;
    "data": HTMLDataElement;
    "datalist": HTMLDataListElement;
    "dd": HTMLElement;
    "del": HTMLModElement;
    "details": HTMLDetailsElement;
    "dfn": HTMLElement;
    "dialog": HTMLDialogElement;
    "div": HTMLDivElement;
    "dl": HTMLDListElement;
    "dt": HTMLElement;
    "em": HTMLElement;
    "embed": HTMLEmbedElement;
    "fieldset": HTMLFieldSetElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "footer": HTMLElement;
    "form": HTMLFormElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLHeadElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    "hr": HTMLHRElement;
    "html": HTMLHtmlElement;
    "i": HTMLElement;
    "iframe": HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    "ins": HTMLModElement;
    "kbd": HTMLElement;
    "label": HTMLLabelElement;
    "legend": HTMLLegendElement;
    "li": HTMLLIElement;
    "link": HTMLLinkElement;
    "main": HTMLElement;
    "map": HTMLMapElement;
    "mark": HTMLElement;
    "menu": HTMLMenuElement;
    "meta": HTMLMetaElement;
    "meter": HTMLMeterElement;
    "nav": HTMLElement;
    "noscript": HTMLElement;
    "object": HTMLObjectElement;
    "ol": HTMLOListElement;
    "optgroup": HTMLOptGroupElement;
    "option": HTMLOptionElement;
    "output": HTMLOutputElement;
    "p": HTMLParagraphElement;
    "picture": HTMLPictureElement;
    "pre": HTMLPreElement;
    "progress": HTMLProgressElement;
    "q": HTMLQuoteElement;
    "rp": HTMLElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "script": HTMLScriptElement;
    "section": HTMLElement;
    "select": HTMLSelectElement;
    "slot": HTMLSlotElement;
    "small": HTMLElement;
    "source": HTMLSourceElement;
    "span": HTMLSpanElement;
    "strong": HTMLElement;
    "style": HTMLStyleElement;
    "sub": HTMLElement;
    "summary": HTMLElement;
    "sup": HTMLElement;
    "table": HTMLTableElement;
    "tbody": HTMLTableSectionElement;
    "td": HTMLTableCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLTextAreaElement;
    "tfoot": HTMLTableSectionElement;
    "th": HTMLTableCellElement;
    "thead": HTMLTableSectionElement;
    "time": HTMLTimeElement;
    "title": HTMLTitleElement;
    "tr": HTMLTableRowElement;
    "track": HTMLTrackElement;
    "u": HTMLElement;
    "ul": HTMLUListElement;
    "var": HTMLElement;
    "video": HTMLVideoElement;
    "wbr": HTMLElement;
}
interface HTMLElementDeprecatedTagNameMap {
    "acronym": HTMLElement;
    "applet": HTMLUnknownElement;
    "basefont": HTMLElement;
    "bgsound": HTMLUnknownElement;
    "big": HTMLElement;
    "blink": HTMLUnknownElement;
    "center": HTMLElement;
    "dir": HTMLDirectoryElement;
    "font": HTMLFontElement;
    "frame": HTMLFrameElement;
    "frameset": HTMLFrameSetElement;
    "isindex": HTMLUnknownElement;
    "keygen": HTMLUnknownElement;
    "listing": HTMLPreElement;
    "marquee": HTMLMarqueeElement;
    "menuitem": HTMLElement;
    "multicol": HTMLUnknownElement;
    "nextid": HTMLUnknownElement;
    "nobr": HTMLElement;
    "noembed": HTMLElement;
    "noframes": HTMLElement;
    "param": HTMLParamElement;
    "plaintext": HTMLElement;
    "rb": HTMLElement;
    "rtc": HTMLElement;
    "spacer": HTMLUnknownElement;
    "strike": HTMLElement;
    "tt": HTMLElement;
    "xmp": HTMLPreElement;
}
interface SVGElementTagNameMap {
    "a": SVGAElement;
    "animate": SVGAnimateElement;
    "animateMotion": SVGAnimateMotionElement;
    "animateTransform": SVGAnimateTransformElement;
    "circle": SVGCircleElement;
    "clipPath": SVGClipPathElement;
    "defs": SVGDefsElement;
    "desc": SVGDescElement;
    "ellipse": SVGEllipseElement;
    "feBlend": SVGFEBlendElement;
    "feColorMatrix": SVGFEColorMatrixElement;
    "feComponentTransfer": SVGFEComponentTransferElement;
    "feComposite": SVGFECompositeElement;
    "feConvolveMatrix": SVGFEConvolveMatrixElement;
    "feDiffuseLighting": SVGFEDiffuseLightingElement;
    "feDisplacementMap": SVGFEDisplacementMapElement;
    "feDistantLight": SVGFEDistantLightElement;
    "feDropShadow": SVGFEDropShadowElement;
    "feFlood": SVGFEFloodElement;
    "feFuncA": SVGFEFuncAElement;
    "feFuncB": SVGFEFuncBElement;
    "feFuncG": SVGFEFuncGElement;
    "feFuncR": SVGFEFuncRElement;
    "feGaussianBlur": SVGFEGaussianBlurElement;
    "feImage": SVGFEImageElement;
    "feMerge": SVGFEMergeElement;
    "feMergeNode": SVGFEMergeNodeElement;
    "feMorphology": SVGFEMorphologyElement;
    "feOffset": SVGFEOffsetElement;
    "fePointLight": SVGFEPointLightElement;
    "feSpecularLighting": SVGFESpecularLightingElement;
    "feSpotLight": SVGFESpotLightElement;
    "feTile": SVGFETileElement;
    "feTurbulence": SVGFETurbulenceElement;
    "filter": SVGFilterElement;
    "foreignObject": SVGForeignObjectElement;
    "g": SVGGElement;
    "image": SVGImageElement;
    "line": SVGLineElement;
    "linearGradient": SVGLinearGradientElement;
    "marker": SVGMarkerElement;
    "mask": SVGMaskElement;
    "metadata": SVGMetadataElement;
    "mpath": SVGMPathElement;
    "path": SVGPathElement;
    "pattern": SVGPatternElement;
    "polygon": SVGPolygonElement;
    "polyline": SVGPolylineElement;
    "radialGradient": SVGRadialGradientElement;
    "rect": SVGRectElement;
    "script": SVGScriptElement;
    "set": SVGSetElement;
    "stop": SVGStopElement;
    "style": SVGStyleElement;
    "svg": SVGSVGElement;
    "switch": SVGSwitchElement;
    "symbol": SVGSymbolElement;
    "text": SVGTextElement;
    "textPath": SVGTextPathElement;
    "title": SVGTitleElement;
    "tspan": SVGTSpanElement;
    "use": SVGUseElement;
    "view": SVGViewElement;
}
interface MathMLElementTagNameMap {
    "annotation": MathMLElement;
    "annotation-xml": MathMLElement;
    "maction": MathMLElement;
    "math": MathMLElement;
    "merror": MathMLElement;
    "mfrac": MathMLElement;
    "mi": MathMLElement;
    "mmultiscripts": MathMLElement;
    "mn": MathMLElement;
    "mo": MathMLElement;
    "mover": MathMLElement;
    "mpadded": MathMLElement;
    "mphantom": MathMLElement;
    "mprescripts": MathMLElement;
    "mroot": MathMLElement;
    "mrow": MathMLElement;
    "ms": MathMLElement;
    "mspace": MathMLElement;
    "msqrt": MathMLElement;
    "mstyle": MathMLElement;
    "msub": MathMLElement;
    "msubsup": MathMLElement;
    "msup": MathMLElement;
    "mtable": MathMLElement;
    "mtd": MathMLElement;
    "mtext": MathMLElement;
    "mtr": MathMLElement;
    "munder": MathMLElement;
    "munderover": MathMLElement;
    "semantics": MathMLElement;
}
type ElementTagNameMap = HTMLElementTagNameMap & Pick<SVGElementTagNameMap, Exclude<keyof SVGElementTagNameMap, keyof HTMLElementTagNameMap>>;
declare var Audio: {
    new (src?: string): HTMLAudioElement;
};
declare var Image: {
    new (width?: number, height?: number): HTMLImageElement;
};
declare var Option: {
    new (text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement;
};
declare var clientInformation: Navigator;
declare var closed: boolean;
declare var customElements: CustomElementRegistry;
declare var devicePixelRatio: number;
declare var document: Document;
declare var event: Event | undefined;
declare var external: External;
declare var frameElement: Element | null;
declare var frames: WindowProxy;
declare var history: History;
declare var innerHeight: number;
declare var innerWidth: number;
declare var length: number;
declare var location: Location;
declare var locationbar: BarProp;
declare var menubar: BarProp;
declare const name: void;
declare var navigator: Navigator;
declare var ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
declare var ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
declare var onorientationchange: ((this: Window, ev: Event) => any) | null;
declare var opener: any;
declare var orientation: number;
declare var outerHeight: number;
declare var outerWidth: number;
declare var pageXOffset: number;
declare var pageYOffset: number;
declare var parent: WindowProxy;
declare var personalbar: BarProp;
declare var screen: Screen;
declare var screenLeft: number;
declare var screenTop: number;
declare var screenX: number;
declare var screenY: number;
declare var scrollX: number;
declare var scrollY: number;
declare var scrollbars: BarProp;
declare var self: Window & typeof globalThis;
declare var speechSynthesis: SpeechSynthesis;
declare var status: string;
declare var statusbar: BarProp;
declare var toolbar: BarProp;
declare var top: WindowProxy | null;
declare var visualViewport: VisualViewport | null;
declare var window: Window & typeof globalThis;
declare function alert(message?: any): void;
declare function blur(): void;
declare function cancelIdleCallback(handle: number): void;
declare function captureEvents(): void;
declare function close(): void;
declare function confirm(message?: string): boolean;
declare function focus(): void;
declare function getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
declare function getSelection(): Selection | null;
declare function matchMedia(query: string): MediaQueryList;
declare function moveBy(x: number, y: number): void;
declare function moveTo(x: number, y: number): void;
declare function open(url?: string | URL, target?: string, features?: string): WindowProxy | null;
declare function postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void;
declare function postMessage(message: any, options?: WindowPostMessageOptions): void;
declare function print(): void;
declare function prompt(message?: string, _default?: string): string | null;
declare function releaseEvents(): void;
declare function requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): number;
declare function resizeBy(x: number, y: number): void;
declare function resizeTo(width: number, height: number): void;
declare function scroll(options?: ScrollToOptions): void;
declare function scroll(x: number, y: number): void;
declare function scrollBy(options?: ScrollToOptions): void;
declare function scrollBy(x: number, y: number): void;
declare function scrollTo(options?: ScrollToOptions): void;
declare function scrollTo(x: number, y: number): void;
declare function stop(): void;
declare function toString(): string;
declare function dispatchEvent(event: Event): boolean;
declare function cancelAnimationFrame(handle: number): void;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
declare var onabort: ((this: Window, ev: UIEvent) => any) | null;
declare var onanimationcancel: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onanimationend: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onanimationiteration: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onanimationstart: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onauxclick: ((this: Window, ev: MouseEvent) => any) | null;
declare var onbeforeinput: ((this: Window, ev: InputEvent) => any) | null;
declare var onblur: ((this: Window, ev: FocusEvent) => any) | null;
declare var oncancel: ((this: Window, ev: Event) => any) | null;
declare var oncanplay: ((this: Window, ev: Event) => any) | null;
declare var oncanplaythrough: ((this: Window, ev: Event) => any) | null;
declare var onchange: ((this: Window, ev: Event) => any) | null;
declare var onclick: ((this: Window, ev: MouseEvent) => any) | null;
declare var onclose: ((this: Window, ev: Event) => any) | null;
declare var oncontextmenu: ((this: Window, ev: MouseEvent) => any) | null;
declare var oncopy: ((this: Window, ev: ClipboardEvent) => any) | null;
declare var oncuechange: ((this: Window, ev: Event) => any) | null;
declare var oncut: ((this: Window, ev: ClipboardEvent) => any) | null;
declare var ondblclick: ((this: Window, ev: MouseEvent) => any) | null;
declare var ondrag: ((this: Window, ev: DragEvent) => any) | null;
declare var ondragend: ((this: Window, ev: DragEvent) => any) | null;
declare var ondragenter: ((this: Window, ev: DragEvent) => any) | null;
declare var ondragleave: ((this: Window, ev: DragEvent) => any) | null;
declare var ondragover: ((this: Window, ev: DragEvent) => any) | null;
declare var ondragstart: ((this: Window, ev: DragEvent) => any) | null;
declare var ondrop: ((this: Window, ev: DragEvent) => any) | null;
declare var ondurationchange: ((this: Window, ev: Event) => any) | null;
declare var onemptied: ((this: Window, ev: Event) => any) | null;
declare var onended: ((this: Window, ev: Event) => any) | null;
declare var onerror: OnErrorEventHandler;
declare var onfocus: ((this: Window, ev: FocusEvent) => any) | null;
declare var onformdata: ((this: Window, ev: FormDataEvent) => any) | null;
declare var ongotpointercapture: ((this: Window, ev: PointerEvent) => any) | null;
declare var oninput: ((this: Window, ev: Event) => any) | null;
declare var oninvalid: ((this: Window, ev: Event) => any) | null;
declare var onkeydown: ((this: Window, ev: KeyboardEvent) => any) | null;
declare var onkeypress: ((this: Window, ev: KeyboardEvent) => any) | null;
declare var onkeyup: ((this: Window, ev: KeyboardEvent) => any) | null;
declare var onload: ((this: Window, ev: Event) => any) | null;
declare var onloadeddata: ((this: Window, ev: Event) => any) | null;
declare var onloadedmetadata: ((this: Window, ev: Event) => any) | null;
declare var onloadstart: ((this: Window, ev: Event) => any) | null;
declare var onlostpointercapture: ((this: Window, ev: PointerEvent) => any) | null;
declare var onmousedown: ((this: Window, ev: MouseEvent) => any) | null;
declare var onmouseenter: ((this: Window, ev: MouseEvent) => any) | null;
declare var onmouseleave: ((this: Window, ev: MouseEvent) => any) | null;
declare var onmousemove: ((this: Window, ev: MouseEvent) => any) | null;
declare var onmouseout: ((this: Window, ev: MouseEvent) => any) | null;
declare var onmouseover: ((this: Window, ev: MouseEvent) => any) | null;
declare var onmouseup: ((this: Window, ev: MouseEvent) => any) | null;
declare var onpaste: ((this: Window, ev: ClipboardEvent) => any) | null;
declare var onpause: ((this: Window, ev: Event) => any) | null;
declare var onplay: ((this: Window, ev: Event) => any) | null;
declare var onplaying: ((this: Window, ev: Event) => any) | null;
declare var onpointercancel: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerdown: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerenter: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerleave: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointermove: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerout: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerover: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerup: ((this: Window, ev: PointerEvent) => any) | null;
declare var onprogress: ((this: Window, ev: ProgressEvent) => any) | null;
declare var onratechange: ((this: Window, ev: Event) => any) | null;
declare var onreset: ((this: Window, ev: Event) => any) | null;
declare var onresize: ((this: Window, ev: UIEvent) => any) | null;
declare var onscroll: ((this: Window, ev: Event) => any) | null;
declare var onsecuritypolicyviolation: ((this: Window, ev: SecurityPolicyViolationEvent) => any) | null;
declare var onseeked: ((this: Window, ev: Event) => any) | null;
declare var onseeking: ((this: Window, ev: Event) => any) | null;
declare var onselect: ((this: Window, ev: Event) => any) | null;
declare var onselectionchange: ((this: Window, ev: Event) => any) | null;
declare var onselectstart: ((this: Window, ev: Event) => any) | null;
declare var onslotchange: ((this: Window, ev: Event) => any) | null;
declare var onstalled: ((this: Window, ev: Event) => any) | null;
declare var onsubmit: ((this: Window, ev: SubmitEvent) => any) | null;
declare var onsuspend: ((this: Window, ev: Event) => any) | null;
declare var ontimeupdate: ((this: Window, ev: Event) => any) | null;
declare var ontoggle: ((this: Window, ev: Event) => any) | null;
declare var ontouchcancel: ((this: Window, ev: TouchEvent) => any) | null | undefined;
declare var ontouchend: ((this: Window, ev: TouchEvent) => any) | null | undefined;
declare var ontouchmove: ((this: Window, ev: TouchEvent) => any) | null | undefined;
declare var ontouchstart: ((this: Window, ev: TouchEvent) => any) | null | undefined;
declare var ontransitioncancel: ((this: Window, ev: TransitionEvent) => any) | null;
declare var ontransitionend: ((this: Window, ev: TransitionEvent) => any) | null;
declare var ontransitionrun: ((this: Window, ev: TransitionEvent) => any) | null;
declare var ontransitionstart: ((this: Window, ev: TransitionEvent) => any) | null;
declare var onvolumechange: ((this: Window, ev: Event) => any) | null;
declare var onwaiting: ((this: Window, ev: Event) => any) | null;
declare var onwebkitanimationend: ((this: Window, ev: Event) => any) | null;
declare var onwebkitanimationiteration: ((this: Window, ev: Event) => any) | null;
declare var onwebkitanimationstart: ((this: Window, ev: Event) => any) | null;
declare var onwebkittransitionend: ((this: Window, ev: Event) => any) | null;
declare var onwheel: ((this: Window, ev: WheelEvent) => any) | null;
declare var onafterprint: ((this: Window, ev: Event) => any) | null;
declare var onbeforeprint: ((this: Window, ev: Event) => any) | null;
declare var onbeforeunload: ((this: Window, ev: BeforeUnloadEvent) => any) | null;
declare var ongamepadconnected: ((this: Window, ev: GamepadEvent) => any) | null;
declare var ongamepaddisconnected: ((this: Window, ev: GamepadEvent) => any) | null;
declare var onhashchange: ((this: Window, ev: HashChangeEvent) => any) | null;
declare var onlanguagechange: ((this: Window, ev: Event) => any) | null;
declare var onmessage: ((this: Window, ev: MessageEvent) => any) | null;
declare var onmessageerror: ((this: Window, ev: MessageEvent) => any) | null;
declare var onoffline: ((this: Window, ev: Event) => any) | null;
declare var ononline: ((this: Window, ev: Event) => any) | null;
declare var onpagehide: ((this: Window, ev: PageTransitionEvent) => any) | null;
declare var onpageshow: ((this: Window, ev: PageTransitionEvent) => any) | null;
declare var onpopstate: ((this: Window, ev: PopStateEvent) => any) | null;
declare var onrejectionhandled: ((this: Window, ev: PromiseRejectionEvent) => any) | null;
declare var onstorage: ((this: Window, ev: StorageEvent) => any) | null;
declare var onunhandledrejection: ((this: Window, ev: PromiseRejectionEvent) => any) | null;
declare var onunload: ((this: Window, ev: Event) => any) | null;
declare var localStorage: Storage;
declare var caches: CacheStorage;
declare var crossOriginIsolated: boolean;
declare var crypto: Crypto;
declare var indexedDB: IDBFactory;
declare var isSecureContext: boolean;
declare var origin: string;
declare var performance: Performance;
declare function atob(data: string): string;
declare function btoa(data: string): string;
declare function clearInterval(id: number | undefined): void;
declare function clearTimeout(id: number | undefined): void;
declare function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
declare function queueMicrotask(callback: VoidFunction): void;
declare function reportError(e: any): void;
declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function structuredClone(value: any, options?: StructuredSerializeOptions): any;
declare var sessionStorage: Storage;
declare function addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
type AlgorithmIdentifier = Algorithm | string;
type BigInteger = Uint8Array;
type BinaryData = ArrayBuffer | ArrayBufferView;
type BlobPart = BufferSource | Blob | string;
type BodyInit = ReadableStream | XMLHttpRequestBodyInit;
type BufferSource = ArrayBufferView | ArrayBuffer;
type COSEAlgorithmIdentifier = number;
type CSSNumberish = number;
type CanvasImageSource = HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas;
type ClipboardItemData = Promise<string | Blob>;
type ClipboardItems = ClipboardItem[];
type ConstrainBoolean = boolean | ConstrainBooleanParameters;
type ConstrainDOMString = string | string[] | ConstrainDOMStringParameters;
type ConstrainDouble = number | ConstrainDoubleRange;
type ConstrainULong = number | ConstrainULongRange;
type DOMHighResTimeStamp = number;
type EpochTimeStamp = number;
type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
type Float32List = Float32Array | GLfloat[];
type FormDataEntryValue = File | string;
type GLbitfield = number;
type GLboolean = boolean;
type GLclampf = number;
type GLenum = number;
type GLfloat = number;
type GLint = number;
type GLint64 = number;
type GLintptr = number;
type GLsizei = number;
type GLsizeiptr = number;
type GLuint = number;
type GLuint64 = number;
type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;
type HTMLOrSVGScriptElement = HTMLScriptElement | SVGScriptElement;
type HashAlgorithmIdentifier = AlgorithmIdentifier;
type HeadersInit = [string, string][] | Record<string, string> | Headers;
type IDBValidKey = number | string | Date | BufferSource | IDBValidKey[];
type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
type Int32List = Int32Array | GLint[];
type LineAndPositionSetting = number | AutoKeyword;
type MediaProvider = MediaStream | MediaSource | Blob;
type MessageEventSource = WindowProxy | MessagePort | ServiceWorker;
type MutationRecordType = "attributes" | "characterData" | "childList";
type NamedCurve = string;
type OffscreenRenderingContext = OffscreenCanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext;
type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull | null;
type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;
type PerformanceEntryList = PerformanceEntry[];
type ReadableStreamController<T> = ReadableStreamDefaultController<T> | ReadableByteStreamController;
type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;
type ReadableStreamReader<T> = ReadableStreamDefaultReader<T> | ReadableStreamBYOBReader;
type RenderingContext = CanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext;
type RequestInfo = Request | string;
type TexImageSource = ImageBitmap | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | OffscreenCanvas;
type TimerHandler = string | Function;
type Transferable = OffscreenCanvas | ImageBitmap | MessagePort | ReadableStream | WritableStream | TransformStream | ArrayBuffer;
type Uint32List = Uint32Array | GLuint[];
type VibratePattern = number | number[];
type WindowProxy = Window;
type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;
type AlignSetting = "center" | "end" | "left" | "right" | "start";
type AnimationPlayState = "finished" | "idle" | "paused" | "running";
type AnimationReplaceState = "active" | "persisted" | "removed";
type AppendMode = "segments" | "sequence";
type AttestationConveyancePreference = "direct" | "enterprise" | "indirect" | "none";
type AudioContextLatencyCategory = "balanced" | "interactive" | "playback";
type AudioContextState = "closed" | "running" | "suspended";
type AuthenticatorAttachment = "cross-platform" | "platform";
type AuthenticatorTransport = "ble" | "hybrid" | "internal" | "nfc" | "usb";
type AutoKeyword = "auto";
type AutomationRate = "a-rate" | "k-rate";
type BinaryType = "arraybuffer" | "blob";
type BiquadFilterType = "allpass" | "bandpass" | "highpass" | "highshelf" | "lowpass" | "lowshelf" | "notch" | "peaking";
type CanPlayTypeResult = "" | "maybe" | "probably";
type CanvasDirection = "inherit" | "ltr" | "rtl";
type CanvasFillRule = "evenodd" | "nonzero";
type CanvasFontKerning = "auto" | "none" | "normal";
type CanvasFontStretch = "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded";
type CanvasFontVariantCaps = "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";
type CanvasLineCap = "butt" | "round" | "square";
type CanvasLineJoin = "bevel" | "miter" | "round";
type CanvasTextAlign = "center" | "end" | "left" | "right" | "start";
type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top";
type CanvasTextRendering = "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";
type ChannelCountMode = "clamped-max" | "explicit" | "max";
type ChannelInterpretation = "discrete" | "speakers";
type ClientTypes = "all" | "sharedworker" | "window" | "worker";
type ColorGamut = "p3" | "rec2020" | "srgb";
type ColorSpaceConversion = "default" | "none";
type CompositeOperation = "accumulate" | "add" | "replace";
type CompositeOperationOrAuto = "accumulate" | "add" | "auto" | "replace";
type CredentialMediationRequirement = "optional" | "required" | "silent";
type DOMParserSupportedType = "application/xhtml+xml" | "application/xml" | "image/svg+xml" | "text/html" | "text/xml";
type DirectionSetting = "" | "lr" | "rl";
type DisplayCaptureSurfaceType = "browser" | "monitor" | "window";
type DistanceModelType = "exponential" | "inverse" | "linear";
type DocumentReadyState = "complete" | "interactive" | "loading";
type DocumentVisibilityState = "hidden" | "visible";
type EndOfStreamError = "decode" | "network";
type EndingType = "native" | "transparent";
type FileSystemHandleKind = "directory" | "file";
type FillMode = "auto" | "backwards" | "both" | "forwards" | "none";
type FontDisplay = "auto" | "block" | "fallback" | "optional" | "swap";
type FontFaceLoadStatus = "error" | "loaded" | "loading" | "unloaded";
type FontFaceSetLoadStatus = "loaded" | "loading";
type FullscreenNavigationUI = "auto" | "hide" | "show";
type GamepadHapticActuatorType = "vibration";
type GamepadMappingType = "" | "standard" | "xr-standard";
type GlobalCompositeOperation = "color" | "color-burn" | "color-dodge" | "copy" | "darken" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "lighter" | "luminosity" | "multiply" | "overlay" | "saturation" | "screen" | "soft-light" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor";
type HdrMetadataType = "smpteSt2086" | "smpteSt2094-10" | "smpteSt2094-40";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type IDBRequestReadyState = "done" | "pending";
type IDBTransactionDurability = "default" | "relaxed" | "strict";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type ImageOrientation = "flipY" | "from-image";
type ImageSmoothingQuality = "high" | "low" | "medium";
type InsertPosition = "afterbegin" | "afterend" | "beforebegin" | "beforeend";
type IterationCompositeOperation = "accumulate" | "replace";
type KeyFormat = "jwk" | "pkcs8" | "raw" | "spki";
type KeyType = "private" | "public" | "secret";
type KeyUsage = "decrypt" | "deriveBits" | "deriveKey" | "encrypt" | "sign" | "unwrapKey" | "verify" | "wrapKey";
type LineAlignSetting = "center" | "end" | "start";
type LockMode = "exclusive" | "shared";
type MIDIPortConnectionState = "closed" | "open" | "pending";
type MIDIPortDeviceState = "connected" | "disconnected";
type MIDIPortType = "input" | "output";
type MediaDecodingType = "file" | "media-source" | "webrtc";
type MediaDeviceKind = "audioinput" | "audiooutput" | "videoinput";
type MediaEncodingType = "record" | "webrtc";
type MediaKeyMessageType = "individualization-request" | "license-release" | "license-renewal" | "license-request";
type MediaKeySessionClosedReason = "closed-by-application" | "hardware-context-reset" | "internal-error" | "release-acknowledged" | "resource-evicted";
type MediaKeySessionType = "persistent-license" | "temporary";
type MediaKeyStatus = "expired" | "internal-error" | "output-downscaled" | "output-restricted" | "released" | "status-pending" | "usable" | "usable-in-future";
type MediaKeysRequirement = "not-allowed" | "optional" | "required";
type MediaSessionAction = "nexttrack" | "pause" | "play" | "previoustrack" | "seekbackward" | "seekforward" | "seekto" | "skipad" | "stop";
type MediaSessionPlaybackState = "none" | "paused" | "playing";
type MediaStreamTrackState = "ended" | "live";
type NavigationTimingType = "back_forward" | "navigate" | "prerender" | "reload";
type NotificationDirection = "auto" | "ltr" | "rtl";
type NotificationPermission = "default" | "denied" | "granted";
type OffscreenRenderingContextId = "2d" | "bitmaprenderer" | "webgl" | "webgl2" | "webgpu";
type OrientationLockType = "any" | "landscape" | "landscape-primary" | "landscape-secondary" | "natural" | "portrait" | "portrait-primary" | "portrait-secondary";
type OrientationType = "landscape-primary" | "landscape-secondary" | "portrait-primary" | "portrait-secondary";
type OscillatorType = "custom" | "sawtooth" | "sine" | "square" | "triangle";
type OverSampleType = "2x" | "4x" | "none";
type PanningModelType = "HRTF" | "equalpower";
type PaymentComplete = "fail" | "success" | "unknown";
type PermissionName = "geolocation" | "notifications" | "persistent-storage" | "push" | "screen-wake-lock" | "xr-spatial-tracking";
type PermissionState = "denied" | "granted" | "prompt";
type PlaybackDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";
type PositionAlignSetting = "auto" | "center" | "line-left" | "line-right";
type PredefinedColorSpace = "display-p3" | "srgb";
type PremultiplyAlpha = "default" | "none" | "premultiply";
type PresentationStyle = "attachment" | "inline" | "unspecified";
type PublicKeyCredentialType = "public-key";
type PushEncryptionKeyName = "auth" | "p256dh";
type RTCBundlePolicy = "balanced" | "max-bundle" | "max-compat";
type RTCDataChannelState = "closed" | "closing" | "connecting" | "open";
type RTCDegradationPreference = "balanced" | "maintain-framerate" | "maintain-resolution";
type RTCDtlsTransportState = "closed" | "connected" | "connecting" | "failed" | "new";
type RTCEncodedVideoFrameType = "delta" | "empty" | "key";
type RTCErrorDetailType = "data-channel-failure" | "dtls-failure" | "fingerprint-failure" | "hardware-encoder-error" | "hardware-encoder-not-available" | "sctp-failure" | "sdp-syntax-error";
type RTCIceCandidateType = "host" | "prflx" | "relay" | "srflx";
type RTCIceComponent = "rtcp" | "rtp";
type RTCIceConnectionState = "checking" | "closed" | "completed" | "connected" | "disconnected" | "failed" | "new";
type RTCIceGathererState = "complete" | "gathering" | "new";
type RTCIceGatheringState = "complete" | "gathering" | "new";
type RTCIceProtocol = "tcp" | "udp";
type RTCIceTcpCandidateType = "active" | "passive" | "so";
type RTCIceTransportPolicy = "all" | "relay";
type RTCIceTransportState = "checking" | "closed" | "completed" | "connected" | "disconnected" | "failed" | "new";
type RTCPeerConnectionState = "closed" | "connected" | "connecting" | "disconnected" | "failed" | "new";
type RTCPriorityType = "high" | "low" | "medium" | "very-low";
type RTCRtcpMuxPolicy = "require";
type RTCRtpTransceiverDirection = "inactive" | "recvonly" | "sendonly" | "sendrecv" | "stopped";
type RTCSctpTransportState = "closed" | "connected" | "connecting";
type RTCSdpType = "answer" | "offer" | "pranswer" | "rollback";
type RTCSignalingState = "closed" | "have-local-offer" | "have-local-pranswer" | "have-remote-offer" | "have-remote-pranswer" | "stable";
type RTCStatsIceCandidatePairState = "failed" | "frozen" | "in-progress" | "inprogress" | "succeeded" | "waiting";
type RTCStatsType = "candidate-pair" | "certificate" | "codec" | "data-channel" | "inbound-rtp" | "local-candidate" | "media-source" | "outbound-rtp" | "peer-connection" | "remote-candidate" | "remote-inbound-rtp" | "remote-outbound-rtp" | "track" | "transport";
type ReadableStreamReaderMode = "byob";
type ReadableStreamType = "bytes";
type ReadyState = "closed" | "ended" | "open";
type RecordingState = "inactive" | "paused" | "recording";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
type RemotePlaybackState = "connected" | "connecting" | "disconnected";
type RequestCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
type RequestCredentials = "include" | "omit" | "same-origin";
type RequestDestination = "" | "audio" | "audioworklet" | "document" | "embed" | "font" | "frame" | "iframe" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
type RequestMode = "cors" | "navigate" | "no-cors" | "same-origin";
type RequestRedirect = "error" | "follow" | "manual";
type ResidentKeyRequirement = "discouraged" | "preferred" | "required";
type ResizeObserverBoxOptions = "border-box" | "content-box" | "device-pixel-content-box";
type ResizeQuality = "high" | "low" | "medium" | "pixelated";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type ScrollBehavior = "auto" | "smooth";
type ScrollLogicalPosition = "center" | "end" | "nearest" | "start";
type ScrollRestoration = "auto" | "manual";
type ScrollSetting = "" | "up";
type SecurityPolicyViolationEventDisposition = "enforce" | "report";
type SelectionMode = "end" | "preserve" | "select" | "start";
type ServiceWorkerState = "activated" | "activating" | "installed" | "installing" | "parsed" | "redundant";
type ServiceWorkerUpdateViaCache = "all" | "imports" | "none";
type ShadowRootMode = "closed" | "open";
type SlotAssignmentMode = "manual" | "named";
type SpeechSynthesisErrorCode = "audio-busy" | "audio-hardware" | "canceled" | "interrupted" | "invalid-argument" | "language-unavailable" | "network" | "not-allowed" | "synthesis-failed" | "synthesis-unavailable" | "text-too-long" | "voice-unavailable";
type TextTrackKind = "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
type TextTrackMode = "disabled" | "hidden" | "showing";
type TouchType = "direct" | "stylus";
type TransferFunction = "hlg" | "pq" | "srgb";
type UserVerificationRequirement = "discouraged" | "preferred" | "required";
type VideoColorPrimaries = "bt470bg" | "bt709" | "smpte170m";
type VideoFacingModeEnum = "environment" | "left" | "right" | "user";
type VideoMatrixCoefficients = "bt470bg" | "bt709" | "rgb" | "smpte170m";
type VideoTransferCharacteristics = "bt709" | "iec61966-2-1" | "smpte170m";
type WebGLPowerPreference = "default" | "high-performance" | "low-power";
type WorkerType = "classic" | "module";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
interface AudioParam {
    setValueCurveAtTime(values: Iterable<number>, startTime: number, duration: number): AudioParam;
}
interface AudioParamMap extends ReadonlyMap<string, AudioParam> {
}
interface BaseAudioContext {
    createIIRFilter(feedforward: Iterable<number>, feedback: Iterable<number>): IIRFilterNode;
    createPeriodicWave(real: Iterable<number>, imag: Iterable<number>, constraints?: PeriodicWaveConstraints): PeriodicWave;
}
interface CSSKeyframesRule {
    [Symbol.iterator](): IterableIterator<CSSKeyframeRule>;
}
interface CSSRuleList {
    [Symbol.iterator](): IterableIterator<CSSRule>;
}
interface CSSStyleDeclaration {
    [Symbol.iterator](): IterableIterator<string>;
}
interface Cache {
    addAll(requests: Iterable<RequestInfo>): Promise<void>;
}
interface CanvasPath {
    roundRect(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | Iterable<number | DOMPointInit>): void;
}
interface CanvasPathDrawingStyles {
    setLineDash(segments: Iterable<number>): void;
}
interface DOMRectList {
    [Symbol.iterator](): IterableIterator<DOMRect>;
}
interface DOMStringList {
    [Symbol.iterator](): IterableIterator<string>;
}
interface DOMTokenList {
    [Symbol.iterator](): IterableIterator<string>;
    entries(): IterableIterator<[number, string]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<string>;
}
interface DataTransferItemList {
    [Symbol.iterator](): IterableIterator<DataTransferItem>;
}
interface EventCounts extends ReadonlyMap<string, number> {
}
interface FileList {
    [Symbol.iterator](): IterableIterator<File>;
}
interface FontFaceSet extends Set<FontFace> {
}
interface FormData {
    [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>;
    entries(): IterableIterator<[string, FormDataEntryValue]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<FormDataEntryValue>;
}
interface HTMLAllCollection {
    [Symbol.iterator](): IterableIterator<Element>;
}
interface HTMLCollectionBase {
    [Symbol.iterator](): IterableIterator<Element>;
}
interface HTMLCollectionOf<T extends Element> {
    [Symbol.iterator](): IterableIterator<T>;
}
interface HTMLFormElement {
    [Symbol.iterator](): IterableIterator<Element>;
}
interface HTMLSelectElement {
    [Symbol.iterator](): IterableIterator<HTMLOptionElement>;
}
interface Headers {
    [Symbol.iterator](): IterableIterator<[string, string]>;
    entries(): IterableIterator<[string, string]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
}
interface IDBDatabase {
    transaction(storeNames: string | Iterable<string>, mode?: IDBTransactionMode, options?: IDBTransactionOptions): IDBTransaction;
}
interface IDBObjectStore {
    createIndex(name: string, keyPath: string | Iterable<string>, options?: IDBIndexParameters): IDBIndex;
}
interface MIDIInputMap extends ReadonlyMap<string, MIDIInput> {
}
interface MIDIOutput {
    send(data: Iterable<number>, timestamp?: DOMHighResTimeStamp): void;
}
interface MIDIOutputMap extends ReadonlyMap<string, MIDIOutput> {
}
interface MediaKeyStatusMap {
    [Symbol.iterator](): IterableIterator<[BufferSource, MediaKeyStatus]>;
    entries(): IterableIterator<[BufferSource, MediaKeyStatus]>;
    keys(): IterableIterator<BufferSource>;
    values(): IterableIterator<MediaKeyStatus>;
}
interface MediaList {
    [Symbol.iterator](): IterableIterator<string>;
}
interface MessageEvent<T = any> {
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource | null, ports?: Iterable<MessagePort>): void;
}
interface MimeTypeArray {
    [Symbol.iterator](): IterableIterator<MimeType>;
}
interface NamedNodeMap {
    [Symbol.iterator](): IterableIterator<Attr>;
}
interface Navigator {
    requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: Iterable<MediaKeySystemConfiguration>): Promise<MediaKeySystemAccess>;
    vibrate(pattern: Iterable<number>): boolean;
}
interface NodeList {
    [Symbol.iterator](): IterableIterator<Node>;
    entries(): IterableIterator<[number, Node]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<Node>;
}
interface NodeListOf<TNode extends Node> {
    [Symbol.iterator](): IterableIterator<TNode>;
    entries(): IterableIterator<[number, TNode]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<TNode>;
}
interface Plugin {
    [Symbol.iterator](): IterableIterator<MimeType>;
}
interface PluginArray {
    [Symbol.iterator](): IterableIterator<Plugin>;
}
interface RTCRtpTransceiver {
    setCodecPreferences(codecs: Iterable<RTCRtpCodecCapability>): void;
}
interface RTCStatsReport extends ReadonlyMap<string, any> {
}
interface SVGLengthList {
    [Symbol.iterator](): IterableIterator<SVGLength>;
}
interface SVGNumberList {
    [Symbol.iterator](): IterableIterator<SVGNumber>;
}
interface SVGPointList {
    [Symbol.iterator](): IterableIterator<DOMPoint>;
}
interface SVGStringList {
    [Symbol.iterator](): IterableIterator<string>;
}
interface SVGTransformList {
    [Symbol.iterator](): IterableIterator<SVGTransform>;
}
interface SourceBufferList {
    [Symbol.iterator](): IterableIterator<SourceBuffer>;
}
interface SpeechRecognitionResult {
    [Symbol.iterator](): IterableIterator<SpeechRecognitionAlternative>;
}
interface SpeechRecognitionResultList {
    [Symbol.iterator](): IterableIterator<SpeechRecognitionResult>;
}
interface StyleSheetList {
    [Symbol.iterator](): IterableIterator<CSSStyleSheet>;
}
interface SubtleCrypto {
    deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKeyPair>;
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKeyPair | CryptoKey>;
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    importKey(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
    unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
}
interface TextTrackCueList {
    [Symbol.iterator](): IterableIterator<TextTrackCue>;
}
interface TextTrackList {
    [Symbol.iterator](): IterableIterator<TextTrack>;
}
interface TouchList {
    [Symbol.iterator](): IterableIterator<Touch>;
}
interface URLSearchParams {
    [Symbol.iterator](): IterableIterator<[string, string]>;
    entries(): IterableIterator<[string, string]>;
    keys(): IterableIterator<string>;
    values(): IterableIterator<string>;
}
interface WEBGL_draw_buffers {
    drawBuffersWEBGL(buffers: Iterable<GLenum>): void;
}
interface WEBGL_multi_draw {
    multiDrawArraysInstancedWEBGL(mode: GLenum, firstsList: Int32Array | Iterable<GLint>, firstsOffset: GLuint, countsList: Int32Array | Iterable<GLsizei>, countsOffset: GLuint, instanceCountsList: Int32Array | Iterable<GLsizei>, instanceCountsOffset: GLuint, drawcount: GLsizei): void;
    multiDrawArraysWEBGL(mode: GLenum, firstsList: Int32Array | Iterable<GLint>, firstsOffset: GLuint, countsList: Int32Array | Iterable<GLsizei>, countsOffset: GLuint, drawcount: GLsizei): void;
    multiDrawElementsInstancedWEBGL(mode: GLenum, countsList: Int32Array | Iterable<GLsizei>, countsOffset: GLuint, type: GLenum, offsetsList: Int32Array | Iterable<GLsizei>, offsetsOffset: GLuint, instanceCountsList: Int32Array | Iterable<GLsizei>, instanceCountsOffset: GLuint, drawcount: GLsizei): void;
    multiDrawElementsWEBGL(mode: GLenum, countsList: Int32Array | Iterable<GLsizei>, countsOffset: GLuint, type: GLenum, offsetsList: Int32Array | Iterable<GLsizei>, offsetsOffset: GLuint, drawcount: GLsizei): void;
}
interface WebGL2RenderingContextBase {
    clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: Iterable<GLfloat>, srcOffset?: GLuint): void;
    clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: Iterable<GLint>, srcOffset?: GLuint): void;
    clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: Iterable<GLuint>, srcOffset?: GLuint): void;
    drawBuffers(buffers: Iterable<GLenum>): void;
    getActiveUniforms(program: WebGLProgram, uniformIndices: Iterable<GLuint>, pname: GLenum): any;
    getUniformIndices(program: WebGLProgram, uniformNames: Iterable<string>): Iterable<GLuint> | null;
    invalidateFramebuffer(target: GLenum, attachments: Iterable<GLenum>): void;
    invalidateSubFramebuffer(target: GLenum, attachments: Iterable<GLenum>, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    transformFeedbackVaryings(program: WebGLProgram, varyings: Iterable<string>, bufferMode: GLenum): void;
    uniform1uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform2uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform3uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform4uiv(location: WebGLUniformLocation | null, data: Iterable<GLuint>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix2x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix2x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix3x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix3x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix4x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix4x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    vertexAttribI4iv(index: GLuint, values: Iterable<GLint>): void;
    vertexAttribI4uiv(index: GLuint, values: Iterable<GLuint>): void;
}
interface WebGL2RenderingContextOverloads {
    uniform1fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform1iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform2fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform2iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform3fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform3iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform4fv(location: WebGLUniformLocation | null, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniform4iv(location: WebGLUniformLocation | null, data: Iterable<GLint>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Iterable<GLfloat>, srcOffset?: GLuint, srcLength?: GLuint): void;
}
interface WebGLRenderingContextBase {
    vertexAttrib1fv(index: GLuint, values: Iterable<GLfloat>): void;
    vertexAttrib2fv(index: GLuint, values: Iterable<GLfloat>): void;
    vertexAttrib3fv(index: GLuint, values: Iterable<GLfloat>): void;
    vertexAttrib4fv(index: GLuint, values: Iterable<GLfloat>): void;
}
interface WebGLRenderingContextOverloads {
    uniform1fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    uniform1iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    uniform2fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    uniform2iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    uniform3fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    uniform3iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    uniform4fv(location: WebGLUniformLocation | null, v: Iterable<GLfloat>): void;
    uniform4iv(location: WebGLUniformLocation | null, v: Iterable<GLint>): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Iterable<GLfloat>): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Iterable<GLfloat>): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Iterable<GLfloat>): void;
}
interface Array<T> {
    find<S extends T>(predicate: (value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
    findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
    fill(value: T, start?: number, end?: number): this;
    copyWithin(target: number, start: number, end?: number): this;
}
interface ArrayConstructor {
    from<T>(arrayLike: ArrayLike<T>): T[];
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
    of<T>(...items: T[]): T[];
}
interface DateConstructor {
    new (value: number | string | Date): Date;
}
interface Function {
    readonly name: string;
}
interface Math {
    clz32(x: number): number;
    imul(x: number, y: number): number;
    sign(x: number): number;
    log10(x: number): number;
    log2(x: number): number;
    log1p(x: number): number;
    expm1(x: number): number;
    cosh(x: number): number;
    sinh(x: number): number;
    tanh(x: number): number;
    acosh(x: number): number;
    asinh(x: number): number;
    atanh(x: number): number;
    hypot(...values: number[]): number;
    trunc(x: number): number;
    fround(x: number): number;
    cbrt(x: number): number;
}
interface NumberConstructor {
    readonly EPSILON: number;
    isFinite(number: unknown): boolean;
    isInteger(number: unknown): boolean;
    isNaN(number: unknown): boolean;
    isSafeInteger(number: unknown): boolean;
    readonly MAX_SAFE_INTEGER: number;
    readonly MIN_SAFE_INTEGER: number;
    parseFloat(string: string): number;
    parseInt(string: string, radix?: number): number;
}
interface ObjectConstructor {
    assign<T extends {}, U>(target: T, source: U): T & U;
    assign<T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;
    assign<T extends {}, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    assign(target: object, ...sources: any[]): any;
    getOwnPropertySymbols(o: any): symbol[];
    keys(o: {}): string[];
    is(value1: any, value2: any): boolean;
    setPrototypeOf(o: any, proto: object | null): any;
}
interface ReadonlyArray<T> {
    find<S extends T>(predicate: (value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined;
    find(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined;
    findIndex(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number;
}
interface RegExp {
    readonly flags: string;
    readonly sticky: boolean;
    readonly unicode: boolean;
}
interface RegExpConstructor {
    new (pattern: RegExp | string, flags?: string): RegExp;
    (pattern: RegExp | string, flags?: string): RegExp;
}
interface String {
    codePointAt(pos: number): number | undefined;
    includes(searchString: string, position?: number): boolean;
    endsWith(searchString: string, endPosition?: number): boolean;
    normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;
    normalize(form?: string): string;
    repeat(count: number): string;
    startsWith(searchString: string, position?: number): boolean;
    anchor(name: string): string;
    big(): string;
    blink(): string;
    bold(): string;
    fixed(): string;
    fontcolor(color: string): string;
    fontsize(size: number): string;
    fontsize(size: string): string;
    italics(): string;
    link(url: string): string;
    small(): string;
    strike(): string;
    sub(): string;
    sup(): string;
}
interface StringConstructor {
    fromCodePoint(...codePoints: number[]): string;
    raw(template: {
        raw: readonly string[] | ArrayLike<string>;
    }, ...substitutions: any[]): string;
}
interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly size: number;
}
interface MapConstructor {
    new (): Map<any, any>;
    new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
    readonly prototype: Map<any, any>;
}
declare var Map: MapConstructor;
interface ReadonlyMap<K, V> {
    forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    readonly size: number;
}
interface WeakMap<K extends object, V> {
    delete(key: K): boolean;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
}
interface WeakMapConstructor {
    new <K extends object = object, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;
    readonly prototype: WeakMap<object, any>;
}
declare var WeakMap: WeakMapConstructor;
interface Set<T> {
    add(value: T): this;
    clear(): void;
    delete(value: T): boolean;
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}
interface SetConstructor {
    new <T = any>(values?: readonly T[] | null): Set<T>;
    readonly prototype: Set<any>;
}
declare var Set: SetConstructor;
interface ReadonlySet<T> {
    forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}
interface WeakSet<T extends object> {
    add(value: T): this;
    delete(value: T): boolean;
    has(value: T): boolean;
}
interface WeakSetConstructor {
    new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>;
    readonly prototype: WeakSet<object>;
}
declare var WeakSet: WeakSetConstructor;
interface SymbolConstructor {
    readonly iterator: unique symbol;
}
interface IteratorYieldResult<TYield> {
    done?: false;
    value: TYield;
}
interface IteratorReturnResult<TReturn> {
    done: true;
    value: TReturn;
}
type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;
interface Iterator<T, TReturn = any, TNext = undefined> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return?(value?: TReturn): IteratorResult<T, TReturn>;
    throw?(e?: any): IteratorResult<T, TReturn>;
}
interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}
interface IterableIterator<T> extends Iterator<T> {
    [Symbol.iterator](): IterableIterator<T>;
}
interface Array<T> {
    [Symbol.iterator](): IterableIterator<T>;
    entries(): IterableIterator<[number, T]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<T>;
}
interface ArrayConstructor {
    from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
    from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
}
interface ReadonlyArray<T> {
    [Symbol.iterator](): IterableIterator<T>;
    entries(): IterableIterator<[number, T]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<T>;
}
interface IArguments {
    [Symbol.iterator](): IterableIterator<any>;
}
interface Map<K, V> {
    [Symbol.iterator](): IterableIterator<[K, V]>;
    entries(): IterableIterator<[K, V]>;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
}
interface ReadonlyMap<K, V> {
    [Symbol.iterator](): IterableIterator<[K, V]>;
    entries(): IterableIterator<[K, V]>;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
}
interface MapConstructor {
    new (): Map<any, any>;
    new <K, V>(iterable?: Iterable<readonly [K, V]> | null): Map<K, V>;
}
interface WeakMap<K extends object, V> {
}
interface WeakMapConstructor {
    new <K extends object, V>(iterable: Iterable<readonly [K, V]>): WeakMap<K, V>;
}
interface Set<T> {
    [Symbol.iterator](): IterableIterator<T>;
    entries(): IterableIterator<[T, T]>;
    keys(): IterableIterator<T>;
    values(): IterableIterator<T>;
}
interface ReadonlySet<T> {
    [Symbol.iterator](): IterableIterator<T>;
    entries(): IterableIterator<[T, T]>;
    keys(): IterableIterator<T>;
    values(): IterableIterator<T>;
}
interface SetConstructor {
    new <T>(iterable?: Iterable<T> | null): Set<T>;
}
interface WeakSet<T extends object> {
}
interface WeakSetConstructor {
    new <T extends object = object>(iterable: Iterable<T>): WeakSet<T>;
}
interface Promise<T> {
}
interface PromiseConstructor {
    all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;
    race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>;
}
interface String {
    [Symbol.iterator](): IterableIterator<string>;
}
interface Int8Array {
    [Symbol.iterator](): IterableIterator<number>;
    entries(): IterableIterator<[number, number]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<number>;
}
interface Int8ArrayConstructor {
    new (elements: Iterable<number>): Int8Array;
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int8Array;
}
interface Uint8Array {
    [Symbol.iterator](): IterableIterator<number>;
    entries(): IterableIterator<[number, number]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<number>;
}
interface Uint8ArrayConstructor {
    new (elements: Iterable<number>): Uint8Array;
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8Array;
}
interface Uint8ClampedArray {
    [Symbol.iterator](): IterableIterator<number>;
    entries(): IterableIterator<[number, number]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<number>;
}
interface Uint8ClampedArrayConstructor {
    new (elements: Iterable<number>): Uint8ClampedArray;
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8ClampedArray;
}
interface Int16Array {
    [Symbol.iterator](): IterableIterator<number>;
    entries(): IterableIterator<[number, number]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<number>;
}
interface Int16ArrayConstructor {
    new (elements: Iterable<number>): Int16Array;
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int16Array;
}
interface Uint16Array {
    [Symbol.iterator](): IterableIterator<number>;
    entries(): IterableIterator<[number, number]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<number>;
}
interface Uint16ArrayConstructor {
    new (elements: Iterable<number>): Uint16Array;
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint16Array;
}
interface Int32Array {
    [Symbol.iterator](): IterableIterator<number>;
    entries(): IterableIterator<[number, number]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<number>;
}
interface Int32ArrayConstructor {
    new (elements: Iterable<number>): Int32Array;
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int32Array;
}
interface Uint32Array {
    [Symbol.iterator](): IterableIterator<number>;
    entries(): IterableIterator<[number, number]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<number>;
}
interface Uint32ArrayConstructor {
    new (elements: Iterable<number>): Uint32Array;
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint32Array;
}
interface Float32Array {
    [Symbol.iterator](): IterableIterator<number>;
    entries(): IterableIterator<[number, number]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<number>;
}
interface Float32ArrayConstructor {
    new (elements: Iterable<number>): Float32Array;
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float32Array;
}
interface Float64Array {
    [Symbol.iterator](): IterableIterator<number>;
    entries(): IterableIterator<[number, number]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<number>;
}
interface Float64ArrayConstructor {
    new (elements: Iterable<number>): Float64Array;
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float64Array;
}
interface Generator<T = unknown, TReturn = any, TNext = unknown> extends Iterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
}
interface GeneratorFunction {
    new (...args: any[]): Generator;
    (...args: any[]): Generator;
    readonly length: number;
    readonly name: string;
    readonly prototype: Generator;
}
interface GeneratorFunctionConstructor {
    new (...args: string[]): GeneratorFunction;
    (...args: string[]): GeneratorFunction;
    readonly length: number;
    readonly name: string;
    readonly prototype: GeneratorFunction;
}
interface PromiseConstructor {
    readonly prototype: Promise<any>;
    new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
    all<T extends readonly unknown[] | []>(values: T): Promise<{
        -readonly [P in keyof T]: Awaited<T[P]>;
    }>;
    race<T extends readonly unknown[] | []>(values: T): Promise<Awaited<T[number]>>;
    reject<T = never>(reason?: any): Promise<T>;
    resolve(): Promise<void>;
    resolve<T>(value: T): Promise<Awaited<T>>;
    resolve<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>;
}
declare var Promise: PromiseConstructor;
interface ProxyHandler<T extends object> {
    apply?(target: T, thisArg: any, argArray: any[]): any;
    construct?(target: T, argArray: any[], newTarget: Function): object;
    defineProperty?(target: T, property: string | symbol, attributes: PropertyDescriptor): boolean;
    deleteProperty?(target: T, p: string | symbol): boolean;
    get?(target: T, p: string | symbol, receiver: any): any;
    getOwnPropertyDescriptor?(target: T, p: string | symbol): PropertyDescriptor | undefined;
    getPrototypeOf?(target: T): object | null;
    has?(target: T, p: string | symbol): boolean;
    isExtensible?(target: T): boolean;
    ownKeys?(target: T): ArrayLike<string | symbol>;
    preventExtensions?(target: T): boolean;
    set?(target: T, p: string | symbol, newValue: any, receiver: any): boolean;
    setPrototypeOf?(target: T, v: object | null): boolean;
}
interface ProxyConstructor {
    revocable<T extends object>(target: T, handler: ProxyHandler<T>): {
        proxy: T;
        revoke: () => void;
    };
    new <T extends object>(target: T, handler: ProxyHandler<T>): T;
}
declare var Proxy: ProxyConstructor;
declare namespace Reflect {
    function apply<T, A extends readonly any[], R>(target: (this: T, ...args: A) => R, thisArgument: T, argumentsList: Readonly<A>): R;
    function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;
    function construct<A extends readonly any[], R>(target: new (...args: A) => R, argumentsList: Readonly<A>, newTarget?: new (...args: any) => any): R;
    function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any;
    function defineProperty(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): boolean;
    function deleteProperty(target: object, propertyKey: PropertyKey): boolean;
    function get<T extends object, P extends PropertyKey>(target: T, propertyKey: P, receiver?: unknown): P extends keyof T ? T[P] : any;
    function getOwnPropertyDescriptor<T extends object, P extends PropertyKey>(target: T, propertyKey: P): TypedPropertyDescriptor<P extends keyof T ? T[P] : any> | undefined;
    function getPrototypeOf(target: object): object | null;
    function has(target: object, propertyKey: PropertyKey): boolean;
    function isExtensible(target: object): boolean;
    function ownKeys(target: object): (string | symbol)[];
    function preventExtensions(target: object): boolean;
    function set<T extends object, P extends PropertyKey>(target: T, propertyKey: P, value: P extends keyof T ? T[P] : any, receiver?: any): boolean;
    function set(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;
    function setPrototypeOf(target: object, proto: object | null): boolean;
}
interface SymbolConstructor {
    readonly prototype: Symbol;
    (description?: string | number): symbol;
    for(key: string): symbol;
    keyFor(sym: symbol): string | undefined;
}
declare var Symbol: SymbolConstructor;
interface SymbolConstructor {
    readonly hasInstance: unique symbol;
    readonly isConcatSpreadable: unique symbol;
    readonly match: unique symbol;
    readonly replace: unique symbol;
    readonly search: unique symbol;
    readonly species: unique symbol;
    readonly split: unique symbol;
    readonly toPrimitive: unique symbol;
    readonly toStringTag: unique symbol;
    readonly unscopables: unique symbol;
}
interface Symbol {
    [Symbol.toPrimitive](hint: string): symbol;
    readonly [Symbol.toStringTag]: string;
}
interface Array<T> {
    readonly [Symbol.unscopables]: {
        [K in keyof any[]]?: boolean;
    };
}
interface ReadonlyArray<T> {
    readonly [Symbol.unscopables]: {
        [K in keyof readonly any[]]?: boolean;
    };
}
interface Date {
    [Symbol.toPrimitive](hint: "default"): string;
    [Symbol.toPrimitive](hint: "string"): string;
    [Symbol.toPrimitive](hint: "number"): number;
    [Symbol.toPrimitive](hint: string): string | number;
}
interface Map<K, V> {
    readonly [Symbol.toStringTag]: string;
}
interface WeakMap<K extends object, V> {
    readonly [Symbol.toStringTag]: string;
}
interface Set<T> {
    readonly [Symbol.toStringTag]: string;
}
interface WeakSet<T extends object> {
    readonly [Symbol.toStringTag]: string;
}
interface JSON {
    readonly [Symbol.toStringTag]: string;
}
interface Function {
    [Symbol.hasInstance](value: any): boolean;
}
interface GeneratorFunction {
    readonly [Symbol.toStringTag]: string;
}
interface Math {
    readonly [Symbol.toStringTag]: string;
}
interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}
interface PromiseConstructor {
    readonly [Symbol.species]: PromiseConstructor;
}
interface RegExp {
    [Symbol.match](string: string): RegExpMatchArray | null;
    [Symbol.replace](string: string, replaceValue: string): string;
    [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string;
    [Symbol.search](string: string): number;
    [Symbol.split](string: string, limit?: number): string[];
}
interface RegExpConstructor {
    readonly [Symbol.species]: RegExpConstructor;
}
interface String {
    match(matcher: {
        [Symbol.match](string: string): RegExpMatchArray | null;
    }): RegExpMatchArray | null;
    replace(searchValue: {
        [Symbol.replace](string: string, replaceValue: string): string;
    }, replaceValue: string): string;
    replace(searchValue: {
        [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string;
    }, replacer: (substring: string, ...args: any[]) => string): string;
    search(searcher: {
        [Symbol.search](string: string): number;
    }): number;
    split(splitter: {
        [Symbol.split](string: string, limit?: number): string[];
    }, limit?: number): string[];
}
interface ArrayBuffer {
    readonly [Symbol.toStringTag]: string;
}
interface DataView {
    readonly [Symbol.toStringTag]: string;
}
interface Int8Array {
    readonly [Symbol.toStringTag]: "Int8Array";
}
interface Uint8Array {
    readonly [Symbol.toStringTag]: "Uint8Array";
}
interface Uint8ClampedArray {
    readonly [Symbol.toStringTag]: "Uint8ClampedArray";
}
interface Int16Array {
    readonly [Symbol.toStringTag]: "Int16Array";
}
interface Uint16Array {
    readonly [Symbol.toStringTag]: "Uint16Array";
}
interface Int32Array {
    readonly [Symbol.toStringTag]: "Int32Array";
}
interface Uint32Array {
    readonly [Symbol.toStringTag]: "Uint32Array";
}
interface Float32Array {
    readonly [Symbol.toStringTag]: "Float32Array";
}
interface Float64Array {
    readonly [Symbol.toStringTag]: "Float64Array";
}
interface ArrayConstructor {
    readonly [Symbol.species]: ArrayConstructor;
}
interface MapConstructor {
    readonly [Symbol.species]: MapConstructor;
}
interface SetConstructor {
    readonly [Symbol.species]: SetConstructor;
}
interface ArrayBufferConstructor {
    readonly [Symbol.species]: ArrayBufferConstructor;
}
interface Array<T> {
    includes(searchElement: T, fromIndex?: number): boolean;
}
interface ReadonlyArray<T> {
    includes(searchElement: T, fromIndex?: number): boolean;
}
interface Int8Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}
interface Uint8Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}
interface Uint8ClampedArray {
    includes(searchElement: number, fromIndex?: number): boolean;
}
interface Int16Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}
interface Uint16Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}
interface Int32Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}
interface Uint32Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}
interface Float32Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}
interface Float64Array {
    includes(searchElement: number, fromIndex?: number): boolean;
}
interface ObjectConstructor {
    values<T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): T[];
    values(o: {}): any[];
    entries<T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): [string, T][];
    entries(o: {}): [string, any][];
    getOwnPropertyDescriptors<T>(o: T): {
        [P in keyof T]: TypedPropertyDescriptor<T[P]>;
    } & {
        [x: string]: PropertyDescriptor;
    };
}
interface SharedArrayBuffer {
    readonly byteLength: number;
    slice(begin: number, end?: number): SharedArrayBuffer;
    readonly [Symbol.species]: SharedArrayBuffer;
    readonly [Symbol.toStringTag]: "SharedArrayBuffer";
}
interface SharedArrayBufferConstructor {
    readonly prototype: SharedArrayBuffer;
    new (byteLength: number): SharedArrayBuffer;
}
declare var SharedArrayBuffer: SharedArrayBufferConstructor;
interface ArrayBufferTypes {
    SharedArrayBuffer: SharedArrayBuffer;
}
interface Atomics {
    add(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;
    and(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;
    compareExchange(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, expectedValue: number, replacementValue: number): number;
    exchange(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;
    isLockFree(size: number): boolean;
    load(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number): number;
    or(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;
    store(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;
    sub(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;
    wait(typedArray: Int32Array, index: number, value: number, timeout?: number): "ok" | "not-equal" | "timed-out";
    notify(typedArray: Int32Array, index: number, count?: number): number;
    xor(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;
    readonly [Symbol.toStringTag]: "Atomics";
}
declare var Atomics: Atomics;
interface String {
    padStart(maxLength: number, fillString?: string): string;
    padEnd(maxLength: number, fillString?: string): string;
}
declare namespace Intl {
    interface DateTimeFormatPartTypesRegistry {
        day: any;
        dayPeriod: any;
        era: any;
        hour: any;
        literal: any;
        minute: any;
        month: any;
        second: any;
        timeZoneName: any;
        weekday: any;
        year: any;
    }
    type DateTimeFormatPartTypes = keyof DateTimeFormatPartTypesRegistry;
    interface DateTimeFormatPart {
        type: DateTimeFormatPartTypes;
        value: string;
    }
    interface DateTimeFormat {
        formatToParts(date?: Date | number): DateTimeFormatPart[];
    }
}
interface Int8ArrayConstructor {
    new (): Int8Array;
}
interface Uint8ArrayConstructor {
    new (): Uint8Array;
}
interface Uint8ClampedArrayConstructor {
    new (): Uint8ClampedArray;
}
interface Int16ArrayConstructor {
    new (): Int16Array;
}
interface Uint16ArrayConstructor {
    new (): Uint16Array;
}
interface Int32ArrayConstructor {
    new (): Int32Array;
}
interface Uint32ArrayConstructor {
    new (): Uint32Array;
}
interface Float32ArrayConstructor {
    new (): Float32Array;
}
interface Float64ArrayConstructor {
    new (): Float64Array;
}
