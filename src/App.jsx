import { useState } from 'react'
import './App.css'

function App() {
  const [newTask , setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  function onWriteTask (event) {
    setNewTask(event.target.value);
  }

  function addTask () {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }
  
  return (
    <>
      <div className='container'>
        <h1>Gerenciador de Tarefas</h1>

        <input type="text" id='input-task' placeholder='Adicione a tarefa' value={newTask} onChange={onWriteTask} />

        <button id='add-task-button' onClick={addTask}>Adicionar Tarefa</button>
        
        <ul className='card' id='task-list'>
          {tasks.map((tasks, index) => (
            <li key={index}>{tasks}</li>
          ))}
          
        </ul>
      </div>
    </>
  )
}

export default App
