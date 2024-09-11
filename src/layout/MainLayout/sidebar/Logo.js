import LogoImg from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div className="w-[100%] bg-white mx-auto text-center text-4xl text-green-800 px-5">
      <div>
        <img src={LogoImg} alt=""></img>
      </div>
    </div>
  );
};

export default Logo;
