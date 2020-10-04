export type DebounceProcedure = (...args: any[]) => void;

export type DebounceOptions = {
    isImmediate: boolean,
}

export type StrictOption = {
    isStrict: boolean
}

export type ToCurrencyOptions = {
    locale: string
    prefix?: string,
    suffix?: string,
} & Intl.NumberFormatOptions
