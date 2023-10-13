import API from '@lib/API'

export const fetchGetAllPosts = async () => {
    return API.get('/posts')
        .then((response) => {
            console.log('fetchGetAllPosts SUCCESSFUL', response)

            return response.data
        })
        .catch((error) => {
            console.log('fetchGetAllPosts ERROR', error)
            throw new Error(error)
        })
}
