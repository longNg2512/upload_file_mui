import { takeEvery, put } from 'redux-saga/effects'
import * as constants from '../constants'
import * as actions from '../actions/actions'
import * as api from '../api/fetchAPI'

function* paginationPost(data) {
    try {
        const response = yield api.paginationPost(data.payload)
        if (response.success) {
            yield put(
                actions.paginationPostSuccess({
                    listPost: response.listPost,
                    activePage: response.activePage,
                    totalPage: response.totalPage,
                }),
            )
        } else {
            throw new Error(response.message)
        }
    } catch (error) {
        yield put(actions.paginationPostFailure(error))
    }
}

function* addPost(data) {
    const formData = new FormData()
    data.payload.localFile.forEach(i => formData.append('files', i))
    try {
        const response = yield api.addPost(formData)
        if (response.success) {
            yield put(actions.addPostSuccess())
        } else {
            throw new Error(response.message)
        }
    } catch (error) {
        yield put(actions.addPostFailure(error))
    }
}

const post = [
    takeEvery(constants.PAGINATION_POST_REQUEST, paginationPost),
    takeEvery(constants.ADD_POST_REQUEST, addPost),
]

export default post
