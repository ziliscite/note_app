import Hapi from '@hapi/hapi'
import api from './routes/api.js'

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: true
        }
    })

    server.route(api)

    await server.start()
    console.log('Server is running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

export default init