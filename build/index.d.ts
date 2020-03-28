export declare const sum: (a: number, b: number) => number;
export declare const isMobile: () => boolean;
export declare const isDesktop: () => boolean;
export declare const checkValidUrl: (url: string) => boolean;
export declare const lowerBound: (num: number, limit: number) => number;
export declare const sleep: (ms: number) => Promise<unknown>;
export declare const capitalizeWords: (str: String) => string;
export declare const toSnakeCase: (str: String) => string;
export declare const validateEmail: (email: String) => boolean;
/**
* @link https://www.qodo.co.uk/blog/javascript-restrict-keyboard-character-input/
* @param _myField
* @param evt
* @param restrictionType [digitsOnly, floatOnly, alphaOnly]
*/
export declare const restrictCharacters: (_myField: HTMLOrSVGElement, evt: KeyboardEvent, restrictionType: string) => any;
export declare const isNumber: (evt: KeyboardEvent) => any;
/**
 *
 * @param input
 * @returns {string|*}
 */
export declare const decodeString: (input: string) => string | null;
