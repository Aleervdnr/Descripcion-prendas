import { useState } from "react";
import "./App.css";
import Logo from "../public/Logo.png";
import Form from "./Componentes/Form";
import { UseForm } from "./hook/useForm";

function App() {
  const [esBuzo, setEsBuzo] = useState(true);

  const initialForm = {
    titulo:"",
    descripcion:"",
    talle:"",
    largo:"",
    ancho:"",
    precio:""
}

const {formState,setFormState, onInputChange} = UseForm(initialForm)


const {titulo, descripcion, talle, largo, ancho, precio} = formState


  return (
    <div className="bg-[#e72b1f] w-full min-h-screen px-2">
      <div className="w-[120px] m-auto">
        <img src={Logo} alt="Retro Style Clothes Logo" />
      </div>
      <div className="text-white grid justify-center m-auto max-w-[370px]">
        <h1 className="font-bold text-xl text-center mb-3">
          Automatizador de publicaciones
        </h1>

        <div className="flex justify-center">
          <button
            className="bg-white text-black p-1 mx-1"
            onClick={() => setEsBuzo(true)}
          >
           Campera/Buzo
          </button>
          <button
            className="bg-white text-black p-1 mx-1"
            onClick={() => setEsBuzo(false)}
          >
           Pantalon
          </button>
        </div>

        <div className="grid">
          {esBuzo ?
              <h2 className="text-center font-bold text-xl">Campera/Buzo</h2>
            :
              <h2 className="text-center font-bold text-xl">Pantalon</h2>
          }

          <Form onInputChange={onInputChange} formState={formState}/>
        </div>

        <button
          onClick={()=> setFormState(initialForm)}
          className="inline-block rounded bg-white text-black mt-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-red-200"
        >
          Limpiar
        </button>

        <div className="mt-2">
          {titulo && <><span>💎{titulo}💎</span><br /></>}
          
          {descripcion && <><span>💥{descripcion} 💥</span><br /></>}
          
          {talle && <><span>✨Talle: {talle}</span><br /></>} 
          📐Medidas: <br />
          {largo && <span>📏Largo: ↕{largo} cm x</span>}
          {esBuzo ?
            ancho && <><span>↔Ancho: {ancho} cm</span><br /></>
          :
            ancho && <><span>↔Cintura: {ancho} cm</span><br /></>
          }
          
          {precio && <><span>💸Precio: ${precio}</span><br /></>} 
          📍Envío gratis a todo el pais📦🇦🇷 <br />
        </div>
      </div>
    </div>
  );
}

export default App;
