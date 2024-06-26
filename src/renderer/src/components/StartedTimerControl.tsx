import { useDispatch, useSelector } from 'react-redux'
import { continueTimer, resetTimer, stopAlertSound, stopTimer } from '@renderer/store/slices/timer/timerSlice'
import { RootState } from '@renderer/store'

import styles from '../assets/started-timer-control.module.css'

function StartedTimerControl(): JSX.Element {
  const dispatch = useDispatch()
  const { stopped, alertSound } = useSelector((state: RootState) => state.timer)

  const handleStop = (): void => {
    dispatch(stopTimer())
  }

  const handleContinue = (): void => {
    dispatch(continueTimer())
  }

  const handleClick = (): void => {
    if (stopped) {
      handleContinue()
    } else {
      handleStop()
    }
  }

  const handleReset = (): void => {
    dispatch(resetTimer())
    dispatch(stopAlertSound())
  }

  const handleStopAlarm = (): void => {
    dispatch(stopAlertSound())
  }

  return (
    <div className={styles['root']}>
      <button onClick={handleClick}>
        {!stopped ? (
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
            <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
          </svg>
        ) : (
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
          </svg>
        )}
      </button>
      <button onClick={handleReset}>
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
          <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
        </svg>
      </button>
      {
        alertSound ? <button onClick={handleStopAlarm}>
          <svg data-encore-id="icon" role="img" aria-label="Volume off" aria-hidden="true" id="volume-icon" viewBox="0 0 16 16"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
        </button>
          :
          null
      }
    </div>
  )
}

export default StartedTimerControl
