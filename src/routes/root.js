import RootController from '../controllers/RootController.js'

export const root = [
    {
        method: 'GET',
        path: '/',
        handler: RootController.index
    },
    {
        method: '*',
        path: '/',
        handler: RootController.anyMethod
    }
]
