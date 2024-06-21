import { useDispatch, useSelector } from 'react-redux'
import styles from '../assets/timer.module.css'
import { RootState } from '@renderer/store'
import { useEffect, useState } from 'react'
import toRangeNum from '@renderer/utils/toRangeNum'
import { playAlertSound } from '@renderer/store/slices/timer/timerSlice'

function Timer(): JSX.Element {
  const { hours, minutes, seconds, stopped } = useSelector((state: RootState) => state.timer)
  const [hoursState, setHoursState] = useState<number>(hours)
  const [minutesState, setMinutesState] = useState<number>(minutes)
  const [secondsState, setSecondsState] = useState<number>(seconds)

  const dispatch = useDispatch()

  useEffect(() => {
    const countdown = setInterval(() => {
      if (hoursState === 0 && minutesState === 0 && secondsState === 0) {
        dispatch(playAlertSound())
        clearInterval(countdown)
        return
      }
      if (secondsState > 0 && !stopped) {
        setSecondsState(secondsState - 1)
      } else if (minutesState > 0 && !stopped) {
        setMinutesState(minutesState - 1)
        setSecondsState(59)
      } else if (hoursState > 0 && !stopped) {
        setHoursState(hoursState - 1)
        setMinutesState(59)
        setSecondsState(59)
      }
    }, 1000)
    return () => clearInterval(countdown)
  }, [hoursState, minutesState, secondsState, stopped])

  return (
    <div className={styles['timer-container']}>
      <div className={styles['circle']}>
        <div className={styles['wave']}>
          <div className={styles['state-container']}>
            <span>{toRangeNum(hoursState)}:</span>
            <span>{toRangeNum(minutesState)}:</span>
            <span>{toRangeNum(secondsState)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer
