import { useRef } from 'react'

import Button from './ui/Button'
import Input from './ui/Input'
import Form, { type FormHandle } from './ui/Form'
import { useTimersContext } from '../context/timers-context'

const AddTimer = () => {
  const { addTimer } = useTimersContext()
  const form = useRef<FormHandle>(null)

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string }
    addTimer({
      name: extractedData.name,
      duration: Number(extractedData.duration),
    })
    form.current?.clear()
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id='add-timer'>
      <Input type='text' label='Name' id='name' />
      <Input type='number' label='Duration' id='duration' />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  )
}

export default AddTimer
