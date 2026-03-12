import {
  createContext,
  useContext,
  useReducer,
  type FC,
  type ReactNode,
} from 'react'

import sessionReducer from './sessionReducer'
import { SESSIONS } from '../dummy-sessions'

type sessionsContextProviderProps = { children: ReactNode }

export type Session = {
  id: string
  title: string
  summary: string
  description: string
  duration: number
  date: string
  image: string
}

export type InitialStateProps = {
  sessions: Session[]
  upcomingSessions: Session[]
}

type SessionContextValue = InitialStateProps & {
  bookSession: (session: Session) => void
  cancelSession: (sessionId: string) => void
}

const sessionsContext = createContext<SessionContextValue | null>(null)

const SessionsContextProvider: FC<sessionsContextProviderProps> = ({
  children,
}) => {
  const initialState: InitialStateProps = {
    sessions: SESSIONS,
    upcomingSessions: [],
  }

  const [sessionsState, dispatch] = useReducer(sessionReducer, initialState)

  function bookSession(session: Session) {
    dispatch({ type: 'BOOK_SESSION', session })
  }

  function cancelSession(sessionId: string) {
    dispatch({ type: 'CANCEL_SESSION', sessionId })
  }

  const ctxValue = {
    sessions: sessionsState.sessions,
    upcomingSessions: sessionsState.upcomingSessions,
    bookSession,
    cancelSession,
  }

  return (
    <sessionsContext.Provider value={ctxValue}>
      {children}
    </sessionsContext.Provider>
  )
}

export function useSessionsContext() {
  const context = useContext(sessionsContext)
  if (!context) {
    throw new Error(
      'useSessionsContext must be used within a SessionsContextProvider',
    )
  }
  return context
}

export default SessionsContextProvider
