const {createSlice} = require("@reduxjs/toolkit");

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

// refactor to use the createSlice method

const timeSlice = createSlice({
  name:'timer',
  initialState: INITIAL_STATE,
  reducers:{
    startTimer:(state)=>{state.isRunning = true},
    pauseTimer:(state)=>{state.isRunning = false},
    incrementTimer:(state)=>{state.elapsedTime++ },
    resetTimer:(state)=>{state.elapsedTime = 0, state.isRunning =false}
  }
})

export const timerReducer = timeSlice.reducer;
export const timerActions = timeSlice.actions;

// export const timerReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case START_TIMER:
//       return { ...state, isRunning: true };
//     case PAUSE_TIMER:
//       return { ...state, isRunning: false };

//     case RESET_TIMER:
//       return { isRunning: false, elapsedTime: 0 };
//     case INCREMENT_TIMER:
//       return { ...state, elapsedTime: ++state.elapsedTime };
//     default:
//       return state;
//   }
// };

// export the timer reducer function and action creators here
