import { useState } from "react"



export const useRegistro =()=>{

    const [registro, setRegistro ] = useState(false)
    const [data, setData ] = useState({
        nombre :'',
        apellidos:'',
        edad:'',
        registroId:''
    
   })

   const handleInputChange =(event)=>{

    setData({
        ...data,
        [event.target.name]:event.target.value
    })

    }

    const handleRegistro=()=>{
        setRegistro(true)
    }

    const handleCancele =()=>{
        setRegistro(false)
    }
    console.log(registro)


    return {handleInputChange, handleRegistro, handleCancele, registro, data}
}