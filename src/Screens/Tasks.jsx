import React from 'react'
import TaskList from '../Components/TaskList'
import '../../design/Screens/Tasks.scss'

function Tasks({theme}) {
  return (
    <div className="tasks">
        <div className="tasks_goBack">
            <button className={'tasks_goBack__button tasks_goBack__button--' + theme}>Go Back</button>
        </div>
        <div className={"tasks_timer tasks_timer--" + theme}>
            <p className='tasks_timer__clock'>
                11<span className="tasks_timer__next">mins</span>
            </p>
        </div>
        <div className="tasks_main">
            {/* Figure out how to vertically slide this sht */}
            <TaskList title={"Work Tasks"} theme={theme}/>
            <TaskList  title={"Rest Tasks"} theme={theme}/>
        </div>
        <div className="tasks__input">

        </div>
    </div>
  )
}

export default Tasks