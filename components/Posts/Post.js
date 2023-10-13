import PropTypes from 'prop-types'

const Post = ({ post }) => {
    return (
        <div className='p-3 border rounded'>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}

export default Post

Post.propTypes = {
    post: PropTypes.object.isRequired
}
