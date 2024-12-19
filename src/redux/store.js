import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postsReducer from './postsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // Adding slices to the store
    posts: postsReducer,
  },
});

export default store;

// import { createStore } from 'redux';
// import counterReducer from './counterSlice';

// // Create Redux store
// const store = createStore(counterReducer);

// export default store;
