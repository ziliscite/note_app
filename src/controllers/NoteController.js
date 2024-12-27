import { nanoid } from 'nanoid'
import {
    notFoundResponse,
    internalServerErrorResponse
} from '../response/index.js'
import Note from '../models/Note.js'

const NoteController = {
    getAllNotes: (request, h) => {
        const response = h.response({
            status: 'success',
            data: {
                notes: Note
            }
        })

        response.code(200)
        response.type('application/json')
        return response
    },

    getOneNote: (request, h) => {
        try {
            const { id } = request.params

            const note = Note.find((item) => item.id === id)

            if (!note) {
                return notFoundResponse(h, 'Catatan tidak ditemukan')
            }

            const response = h.response({
                status: 'success',
                data: { note }
            })

            response.code(200)
            response.type('application/json')
            return response
        } catch (err) {
            return internalServerErrorResponse(h, err.message)
        }
    },

    storeOneNote: (request, h) => {
        try {
            if (!request.payload) {
                throw new Error('Data tidak boleh kosong')
            }

            const { title, tags, body } = request.payload
            const id = nanoid(40)
            const createdAt = new Date().toISOString()
            const updatedAt = createdAt

            Note.push({
                id,
                title,
                createdAt,
                updatedAt,
                tags,
                body
            })

            const isSuccess = Note.find((item) => item.id === id)

            if (!isSuccess) {
                throw new Error('Catatan gagal untuk ditambahkan')
            }

            const response = h.response({
                status: 'success',
                message: 'Catatan berhasil ditambahkan',
                data: { noteId: id }
            })

            response.code(201)
            response.type('application/json')
            return response
        } catch (err) {
            return internalServerErrorResponse(h, err.message)
        }
    },

    updateOneNote: (request, h) => {
        try {
            if (!request.payload) {
                throw new Error('Data tidak boleh kosong')
            }

            const { id } = request.params
            const { title, tags, body } = request.payload
            const updatedAt = new Date().toISOString()
            const index = Note.findIndex((item) => item.id === id)

            if (index === -1) {
                const message =
                    'Gagal memperbarui catatan. Catatan tidak ditemukan'
                return notFoundResponse(h, message)
            }

            Note[index] = {
                ...Note[index],
                title,
                tags,
                body,
                updatedAt
            }

            const response = h.response({
                status: 'success',
                message: 'Catatan berhasil diperbaharui'
            })

            response.code(200)
            response.type('application/json')
            return response
        } catch (err) {
            return internalServerErrorResponse(h, err.message)
        }
    },

    deleteOneNote: (request, h) => {
        try {
            const { id } = request.params
            const index = Note.findIndex((item) => item.id === id)

            if (index === -1) {
                const message =
                    'Gagal menghapus catatan. Catatan tidak ditemukan'
                return notFoundResponse(h, message)
            }

            Note.splice(index, 1)

            const response = h.response({
                status: 'success',
                message: 'Catatan berhasil dihapus'
            })

            response.code(200)
            response.type('application/json')
            return response
        } catch (err) {
            return internalServerErrorResponse(h, err.message)
        }
    }
}

export default NoteController
