// src/pages/Profile.jsx
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      {/* Sub-navigation */}
      <nav className="space-x-4 mb-6">
        <Link to="details" className="text-blue-600 hover:underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Profile Settings
        </Link>
      </nav>

      {/* Nested route content will be rendered here */}
      <Outlet />
    </div>
  );
};

export default Profile;
