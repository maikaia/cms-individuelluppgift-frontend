import parse from "html-react-parser"

const PostLink = ({ post }) => {
  return (
    <div className="posts">
      <h3>
        {post.title}
      </h3>
      <div>{parse(post.content)}</div>
      <p className="grayout">
        {post.date.replace("T", " ")}
      </p>
    </div>
  )
}

export default PostLink
