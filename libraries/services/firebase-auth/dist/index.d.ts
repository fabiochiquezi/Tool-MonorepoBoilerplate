import { Auth } from 'firebase/auth';
declare type firebaseConfig = {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
};
export declare const fireSettings: (firebaseConfig: firebaseConfig) => {
    app: import("@firebase/app").FirebaseApp;
    auth: Auth;
    emulator: (url: string) => void;
};
export declare const firebaseAuth: (auth: Auth) => {
    signIn: <T>(data: {
        email: string;
        password: string;
    }) => Promise<import("helpers-front").responseDataT<T>>;
    signOut: <T_1>() => Promise<import("helpers-front").responseDataT<T_1>>;
    signUp: <T_2>(data: {
        email: string;
        password: string;
    }) => Promise<import("helpers-front").responseDataT<T_2>>;
    state: (fn: any) => import("@firebase/util").Unsubscribe;
};
export {};
