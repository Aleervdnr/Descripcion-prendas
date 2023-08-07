import Input from "./Input"

export default function Form({onInputChange, formState}) {


const {titulo, descripcion, talle, largo, ancho, precio} = formState

return (
    <form>
        <div className="grid grid-cols-2 gap-2 max-w-[370px] ">
              <Input
                name={"titulo"}
                data={titulo}
                onChange={onInputChange}
                styles={"col-span-2"}
              />
              <Input
                name={"descripcion"}
                data={descripcion}
                onChange={onInputChange}
                styles={"col-span-2 h-[80px] "}
              />
              <Input
                name={"talle"}
                data={talle}
                onChange={onInputChange}
                styles={""}
              />
              <Input 
                name={"largo"} 
                data={largo} 
                onChange={onInputChange} />
              
              <Input 
                name={"ancho"} 
                data={ancho} 
                onChange={onInputChange} />

              <Input 
                name={"precio"} 
                data={precio} 
                onChange={onInputChange} />
            </div>
    </form>
)
}

