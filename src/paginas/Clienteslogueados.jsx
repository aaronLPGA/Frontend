import React from 'react'

// import DBclientes from '../date/DBclientes'
// import Logincliente from './Logincliente'
const Clienteslogueados = () => {
  const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"));
  const email = datosUsuario ? datosUsuario.email : null;

  return (
    <div>
      <h1>Bienvenido</h1>
      {email && <p>Usuario logueado: {email}</p>}
    </div>
  );
}
export default Clienteslogueados 






