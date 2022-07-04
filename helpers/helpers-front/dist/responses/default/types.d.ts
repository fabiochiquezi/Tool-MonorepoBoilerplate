export declare type responseT = <T>(ok: boolean, message: string, data?: T | T[] | Object, status?: number) => {
    ok: boolean;
    message: string;
    data: T | T[] | Object;
    status: number;
};
export interface responseDataT<T> {
    ok: boolean;
    message: string;
    data: T | T[] | Object;
    status: number;
}
