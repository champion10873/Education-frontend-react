import React from "react";
import Tabs from "./Tabs";
import "./Tab.css";
import StudentAvatarImg from "../../assets/avatar.png";

const Ranking = () => {
  return (
    <div className="m-20 p-10 bg-white border-2 rounded">
      <Tabs>
        <div label="Escolas">
          <div className="flex justify-around p-5">
            <div>Escolas Nome</div>
            <div>Pontuação</div>
            <div>Classificação</div>
          </div>
        </div>
        <div label="Alunos de minha escola">
          <div className="grid grid-cols-3 gap-20 m-20">
            <div className="flex justify-around border-2 rounded-2xl items-center px-10 py-5 text-white bg-gradient-to-tr from-blue-600 via-blue-300 to-blue-600">
              <div>
                <img className="w-24 h-24 rounded-[50%]" src={StudentAvatarImg} alt="" />
                <div className="text-xl font-bold">Student Name</div>
              </div>
              <div className="text-3xl font-bold">Score 70</div>
            </div>
            <div className="flex justify-around border-2 rounded-2xl items-center px-10 py-5 text-white bg-gradient-to-tr from-lime-600 via-lime-300 to-lime-600">
              <div>
                <img className="w-24 h-24 rounded-[50%]" src={StudentAvatarImg} alt="" />
                <div className="text-xl font-bold">Student Name</div>
              </div>
              <div className="text-3xl font-bold">Score 70</div>
            </div>
            <div className="flex justify-around border-2 rounded-2xl items-center px-10 py-5 text-white bg-gradient-to-tr from-red-600 via-red-300 to-red-600">
              <div>
                <img className="w-24 h-24 rounded-[50%]" src={StudentAvatarImg} alt="" />
                <div className="text-xl font-bold">Student Name</div>
              </div>
              <div className="text-3xl font-bold">Score 70</div>
            </div>
          </div>
          <div className="flex justify-around p-5">
            <div>Nome</div>
            <div>Nível</div>
            <div>Pontuação</div>
            <div>Classificação</div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};
export default Ranking;
