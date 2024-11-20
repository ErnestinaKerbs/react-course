import { useState } from "react";
import Mensaje from "./Mensaje";
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

    const isEven = contadorValue % 2 === 0;

    return (
        <div>

            {/* los componentes se re renderizan cada vez que cambia su estado interno (el caso del hook usado aquí), 
                o cuando le llegan nuevas props (el caso del componente Mensaje) */}
            <Mensaje color = {isEven ? "green" : "red"} message = {"Contador: " + contadorValue}></Mensaje>
            <p>{isEven ? "Es par" : "Es impar"}</p>
            <button onClick={handleClick}>Incrementar</button>
            <button onClick={handleClickReset}>Reset</button>
        </div>
    );
}

export default Contador