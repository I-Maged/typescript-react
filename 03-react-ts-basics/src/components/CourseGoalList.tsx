import CourseGoal from './CourseGoal'
import { type CourseGoalProps } from '../App'
import type { FC } from 'react'

type CourseGoalListProps = {
  goals: CourseGoalProps[]
  onDeleteGoal: (id: number) => void
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  )
}

export default CourseGoalList
