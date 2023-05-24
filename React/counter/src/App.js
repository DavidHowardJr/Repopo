import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


  function ButtonIncrement(props) {
    return (
      <button style={{ color: 'blue', marginLeft: '.5rem' }} onClick={props.onClickFunc}>
        +1
      </button>
    )
  }

function ButtonDecrement(props) {
    
  return (
    <button style={{ color: 'red', marginLeft: '.5rem' }} onClick={props.onClickFunc}>
      -1
    </button>
  )
}

function Display(props) {
  return (
    <label style={{ marginLeft: '.5rem' }} >{props.message}</label>
  )
}

function App() {
  const [counter, setCounter] = useState(1)
  const incrementCounter = () => setCounter(counter + 1)
  let decrementCounter = () => setCounter(counter - 1)

  if (counter <= 0) {
    decrementCounter = () => setCounter(1)
  }


  return (
    <div>
      <ButtonIncrement className="butt" onClickFunc={incrementCounter} />
      <Display message={counter} />
      <ButtonDecrement className="buttt" onClickFunc={decrementCounter} />
    </div>
  );
}
 
export default App;