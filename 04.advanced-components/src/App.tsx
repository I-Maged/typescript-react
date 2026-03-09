import Input from './components/Input'
import Form, { type FormHandle } from './components/Form'
import Button from './components/Button'
import { useRef } from 'react'

const App = () => {
  const customRef = useRef<FormHandle>(null)

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string }
    console.log(extractedData)
    customRef.current?.clear()
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customRef}>
        <Input label='your name' id='username' type='text' />
        <Input label='your age' id='age' type='number' />
        <Button>Save</Button>
      </Form>
    </main>
  )
}

export default App
