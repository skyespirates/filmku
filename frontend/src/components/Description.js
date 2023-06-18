import { useState } from "react";

const Description = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <p className="text-grey">
      {expanded ? text : text.substring(0, 100) + "...\t"}{" "}
      <button
        className={`${
          expanded
            ? "text-secondary hover:text-primary"
            : "text-primary hover:text-secondary"
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "show less" : "show more"}
      </button>
    </p>
  );
};

export default Description;
