
import { useEffect, useState } from 'react'



  const Parking = ({ user }) => {
    const [selectedPlaza, setSelectedPlaza] = useState(null);
  
    const handleReservePlaza = (plazaId) => {
      if (user && selectedPlaza !== null && selectedPlaza !== plazaId) {
        alert("Ya has seleccionado una plaza");
      } else {
        setSelectedPlaza(plazaId);
      }
    };
  
    const handleReleasePlaza = () => {
      setSelectedPlaza(null);
    };
  
    return (
      <div>
        <div className='Imagenes' >
        <h1>Parking</h1>
        <div>
        <img src="https://th.bing.com/th/id/OIP.CAfrh5sQKQSbvXB_EwlOQwHaFj?pid=ImgDet&rs=1" alt="" />
          <h2>Plaza 1</h2>
          <button
            disabled={selectedPlaza !== null && selectedPlaza !== "1"}
            onClick={() => handleReservePlaza("A1")}
          >
            {selectedPlaza === "A1" ? "Selected" : "Reserve"}
          </button>
        </div>
        <div>
          <h2>Plaza 2</h2>
          <button
            disabled={selectedPlaza !== null && selectedPlaza !== "A2"}
            onClick={() => handleReservePlaza("A2")}
          >
            {selectedPlaza === "2" ? "Selected" : "Reserve"}
          </button>
        </div>
        <div>
        <img src='https://th.bing.com/th/id/OIP.fHYc_wEAwiteMnFfeY2LwAHaEK?pid=ImgDet&rs=1' alt=''/>
          <h2>Plaza 3</h2>
          <button
            disabled={selectedPlaza !== null && selectedPlaza !== "3"}
            onClick={() => handleReservePlaza("A3")}
          >
            {selectedPlaza === "A3" ? "Selected" : "Reserve"}
          </button>
        </div>
        {selectedPlaza && (
          <div>
            <img src="https://i.pinimg.com/originals/c4/30/fe/c430fe0f406016e71699b8e9e30b8a94.jpg" alt="" />
            
            <button onClick={handleReleasePlaza}>Release Plaza</button>
          </div>
          
        )}
      </div>
      </div>
    );
  };
  
  
  

   
//   return (
//     <div>
//         <div className='Imagenes' >
//         <div>
//           <img src="https://th.bing.com/th/id/OIP.CAfrh5sQKQSbvXB_EwlOQwHaFj?pid=ImgDet&rs=1" alt="" />
          
//         <p>
//         </p>
//         </div>
//         <button className='button' onClick={handleclick}disabled={plazaAsignada}>
//           {plazaAsignada ? "Plaza asignada":"Reservar"}
//           </button>
//         <div>
//         <img src='https://th.bing.com/th/id/OIP.fHYc_wEAwiteMnFfeY2LwAHaEK?pid=ImgDet&rs=1' alt=''/>

//         </div>
      
//         <div>
//         <img src="https://i.pinimg.com/originals/c4/30/fe/c430fe0f406016e71699b8e9e30b8a94.jpg" alt="" />
//         </div>

      
//          <button className='button3' onClick={handleclick3} disabled={plazaAsiganda3}>
//         {plazaAsiganda3? "Plaza asignada":"Reservar"}
//         </button>
//         </div>   
//         </div>
//   )
 

export default Parking