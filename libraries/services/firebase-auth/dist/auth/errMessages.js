"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getError = exports.errMessages = void 0;
const defaultError = 'There was a problem trying to sign up, sorry but please try again or contact our team';
exports.errMessages = {
    emailAlreadyInUse: 'E-email already in use',
    missingEmail: 'E-mail is missing',
    invalidEmail: 'E-mail is invalid',
    weakPassword: 'Password should be at least 6 characters',
    networkRequestFailed: defaultError,
    internalError: defaultError,
    signIn: 'User or password is incorrect',
    defaultErr: defaultError
};
const getError = (error) => {
    switch (error) {
        case 'Firebase: Error (auth/email-already-in-use).':
            return exports.errMessages.emailAlreadyInUse;
        case 'Firebase: Error (auth/missing-email).':
            return exports.errMessages.missingEmail;
        case 'Firebase: Error (auth/invalid-email).':
            return exports.errMessages.invalidEmail;
        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
            return exports.errMessages.weakPassword;
        case 'Firebase: Error (auth/network-request-failed).':
            return defaultError;
        case 'Firebase: Error (auth/internal-error).':
            return defaultError;
        case 'Firebase: Error (auth/user-not-found).':
            return exports.errMessages.signIn;
        case 'Firebase: Error (auth/wrong-password).':
            return exports.errMessages.signIn;
        default:
            return defaultError;
    }
};
exports.getError = getError;
