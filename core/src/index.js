import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);

/*
function Car(props) {
  return <h2>{props.year} {props.color} Toyota Camry</h2>;
}

function Garage() {
  return (
    <>
      <h1>Here are the cars in this garage:</h1>
      <Car color="Red" year="1999"/>
      <Car color="Blue" year="2020"/>
    </>
  )
}
*/

function Brian() {
  const stupid = () => {
    alert("ur sooo stupid lawlz")
  }

  return (
    <button onClick={stupid}>Click if your name is Ray!</button>
  )
}

root.render(
    <Brian />
);