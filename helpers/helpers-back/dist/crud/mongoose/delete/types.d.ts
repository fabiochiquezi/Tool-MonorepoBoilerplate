import { Model } from 'mongoose';
export declare type deleteReturn = {
    delete: boolean;
    message: string;
};
export declare type props = <T>(Domain: Model<T>) => (id: string) => Promise<deleteReturn>;
