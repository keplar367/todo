import React, { useState, useEffect } from 'react'
import css from '../App.css'

export default function TodoList() {
    const [tasks,setTasks] = useState([
        {id:1, task:"Buy 1kg Tomato", completed: false},
        {id:2, task:"Buy 2kg Onion", completed: false},
        {id:3, task:"Visit friend", completed: false},
        {id:4, task:"Clean House", completed: false},
        {id:5, task:"Washing Clothes", completed: true},
        {id:6, task:"Play Cricket", completed: true},
        {id:7, task:"1 km Walking", completed: true},
        {id:8, task:"Do Homework", completed: true},
    ]);

    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim() !== '') {
            const newTask = {
                id: tasks.length+1,
                task: input,
                completed: false,
            }

            setTasks([...tasks, newTask]);
            setInput('');
        }
    };


    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const updateTask = (id) => {
        const updatedTasks = tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);
        setTasks(updatedTasks);
    };

    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
      };


    return (
        <>
            <h1>Todo List</h1>
            <h3>Things to be done</h3>
            <div className="completed">
                <div className="top">
                    <ul>
                        {tasks.filter((item) => !item.completed).map((item, id) => (
                            <li key={item.id}>
                                <div className="left">
                                    <input type="checkbox" checked={item.completed} onChange={() => toggleTaskCompletion(item.id)} />
                                    {item.id}, {item.task}
                                </div>
                                <div className="right">
                                    <button className="delete" onClick={() => deleteTask(item.id)}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bottom">
                    <div class="input-container">
                        <input type="text" placeholder="Type new task..."  value={input} onChange={(e) => {setInput(e.target.value)}} />
                    </div>   
                    <button className="addnew" onClick={addTask}>Add New</button>
                </div>
            </div>
            <h3>Completed</h3>
            <div className="incomplete">
                <ul>
                    {tasks.filter((item) => item.completed).map((item, id) => (
                        <li key={item.id}>
                            <div className="left">
                                <input type="checkbox" checked={item.completed} onChange={() => toggleTaskCompletion(item.id)} />
                                <span style={{ color: item.completed ? 'green' : 'inherit' }}>
                                    {item.id}, {item.task}
                                </span>
                            </div>
                            <div className="right">
                                <button className="revert" onClick={() => updateTask(item.id)}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                <button className="delete" onClick={() => deleteTask(item.id)}>&nbsp;&nbsp;&nbsp;&nbsp;</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
