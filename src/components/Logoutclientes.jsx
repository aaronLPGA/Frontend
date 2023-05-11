import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Logoutclientes = ({gestionarLogout}) => {
 
    const navegar = useNavigate();
    useEffect(() => {
      gestionarLogout()
      localStorage.removeItem("datosUsuario");
      navegar("/login");
    }, [gestionarLogout, navegar]) ;
    return <h1>Logged out...</h1>;
  };
  

export default Logoutclientes
