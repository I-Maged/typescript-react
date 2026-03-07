import CourseGoal from './CourseGoal'
import { type CourseGoalProps } from '../App'
import type { FC } from 'react'

type CourseGoalListProps = { goals: CourseGoalProps[] }

const CourseGoalList: FC<CourseGoalListProps> = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  )
}

export default CourseGoalList
