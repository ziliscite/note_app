import NoteController from '../controllers/NoteController.js'

export const notes = [
    {
        method: 'GET',
        path: '/notes',
        handler: NoteController.getAllNotes
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: NoteController.getOneNote
    },
    {
        method: 'POST',
        path: '/notes',
        handler: NoteController.storeOneNote
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: NoteController.updateOneNote
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: NoteController.deleteOneNote
    }
]
