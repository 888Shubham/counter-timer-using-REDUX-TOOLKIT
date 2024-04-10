const {createSlice} = require("@reduxjs/toolkit");

const INITIAL_STATE = { count: 0 };

// refactor to use the createSlice method
const counterSlice = createSlice({
  name:"counter",
  initialState: INITIAL_STATE,
  reducers:{
    incrementCounter:(state)=>{++state.count},
    decrementCounter:(state)=>{--state.count},
    resetCounter:(state)=>{state.count = 0 }

  }
})

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;

// export const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { count: ++state.count };
//     case DECREMENT_COUNTER:
//       return { count: --state.count };

//     case RESET_COUNTER:
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// export the counter reducer function and action creators here
