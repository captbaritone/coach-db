const COLOR_LIST = [
  "mediumturquoise",
  "orange",
  "violet",
  "pink",
  "lightgreen",
  "bisque",
  "burlywood",
  "skyblue",
  "darksalmon",
  "darkseagreen",
  "darkkhaki",
  "gold",
  "lightcyan",
  "khaki",
  "greenyellow",
  "hotpink",
  "#91b84d",
  "lightseagreen",
  "lawngreen",
  "mistyrose",
  "mediumpurple",
  "bisque",
  "paleturquoise",
  "plum",
  "peachpuff",
  "darkorange",
  "darkcyan",
  "red"
];
const COLOR_MAP = {};

function getColor(name) {
  if (COLOR_MAP[name] == null) {
    const color = COLOR_LIST.shift() || "#e8e9eb";
    COLOR_MAP[name] = color;
  }

  return COLOR_MAP[name];
}

// This is my list of languages
export default function Language({ language, setQuery, addColor = false }) {
  let color = "#e8e9eb";
  if (addColor) {
    color = getColor(language);
  }

  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: 15,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 10,
        marginLeft: 2,
        marginRight: 2,
        display: "inline-block",
        cursor: "pointer"
      }}
      onClick={() => {
        setQuery(language);
        window.scrollTo(0, 0);
      }}
    >
      {language}
    </span>
  );
}
