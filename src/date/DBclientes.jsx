
import React from 'react'
import Clienteslogueados from '../paginas/Clienteslogueados'
  const   DBclientes = () => {  
    const  clientesregistrados = [
      {
        id:"1",
        nombre:"Leo Messi",
        email:"Leomessi@gmail.com",
        password:"bodybaord1",
        dni:"45368512-",
    
        
    
        },
        {
        id:"2",
        nombre:"Jordi  Alba",
        email:"Jordi@gmail.com",
        password:"bodybaord1",
        dni:"45368513-",
        
            
        
            },
            {
        id:"3",
        nombre:"Ronald Araujo",
        email:"Araujo@gmail.com",
        password:"bodybaord1",
        dni:"45368514-",
              
        },
        {
        id:"4",
        nombre:"Eric Garcia",
        email:"Eric@gmail.com",
        password:"bodybaord1",
        dni:"45368515-",
                
                    
                
        },
        {
         id:"5",
        nombre:"Robert Lewandowsky",
        email:"Robert@gmail.com",
        password:"bodybaord1",
        dni:"45368516-",
                    }
   ] 

   console.log(clientesregistrados)
return (
   
    <div className='listado'>
    
        <ul>
        <li>
        </li>
        
        {clientesregistrados.map((clients) => (
            <Clienteslogueados key={clients.id} usuariosregistrados={clients}/>
        ))}
        </ul>
       
    </div>

)

        }

export default DBclientes
//   return (
//     <div>
        
//         <ul>
//         <li>
//           {" "}
//           <strong>Nombre : </strong>
//           <em>{cliente.nombre}</em>{" "}
//         </li>
//         <li>
//           <strong>email : </strong> <em>{cliente.email}</em>
//         </li>
//         <li>
//           {" "}
//           <strong>Password : </strong> <em>{cliente.password}</em>
//         </li>
//         <li>
//           {" "}
//           <strong>DNI : </strong> <em>{cliente.dni}</em>
//         </li>
//         {/* <li>
//           {" "}
//           <strong>Mensaje : </strong> <em>{cliente.mensaje}</em>
//         </li>
//         <li>
//           {" "}
//           <strong>Nacionalidad : </strong>{" "}
//           <em>{cliente.nacionalidad}</em>
//         </li> */}
//       </ul>
//     </div>
          
//   )
// }

