import Input from './components/Input'
import Form from './components/Form'
import Button from './components/Button'

const App = () => {
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string }
    console.log(extractedData)
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input label='your name' id='username' type='text' />
        <Input label='your age' id='age' type='number' />
        <Button>Save</Button>
      </Form>
    </main>
  )
}

export default App
