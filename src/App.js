import { Renders } from './components/Render';
import './App.css';
import { UserText } from './components/Input';
import { useState } from 'react';

const name = {0:"low", 1:"mormal"}

function App() {
    const [task, setTask] = useState([])

    function addTask (userInput) {
      if(userInput) {
        const newTask = {
          id: Math.random().toString(36).substr(2,9),
          task: userInput,
          priority: 0
        }
        setTask([...task, newTask])
      }
    }

  

    const removeTask = (id) => {
      setTask([...task.filter((newTask) => newTask.id !== id)])
    }

  return (
    <div className="App">
      <a>Task Manager {task.length}</a>
      <UserText addTask={addTask} />
      {task.map(t =>(
        <div className='lol'>
          <div className='lo, col' >{t.task}</div>
          <button className='lo'>{name[t.priority]}</button>
          <button className='lo' onClick={ () => removeTask(t.id)}>удалать</button>
        </div>  
      ))}
      
     
    </div>
  );
}
export default App;