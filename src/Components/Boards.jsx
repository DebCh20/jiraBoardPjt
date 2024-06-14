import React, { useState } from 'react'

function Boards() {
  
    const [todo, setTodo]=useState([]);
    const [progess, setProgress]=useState([]);
    const [done, setDone]=useState([]);
    const [newitem, setNewitem]=useState('');

    const addTodo=()=>{
        setTodo((prev)=>[...prev,newitem])
    }
    console.log(todo);
  return (
    <div>
        <input type='text' onChange={e=>setNewitem(e.target.value)}></input>
        <button onClick={addTodo}>Add</button>
        <div 
        style={{display:'flex', flexDirection:'row', gap:'5rem'}}>
            <div
            style={{display:'flex', flexDirection:'column', width:'30%'}}>
                <p>Todo list</p>
                <ul>
                {todo.map((item, i)=>{
                    return(
                    <li style={{color:'white'}} key={i} id={`todo_${i}`}>{item}
                    <select>
                        <option value="">...</option>
                        <option value="progress">in progress</option>
                        <option value="done">to done</option>

                    </select>
                    </li>)
                })}
                </ul>
            </div>
            <div
            style={{display:'flex', flexDirection:'column', width:'30%'}}>
                <p>In progress</p>
                <ul>
                {progess.map((item, i)=>{
                    return(
                    <li key={i} id={`todo_${i}`}>{item}
                    <button>...</button>
                    </li>)
                })}
                </ul>
            </div>
            <div
            style={{display:'flex', flexDirection:'column', width:'30%'}}>
                <p>Done</p>
                <ul>
                {done.map((item, i)=>{
                    return(
                    <li key={i} id={`todo_${i}`}>{item}
                    <button>...</button>
                    </li>)
                })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Boards