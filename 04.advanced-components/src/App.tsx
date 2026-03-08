import Input from './components/Input'

const App = () => {
  return (
    <main>
      <Input label='your name' id='username' type='text' />
      <Input label='your email' id='email' type='text' />
      <Input label='your age' id='age' type='number' />
    </main>
  )
}

export default App
