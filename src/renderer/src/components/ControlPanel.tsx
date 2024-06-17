import { useSelector } from 'react-redux'

import { RootState } from '@renderer/store'
import PlayTimerControl from './PlayTimerControl'
import StartedTimerControl from './StartedTimerControl'

import styles from '../assets/control-panel.module.css'

function ControlPanel(): JSX.Element {
  const { started } = useSelector((state: RootState) => state.timer)

  return (
    <div className={styles['root']}>
      <div className={styles['control-panel']}>
        {started ? <StartedTimerControl /> : <PlayTimerControl />}
      </div>
    </div>
  )
}

export default ControlPanel
