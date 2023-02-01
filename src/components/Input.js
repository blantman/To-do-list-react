import { useState } from 'react';
import { Tasks } from './TaskCreate';

export function UserText({addTask}) {
  const [ userInput, setUserInput ] = useState('')
  

  function handleChange (e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    addTask(userInput)
    setUserInput("")
    
  }

  return( 
    <form onSubmit={handleSubmit}>
      <input  type="text" onChange={handleChange} value={userInput}/>
      <button type="submit"> Сохранить </button>
      <select>
        <option value={0}>low</option>
        <option value={1}>medium</option>
      </select>  
    </form>
  )
}