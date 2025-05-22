function SearchInput({
  query,
  setQuery,
  setHasSelected,
  handleKeyDown,
  isSearchReady,
  handleSearch,
}) {
  return (
    <section className="flex">
      <input
        className="mr-3 w-96 border border-gray-400 rounded-lg focus:outline-offset-1 focus:outline-yellow-500 p-1 pl-3"
        type="text"
        placeholder="enter your query..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setHasSelected(false);
        }}
        onKeyDown={handleKeyDown}
      />
      <button
        className={`w-13 h-8 rounded-lg ${
          isSearchReady
            ? "bg-yellow-400 hover:bg-yellow-500  cursor-pointer"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        onClick={handleSearch}
        disabled={!isSearchReady}
      >
        🔍
      </button>
    </section>
  );
}

export default SearchInput;
