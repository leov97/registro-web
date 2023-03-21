import React from "react"
import Select from "react-select"
// creo un arreglo para asignarlo a las opciones de mi selec 
const MyProfesion =[
    { label:'BTP en Informatica', value:'BtpInformatica' },
    {label:'BTP en Finanzas', value:'BtpFinanzas' },
    {label:'BTP en Turismo', value:'BtpTurismo' },
    {label:'BTP Cinecias y Letras', value:'BtpCiencias' }
    ]

//creo un select para que puedan elegir la profesion que desean cursar 
const SelectOption = ({idselect})=>
    <>
        <Select id={idselect}
            options={MyProfesion}
       />
    </>
   


export default SelectOption