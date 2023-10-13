import { Posts } from '@components/index'
import { fetchGetAllPosts } from '@lib/posts/fetchGetAllPosts'

export const metadata = {
    title: 'Posts',
    description: 'All posts',
    icons: {
        icon: '/favicons/favicon-posts.png'
    },
}

const PostsPage = async () => {
    const posts = await fetchGetAllPosts(10)

    return (
        <Posts posts={posts} />
    )
}

export default PostsPage