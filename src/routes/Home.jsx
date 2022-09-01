import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="center vertical-center">
      <h1>Welcome</h1>
      <p>This site is a demonstration of using wordpress as a headless CMS.</p>
      <span>
        <Link to="/posts"></Link>
      </span>
    </div>
  )
}

export default Home
