import React from 'react'

import WheelComponent from 'react-wheel-of-prizes'
import './index.css'

const App = () => {
  const segments = [
    '0',
    '+1000',
    '+200',
    '-100',
    '+100',
    '+300',
    '-500',
    '-250',
    '+500',  
  ]
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#F0CF50',
  ]
  const onFinished = (winner) => {
    console.log(winner)
  }
  return (
    <React.Fragment>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment={segments[3]}
        onFinished={(winner) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={true}
        size={290}
        upDuration={100}
        downDuration={1000}
      />
    </React.Fragment>
  )
}

export default App
