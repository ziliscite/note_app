const RootController = {
    index: (request, h) => {
        const response = h.response({
            message: 'Welcome to NodeJS Notes Backend API with Hapi Framework!'
        })

        response.code(200)
        response.type('application/json')
        return response
    },

    anyMethod: (request, h) => {
        const response = h.response({
            message: `Cannot access this path using ${request.method} method`
        })

        response.code(400)
        response.type('application/json')
        return response
    }
}

export default RootController
