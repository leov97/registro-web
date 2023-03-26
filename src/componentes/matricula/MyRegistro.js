import React,{Fragment, useState} from "react"


const MyRegistro =()=>{
 
   const [hola, sethola ] = useState({
        nombre :'',
        apellidos:'',
        edad:'',
        registroId:''
    
   })

   const handleInputChange =(event)=>{

        sethola({
            ...hola,
            [event.target.name]:event.target.value
        })

   }
console.log(handleInputChange)




    return (<Fragment>

        <form className="formulario">
            <h2>Registro de Matricula</h2>
            
            <input
                type='text' 
                id='id1'   
                placeholder='Nombre'
                className="form-control"
                onChange={handleInputChange}
                name="nombre"

            />
            <input
                type='text' 
                id='id2'   
                placeholder='Apellidos'
                className="form-control"
                onChange={handleInputChange}
                name="apellidos"
            />
            <input
                type='number' 
                id='id3'   
                placeholder='Edad'
                className="form-control"
                onChange={handleInputChange}
                name="edad"

            />
            <input
                type='number' 
                id='id4'   
                placeholder='Id'
                className="form-control"
                onChange={handleInputChange}
                name="registroId"
            />

            <input
                type='date' 
                id='id5'   
                className="form-control"
                onChange={handleInputChange}
                name="birthdate"

            />
            <select name="profesiones" 
                className="form-control"
                id="id6"
            >
                <option>Select</option>
                <option value='informatica'>BTP en Informatica</option>
                <option value='ciencias'>BTP en Ciencias y Letras</option>
                <option value='turismo'>BTP en Turismo</option>
            </select>

            <input
            id="id7"
            type='submit'
            value='Registrar'
            className="form-control"
            />

            </form>
            </Fragment>
   
    )
}

export default MyRegistro