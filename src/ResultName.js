export default function ResultName({ children }) {
  return (
    <div
      style={{
        fontSize: 11,
        textTransform: "uppercase",
        opacity: 0.55,
        paddingTop: 10
      }}
    >
      {children}
    </div>
  );
}
