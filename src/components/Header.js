import React, { useEffect, useState, useRef } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AvartarImg from "../assets/avatar.png";

const Header = () => {
  const DropDownMenu = () => {
    const [open, setOpen] = useState(false);
    const container = useRef(null);

    const handleClickOutside = (event) => {
      if (container.current && !container.current.contains(event.target)) {
        setOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });

    return (
      <div ref={container}>
        <button onClick={() => setOpen(!open)}>
          <img src={AvartarImg} alt="" className="rounded-[50%] w-[40px]"></img>
        </button>
        {open && (
          <div className="absolute border-2 bg-white z-[1] right-0 p-5 hover:border-green-500 rounded-lg">
            <div className="text-xl text-center font-bold">
              John Doe
            </div>
            <div>
              johndoe132@gmail.com
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="py-4 bg-white flex justify-end items-center gap-[20px] pr-20">
      <div className="flex cursor-pointer">
        <div>
          <NotificationsIcon />
        </div>
        <div class="relative flex h-3 w-3">
          <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
          <div class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>
        </div>
      </div>
      <div className="relative inline-block">
        <div className="cursor-pointer"></div>
        <DropDownMenu />
      </div>
    </div>
  );
};

export default Header;
