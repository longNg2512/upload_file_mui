import * as constants from '../constants'

export function paginationPostRequest(payload) {
    return {
        type: constants.PAGINATION_POST_REQUEST,
        payload,
    }
}

export function paginationPostSuccess(payload) {
    return {
        type: constants.PAGINATION_POST_SUCCESS,
        payload,
    }
}

export function paginationPostFailure(payload) {
    return {
        type: constants.PAGINATION_POST_FAILURE,
        payload,
    }
}

export function addPostRequest(payload) {
    return {
        type: constants.ADD_POST_REQUEST,
        payload,
    }
}

export function addPostSuccess(payload) {
    return {
        type: constants.ADD_POST_SUCCESS,
        payload,
    }
}

export function addPostFailure(payload) {
    return {
        type: constants.ADD_POST_FAILURE,
        payload,
    }
}
