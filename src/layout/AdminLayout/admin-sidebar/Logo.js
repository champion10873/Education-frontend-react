import LogoImg from '../../../assets/logo.png'

const Logo = () => {
  return (
    <div className="w-[100%]  bg-white px-5 mx-auto text-center text-4xl text-green-800">
      <div>
        <img src={LogoImg} alt=''></img>
      </div>
    </div>
  );
};

export default Logo;
