import CourseGoal from './CourseGoal'
import { type CourseGoalProps } from '../App'
import type { FC, ReactNode } from 'react'
import InfoBox from './InfoBox'

type CourseGoalListProps = {
  goals: CourseGoalProps[]
  onDeleteGoal: (id: number) => void
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  if (goals.length === 0) {
    return <InfoBox mode='hint'>Start by adding more goals</InfoBox>
  }

  let warningBox: ReactNode

  if (goals.length >= 2) {
    warningBox = (
      <InfoBox mode='warning' severity='high'>
        That's a lot of goals
      </InfoBox>
    )
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseGoalList
