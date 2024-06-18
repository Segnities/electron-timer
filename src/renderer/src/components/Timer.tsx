import { useSelector } from 'react-redux'
import styles from '../assets/timer.module.css'
import { RootState } from '@renderer/store'
import { useState } from 'react'
import toRangeNum from '@renderer/utils/toRangeNum'

function Timer(): JSX.Element {
  const { hours, minutes, seconds } = useSelector((state: RootState) => state.timer)
  const [hoursState] = useState<number>(hours)
  const [minutesState] = useState<number>(minutes)
  const [secondsState] = useState<number>(seconds)

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
