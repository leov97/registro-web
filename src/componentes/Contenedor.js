import ValueImputs from './matricula/ValueImputs'
import MyMenu from './menu/Menu'
import './menu/StyleMenu.css'
import './matricula/StyleFormulario.css'
import SelectOption from './matricula/SelectOption'


const MyContenedor = () =>
    <div className='Container'>
    
     <div className='menu'>
        <MyMenu/>


    </div> 
    <div className='Registro-Formulario'>

        <form className="formulario">
            <h2>Registro de Matricula</h2>

	        <ValueImputs
                typeInput='text' 
                idInput='id1'   
                placeholderInput='Nombre'
            />
            <ValueImputs
                typeInput='text' 
                idInput='id2'
                placeholderInput='Apellidos'
            />
            <ValueImputs
                typeInput='number' 
                idInput='id3'
                placeholderInput='Edad'
            />
            <ValueImputs
                typeInput='number' 
                idInput='id4'
                placeholderInput='Id'
            />

            <SelectOption idselect="id6"/>

            <ValueImputs
                typeInput='submit' 
                idInput='id5'
                ValueRegistro='Registrar'
            />

        </form>
    </div>
  
    </div>
export default MyContenedor
