import { Auth } from 'firebase/auth';
import { responseDataT, responseT } from 'helpers-front';
declare type firebaseSignOut = (auth: Auth) => Promise<void>;
export declare type signOutT = (res: responseT, errMsg: (msg: string) => string, successMessage: Record<string, string>, signOut: firebaseSignOut) => (auth: Auth) => <T>() => Promise<responseDataT<T>>;
export {};
