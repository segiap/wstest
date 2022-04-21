import React, {useState} from "react";

function States () {

    const [counter, setCounter] = useState(0)

    function increm() {
        setCounter(counter +1)
    }
    function decrem() {
        setCounter(counter -1)
    }

    function reset() {
        setCounter(0)
    }



    return (
        <div>
            <h2>Счетчик {counter}</h2>
            <button onClick={increm} className="btn btn-success">Добавить</button>
            <button onClick={decrem} className="btn btn-danger">Убрать</button>
            <button onClick={reset} className="btn btn-warning">reset</button>
        </div>


    );
}

export default App;
