import React, { useCallback } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import store from './store'
import { up, down } from './counterSlice';


function Counter(props) {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter.value)
  const increaseCounter = useCallback(() => dispatch(up(2)), [dispatch])
  const decreaseCounter = useCallback(() => dispatch(down(2)), [dispatch])

  return (
    <div>
      <h1>Counter</h1>
      <p>{value}</p>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
