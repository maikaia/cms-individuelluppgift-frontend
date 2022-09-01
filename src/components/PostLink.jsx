import { Link } from "react-router-dom"
import parse from "html-react-parser"

const PostLink = ({ post }) => {
  return (
      <Link to={`/posts/${post.slug}`} className="nostyle">
    <div className="posts">
        <h3>
          {post.title.rendered}
        </h3>
      <div>{parse(post.content.rendered)}</div>
      <p className="grayout">
        {post.date.replace("T", " ")}
      </p>
    </div>
      </Link>
  )
}

export default PostLink
