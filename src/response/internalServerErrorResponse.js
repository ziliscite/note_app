const internalServerErrorResponse = (h, message) => {
    const response = h.response({
        status: 'fail',
        message
    })

    response.code(500)
    response.type('application/json')
    return response
}

export default internalServerErrorResponse
