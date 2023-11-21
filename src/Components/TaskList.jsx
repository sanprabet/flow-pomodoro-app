import React from 'react'
import '../../design/Components/TaskList.scss'

function Task() {
  return (
    <div></div>
  )
}

function TaskList({title, theme}) {
  return (
    <div className="task">
      <div className={"task__title task__title--" + theme}>{title}</div>
      <div className="task__tasks">
        <Task />
      </div>
    </div>
  )
}

export default TaskList