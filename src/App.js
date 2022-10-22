import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./Redux-State/actions/actions";

//Store -> GLOBALIZED STATE

//Action (such as: INCREMENT/DECREMENT)

//REDUCER

//DISPATCH

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
        Working...
        <br></br>
        Counter: {counter}
      </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br></br>
      <br></br>
      <button onClick={() => dispatch(login())}>Login</button>
      {isLogged ? <h3>Valuable Info</h3> : <h3>Info Blocked</h3>}
    </div>
  );
}

export default App;
