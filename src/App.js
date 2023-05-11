import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";
import "./App.css";

import Inicio from "./paginas/Inicio";
import image from  "./assets/mejor.jpg"
// import Error from "./pages/Error";
import Logincliente from "./components/Logincliente";
import Logoutclientes from "./components/Logoutclientes";
import Altaclientes from "./paginas/Altaclientes";
import imagenl from "./assets/escaleras.jpg"
import Parking from "./paginas/Parking";


function App  () {
  const [tieneAcceso, setTieneAcceso] = useState(false);
  const [ ,setDatos] = useState({});
  // const [datosLogout, setDatosLogout] = useState({});
  // const [token, setToken] = useState();

  // Traemos desde el componente Auth los datos del usuario enviados desde el servidor mediane esta función prop
  const gestionarLogin = (dato) => {
    setDatos(dato); // datos del usuario: email, password y token
    setTieneAcceso(true);
    // La variable que indica que está logueado se pone a true
    // setToken(dato.token);
    console.log(tieneAcceso);
  };

  const gestionarLogout = () => {
    setTieneAcceso(false);
  };
return (
    <div className="App">
      {/* <FormCurso/> */}

      <Router>
        <div className="navbar">
          {tieneAcceso === false ? (
            <div>
              <NavLink className={"navlink"} to="/">
                Inicio
              </NavLink>
              <NavLink className={"navlink"} to="/login">
                Login
              </NavLink>
              <NavLink className={"navlink"} to="/signup">
                Crear Cuenta
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink className={"navlink"} to="/">
                Inicio
              </NavLink>
              <NavLink className={"navlink"} to="/logout">
                Logout
              </NavLink>
              <NavLink className={"navlink"}to="/parking">
                parking
              </NavLink>
            </div>
          )}
        </div>
        <Routes>
          {/* <Route path="/carrito" element={<Cart/>}
          /> */}
          <Route path="/" element={<Inicio  image={image} alt=""  className="foto"/>}/>
          <Route
            path="/login"
            element={<Logincliente gestionarLogin={gestionarLogin} imagenl={imagenl} alt="" className="foto2"/>} />
          

           <Route
            path="/logout"
            element={<Logoutclientes gestionarLogout={gestionarLogout} />}
          /> 
          <Route path="/signup" element={<Altaclientes />} />
          <Route path="/parking" element={<Parking/>}/>
          {/* <Route path="/404" element={<Error />} /> */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
