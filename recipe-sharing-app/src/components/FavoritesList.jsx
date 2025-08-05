// FavoritesList.jsx
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);

  if (favorites.length === 0) {
    return <p>No favorite recipes yet.</p>;
  }

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
