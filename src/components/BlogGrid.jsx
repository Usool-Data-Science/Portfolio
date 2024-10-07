import Notfound from "./Notfound"
import Post from "./Post"

const BlogGrid = ({ blogPosts, searchPost }) => {
    return (
        <div>
            {blogPosts && blogPosts.length > 0 ? (
                blogPosts.map(blogPost => (
                    <Post key={blogPost.id} post={blogPost} />
                ))
            ) : (
                <Notfound searchPost={searchPost} />
            )}
        </div>
    )
}


export default BlogGrid