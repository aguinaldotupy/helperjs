import { DebounceProcedure, DebounceOptions, StrictOption, ToCurrencyOptions } from './types';
import { IFnRecursiveIterator } from "./interfaces";
export declare const sum: (a: number, b: number) => number;
export declare const toType: (value: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
export declare const isObject: (object: any) => boolean;
export declare const isPlainObject: (object: any) => boolean;
export declare const isArray: (value: any) => boolean;
export declare const isFunction: (value: any) => boolean;
export declare const isBoolean: (value: any) => boolean;
export declare const isString: (value: any) => boolean;
export declare const isNumber: (value: any) => boolean;
export declare const isUndefined: (value: any, options?: StrictOption) => boolean;
export declare const isNull: (value: any, options?: StrictOption) => boolean;
export declare const isEmptyString: (value: string) => boolean;
export declare const isDate: (value: any) => boolean;
export declare const isEvent: (value: any) => boolean;
export declare const isFile: (value: any) => boolean;
export declare const isUndefinedOrNull: (value: any, options?: StrictOption) => boolean;
export declare const RX_TRIM_LEFT: RegExp;
export declare const RX_TRIM_RIGHT: RegExp;
export declare const RX_REGEXP_REPLACE: RegExp;
export declare const RX_UN_KEBAB: RegExp;
export declare const RX_HYPHENATE: RegExp;
export declare const RX_PROTOCOL: RegExp;
export declare const RX_DOMAIN: RegExp;
export declare const RX_IP_ADDRESS: RegExp;
export declare const RX_PORT_AND_PATH: RegExp;
export declare const RX_QUERY_STRING: RegExp;
export declare const RX_HASH_STRING: RegExp;
export declare const RX_SNAKE_CASE: RegExp;
export declare const RX_VERIFY_EMAIL: RegExp;
export declare const RX_FORMAT_CNPJ: RegExp;
export declare const RX_FORMAT_CURRENCY: RegExp;
export declare const RX_UUID_V4: RegExp;
export declare const isMobile: () => boolean;
export declare const isDesktop: () => boolean;
export declare const checkValidUrl: (url: string) => boolean;
export declare const lowerBound: (num: number, limit: number) => number;
export declare const sleep: (ms: number) => Promise<unknown>;
export declare const capitalizeWords: (str: String) => string;
export declare function toTitleCase(str: string): string;
export declare const toSnakeCase: (str: String) => string;
export declare const toString: (val: string, spaces?: number) => string;
export declare const kebabCase: (str: string) => string;
export declare const pascalCase: (str: string) => string;
export declare const lowerFirst: (str: string) => string;
export declare const upperFirst: (str: string) => string;
export declare const trimLeft: (str: string) => string;
export declare const trimRight: (str: any) => string;
export declare const trim: (str: any) => string;
export declare const lowerCase: (str: any) => string;
export declare const upperCase: (str: any) => string;
export declare const validateEmail: (email: String) => boolean;
/**
 * @link https://www.qodo.co.uk/blog/javascript-restrict-keyboard-character-input/
 * @param _myField
 * @param evt
 * @param restrictionType [digitsOnly, floatOnly, alphaOnly]
 */
export declare const restrictCharacters: (_myField: HTMLOrSVGElement, evt: KeyboardEvent, restrictionType: string) => any;
export declare const keydownOnlyNumber: (evt: KeyboardEvent) => any;
/**
 *
 * @param input
 * @returns {string|*}
 */
export declare const decodeString: (input: string) => string | null;
export declare const generateCpf: (mask?: boolean) => string;
export declare const humanFileSize: (bytes: number, decimals?: number) => string;
export declare const deepCopy: (obj: {
    [x: string]: any;
} | null) => {} | null;
export declare const toCurrency: (value: number, options?: ToCurrencyOptions, suffix?: string) => string;
export declare const firstAndLastName: (fullName: string) => string;
export declare const chunkArray: (array: string | any[], size: number) => (string | any[])[];
export declare const validateCpf: (val: any) => boolean;
/**
 * Validates a CNPJ
 * @param cnpj The CNPJ value to be validated
 */
export declare const validateCnpj: (cnpj: string | number) => boolean;
/**
 * Formats a CNPJ value
 * @param cnpj The CNPJ to be formatted
 * @return The formatted CNPJ
 */
export declare const maskCnpj: (cnpj: string | number) => string;
/**
 * Generates a valid CNPJ
 * @return The generated CNPJ
 */
export declare const generateCnpj: (mask?: boolean) => string;
export declare const generateEmail: (lengthUserName?: number, lengthDomain?: number) => string;
export declare const filterObject: (object: {
    [s: string]: unknown;
} | ArrayLike<unknown>, callback: (arg0: string, arg1: unknown) => any) => {};
export declare const calcPercentage: (partialValue: number, totalValue: number) => number;
export declare function debounce<F extends DebounceProcedure>(callback: F, waitMilliseconds?: number, options?: DebounceOptions): (this: ThisParameterType<F>, ...args: Parameters<F>) => void;
export declare const uuidv4: () => string;
export declare const isUuidV4: (string: string) => boolean;
export declare const isValidValue: (value: any) => boolean;
export declare const isInvalidValue: (value: any) => boolean;
export declare const forEachObject: (obj: Object, fn: IFnRecursiveIterator, path: any) => void;
export declare const forEachArray: (array: any[], fn: IFnRecursiveIterator, path: any) => void;
/**
 * Recursively iterate over an object or array.
 * @param value
 * @param callback - function to call on each value in the object or array (value, key, object, path)
 * `value` is the current property value
 * `key` is the current property name
 * `subject` is either an array or an object
 * `path` is the iteration path, e.g.: 'prop2[0]' and 'prop4.prop5'
 * @param path
 */
export declare const recursiveIterator: (value: any, callback: IFnRecursiveIterator, path?: any) => void;
/**
 * @param object
 */
export declare const makeFormDataFromObject: (object: {
    [s: string]: unknown;
}) => FormData;
export declare const inputOnlyNumber: (evt: KeyboardEvent) => void;
