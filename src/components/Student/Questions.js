import React from "react";

const Question = (props) => {
  const handleClick = () => {
  };
  return (
    <div
      className="flex justify-around text-center p-2 m-2 cursor-pointer bg-sky-200 rounded-lg "
      onClick={handleClick}
    >
      <div className="text-lg">{props.title}</div>
      <div>{props.description}</div>
      <div>{props.date}</div>
    </div>
  );
};
export default Question;
