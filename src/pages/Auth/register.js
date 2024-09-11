import React, { useState } from "react";
import LogoImg from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
// import axios from "../../utils/axios";
import instance from "../../utils/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [isSelected, setIsSelceted] = useState("student");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: isSelected,
  });
  const handleChage = (e) => {
    setUserData({ ...userData, role: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    instance
      .post("/auth/register", userData)
      .then((res) => {
        if (res.status === 200) {
          const email = { email: res.data.data.user.email };
          instance.post("/auth/sendcode", email).then((res) => {
            localStorage.setItem("token", res.data.data.token);
          });
          navigate("/verifyemail");
        }
      })
      .catch((err) => {
        if(err.response == null){
           toast.error("Servidor não encontrado!")
        } else if (err.response.status === 400) {
          toast.warning("O e-mail já está registrado!");
        } else {
          toast.warning("Erro do usuário!");
        }
      });
  };
  const handleClick = () => { 
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-screen text-black">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-[#ffffff] w-[25%] p-[80px] rounded-lg">
        <div>
          <img src={LogoImg} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-center text-[24px]">Cadastre-se</div>
          <label className="flex flex-col w-[100%] mt-2">
            Nome
            <input
              type="text"
              placeholder="Digite seu Nome"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="mt-2 w-[100%] rounded-lg p-2 border-2 outline-none"
              required
            />
          </label>
          <label className="flex flex-col w-[100%] mt-2">
            E-mail
            <input
              type="email"
              placeholder="Digite seu E-mail"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="mt-2 w-[100%] rounded-lg p-2 border-2 outline-none"
              required
            />
          </label>
          <label className="flex flex-col mt-2 w-[100%]">
            Senha
            <input
              type="password"
              placeholder="Digite seu senha"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="mt-2 w-[100%] rounded-lg p-2 border-2 outline-none"
              required
            />
          </label>
          {/* <div className="flex items-center text-lg gap-20 ">
            <div className="font-bold">Escola</div>
            <select className="outline-none py-1 border-2 rounded-md">
              {Schools.map((item) => {
                return (
                  <option className="grid grid-cols-2">
                    <div>{item.name}</div> <div>{item.level}</div>
                  </option>
                );
              })}
            </select>
          </div> */}
          <div className="flex justify-center gap-5 text-xl mt-5">
            <label>
              <input
                className="mr-3"
                type="radio"
                value="student"
                checked={userData.role === "student"}
                onChange={handleChage}
              />
              Estudante
            </label>
            <label>
              <input
                className="mr-3"
                type="radio"
                value="admin"
                checked={userData.role === "admin"}
                onChange={handleChage}
              />
              Administrador
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              // href={
              //   isSelected === "student" ? "/dbuttonshboard" : "/admin-questions"
              // }
              // href={role === "student" ? "/dashboard" : "/admin-questions"}
              className="items-center px-10 py-2 bg-green-600 cursor-pointer hover:bg-green-500 text-[20px] text-white text-center mt-5 rounded-md"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="text-center mt-10 flex justify-center gap-3">
          Já possui uma conta.
          <div className="cursor-pointer font-bold" onClick={handleClick}>
            Entre na sua conta
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
