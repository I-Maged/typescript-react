import { useState } from 'react'
import Header from './components/Header'
import CourseGoalList from './components/CourseGoalList'

import goalsImg from './assets/goals.jpg'

export type CourseGoalProps = { title: string; description: string; id: number }

const App = () => {
  const [goals, setGoals] = useState<CourseGoalProps[]>([])

  const handleAddGoal = () => {
    const newGoal: CourseGoalProps = {
      title: 'Learn React + TS',
      description: 'Learn it in details',
      id: Math.random(),
    }

    setGoals((prevGoals) => {
      return [...prevGoals, newGoal]
    })
  }

  const handleDeleteGoal = (id: number) => {
    setGoals((goals) => goals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'Goals image' }}>
        <h1>Your course goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}

export default App
