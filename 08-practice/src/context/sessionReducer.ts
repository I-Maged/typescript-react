import type { Session, InitialStateProps } from './sessionContext'

type BookSessionAction = { type: 'BOOK_SESSION'; session: Session }

type CancelSessionAction = { type: 'CANCEL_SESSION'; sessionId: string }

type SessionsAction = BookSessionAction | CancelSessionAction

const sessionReducer = (state: InitialStateProps, action: SessionsAction) => {
  switch (action.type) {
    case 'BOOK_SESSION':
      return {
        ...state,
        upcomingSessions: state.upcomingSessions.concat(action.session),
      }

    case 'CANCEL_SESSION':
      return {
        ...state,
        upcomingSessions: state.upcomingSessions.filter(
          (session) => session.id !== action.sessionId,
        ),
      }

    default:
      return state
  }
}

export default sessionReducer
