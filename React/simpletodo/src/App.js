import React, { useState } from 'react'
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userInput !== '') {
      setTodos(todos.concat(userInput))
      setUserInput('')
    }
  }
  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input placeholder="type here" type="text" className="form-control" value={userInput} onChange={handleChange} />
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary">Add Todo</button>
          </div>
        </div>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
