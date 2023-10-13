import Link from 'next/link'

import Preloader from '@ui/Preloader/Preloader'
import { PAGE_SLUGS } from '@constants/pages'
import { fetchGetOnePosts } from '@lib/posts/fetchGetOnePosts'

export async function generateMetadata({ params: { id } }) {
    return {
        title: `User ${id} | Posts`,
        description: 'All posts one user',
        icons: {
            icon: '/favicons/favicon-posts.png'
        }
    }
}

const UserPostsPage = async ({ params: { id } }) => {
    const userPosts = await fetchGetOnePosts(id)

    if (!userPosts) return  <Preloader />

    return (
        <section>
            <header>
                <div className='container d-flex align-items-center justify-content-between'>
                    <Link href={PAGE_SLUGS.home} className='btn btn-outline-primary'>
                        Back
                    </Link>
                    <h4>Posts: {userPosts.length}</h4>
                </div>
            </header>
            <div className='pt-3 px-2 px-md-0 conteiner d-flex flex-column gap-2'>
                {
                    userPosts.map(userPost => (
                        <div key={userPost.id} className='p-3 border rounded'>
                            <p>{userPost.title}</p>
                            <p>{userPost.body}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default UserPostsPage