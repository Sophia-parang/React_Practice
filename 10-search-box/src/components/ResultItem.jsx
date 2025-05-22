import HighlighText from "./HighlightText";

function ResultItem({
  selectedIndex,
  index,
  item,
  handleListClick,
  debouncedQuery,
}) {
  return (
    <li
      className={`px-3 py-1 flex justify-between hover:bg-amber-100 ${
        selectedIndex === index ? "bg-amber-100" : ""
      }`}
      key={item.key}
      onClick={() => handleListClick(item)}
    >
      <HighlighText text={item.description} debouncedQuery={debouncedQuery} />
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
  );
}
export default ResultItem;
