import { Link } from "react-router-dom"
import parse from "html-react-parser"

const PostLink = ({ post }) => {
  return (
    <>
      <Link to={`/posts/${post.slug}`}>
        <h3>
          {post.title.rendered} - {post.date}
        </h3>
      </Link>
      <div>{parse(post.excerpt.rendered)}</div>
      <hr />
    </>
  )
}

export default PostLink
