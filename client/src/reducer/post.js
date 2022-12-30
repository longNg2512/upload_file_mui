import * as constants from '../constants'

const DEFAULT_STATE = {
    isLoading: false,
    postFetched: false,
    error: false,
    listPost: [],
    activePage: 0,
    totalPage: 0,
}

const post = (state = DEFAULT_STATE, data) => {
    switch (data.type) {
        case constants.PAGINATION_POST_REQUEST:
        case constants.ADD_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                postFetched: false,
                error: false,
            }
        case constants.PAGINATION_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listPost: data.payload.listPost,
                activePage: data.payload.activePage,
                totalPage: data.payload.totalPage,
                postFetched: true,
            }
        case constants.ADD_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                postFetched: false,
                error: false,
            }
        case constants.PAGINATION_POST_FAILURE:
        case constants.ADD_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                postFetched: false,
                error: true,
            }
        default:
            return state
    }
}

export default post
