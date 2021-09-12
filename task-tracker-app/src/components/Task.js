import React from 'react'

function Task({task}) {
    return (
        <div className="task">
                <h4>{task.text}</h4>
                <p>{task.date}</p>
        </div>
    )
}

export default Task
