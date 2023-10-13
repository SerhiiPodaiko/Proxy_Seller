import API from '@lib/API'

export const fetchGetAllUsers = async (query) => {
    return API.get(`/users?q=${query}`)
        .then((response) => {
            console.log('fetchGetAllUsers SUCCESSFUL', response)

            return response.data
        })
        .catch((error) => {
            console.log('getAllProducts ERROR', error)
            throw new Error(error)
        })
}