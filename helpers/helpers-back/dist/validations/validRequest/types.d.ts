import { Request } from 'express';
declare type resp = {
    valid: boolean;
    errors: any[];
};
export declare type validRequestT = (validator: any) => (req: Request) => resp;
export {};
