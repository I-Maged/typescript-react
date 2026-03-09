import Header from './components/Header'
import AddTimer from './components/AddTimer'
import Timers from './components/Timers'

import TimersContextProvider from './context/timers-context'

const App = () => {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  )
}

export default App
