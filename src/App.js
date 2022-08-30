import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Posts from "./routes/Posts"
import PostDetails from "./routes/PostDetails"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:slug" element={<PostDetails />} />
      </Routes>
    </Router>
  )
}

export default App
