import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This site is a demonstration of using wordpress as a headless CMS.</p>
      <p>
        <Link to="/posts">View all posts</Link>
      </p>
    </div>
  )
}

export default Home
