import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else {
      const ingredientList = ingredients.split("\n").filter((i) => i.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please enter at least 2 ingredients";
      }
    }

    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n").filter((i) => i.trim()),
      steps: steps.split("\n").filter((s) => s.trim()),
    };

    console.log("New Recipe:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    setSuccess("✅ Recipe added successfully!");
    setTimeout(() => setSuccess(""), 3000); // hide after 3s
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10 md:xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        ➕ Add a New Recipe
      </h2>

      {success && (
        <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-300 rounded-lg text-center">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 text-gray-700 text-base focus:outline-none focus:ring-2 transition ${
              errors.title
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-green-500"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Ingredients
          </label>
          <textarea
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 text-gray-700 text-base focus:outline-none focus:ring-2 transition ${
              errors.ingredients
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-green-500"
            }`}
            placeholder="List ingredients (one per line)"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Preparation Steps
          </label>
          <textarea
            rows="5"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full border rounded-lg px-4 py-2 text-gray-700 text-base focus:outline-none focus:ring-2 transition ${
              errors.steps
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-green-500"
            }`}
            placeholder="Describe the preparation steps"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 text-lg font-medium rounded-lg hover:bg-green-600 active:scale-95 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
