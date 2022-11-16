import React from 'react';
import './App.css';
import { useDispatch, useSelector} from 'react-redux'



function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  console.log(cash)

  const plusCash = () => {
    dispatch({type: "ADD_CASH", payload: 5})
  }

  const minusCash = () => {
    dispatch({type: "GET_CASH", payload: 5})
  }

  return (
    <div>
      <div>{cash}</div>
      <button onClick={() => plusCash()}>Plus money</button>
      <button onClick={() => minusCash()}>Minus money</button>
    </div>
  );
}

export default App;
