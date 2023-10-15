const Post = ({ post }) => {
    return (
        <div className='p-3 border rounded'>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}

export default Post
