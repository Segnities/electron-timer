import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import ControlPanel from './components/ControlPanel'
import SelectBar from './components/SelectBar'
import Timer from './components/Timer'
import { RootState } from './store'

function App(): JSX.Element {
  const { started, alertSound } = useSelector((state: RootState) => state.timer)
  const alertSoundRef = useRef<HTMLAudioElement | null>(null)

  const playAlertSound = (): void => {
    if (!alertSoundRef.current) {
      alertSoundRef.current = new Audio('/audio/timer-alert.wav')
      alertSoundRef.current.volume = 0.9
      alertSoundRef.current.loop = true
    }
    if (alertSound) {
      alertSoundRef.current.play()
    } else {
      alertSoundRef.current.pause()
      alertSoundRef.current.currentTime = 0
    }
  }

  useEffect(() => {
    playAlertSound()

    return () => {
      if (alertSoundRef.current) {
        alertSoundRef.current.pause()
        alertSoundRef.current.currentTime = 0
      }
    }
  }, [alertSound])

  return (
    <div>
      {started ? <Timer /> : <SelectBar />}
      <ControlPanel />
    </div>
  )
}

export default App
