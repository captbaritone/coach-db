export default function Experience({ professionalexperience }) {
  let color = "black";
  if (professionalexperience === "Professional Singers (Top Tier Companies)") {
    color = "#6a008a";
  }
  if (professionalexperience === "Professional Singers (Mid Tier Companies)") {
    color = "#45008a";
  }
  if (
    professionalexperience ===
    "Professional Singers (Small Companies & Regional/Local)"
  ) {
    color = "#1a02a3";
  }
  if (
    professionalexperience === "Educational Institution (Conservatory/Graduate)"
  ) {
    color = "#0258a3";
  }
  if (professionalexperience === "Educational Institution (Undergraduate)") {
    color = "#007a8c";
  }
  if (professionalexperience === "Private Studio (All levels)") {
    color = "#007d5a";
  }

  return (
    <span
      style={{
        color: color,
        display: "block"
      }}
    >
      {professionalexperience}
    </span>
  );
}
