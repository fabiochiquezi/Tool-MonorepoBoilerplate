export declare const signUp: (auth: import("@firebase/auth").Auth) => <T>(data: {
    email: string;
    password: string;
}) => Promise<import("helpers").responseDataT<T>>;
