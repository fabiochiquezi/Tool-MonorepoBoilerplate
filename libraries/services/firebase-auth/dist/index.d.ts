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
    signIn: (data: {
        email: string;
        password: string;
    }) => Promise<resFirebase>;
    signOut: () => Promise<resFirebase>;
    signUp: (data: {
        email: string;
        password: string;
    }) => Promise<resFirebase>;
    state: (fn: any) => import("@firebase/util").Unsubscribe;
};
export {};
