import { ListItems } from "@/types/types"

export const CourseListItem = ({id, item}: ListItems) => {
  return (
    <li key={id}>{item}</li>
  )
}
