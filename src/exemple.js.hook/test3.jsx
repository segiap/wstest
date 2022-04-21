import React, {useState, useEffect, useRef} from "react";
import './App.css';

function useLogger (value) {
    useEffect(()=>{
        console.log('value changed: ', value)
    },[value])
}

function useInput(initialValue) {
    const [value, setValue] = useState("")

    const onChange = event => {
        setValue(event.target.value)
    }
    const clear = () => {
        setValue("")
    }

    return {
        bind: {value, onChange},
        value,
        clear
    }
}


function App() {


    const inputName = useInput('')
    const firstInputName = useInput('')
    const secondInputName = useInput('')


    useLogger(secondInputName.value)


    return (

        <div>
            {/*<input type="text" value={inputName.value} onChange={inputName.onChange}/>
        <input type="text" value={firstInputName.value} onChange={firstInputName.onChange}/>*/}
            <input  className="d-inline" type="text" {...secondInputName.bind}/>
            <button  className="btn btn-warning " onClick={ secondInputName.clear}>Clear</button>
            <br/>
            <h1>{inputName.value}{firstInputName.value}{secondInputName.value}</h1>
        </div>


    );


}
export default App;

