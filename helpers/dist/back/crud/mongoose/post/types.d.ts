import { Document, Model } from 'mongoose';
export declare type postReturn = {
    post: boolean;
    message: string;
    item: Document<unknown, any> | object;
};
export declare type props = (Domain: Model<any>) => (data: any) => Promise<postReturn>;
