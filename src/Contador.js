import { useState } from "react";
const Contador =() => {

    //hook
    /*const contador = useState;

    const contadorValue = contador[0];
    const contadorUpdateValue = contador[1];*/
    
    const [contadorValue, contadorUpdateValue] = useState(0);

    //NO HACER ESTO porque cada vez que se re renderiza el componente, se re setea el intervalo
    // setInterval(() => {
    //     contadorUpdateValue(contadorValue + 1);
    // }, 1000);

    const handleClick =() => contadorUpdateValue(contadorValue => contadorValue + 1);
    const handleClickReset = () => contadorUpdateValue(0);

    return (
        <div>
            <h1>Contador: {contadorValue}</h1>
            <button onClick={handleClick}>Incrementar</button>
            <button onClick={handleClickReset}>Reset</button>
        </div>
    );
}

export default Contador