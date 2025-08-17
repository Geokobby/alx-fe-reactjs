import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => String(r.id) === id);
        setRecipe(foundRecipe || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipe:", err);
        setError("Failed to load recipe.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center p-6">Loading recipe...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 p-6">{error}</p>;
  }

  if (!recipe) {
    return (
      <div className="text-center p-6">
        <p className="text-gray-700">Recipe not found.</p>
        <Link to="/" className="text-green-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden shadow-md mb-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Title & Summary */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        {recipe.title}
      </h1>
      <p className="text-gray-700 mb-8 leading-relaxed">{recipe.summary}</p>

      {/* Ingredients Section */}
      {recipe.ingredients && (
        <div className="bg-gray-50 rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Instructions Section */}
      {recipe.instructions && (
        <div className="bg-gray-50 rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block px-5 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetail;
