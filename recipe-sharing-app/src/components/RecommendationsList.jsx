// RecommendationsList.jsx
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const getRecommendations = useRecipeStore((state) => state.getRecommendations);
  const recommendations = getRecommendations();

  if (recommendations.length === 0) {
    return <p>No recommendations available yet. Add some favorites!</p>;
  }

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
