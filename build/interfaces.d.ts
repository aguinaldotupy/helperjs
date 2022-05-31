export interface IFnRecursiveIterator {
    (value: any, key: number | string, subject: any, path: string): void;
}
