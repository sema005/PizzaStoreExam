import React from 'react'

/* 
------------------------------------------
----------    CSS   ------------- 
hvis for eksempel hvis pop up ligger i en main

* {
        margin: 0;
        padding: 0:
        box-sizing: border-box;

        font family: ' Fira Sans', sans-serif;
    }

main {
        padding: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
.PopUp {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #1D448A;
    display: flex;
    justify-content: center;
    align-items: center;

.PopUp-inner {
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: #FFFFFF

.PopUp-inner .close-btn {
    position: absolute
    top: 16px;
    right: 16px;
}
}    

}

-------------------------
---- koding i App.js   -----------

import PopUp from './components/PopUp';
import { useState } from 'react';

function App() {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    return (
        <div className="App">
        <main>
        <h1>Pizza eller Pasta PopUp></h1>
        <br/><br/>
        </main>
        <button onClick={() => setButtonPopUp(true)}>Se mer av PopUp<button>
        <PopUp trigger={buttonPopUp} setTrigger=
        {setButtonPopUp}>
        <h3>Pizza eller Pasta PopUp</h3>
        <p>Dette er pizza eller pasta popup</p>
        </PopUp>
        </div>
    );
}

export default App;
*/

// evt import './PopUp.css'

function PopUp(props) {
    return (props.trigger) ? (
        <div className="pizzaEllerPastaPopUp">
        <div className="PopUp-inner">
             <button className="close-btn" onClick={() => props.setTrigger(false)}
             >close</button>
             { props.children }     
        </div>
        </div>
        ) : "";
}

export default PopUp