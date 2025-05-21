import { useState, useEffect } from "react";
import data from "./data";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [result, setResult] = useState([]);
  const [hasSelected, setHasSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (hasSelected || !debouncedQuery.trim()) {
      setResult([]);
      return;
    }

    const filtered = data.filter((item) =>
      item.description.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setResult(filtered);

    if (filtered.length === 0 && debouncedQuery.length > 1) {
      alert("결과가 없습니다.");
    }
  }, [debouncedQuery, hasSelected]);

  const handleSearch = () => {
    if (!query.trim()) return;
    console.log(`/search?query=${encodeURIComponent(query)}`);
  };

  const handleListClick = (item) => {
    setQuery(item.key);
    setHasSelected(true);
    console.log({ key: item.key, type: item.type });
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < result.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : result.length - 1));
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < result.length) {
        handleListClick(result[selectedIndex]);
      }
    }
  };

  return (
    <>
      <h1>Search for Dummies 🐣</h1>
      <label htmlFor="searchInput">Search : </label>
      <input
        type="text"
        placeholder="enter your query..."
        id="searchInput"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setHasSelected(false);
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>🔍</button>
      <ul>
        {result.map((item) => (
          <li key={item.key} onClick={() => handleListClick(item)}>
            <span
              dangerouslySetInnerHTML={{
                __html: item.description.replace(
                  new RegExp(`(${debouncedQuery})`, "gi"),
                  (match) => `<strong>${match}</strong>`
                ),
              }}
            />
            <span>[{item.type}]</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchBox;
