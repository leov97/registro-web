import MyMenu from './menu/Menu'
import './menu/StyleMenu.css'
import MyRegistro from './matricula/MyRegistro'
import './matricula/StyleFormulario.css'





const MyContenedor = () =>

    <div className='Container'>
    
        <div className='menu'>
        <MyMenu/>

        </div> 
        <div className='Registro-Formulario'>
        <MyRegistro/>
        </div>
        </div>

export default MyContenedor
