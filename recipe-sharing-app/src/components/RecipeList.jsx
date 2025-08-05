import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const searchQuery = useRecipeStore((state) => state.searchQuery);
  const recipes = useRecipeStore((state) =>
    state.recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  const isFavorite = (id) => favorites.some((r) => r.id === id);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          <button onClick={() => toggleFavorite(recipe)}>
            {isFavorite(recipe.id) ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
