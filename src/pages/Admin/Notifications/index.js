import React, { useState } from "react";
import NotificationCard from "../../../components/Notification";
import { Modal } from "@mui/material";

const Notifications = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="mt-[50px] ml-[100px] text-lg font-bold">Notificações</div>
      <div className="flex justify-end mr-[200px] mt-4">
        <div
          className="w-32 bg-green-600 text-white text-center rounded p-3 cursor-pointer"
          onClick={handleOpen}
        >
          Adicionar
        </div>
      </div>
      <NotificationCard
        title="Site em manutenção amanhã das 03:00 as 06:00"
        date="30/10/23"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="absolute text-center w-[30%] px-[2%] h-[60%] bg-white top-[50%] left-[50%] shadow-lg shadow-blue-500/50 flex flex-col justify-center"
          style={{
            transform: "translate(-50%, -50%)",
            // borderRadius: "20px",
          }}
        >
          <div className="text-4xl font-bold mb-12">Adicionar notificação</div>
          <div className="flex justify-around align-center mb-10">
            <div className="text-lg my-auto">Título :</div>
            <div>
              <input
                className="border-2 outline-none pl-3 rounded p-2"
                placeholder="Título"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-around align-center">
            <div className="text-lg my-auto">Data :</div>
            <div>
              <input
                className="border-2 outline-none pl-3 rounded p-2"
                placeholder="Data"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-20">
            <div
              className="bg-green-500 w-[40%] p-3 text-white font-bold rounded cursor-pointer hover:bg-green-400"
              onClick={handleClose}
            >
              Adicionar
            </div>
            <div
              className="bg-green-500 w-[40%] p-3 text-white font-bold rounded cursor-pointer hover:bg-green-400"
              onClick={handleClose}
            >
              Fechar
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Notifications;
