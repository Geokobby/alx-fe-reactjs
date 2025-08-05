import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  searchTerm: '',

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((recipe) => recipe.id !== id), // also remove from favorites if deleted
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    const q = searchTerm.toLowerCase();
    return recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(q) ||
        (recipe.description && recipe.description.toLowerCase().includes(q))
    );
  },

  // Favorites functionality
  addFavorite: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== id),
    })),

  // Simple recommendations based on favorite categories (optional logic)
  getRecommendations: () => {
    const favorites = get().favorites;
    const recipes = get().recipes;

    if (favorites.length === 0) return [];

    // Example logic: match by similar titles
    const keywords = favorites.map((r) => r.title.split(' ')).flat();
    const uniqueKeywords = [...new Set(keywords.map((k) => k.toLowerCase()))];

    return recipes.filter((r) => {
      return uniqueKeywords.some((word) =>
        r.title.toLowerCase().includes(word)
      );
    });
  },
}));

export default useRecipeStore;
