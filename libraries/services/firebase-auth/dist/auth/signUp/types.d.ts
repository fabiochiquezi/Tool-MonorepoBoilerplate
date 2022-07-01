import { Auth, UserCredential } from 'firebase/auth';
import { resFirebase, resFirebaseFnT } from '../../helpers/res/types';
declare type firebaseSignUp = (auth: Auth, email: string, password: string) => Promise<UserCredential>;
export declare type signUpT = (res: resFirebaseFnT, errMsg: (msg: string) => string, signUp: firebaseSignUp) => (auth: Auth) => (data: {
    email: string;
    password: string;
}) => Promise<resFirebase>;
export {};
