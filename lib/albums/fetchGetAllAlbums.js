import API from '@lib/API'

export const fetchGetAllAlbums = async () => {
    return API.get(`/albums`)
        .then((response) => {
            console.log('fetchGetAllAlbums SUCCESSFUL', response)

            return response.data
        })
        .catch((error) => {
            console.log('fetchGetAllAlbums ERROR', error)
            throw new Error(error)
        })
}