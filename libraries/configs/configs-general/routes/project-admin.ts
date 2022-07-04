export enum RouteAuth {
    public = 0,
    private
}

export const adminRoutesApp = {
    home: {
        path: '/',
        auth: RouteAuth.public
    },
    authSignIn: {
        path: '/auth/sign-in',
        auth: RouteAuth.public
    },
    authSignUp: {
        path: '/auth/sign-up',
        auth: RouteAuth.public
    },
    simpleTodoList: {
        path: '/simple-todo/list',
        auth: RouteAuth.private
    },
    simpleTodoAdd: {
        path: '/simple-todo/add',
        auth: RouteAuth.private
    }
}

export const adminRoutesApi = {
    home: {
        path: '/',
        auth: RouteAuth.public
    },
    authSignIn: {
        path: '/auth/sign-in',
        auth: RouteAuth.public
    },
    authSignUp: {
        path: '/auth/sign-up',
        auth: RouteAuth.public
    },
    simpleTodoList: {
        path: '/simple-todo/list',
        auth: RouteAuth.private
    },
    simpleTodoAdd: {
        path: '/simple-todo/add',
        auth: RouteAuth.private
    }
}
