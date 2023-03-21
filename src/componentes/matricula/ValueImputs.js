
//creo un input al cual se pueda utilizar mas de una sola vez 

const ValueInputs = ({typeInput, idInput,placeholderInput,ValueRegistro}) =>
    <>
        <input type={typeInput} id={idInput} placeholder={placeholderInput} value={ValueRegistro}/>

    </>


export default ValueInputs;
