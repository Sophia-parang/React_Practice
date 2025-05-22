import "./searchBox.css";
import { useState, useEffect } from "react";
import "/emoji.png";
import data from "./data";

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
      <section className="flex items-center mb-8">
        <h1
          className="text-center text-yellow-500 text-8xl"
          style={{ fontFamily: '"Barriecito", cursive' }}
        >
          Search for Dummies
        </h1>
        <img className="size-20 ml-3 animate-bounce" src="/emoji.png" />
      </section>
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
      <ul
        className={`w-96 mr-16 max-h-60 overflow-y-auto ${
          result.length > 0 ? "border border-gray-300 rounded-lg" : ""
        }`}
      >
        {result.map((item, index) => (
          <li
            className={`px-3 py-1 flex justify-between hover:bg-amber-100 ${
              selectedIndex === index ? "bg-amber-100" : ""
            }`}
            key={item.key}
            onClick={() => handleListClick(item)}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: item.description.replace(
                  new RegExp(`(${debouncedQuery})`, "gi"),
                  (match) => `<strong>${match}</strong>`
                ),
              }}
            />
            <span
              className={`border-none px-1 rounded-lg text-sm ${
                item.type === "PEOPLE"
                  ? "bg-violet-100"
                  : item.type === "COMPANY"
                  ? "bg-sky-100"
                  : item.type === "COUNTRY"
                  ? "bg-fuchsia-100"
                  : item.type === "JOB"
                  ? "bg-rose-100"
                  : "bg-gray-200"
              }`}
            >
              {item.type}
            </span>
          </li>
        ))}
      </ul>
      {result.length === 0 && debouncedQuery.length > 1 && !hasSelected && (
        <p className="mt-3 mr-5 text-gray-400">검색 결과가 없습니다.</p>
      )}
    </main>
  );
}

export default SearchBox;
