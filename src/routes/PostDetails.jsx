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
    return <div className="center vertical-center">Loading...</div>
  }

  return (
    <>
      <Link to="/posts"><i class="arrow"></i></Link>
      <div className="center">
        <div>
          <h2>{post.title.rendered}</h2>
          {parse(post.content.rendered)}
          <p className="grayout">
            {post.date.replace("T", " ")}
          </p>
        </div>
      </div>
    </>
  )
}

export default PostDetails
