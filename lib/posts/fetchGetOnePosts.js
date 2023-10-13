import API from '@lib/API'

export const fetchGetOnePosts = async (id) => {
    return API.get(`/users/${id}/posts`)
        .then((response) => {
            console.log('fetchGetOnePosts SUCCESSFUL', response)

            return response.data
        })
        .catch((error) => {
            console.log('fetchGetOnePosts ERROR', error)
            throw new Error(error)
        })
}