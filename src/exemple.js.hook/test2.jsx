import React, {useState, useEffect, useRef} from "react";



function App() {

    const [number, setNumber] = useState(40)





    return (

        <div>
            <h1>Вычисляемое свойство:  {number}</h1>
            <button className='btn btn-danger' onClick={()=> setNumber(x => x + 1)}>+........+</button>
            <button className='btn btn-danger' onClick={()=> setNumber(x => x - 1)}>-.........-</button>
        </div>


    );
}

export default App;
