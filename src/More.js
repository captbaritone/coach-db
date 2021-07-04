import { useState } from "react";

export default function More({ more, less }) {
  const [expanded, setExpanded] = useState(false);
  if (expanded) {
    return (
      <>
        {more}
        <button onClick={() => setExpanded(false)}>Show Less</button>
      </>
    );
  } else {
    return (
      <>
        {less}
        <button onClick={() => setExpanded(true)}>More</button>
      </>
    );
  }
}
