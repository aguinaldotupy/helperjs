export declare type DebounceProcedure = (...args: any[]) => void;
export declare type DebounceOptions = {
    isImmediate: boolean;
};
export declare type StrictOption = {
    isStrict: boolean;
};
export declare type ToCurrencyOptions = {
    locale: string;
    prefix?: string;
    suffix?: string;
} & Intl.NumberFormatOptions;
