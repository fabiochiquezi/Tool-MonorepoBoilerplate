import { Document } from 'mongoose';
export declare type props = <T>(doc: Document<T>) => (data: any) => Promise<{
    update: boolean;
    message: string;
}>;
