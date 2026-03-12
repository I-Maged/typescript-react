import { SESSIONS } from '../dummy-sessions.ts'

const Sessions = () => {
  return (
    <main id='sessions-page'>
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>

      <div id='sessions-list'>
        <ul>
          {SESSIONS.map((session) => (
            <li key={session.id}>{session.title}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Sessions
