import type { FC } from 'react'
import { type Timer as TimerProps } from '../context/timers-context'
import Container from './ui/Container'

const Timer: FC<TimerProps> = ({ name, duration }) => {
  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  )
}

export default Timer
