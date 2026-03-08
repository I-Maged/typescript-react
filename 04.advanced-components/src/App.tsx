import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'

const App = () => {
  return (
    <main>
      <Input label='your name' id='username' type='text' />
      <Input label='your email' id='email' type='text' />
      <Input label='your age' id='age' type='number' />

      <Container
        className='button'
        as={Button}
        onClick={() => console.log('Hello')}
      >
        Click me
      </Container>

      <p>
        <Button href='https://www.youtube.com/watch?v=UvNxK_Rtdy4'>Link</Button>
      </p>
      <p>
        <Button>Button</Button>
      </p>
    </main>
  )
}

export default App
