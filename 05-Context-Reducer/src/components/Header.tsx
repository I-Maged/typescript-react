import Button from './ui/Button'
import { useTimersContext } from '../context/timers-context'

const Header = () => {
  const timersCtx = useTimersContext()

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersCtx.isRunning ? 'Stop' : 'start'} Timers</Button>
    </header>
  )
}

export default Header
