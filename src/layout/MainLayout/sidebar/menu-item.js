import { useState } from "react";
import { useLocation } from "react-router-dom";
import HouseIcon from '@mui/icons-material/House';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Groups3Icon from '@mui/icons-material/Groups3';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

// constant
const menuItem = [
  { title: "Painel", path: "/student/dashboard" },
  { title: "Missões da Escola", path: "/student/lessons" },
  { title: "Explorar jogos", path: "/student/questions" },
  { title: "Classificação", path: "/student/ranking" },
  { title: "Suporte", path: "/student/support" },
  { title: "Sair", path: "/" },
];

const CommonStyle =
  "pl-8 flex justify-between hover:text-[#ffffff] hover:font-bold cursor-pointer";
const ItemSelectStyle1 = "flex items-center py-2 text-[#ffffff] bg-[#018638] w-[100%] font-bold pl-3";
const ItemNormalStyle1 = "flex items-center py-2";
const ItemSelectStyle2 = "ml-3 text-[#ffffff]";
const ItemNormalStyle2 = "ml-3";
// const ItemSelectStyle3 = "w-1 h-9 bg-[#018638] rounded-[25px] block";
// const ItemNormalStyle3 = "";

const Menu = () => {
  const location = useLocation().pathname;
  const [state, setState] = useState(
    location === "/student" ? "/student/dashboard" : location
  );

  return (
    <div className="mt-[120px] text-[#ffffff]">
      {menuItem.map((item) => (
        <a href={item.path}>
          <div
            className={CommonStyle} 
            style={{marginBottom:'15px'}}
            // onClick={() => {
            //   item.title === "Logout"
            //     ? setState("/")
            //     : setState(item.path);
            // }}
          >
            <div
              className={
                state === item.path ? ItemSelectStyle1 : ItemNormalStyle1
              }
            >
              {item.title === "Painel" ? (
                <HouseIcon style={{fontSize:'larger'}}/>
              ) : item.title === "Missões da Escola" ? (
                <AutoStoriesIcon style={{fontSize:'larger'}} />
              ) : item.title === "Explorar jogos" ? (
                <QuestionAnswerIcon style={{fontSize:'larger'}} />
              ) : item.title === "Suporte" ? (
                <ShoppingCartIcon style={{fontSize:'larger'}}/>
              ) : item.title === "Classificação" ? (
                <Groups3Icon style={{fontSize:'larger'}} />
              ) : (
                <LogoutIcon style={{fontSize:'larger'}} />
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
      <div className="mt-5 text-sm text-center text-[#999999]">Simplifica cursas @2023</div>
    </div>
  );
};

export default Menu;
