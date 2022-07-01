const defaultError =
    'There was a problem trying to sign up, sorry but please try again or contact our team'

export const errMessages = {
    emailAlreadyInUse: 'E-email already in use',
    missingEmail: 'E-mail is missing',
    invalidEmail: 'E-mail is invalid',
    weakPassword: 'Password should be at least 6 characters',
    networkRequestFailed: defaultError,
    internalError: defaultError,
    signIn: 'User or password is incorrect',
    defaultErr: defaultError
}

export const getError = (error: string): string => {
    switch (error) {
        case 'Firebase: Error (auth/email-already-in-use).':
            return errMessages.emailAlreadyInUse
        case 'Firebase: Error (auth/missing-email).':
            return errMessages.missingEmail
        case 'Firebase: Error (auth/invalid-email).':
            return errMessages.invalidEmail
        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
            return errMessages.weakPassword
        case 'Firebase: Error (auth/network-request-failed).':
            return defaultError
        case 'Firebase: Error (auth/internal-error).':
            return defaultError
        case 'Firebase: Error (auth/user-not-found).':
            return errMessages.signIn
        case 'Firebase: Error (auth/wrong-password).':
            return errMessages.signIn
        default:
            return defaultError
    }
}
