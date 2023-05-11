
import { useForm } from "react-hook-form";
import React from "react";
import axios from "axios";



const Altaclientes = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const gestorFormulario = async (data) => {
         console.log(data)
        await axios
        .post("http://localhost:7001/api/clientes", {
           
            email:data.email,
            password: data.password,
            plaza:data.plaza,
           
          })
          .then((response) => {
            console.log("Todo correcto", response.data);
          })
          .catch((error) => console.log(error.response.data));
      };
    
  return (
    <div className="Form">
      <div className="title">Crea tu cuenta</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(gestorFormulario)}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            {...register("nombre", { minLength: 6, maxLength:50, required: true })}
          />
          {errors.nombre && errors.nombre.type === "required" && (
            <p>Campo requerido</p>
          )}
          {errors.nombre && errors.nombre.type === "minLength" && (
            <p>Debe tener al menos 6 caracteres</p>
          )}
          <input
            type="text"
            name="email"
            placeholder="Email"
            {...register("email", {
              pattern:
                /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/,
              required: true,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>Campo email requerido</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p>Formato de email incorrecto</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>Campo password requerido</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>La contraseña debe tener como mínimo 8 caracteres</p>
          )}
          <input 
          type='text'
          name="dni"
          placeholder="Documento de identidad"
          {...register ("dni",{required:true, maxLength: 9})}
          />
          {errors.dni && errors.dni.type === "required" && (
            <p>Campo dni requerido</p>
          )}
          {errors.dni && errors.dni.type === "maxLength" && (
            <p>El DNI debe tener  9 caracteres</p>
          )}
           <input 
          type='text'
          name="plaza"
          placeholder="Plaza parking"
          {...register ("plaza",{maxLength: 9})}
          />
          {errors.plaza && errors.plaza.type === "maxLength" && (
            <p> La plaza debe tener  9 caracteres</p>
          )}
          
          <div className="submit">
            <input type="submit" value="Crear" id="submit" />
          </div>
        </form>
      </div>
    </div>

  )
          
}


export default Altaclientes