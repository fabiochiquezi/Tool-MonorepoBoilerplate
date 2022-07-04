import { Model } from 'mongoose';
export declare type findDeleteReturn = {
    del: boolean;
    message: string;
};
export declare type props = <T>(Domain: Model<T>) => (id: string) => Promise<findDeleteReturn>;
