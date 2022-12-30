import * as constants from '../constants'

export function paginationPost(data) {
    return new Promise((resolve, reject) => {
        const url = `${constants.API_URL}/pagination?activePage=${data.activePage}&limit=${constants.LIMIT}`
        fetch(url, { method: 'GET' })
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

export const addPost = data =>
    new Promise((resolve, reject) => {
        const url = `${constants.API_URL}/upload`
        fetch(url, { method: 'POST', body: data })
            .then(response => response.json())
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
