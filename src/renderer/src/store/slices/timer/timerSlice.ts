import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TimerSliceState {
  started: boolean
  stopped: boolean
  hours: number
  minutes: number
  seconds: number
}

const initialState: TimerSliceState = {
  started: false,
  stopped: true,
  hours: 0,
  minutes: 0,
  seconds: 0
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer(state): void {
      state.started = true
    },
    setTime(state, action: PayloadAction<TimerSliceState>): void {
      state.hours = action.payload.hours
      state.minutes = action.payload.minutes
      state.seconds = action.payload.seconds
    },
    resetTimer(state): void {
      state.hours = 0
      state.minutes = 0
      state.hours = 0
      state.started = false
    },
    stopTimer(state) {
      state.stopped = true
    },
    continueTimer(state) {
      state.stopped = false
    }
  }
})

export const { resetTimer, setTime, startTimer, stopTimer, continueTimer } = timerSlice.actions
export default timerSlice.reducer
