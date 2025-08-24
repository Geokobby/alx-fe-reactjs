// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Profile from "./components/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Post from "./pages/Post";
import ProtectedRoute from "./components/ProtectedRoute";

const Home = ({ isAuthenticated, toggleAuth }) => (
  <div>
    <h2 className="text-2xl font-bold">Home Page</h2>
    <button
      onClick={toggleAuth}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {isAuthenticated ? "Logout" : "Login"}
    </button>
  </div>
);

const About = () => <h2 className="text-2xl font-bold">About Page</h2>;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => setIsAuthenticated((prev) => !prev);

  return (
    <Router>
      <div className="p-6">
        {/* Navigation */}
        <nav className="space-x-4 mb-6">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
          <Link to="/profile" className="text-blue-600 hover:underline">Profile</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} toggleAuth={toggleAuth} />} />
          <Route path="/about" element={<About />} />

          {/* Protected Profile Routes */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic Post Route */}
          <Route path="/posts/:postId" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
