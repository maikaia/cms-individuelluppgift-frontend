import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import parse from "html-react-parser"

const PostDetails = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  console.log(post)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/posts?slug=${slug}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        if (data.length) {
          setPost(data[0])
        }
        setIsLoading(false)
      })
  }, [slug])

  if (isLoading || !post) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        <h2>{post.title.rendered}</h2>
        {parse(post.content.rendered)}
      </div>
      <hr />
      <div>
        Back to <Link to="/posts">posts</Link>.
      </div>
    </>
  )
}

export default PostDetails
