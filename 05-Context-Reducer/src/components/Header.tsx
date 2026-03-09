import Button from './ui/Button'
import { useTimersContext } from '../context/timers-context'

const Header = () => {
  const timersCtx = useTimersContext()

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimer : timersCtx.startTimer
        }
      >
        {timersCtx.isRunning ? 'Stop' : 'start'} Timers
      </Button>
    </header>
  )
}

export default Header
