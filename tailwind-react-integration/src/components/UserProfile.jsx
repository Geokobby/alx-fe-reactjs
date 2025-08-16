function UserProfile() {
  return (
      <div className="user-profile bg-gray-100 md:p-8 sm:p-4 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg ">
          
          <img className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto" src="https://via.placeholder.com/150" alt="User" />
          
          <h1 className="md:text-xl  text-blue-800 my-4 sm:text-lg">John Doe</h1>
          
      <p className="text-gray-600 md:text-base sm:text-sm ">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;