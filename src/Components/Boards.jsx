import React, { useEffect, useState } from 'react'

function Boards() {
  
    const [todo, setTodo]=useState([]);
    const [progess, setProgress]=useState([]);
    const [done, setDone]=useState([]);
    const [newitem, setNewitem]=useState('');
    const [option, setOption]=useState('');
    const [optionId, setOptionId]=useState('');

    const addTodo=()=>{
        let uid=self.crypto.randomUUID();
        console.log(newitem);
        let newTodo= <li style={{color:'white'}} key={uid} id={`todo_${uid}`}>
            {newitem}
        <select value={option} onChange={selectedOption} id={`todo_optionSelected_${uid}`}>            
            <option value="">...</option>
            <option value="progress" id={`todo_${uid}`}>in progress</option>
            <option value="done" id={`todo_${uid}`}>to done</option>
        </select>
        </li>;
        setTodo((prev)=>[...prev,newTodo])
    }
    useEffect(()=>{
        let id= optionId.substring(optionId.lastIndexOf('_')+1);
        console.log('option', optionId, 'id',id);

        if(optionId.includes('todo'))
        setProgress(todo.filter((item)=>{
            id===item.props.id.slice(item.props.id.lastIndexOf('_')+1)}))

       },[option])
        
    const selectedOption=(e)=>{
        setOption(e.target.value);
        setOptionId(e.target.id);
    }
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
                  {todo}
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