import React, { useState } from 'react'


function AddTask({onAdd}) {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e)=>{
        e.preventDefault()

        if(!text){
            alert("Please add a task before submitting")
            return
        }

        onAdd({text,day,reminder})

        //After the submit all the feilds become default
        setText(" ")
        setDay(" ")
        setReminder(false)

    } 


    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                type="text" 
                placeholder="Add The task" 
                value={text}
                onChange={
                    (e)=> setText(e.target.value)
                }/>
            </div>
            <div className="form-control">
                <label>Date and time</label>
                <input 
                type="text" 
                placeholder="Add The Date and Time"
                value={day}
                onChange={
                    (e)=> setDay(e.target.value)
                }/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Riminder</label>
                <input 
                 type="checkbox" 
                 checked= {reminder}
                 value={reminder} 
                 onChange={
                     (e)=> setReminder(e.currentTarget.checked)
                 } />
            </div>
                
        
            <input type="submit" value="Submit" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
