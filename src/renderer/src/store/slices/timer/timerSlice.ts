import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TimerSliceState {
  started: boolean
  stopped: boolean
  alertSound: boolean
  hours: number
  minutes: number
  seconds: number
}

const initialState: TimerSliceState = {
  started: false,
  stopped: false,
  alertSound: false,
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
    setHours(state, action: PayloadAction<number>): void {
      state.hours = action.payload
    },
    setMinutes(state, action: PayloadAction<number>): void {
      state.minutes = action.payload
    },
    setSeconds(state, action: PayloadAction<number>): void {
      state.seconds = action.payload
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
    },
    playAlertSound(state) {
      state.alertSound = true
    },
    stopAlertSound(state) {
      state.alertSound = false
    }
  }
})

export const {
  resetTimer,
  setTime,
  setHours,
  setMinutes,
  setSeconds,
  startTimer,
  stopTimer,
  continueTimer,
  playAlertSound,
  stopAlertSound
} = timerSlice.actions
export default timerSlice.reducer
