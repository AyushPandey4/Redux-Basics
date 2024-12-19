import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const Counter = () => {
//     // Access Redux state using useSelector
//     const count = useSelector((state) => state.count);

//     // Dispatch actions using useDispatch
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <h1>Counter: {count}</h1>
//             <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//             <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//         </div>
//     );
// };

// export default Counter;
