import { resFirebase, resFirebaseFnT } from '../../helpers/res/types';
import { Auth } from 'firebase/auth';
declare type firebaseSignOut = (auth: Auth) => Promise<void>;
export declare type signOutT = (res: resFirebaseFnT, errMsg: (msg: string) => string, successMessage: Record<string, string>, signOut: firebaseSignOut) => (auth: Auth) => () => Promise<resFirebase>;
export {};
