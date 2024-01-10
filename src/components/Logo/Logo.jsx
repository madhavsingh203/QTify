import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
  const navigate = useNavigate()
  const handleLogoClick = ()=>{
    navigate('/')
  }
  return <img src={logo} className="h-12 w-18 cursor-pointer" alt="logo_image" onClick={handleLogoClick}/>;
};

export default Logo;
