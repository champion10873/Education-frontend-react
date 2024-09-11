import React, { useState } from "react";
import LogoImg from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", loginData)
      .then((res) => {
        toast.success("LoggedIn Successful");
        console.log(res);
        if (res.status === 200) {
          const user = res.data.data.user;
          localStorage.setItem("token", res.data.data.token);
          user.role === "student" ? navigate("/student") : navigate("/admin");
        }
      })
      .catch((err) => {
        if (err.response == null) {
          toast.error("Servidor não encontrado!");
        } else if (err.response.status === 400) {
          toast.warning("Usuário não encontrado!");
        } else if (err.response.status === 401) {
          const email = { email: loginData.email };
          axios.post("/auth/sendcode", email).then((res) => {
            localStorage.setItem("token", res.data.data.token);
          });
          toast.warning("E-mail não verificado!");
          navigate("/verifyemail");
        } else toast.error("Solicitação ruim!");
      });
  };
  const handleRegister = () => {
    navigate("/register");
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
          <div className="text-center text-[24px]">Entre na sua conta</div>
          <label className="flex flex-col w-[100%] mt-2">
            E-mail
            <input
              type="email"
              placeholder="Digite seu E-mail"
              className="mt-2 w-[100%] rounded-lg p-2 border-2 outline-none"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
          </label>
          <label className="flex flex-col mt-2 w-[100%]">
            Senha
            <input
              type="password"
              placeholder="Digite seu senha"
              className="mt-2 w-[100%] rounded-lg p-2 border-2 outline-none"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </label>
          <div className="flex justify-end mt-3">Esqueci minha senha?</div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="items-center px-10 py-2 bg-green-600 cursor-pointer hover:bg-green-500 text-[20px] text-white text-center mt-5 rounded-md"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="text-center mt-10">
          Não tem conta?
          <input
            className="cursor-pointer ml-5 font-bold"
            type="submit"
            value="Cadastre-se"
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
