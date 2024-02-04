import React, { useState, useEffect } from 'react'

const CountdownTimer = ({ minutes }) => {
  const [duration, setDuration] = useState(minutes * 60)

  useEffect(() => {
    let intervalId

    const updateTimer = () => {
      if (duration > 0) {
        setDuration((prevDuration) => prevDuration - 1)
      } else {
        clearInterval(intervalId)
      }
    }

    intervalId = setInterval(updateTimer, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [duration])

  const displayTime = () => {
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`
  }

  return (
    <div>
      <h1>Remaining Time: {displayTime()}</h1>
    </div>
  )
}

CountdownTimer.displayName = 'CountdownTimer'
export { CountdownTimer }
