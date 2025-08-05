import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
        style={{
          padding: '8px',
          fontSize: '16px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default SearchBar;
