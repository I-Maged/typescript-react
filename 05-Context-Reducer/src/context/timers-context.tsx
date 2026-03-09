import {
  createContext,
  useContext,
  useReducer,
  type FC,
  type ReactNode,
} from 'react'

export type Timer = { name: string; duration: number }

type TimersState = { isRunning: boolean; timers: Timer[] }

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void
  startTimer: () => void
  stopTimer: () => void
}

type TimersContextProviderProps = { children: ReactNode }

const initialState: TimersState = { timers: [], isRunning: false }

const TimersContext = createContext<TimersContextValue | null>(null)

type StartTimersAction = { type: 'START_TIMERS' }
type StoptTimersAction = { type: 'STOP_TIMERS' }
type AddTimerAction = { type: 'ADD_TIMER'; payload: Timer }

type Action = StartTimersAction | StoptTimersAction | AddTimerAction

const timersReducer = (state: TimersState, action: Action): TimersState => {
  if (action.type === 'START_TIMERS') {
    return { ...state, isRunning: true }
  }
  if (action.type === 'STOP_TIMERS') {
    return { ...state, isRunning: false }
  }
  if (action.type === 'ADD_TIMER') {
    return {
      ...state,
      timers: [
        ...state.timers,
        { name: action.payload.name, duration: action.payload.duration },
      ],
    }
  }
  return state
}

const TimersContextProvider: FC<TimersContextProviderProps> = ({
  children,
}) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState)

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: 'ADD_TIMER', payload: timerData })
    },
    startTimer() {
      dispatch({ type: 'START_TIMERS' })
    },
    stopTimer() {
      dispatch({ type: 'STOP_TIMERS' })
    },
  }
  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}

export function useTimersContext() {
  const context = useContext(TimersContext)

  if (!context) {
    throw new Error("Timers Context was used outside it's provider")
  }

  return context
}

export default TimersContextProvider
