import { types } from '../type/types'

export const AggCitas = (cita) => {
    return {
        type: types.agregar,
        payload: cita
    }
}


export const BorrarActionCita = (id) => {
    return {
        type: types.borrar,
        payload: id
    }
}