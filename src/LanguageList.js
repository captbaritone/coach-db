import ResultName from "./ResultName";
import Language from "./Language";

export default function LanguageList({
  title,
  languages,
  setQuery,
  addColor = false
}) {
  if (!languages.length) {
    return null;
  }
  return (
    <>
      <ResultName>{title}</ResultName>
      <div>
        {languages.split(", ").map((language) => (
          <Language
            language={language}
            setQuery={setQuery}
            addColor={addColor}
          />
        ))}
      </div>
    </>
  );
}
