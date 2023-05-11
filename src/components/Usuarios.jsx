import React from 'react'

const Usuarios = ({onNuevoUsuario}) => {
  return (
    
<div className="listado">
      <div>
        <h2>Listado de Clientes :</h2>
      </div>
      <div id="lista">
        <ul>
          <li>
            {" "}
            <strong>Nombre : </strong>
            <em>{onNuevoUsuario.nombre}</em>{" "}
          </li>
          <li>
            <strong>apellidos : </strong> <em>{onNuevoUsuario.apellidos}</em>
          </li>
          <li>
            {" "}
            <strong>Genero : </strong> <em>{onNuevoUsuario.genero}</em>
          </li>
          <li>
            {" "}
            <strong>E-mail : </strong> <em>{onNuevoUsuario.email}</em>
          </li>
          {/* <li>
            {" "}
            <strong>Mensaje : </strong> <em>{onNuevoUsuario.mensaje}</em>
          </li>
          <li>
            {" "}
            <strong>Nacionalidad : </strong>{" "}
            <em>{onNuevoUsuario.nacionalidad}</em>
          </li> */}
        </ul>
      </div>
    </div>


    
  )
}

export default Usuarios