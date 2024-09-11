import React, { useState } from "react";
import LogoImg from "../../assets/logo.png";
// import { admin, student } from "../../store/reducers/snackbar";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

const VerifyEmail = () => {
  const [verifyCode, setVerifyCode] = useState({ vCode: "" });
  const token = localStorage.getItem("token");
  console.log(token);
  console.log(verifyCode);
  const headers = {
    Authorization: token,
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/verifycode", verifyCode, { headers })
      .then((res) => {
        if (res.status === 200) navigate("/registersuccess");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center h-screen text-black">
      <div className="bg-[#ffffff] w-[500px] p-[80px] rounded-lg">
        <div>
          <img src={LogoImg} alt="" />
        </div>
        <div className="text-center text-2xl font-bold my-10">
          Enviamos um código de verificação para seu e-mail.
          <br /> Confira e digite abaixo
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setVerifyCode({ vCode: e.target.value })}
            placeholder="Código de verificação"
            type="text"
            className="w-[100%] border-2 outline-none rounded-lg p-2"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="items-center px-10 py-2 bg-green-600 cursor-pointer hover:bg-green-500 text-[20px] text-white text-center mt-5 rounded-md"
            >
              Verificar e-mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
