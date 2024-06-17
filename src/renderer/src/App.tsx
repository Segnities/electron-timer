import { useSelector } from 'react-redux'
import ControlPanel from './components/ControlPanel'
import SelectBar from './components/SelectBar'
import Timer from './components/Timer'
import { RootState } from './store'

function App(): JSX.Element {
  const { started } = useSelector((state: RootState) => state.timer)
  return (
    <div>
      {started ? <Timer /> : <SelectBar />}
      <ControlPanel />
    </div>
  )
}

export default App
