import React,{Fragment, useState} from "react"
import { useRegistro } from "../hooks/useRegistro"

const MyRegistro =()=>{
    const {handleInputChange, handleRegistro, handleCancele, registro, data}= useRegistro()


    return (<Fragment>

        <button onClick={handleRegistro} className="btn-registro">Matricular</button>
        {registro &&(

<section className="section-form">
            <button onClick={handleCancele} className="btn-cancele">X</button>
        <h2>Registro de Matricula</h2>
        <form className="formulario">
            
            <div className="input-nombre">
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
            </div>

            <div className="input-nombre">
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
            /></div>
            <div className="input-nombre">
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
            </select></div>

            <input
            id="id7"
            type='submit'
            value='Registrar'
            className="form-control"
            />

            </form>
            </section>

        )}
        
            </Fragment>
   
    )
}

export default MyRegistro