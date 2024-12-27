const notFoundResponse = (h, message) => {
    const response = h.response({
        status: 'fail',
        message
    })

    response.code(404)
    response.type('application/json')
    return response
}

export default notFoundResponse
