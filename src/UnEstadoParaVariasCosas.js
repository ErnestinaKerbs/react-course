//no es buena práctica pero sirve de práctica
import { useState } from "react";
const UnEstadoParaVariasCosas = () => {

    const [counters, setCounters] = useState({
        left : 0,
        right : 0,
        clicks : 0
    });

    //... esto se llama spread y sirve para copiar un objeto 
    const handleClickLeft = () => setCounters({...counters,clicks : counters.clicks + 1, left : counters.left + 1});
    const handleClickRight = () => setCounters({...counters,clicks : counters.clicks + 1, right : counters.right + 1});

    return (
        <div>
           <p>
           {counters.left}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickRight}>Right</button>
            {counters.right}
           </p>
            
            <p>Clicks: {counters.clicks}</p>
        </div>
    );
}

export default UnEstadoParaVariasCosas;