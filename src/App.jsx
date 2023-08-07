import { useState } from "react";
import "./App.css";
import Logo from "../public/Logo.png";
import Input from "./Componentes/Input";

function App() {
  const [esBuzo, setEsBuzo] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [talle, setTalle] = useState("");
  const [largo, setLargo] = useState("");
  const [ancho, setAncho] = useState("");
  const [precio, setPrecio] = useState("");

  let tipos = ["Campera/Buzo", "Pantalon"];

  const clearInputs = () => {
    setTitulo("");
    setDescripcion("");
    setTalle("");
    setLargo("");
    setAncho("");
    setPrecio("");
  };

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

          <form className="">
            <div className="grid grid-cols-2 gap-2 max-w-[370px] ">
              <Input
                name={"titulo"}
                data={titulo}
                setData={setTitulo}
                styles={"col-span-2"}
              />
              <Input
                name={"descripcion"}
                data={descripcion}
                setData={setDescripcion}
                styles={"col-span-2 h-[80px] "}
              />
              <Input
                name={"talle"}
                data={talle}
                setData={setTalle}
                styles={""}
              />
              <Input name={"largo"} data={largo} setData={setLargo} />
              {}
              <Input name={esBuzo ? "ancho" : "cintura"} data={ancho} setData={setAncho} />
              <Input name={"precio"} data={precio} setData={setPrecio} />
            </div>
          </form>
        </div>

        <button
          onClick={clearInputs}
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
