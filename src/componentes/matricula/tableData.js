import './tablaEstudiantes.css'
import MyRegistro from './MyRegistro'
import './tablaEstudiantes.css'
const TableData = ()=>{


    return (

        <>
        <div className='tab-registro'>
             <MyRegistro/>
      <section>
            <table className="table">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Identidad</th>
                    <th>Telefono</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Ronny</td>
                    <td>Vasquez Portillo</td>
                    <td>id</td>
                    <td>##########</td>
                </tr>    
                </tbody>
            </table>

       </section>
       
       </div>
</>

    )
}
export default TableData