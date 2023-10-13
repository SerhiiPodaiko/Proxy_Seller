import Link from 'next/link'

import Preloader from '@ui/Preloader/Preloader'
import { PAGE_SLUGS } from '@constants/pages'
import { fetchGetOneAlbums } from '@lib/albums/fetchGetOneAlbums'

export async function generateMetadata({ params: { id } }) {
    return {
        title: `User ${id} | Albums `,
        description: 'All albums one user',
        icons: {
            icon: '/favicons/favicon-albums.png'
        }
    }
}

const UserAlbumsPage = async ({ params: { id } }) => {
    const userAlbums = await fetchGetOneAlbums(id)

    if (!userAlbums) return  <Preloader />

    return (
        <section>
            <header className='d-flex align-items-center justify-content-between'>
                <Link href={PAGE_SLUGS.home} className='btn btn-outline-primary'>
                    Back
                </Link>
                <h4>Albums: {userAlbums.length}</h4>
            </header>
            <div className='pt-3 conteiner d-flex flex-column gap-2'>
                {
                    userAlbums.map(userPost => (
                        <div key={userPost.id} className='p-3 border rounded'>
                            <p>{userPost.title}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default UserAlbumsPage