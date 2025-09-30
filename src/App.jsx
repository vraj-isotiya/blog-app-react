import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import { useState, useEffect } from "react";
import axios from "axios";

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">BlogSpace</h1>
              <p className="text-sm text-gray-500 -mt-1">
                Discover Amazing Stories
              </p>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => setPosts(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <PostList posts={posts} loading={loading} error={error} />
              }
            />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
