import ResultItem from "./ResultItem";

function ResultList({
  result,
  selectedIndex,
  handleListClick,
  debouncedQuery,
  hasSelected,
}) {
  return (
    <>
      <ul
        className={`w-96 mr-16 max-h-60 overflow-y-auto ${
          result.length > 0 ? "border border-gray-300 rounded-lg" : ""
        }`}
      >
        {result.map((item, index) => (
          <ResultItem
            key={item.key}
            selectedIndex={selectedIndex}
            index={index}
            item={item}
            handleListClick={handleListClick}
            debouncedQuery={debouncedQuery}
          />
        ))}
      </ul>
      {result.length === 0 && debouncedQuery.length > 1 && !hasSelected && (
        <p className="mt-3 mr-5 text-gray-400">검색 결과가 없습니다.</p>
      )}
    </>
  );
}

export default ResultList;
