import { root as rootRoute } from './root.js'
import { notes as notesRoute } from './notes.js'

const api = [...rootRoute, ...notesRoute]

export default api
