import { useState } from "react";
import Question from "../../components/Student/Questions";
import QueryData from "../../data/Questions";

const Questions = () => {
  const [isSubject, setIsSubject] = useState("");
  const handleClick = (e) => {
    setIsSubject(e.target.value)
  }
  console.log(isSubject);
  // const [isLevel, setIsLevel] = useState("all");
  // console.log(isLevel);
  return (
    <div className="h-[80%] flex bg-white border-2 rounded-xl m-20 p-10">
      {/* <div className="flex gap-20 mb-10">
        <div className="flex gap-5 text-xl items-center">
          <div>Filtrar por assunto</div>
          <select
            className="outline-none border-2 rounded-lg p-2"
            onChange={(e) => setIsSubject(e.target.value)}
          >
            <option name="all" value="all">
              Todos
            </option>
            <option name="portugese" value="portugese">
              Português
            </option>
            <option name="math" value="math">
              Matemática
            </option>
          </select>
        </div>
        <div className="flex gap-5 text-xl items-center">
          <div>Filtrar por nível</div>
          <select className="outline-none border-2 rounded-lg p-2"
            onChange={(e) => setIsLevel(e.target.value)}
            >
            <option name="all" value="all">
              Todos
            </option>
            <option name="beginner" value="beginner">
              Iniciante
            </option>
            <option name="intermediate" value="intermediate">
              intermediário
            </option>
            <option name="advance" value="advance">
              Avançado
            </option>
          </select>
        </div>
      </div> */}
      <div className="w-[80%] bg-gray-100 border-2 p-10 overflow-auto scrollbar-hide">
        {QueryData.map((item) => {
          return (
            <Question
              title={item.title}
              description={item.description}
              date={item.date}
            />
          );
        })}
      </div>
      <div className="p-10 rounded border-2 ml-5 text-xl">
        <button className="w-[100%] cursor-pointer p-2 text-gray-600 hover:text-black"onClick={handleClick} value="portugese">Portugese</button>
        <button className="w-[100%] cursor-pointer p-2 text-gray-600 hover:text-black"onClick={handleClick} value="Mathmatic">Mathmatic</button>
      </div>
    </div>
  );
};

export default Questions;
