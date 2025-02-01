import React from "react";

type ParagraphProps = {
  text: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return (
    <div className="text-justify text-lg">
      <p>{text}</p>
    </div>
  );
};

export default Paragraph;
