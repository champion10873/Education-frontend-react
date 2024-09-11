import { useState } from "react";
import { useLocation } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import QuizIcon from "@mui/icons-material/Quiz";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LogoutIcon from '@mui/icons-material/Logout'
// constant
const menuItem = [
  { title: "Questões", path: "/admin/admin-questions" },
  { title: "Notificações", path: "/admin/notifications" },
  { title: "Configurações", path: "/admin/settings" },
  { title: "Sair", path: "/" },
];

const CommonStyle =
  "pl-8 flex justify-between hover:text-[#ffffff] hover:font-bold cursor-pointer";
const ItemSelectStyle1 =
  "flex items-center py-2 text-[#ffffff] bg-[#018638] w-[100%] font-bold pl-3";
const ItemNormalStyle1 = "flex items-center py-2";
const ItemSelectStyle2 = "ml-3 text-[#ffffff]";
const ItemNormalStyle2 = "ml-3";


const AdminMenu = () => {
  const location = useLocation().pathname;
  const [state, setState] = useState(
    location === "/admin" ? "/admin/admin-questions" : location
  );

  return (
    <div className="mt-[120px] text-[#ffffff]">
      {menuItem.map((item) => (
        <a href={item.path}>
          <div
            className={CommonStyle}
            style={{ marginBottom: "15px" }}
          >
            <div
              className={
                state === item.path ? ItemSelectStyle1 : ItemNormalStyle1
              }
            >
              {item.title === "Questões" ? (
                <QuizIcon style={{ fontSize: "larger" }} />
              ) : item.title === "Notificações" ? (
                <ForwardToInboxIcon style={{ fontSize: "larger" }} />
              ) : item.title === "Configurações" ? (
                <SettingsIcon style={{ fontSize: "larger" }} />
              ) : (
                <LogoutIcon style={{ fontSize: "larger" }} />
              )}
              <div
                className={
                  state === item.path ? ItemSelectStyle2 : ItemNormalStyle2
                }
              >
                {item.title}
              </div>
            </div>
          </div>
        </a>
      ))}
      <hr></hr>
      <div className="mt-5 text-sm text-center text-[#999999]">
        Simplifica cursas @2023
      </div>
    </div>
  );
};

export default AdminMenu;
