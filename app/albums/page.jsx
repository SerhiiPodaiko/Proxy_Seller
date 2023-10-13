import { Albums } from '@components/index'

export async function generateMetadata() {
    return {
        title: 'All Albums',
        description: 'All albums',
        icons: {
            icon: '/favicons/favicon-albums.png'
        }
    }
}

const AlbumsPage = () => <Albums />

export default AlbumsPage