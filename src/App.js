import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from "react";


function App() {

console.log('asdasdsdas')
  return (
    <div>
      <header className="App-header">
          <h1>Ресурс первый: </h1>

      </header>
        <hr/>
      <body className="App-body">
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <hr/>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>

        <button type="button" className="btn btn-link">Link</button>


      </body>
        <hr/>
    </div>
  );
}

export default App;
