import API from '@lib/API'

export const fetchGetOneAlbums = async (id) => {
    return API.get(`/users/${id}/albums`)
        .then((response) => {
            console.log('fetchGetOneAlbums SUCCESSFUL', response)

            return response.data
        })
        .catch((error) => {
            console.log('fetchGetOneAlbums ERROR', error)
            throw new Error(error)
        })
}