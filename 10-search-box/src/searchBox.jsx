import "./searchBox.css";
import { useState, useEffect } from "react";
import "/emoji.png";
import data from "./data";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import ResultList from "./components/ResultList";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [result, setResult] = useState([]);
  const [hasSelected, setHasSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const isSearchReady =
    query.trim().length > 0 && (result.length > 0 || hasSelected);

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

    //if (filtered.length === 0 && debouncedQuery.length > 1) {
    //  alert("결과가 없습니다.");
    //}
  }, [debouncedQuery, hasSelected]);

  const handleSearch = () => {
    if (!query.trim()) return;
    console.log(`/search?query=${encodeURIComponent(query)}`);
  };

  const handleListClick = (item) => {
    setQuery(item.key);
    setHasSelected(true);
    setResult([]);
    console.log({ key: item.key, type: item.type });
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < result.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < result.length) {
        handleListClick(result[selectedIndex]);
      }
    }
  };

  return (
    <main className="flex flex-col items-center h-screen mt-80">
      <Header />
      <SearchInput
        query={query}
        setQuery={setQuery}
        setHasSelected={setHasSelected}
        handleKeyDown={handleKeyDown}
        isSearchReady={isSearchReady}
        handleSearch={handleSearch}
      />
      <ResultList
        result={result}
        selectedIndex={selectedIndex}
        handleListClick={handleListClick}
        debouncedQuery={debouncedQuery}
        hasSelected={hasSelected}
      />
    </main>
  );
}

export default SearchBox;
