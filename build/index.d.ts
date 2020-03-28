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
export declare class AddressManager {
    urlIBGE?: string | undefined;
    configuration?: Object | undefined;
    urlBaseIBGE: string;
    config: object;
    constructor(urlIBGE?: string | undefined, configuration?: Object | undefined);
    states(): Promise<any>;
    cities(codeState?: null): Promise<any>;
    neighborhoods(codeCity?: null): Promise<any>;
    searchCep(cep: string): Promise<any> | "Formato de CEP inválido.";
}
