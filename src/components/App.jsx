import React from 'react';
import "../../src/styles.css";
import Heading from './Heading';
import Body from './body';

//Importing multiple things from a file
import pi, {doublePi, triplePi} from './pi.js';

// OR
// Returns an object
// import * as pi from './pi';

const myName = "Aakarsh";
const currYear = new Date().getFullYear()
const customStyle = {
    fontSize: '3rem',
    color: "rebeccapurple"
}
// const chosenColor = prompt("Enter a color");
// customStyle.color = chosenColor;

let finalMessage;
const dynamicStyle = {
    color: 'black'
}

let myHour = new Date().getHours();
if(myHour > 0 && myHour < 12) {
    finalMessage = "Good Morning " + myName + "!";
    dynamicStyle.color = 'red';
} else if (myHour > 12 && myHour < 18 ) {
    finalMessage = "Good Afternoon " + myName + "!";
    dynamicStyle.color = 'green';
} else {
    finalMessage = "Good evening! " + myName + "!";
    dynamicStyle.color = 'blue';
};

export default function App() {
    return (
        <div className="App">
            <Heading />
            <Body />
            <h1 style={dynamicStyle}>{finalMessage}</h1>
            <p>Copyright {currYear}</p>

            <h1>{pi}</h1>
            <h1>{doublePi()}</h1>
            <h1>{triplePi()}</h1>

            {/* <h1>{pi.default}</h1>
            <h1>{pi.doublePi()}</h1>
            <h1>{pi.triplePi()}</h1> */}
        </div>
    );
}
