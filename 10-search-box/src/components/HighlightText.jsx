function HighlighText({ text, debouncedQuery }) {
  if (!debouncedQuery.trim()) return <span>{text}</span>;

  const highlighted = text.replace(
    new RegExp(`(${debouncedQuery})`, "gi"),
    (match) => `<strong>${match}</strong>`
  );

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
}

export default HighlighText;
