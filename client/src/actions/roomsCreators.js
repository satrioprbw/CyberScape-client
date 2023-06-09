import { fetchRoomById, fetchRooms } from "../helpers/roomsMethods"

export function getAllRooms(query) {
    return function(dispatch) {
        fetchRooms(query)
        .then(payload => {
            // console.log(payload, 'fetch rooms');
            return dispatch({
            type: 'rooms/fetch',
            payload: payload.data
        })})
        // .then(response => console.log(response))
        .catch(error => console.log(error))
    }
}

export function getSelectedRoom(id) {
    return function(dispatch) {
        fetchRoomById(id)
        .then(payload => dispatch({
            type: 'selectedRoom/fetch',
            payload
        }))
    }
}
