import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Tabs from "./Tabs";
import "./Tab.css";
import School from "../../../components/School";
import { useDispatch, useSelector } from "../../../store/index";

import { getSchools, addSchools } from "../../../store/reducers/schooldata";

const Settings = () => {
  const data = useSelector((state) => state.schooldata);
  // console.log(data);
  const [schoolData, setSchoolData] = useState({
    schoolName: "",
    description: "",
  });
  const allSchool = data.schools;
  console.log(allSchool);
  const dispatch = useDispatch();
  const addSchool = (e) => {
    e.preventDefault();
    dispatch(addSchools(schoolData));
    handleClose();
  };
  useEffect(() => {
    dispatch(getSchools());
  }, []);
  const ImgUpload = ({ onChange, src }) => (
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload">
        <img for="photo-upload" src={src} alt="" />
      </div>
      <input id="photo-upload" type="file" onChange={onChange} />
    </label>
  );

  const Name = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="name">Seu nome:</label>
      <input
        className="border-2 outline-none rounded-lg p-2"
        id="name"
        type="text"
        onChange={onChange}
        maxlength="25"
        value={value}
        placeholder="Nome"
        required
      />
    </div>
  );

  const Status = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="status">Seu email:</label>
      <input
        className="border-2 outline-none p-2 rounded-lg"
        id="status"
        type="email"
        onChange={onChange}
        maxLength="35"
        value={value}
        placeholder="Email"
        required
      />
    </div>
  );

  const Profile = ({ onSubmit, src, name, status }) => (
    <div className="card">
      <form onSubmit={onSubmit}>
        <label className="custom-file-upload fas">
          <div className="img-wrap">
            <img for="photo-upload" src={src} alt="" />
          </div>
        </label>
        <div className="name">{name}</div>
        <div className="status">{status}</div>
        <button type="submit" className="edit">
          Edit Profile{" "}
        </button>
      </form>
    </div>
  );

  const Edit = ({ onSubmit, children }) => (
    <div className="card">
      <form onSubmit={onSubmit}>
        {/* <h1>Profile Card</h1> */}
        {children}
        <button
          type="submit"
          className="bg-green-500 px-10 py-3 text-white rounded-lg"
        >
          Save{" "}
        </button>
      </form>
    </div>
  );

  class CardProfile extends React.Component {
    state = {
      file: "",
      imagePreviewUrl:
        "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
      name: "",
      status: "",
      active: "edit",
    };

    photoUpload = (e) => {
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    };
    editName = (e) => {
      const name = e.target.value;
      this.setState({
        name,
      });
    };

    editStatus = (e) => {
      const status = e.target.value;
      this.setState({
        status,
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      let activeP = this.state.active === "edit" ? "profile" : "edit";
      this.setState({
        active: activeP,
      });
    };

    render() {
      const { imagePreviewUrl, name, status, active } = this.state;
      return (
        <div>
          {active === "edit" ? (
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
              <div className="flex mb-5">
                <Name onChange={this.editName} value={name} />
                <Status onChange={this.editStatus} value={status} />
              </div>
            </Edit>
          ) : (
            <Profile
              onSubmit={this.handleSubmit}
              src={imagePreviewUrl}
              name={name}
              status={status}
            />
          )}
        </div>
      );
    }
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="m-20 p-10 bg-white border-2 rounded-2xl">
      <Tabs>
        <div label="Perfil">
          <div className="flex justify-center m-20">
            {/* <img className="h-48" src={file} alt=""/> */}
            <CardProfile />
          </div>
        </div>
        <div label="Alterar Senha">
          <div className="flex flex-col items-center m-20">
            <label className="flex w-[35%] flex-col p-3 gap-2">
              Senha atual
              <input
                className="p-3 rounded-lg border-2 outline-none"
                type="password"
              />
            </label>
            <label className="flex w-[35%] flex-col p-3 gap-2">
              Nova senha
              <input
                className="p-3 rounded-lg border-2 outline-none"
                type="password"
              />
            </label>
            <label className="flex w-[35%] flex-col p-3 gap-2">
              Confirmar senha
              <input
                className="p-3 rounded-lg border-2 outline-none"
                type="password"
              />
            </label>
            <div className="w-[15%] bg-green-600 text-white text-center rounded-lg p-3 cursor-pointer mt-10">
              Salvar
            </div>
          </div>
        </div>
        <div label="Adicionar escola">
          <div className="flex justify-end mt-20">
            <div
              className="mx-20 bg-green-600 px-6 py-3 rounded-2xl text-white font-bold cursor-pointer"
              onClick={handleOpen}
            >
              Adicionar
            </div>
          </div>
          <div className="px-20">
            <div className="flex rounded-2xl bg-blue-300 px-6 py-3 my-2 text-[22px] font-bold">
              <div className="w-[10%]">No</div>
              <div className="w-[30%] truncate">Nome da escola</div>
              <div className="w-[60%] truncate">Descrição</div>
            </div>
            {allSchool.map((item, index) => {
              return (
                <School
                  no={index + 1}
                  name={item.schoolName}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </Tabs>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="absolute w-[40%] h-[70%] bg-white top-[50%] left-[50%] flex flex-col justify-center"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex justify-between my-5 px-10">
            <div className="text-xl">Adicionar Escola</div>
            <div onClick={handleClose}>
              <HighlightOffIcon className="cursor-pointer" />
            </div>
          </div>
          <hr />
          <div className="px-10 py-2">Escola</div>
          <div className="px-10">
            <label>
              Escola Nome
              <br />
              <input
                className=" w-[100%] p-2 rounded-lg outline-none border-2"
                placeholder="Escola Nome"
                onChange={(e) => {
                  setSchoolData({ ...schoolData, schoolName: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="px-10 mt-3">
            <label>
              Descrição
              <br />
              <textarea
                className="w-[100%] h-48 outline-none p-3 border-2 rounded-lg"
                placeholder="Escreva a Descrição aqui..."
                onChange={(e) => {
                  setSchoolData({ ...schoolData, description: e.target.value });
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
              onClick={addSchool}
            >
              Adicionar
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Settings;
