import { createContext, useContext, type FC, type ReactNode } from 'react'

type Timer = { name: string; duration: number }

type TimersState = { isRunning: boolean; timers: Timer[] }

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void
  startTimer: () => void
  stopTimer: () => void
}

type TimersContextProviderProps = { children: ReactNode }

const TimersContext = createContext<TimersContextValue | null>(null)

const TimersContextProvider: FC<TimersContextProviderProps> = ({
  children,
}) => {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimer() {},
    stopTimer() {},
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
