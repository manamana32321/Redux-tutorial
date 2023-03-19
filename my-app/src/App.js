import React, { useCallback } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import './App.css';


function reducer(currentState, action) {
  if (currentState === undefined) {
    return { number: 1 }
  }
  const newState = { ...currentState }

  switch(action.type) {
    case 'INCREMENT':
      newState.number++;
    break;
    case 'DECREMENT':
      newState.number--;
    break;
    default:
    break;
  }
  console.log(currentState, newState, action)
  return newState
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

function Counter(props) {
  const dispatch = useDispatch();
  const number = useSelector(state => state.number)
  const increaseCounter = useCallback(() => dispatch({type: 'INCREMENT'}), [dispatch])
  const decreaseCounter = useCallback(() => dispatch({type: 'DECREMENT'}), [dispatch])

  return (
    <div>
      <h1>Counter</h1>
      <p>{number}</p>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </div>
  )
}

export default App;
