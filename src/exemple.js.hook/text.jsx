import React, {useState, useEffect, useRef} from "react";

let renderCount = 0

function App() {

    /*const [renderCount, setRenderCount] = useState(1)*/
    const [value, setValue] = useState('text')

    useEffect( () =>{
        renderCount++
    })

    return (

        <div>
            <h1>Колличество рендеров:  {renderCount}</h1>
            <input type="text" onChange={x => setValue(x.target.value)} value={value}/>
        </div>


    );
}

export default App;
