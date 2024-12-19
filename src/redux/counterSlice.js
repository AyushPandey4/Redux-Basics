import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState: { count: 0 }, // Initial state
  reducers: {
    increment: (state) => {
      state.count += 1; // Direct state mutation using Immer
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload; // Payload for dynamic data
    },
  },
});

// Exporting actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Exporting reducer
export default counterSlice.reducer;

// const initialState = {
//     count: 0,
// };

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return { ...state, count: state.count + 1 };
//         case 'DECREMENT':
//             return { ...state, count: state.count - 1 };
//         default:
//             return state;
//     }
// };

// export default counterReducer;
