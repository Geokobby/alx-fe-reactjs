import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json") // Ensure data.json is inside public/
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        🍲 Recipe Sharing Platform
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Body */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {recipe.summary}
              </p>
              
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
