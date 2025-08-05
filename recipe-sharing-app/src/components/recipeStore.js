import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: (state) => {
    const q = state.searchTerm.toLowerCase();
    return state.recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(q) ||
        (recipe.description && recipe.description.toLowerCase().includes(q))
    );
  },
}));

export default useRecipeStore;
