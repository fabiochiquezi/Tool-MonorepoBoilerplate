export declare const signIn: (auth: any) => <T>(data: {
    email: string;
    password: string;
}) => Promise<import("helpers-front").responseDataT<T>>;
