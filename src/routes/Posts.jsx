import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PostLink from "../components/PostLink"

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/posts`)
      .then((res) => {
        return res.json()
      })
      .then((data) => setPosts(data))
  }, [])

  return (
    <>
      <div>
        <h2>All posts</h2>
        {posts.map((post) => (
          <PostLink post={post} key={post.id} />
        ))}
      </div>
      <div>
        Back <Link to="/">home</Link>
      </div>
    </>
  )
}

export default Posts
