import { Document, Model } from 'mongoose';
export declare type props = <T>(Domain: Model<T, any>) => Promise<{
    get: boolean;
    message: string;
    docs: Document<T>[] | object;
}>;
