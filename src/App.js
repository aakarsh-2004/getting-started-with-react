import "./styles.css";
import Heading from './components/Heading';
import Body from './components/body';

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
        </div>
    );
}
