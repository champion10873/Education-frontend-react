import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Modal } from "@mui/material";
import TextEditor from "./Texteditor";

const NotificationCard = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="flex items-center gap-5 bg-white p-5">
            <div className="p-2 bg-green-300 rounded">
              <NotificationsActiveRoundedIcon />
            </div>
            <div className="text-center w-60">
              <div>{props.title}</div>
              <div>{props.date}</div>
            </div>
            <div className="cursor-pointer" onClick={handleOpen}>
              <EditIcon />
            </div>
            <div className="cursor-pointer" onClick={handleOpen}>
              <DeleteForeverOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="absolute text-center w-[31%] h-[70%] bg-white top-[50%] left-[50%] flex flex-col justify-center"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex justify-between px-[5%] font-bold mb-10">
            <div>Editar notificações</div>
            <div onClick={handleClose}>
              <HighlightOffIcon className="cursor-pointer" />
            </div>
          </div>
          <hr />
          <div className="flex justify-start pl-10 my-5">
            Conteúdo da notificação
          </div>
          <div className="px-10 h-auto mb-20">
            <TextEditor />
          </div>
          <hr/>
          <div className="flex justify-end gap-3 mt-10 mx-20">
            <div
              className="bg-gray-300 w-[25%] p-2 text-gray-700 font-bold rounded cursor-pointer hover:bg-green-400 hover:text-white"
              onClick={handleClose}
            >
              Fechar
            </div>
            <div
              className="bg-green-500 w-[25%] p-2 text-white font-bold rounded cursor-pointer hover:bg-green-400"
              onClick={handleClose}
            >
              Salvar
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NotificationCard;
