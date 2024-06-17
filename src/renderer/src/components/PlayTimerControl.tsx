import { useDispatch } from 'react-redux'
import styles from '../assets/play-timer-control.module.css'
import { startTimer } from '@renderer/store/slices/timer/timerSlice'

function PlayTimerControl(): JSX.Element {
  const dispatch = useDispatch()

  const handleStart = (): void => {
    dispatch(startTimer())
  }

  return (
    <div className={styles['root']}>
      <button onClick={handleStart}>
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
          <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
        </svg>
      </button>
    </div>
  )
}

export default PlayTimerControl
