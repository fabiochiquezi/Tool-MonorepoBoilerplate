// @ts-nocheck

const authMiddlewere = (Router, RouteAuth, routes) => user => {
    if (user) {
        // const uid = user.uid
        return
    }

    const currentPath = Router.pathname
    const routesArr = Object.values(routes)
    const isPrivate = routesArr.some(item => {
        const isCurrentRoute = currentPath === item.path
        const isPrivateRoute = item.auth === RouteAuth.private
        const verify = isCurrentRoute && isPrivateRoute
        if (verify) return true
        return false
    })

    if (isPrivate) Router.push('/')
}

export { authMiddlewere }
