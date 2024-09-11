import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import QuestionCard from "../../../components/Questions";
import { useDispatch, useSelector } from "../../../store/index";
import {
  getQuestions,
  addQuestions,
} from "../../../store/reducers/questiondata";

const AdminQuestions = () => {
  const data = useSelector((state) => state.questiondata);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [questionData, setQuestionData] = useState({
    title: "",
    topic: "",
    question: "",
    level:"",
  });
  const QueryData = data.questions;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(addQuestions(questionData));
    handleClose();
  };
console.log(questionData);
  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  console.log(data);

  return (
    <div>
      <div className="mt-[50px] ml-[100px] text-lg font-bold">
        Adicionar/editar Questões
      </div>
      <div className="flex justify-end mx-20 mt-4">
        <div
          className="w-[10%] bg-green-600 hover:bg-green-500 text-white text-center rounded p-2 cursor-pointer"
          onClick={handleOpen}
        >
          Adicionar
        </div>
      </div>
      <div className="flex justify-around boder-2 bg-gray-200 rounded-xl mt-5 py-10 mx-20 px-10">
        <div>
          <input
            placeholder="anos"
            className="w-[100%] rounded-md outline-none text-lg p-2 border-2"
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="nível"
            className="w-[100%] rounded-md outline-none text-lg p-2 border-2"
            type="text"
          />
        </div>
        <div>
          <input
            placeholder="Matéria"
            className="w-[100%] rounded-md outline-none text-lg p-2 border-2"
            type="text"
          />
        </div>

        <div className="bg-green-600 hover:bg-green-500 text-white text-center rounded-md p-3 cursor-pointer">
          Limpar filtro
        </div>
      </div>
      <div className="h-[500px] mx-20 mt-10 bg-gray-200 p-10 rounded-lg overflow-auto scrollbar-hide">
        {QueryData.map((item, index) => {
          return (
            <QuestionCard
              id={item._id}
              No={index + 1}
              title={item.title}
              topic={item.topic}
              description={item.question}
              level={item.level}
            />
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="absolute w-[40%] h-[85%] bg-white top-[50%] left-[50%] flex flex-col justify-center"
          style={{
            transform: "translate(-50%, -50%)",
            // borderRadius: "20px",
          }}
        >
          <div className="flex justify-between my-5 px-10">
            <div className="text-xl">Adicionar questao</div>
            <div onClick={handleClose}>
              <HighlightOffIcon className="cursor-pointer" />
            </div>
          </div>
          <hr />
          <div className="px-10 py-2">Questao</div>
          <div className="px-10">
            <label>
              Título
              <br />
              <input
                className=" w-[100%] p-2 rounded-lg outline-none border-2"
                placeholder="Título"
                onChange={(e) => {
                  setQuestionData({ ...questionData, title: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="px-10 mt-3">
            <label>
              Assunto
              <select
                className="w-full outline-none border-2 p-2 rounded-lg"
                onChange={(e) => {
                  setQuestionData({ ...questionData, topic: e.target.value });
                }}
              >
                <option value="select" disabled selected>
                  Selecione o assunto
                </option>
                <option value="Portugese">Portugese</option>
                <option value="Matemática">Matemática</option>
              </select>
            </label>
            <label className="mt-2">
            Nível
              <select
                className="w-full outline-none border-2 p-2 rounded-lg"
                onChange={(e) => {
                  setQuestionData({ ...questionData, level: e.target.value });
                }}
              >
                <option value="select" disabled selected>
                  Selecionar nível
                </option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </label>
          </div>
          <div className="px-10 mt-3">
            <label>
              Pergunta
              <br />
              <textarea
                className="w-[100%] h-48 outline-none p-3 border-2 rounded-lg"
                placeholder="Escreva a pergunta aqui..."
                onChange={(e) => {
                  setQuestionData({
                    ...questionData,
                    question: e.target.value,
                  });
                }}
              />
            </label>
          </div>
          <hr />
          <div className="flex justify-end text-center gap-3 mt-10 mx-20">
            <div
              className="bg-gray-300 w-[25%] p-2 text-gray-700 font-bold rounded cursor-pointer hover:bg-green-400 hover:text-white"
              onClick={handleClose}
            >
              Fechar
            </div>
            <div
              className="bg-green-500 w-[25%] p-2 text-white font-bold rounded cursor-pointer hover:bg-green-400"
              onClick={handleSave}
            >
              Salvar
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminQuestions;
