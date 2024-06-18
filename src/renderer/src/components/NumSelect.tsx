import getNextRangeNum from '@renderer/utils/getNextRangeNum'
import getPrevRangeNum from '@renderer/utils/getPrevRangeNum'
import toRangeNum from '@renderer/utils/toRangeNum'

import styles from '../assets/num-select.module.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setHours, setMinutes, setSeconds } from '@renderer/store/slices/timer/timerSlice'

interface Props {
  name: 'seconds' | 'minutes' | 'hours'
  min: number
  max: number
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

function NumSelect(props: Props): JSX.Element {
  const { min, max, name, value, setValue } = props
  const dispatch = useDispatch()

  const [isActive, setIsActive] = useState<boolean>(false)

  const [positive1Range, setPositive1Range] = useState<string>(getNextRangeNum(value, min, max, 1))
  const [positive2Range, setPositive2Range] = useState<string>(getNextRangeNum(value, min, max, 2))

  const [negative1Range, setNegative1Range] = useState<string>(getPrevRangeNum(value, min, max, 1))
  const [negative2Range, setNegative2Range] = useState<string>(getPrevRangeNum(value, min, max, 2))

  const playSoundDir = (): void => {
    const audio = new Audio('/audio/scroll.mp3')
    audio.volume = 0.14
    audio.play()
  }

  const handleMouseWheel = (event: React.WheelEvent): void => {
    event.preventDefault()
    playSoundDir()

    if (event.deltaY < 0) {
      setValue((prevValue) => parseInt(getPrevRangeNum(prevValue, min, max, 1)))
    } else {
      setValue((prevValue) => parseInt(getNextRangeNum(prevValue, min, max, 1)))
    }
    if (name === 'hours') {
      dispatch(setHours(value + 1))
    } else if (name === 'minutes') {
      dispatch(setMinutes(value + 1))
    } else if (name === 'seconds') {
      dispatch(setSeconds(value + 1))
    }
  }

  const handleFocus = (): void => setIsActive(true)
  const handleBlur = (): void => setIsActive(false)
  const handleMouseEnter = (): void => setIsActive(true)
  const handleMouseLeave = (): void => setIsActive(false)

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (isActive) {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        playSoundDir()
        setValue((prevValue) => parseInt(getPrevRangeNum(prevValue, min, max, 1)))
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()

        playSoundDir()
        setValue((prevValue) => parseInt(getNextRangeNum(prevValue, min, max, 1)))
      }
    }
  }

  useEffect(() => {
    setNegative1Range(getPrevRangeNum(value, min, max, 1))
    setNegative2Range(getPrevRangeNum(value, min, max, 2))
    setPositive1Range(getNextRangeNum(value, min, max, 1))
    setPositive2Range(getNextRangeNum(value, min, max, 2))
  }, [value])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return ()=> {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isActive])

  return (
    <div
      className={styles['select-list']}
      onWheel={handleMouseWheel}
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles['range-2']}>{negative2Range}</span>
      <span className={styles['range-1']}>{negative1Range}</span>
      <span className={`${styles['selected']}`}>{toRangeNum(value)}</span>
      <span className={styles['range-1']}>{positive1Range}</span>
      <span className={styles['range-2']}>{positive2Range}</span>
    </div>
  )
}

export default NumSelect

