import { useState } from "react";

interface Props {
  maxChars?: number;
}

const ExpandableText = ({ maxChars }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit
        ea eius? Quisquam perferendis doloribus dolore autem. Maxime labore et
        iure! Ipsum ea labore maxime cupiditate provident libero non pariatur
        dolore culpa magni aspernatur tempore molestiae omnis ipsam velit
        veritatis quae, reprehenderit veniam nobis molestias consequatur
        deleniti cumque? Ut quod aut error dolorem impedit quae temporibus vero
        ad atque cupiditate?;`;
  return (
    <>
      {!expanded && maxChars !== undefined ? text.slice(0, maxChars) : text}
      <button onClick={handleClick} className="border px-4">
        {expanded ? "less" : "more"}
      </button>
    </>
  );
};

export default ExpandableText;
