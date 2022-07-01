export declare type resFirebase = {
    ok: boolean;
    status: number;
    message: string;
    data: any;
};
export declare type resFirebaseFnT = (ok: boolean, status: number, message: string, data: any) => resFirebase;
