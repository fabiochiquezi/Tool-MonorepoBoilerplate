const pathEnv = (): string => {
    let file
    switch (process.env.NODE_ENV) {
        case 'test':
            file = '.env.test'
            break
        case 'development':
            file = '.env'
            break
        case 'production':
            file = '.env.prod'
            break
        default:
            file = '.env'
            break
    }
    return file
}

export { pathEnv }
