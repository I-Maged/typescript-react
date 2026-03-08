import { useRef, type ChangeEvent, type FC } from 'react'

type NewGoalProps = { onAddGoal: (goal: string, summary: string) => void }

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const goalInput: string = goal.current!.value
    const summaryInput: string = summary.current!.value

    e.currentTarget.reset()

    onAddGoal(goalInput, summaryInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input id='goal' type='text' ref={goal} />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input id='summary' type='text' ref={summary} />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  )
}

export default NewGoal
