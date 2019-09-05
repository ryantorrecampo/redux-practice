import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn, reset } from "./actions";

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset Counter</button>
            <button onClick={() => dispatch(signIn())}>Sign In</button>
            {isLogged ? <h3>Valueable Information</h3> : ""}
        </div>
    );
}

export default App;
