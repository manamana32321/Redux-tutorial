import React, { useCallback } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'
import './App.css';


const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value += action.payload
    },
    down: (state, action) => {
      state.value -= action.payload
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

function Counter(props) {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter.value)
  const increaseCounter = useCallback(() => dispatch(counterSlice.actions.up(2)), [dispatch])
  const decreaseCounter = useCallback(() => dispatch(counterSlice.actions.down(2)), [dispatch])

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
