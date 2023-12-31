import { useState } from "react"

export const UseForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    //Mediante el cambio desestructuramos el target del event, luego el name y el value del target y mediante esos dos actualizamos el estado. con el spread operator agregamos las propiedades que no cambian y mediante el name agregamos la propiedad que estamos manejando, los corchetes son para que el nombre de la propiedad pueda cambiar.
    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

  return {
    formState,
    setFormState,
    onInputChange
  }
}