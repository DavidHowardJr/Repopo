import { useState } from 'react'

function App() {

  const [todo, setTodo] = useState('')

  return(
    <div className='bg-gray-200 w-full h-screen flex items-center'>

      <div className='w-[500px] mx-auto text-center bg-white p-5'>
        <h1 className='text-5xl font-bold mb-8'>Todo List</h1>
        <form>
          <input className='border-2 border-black w-full p-3 placeholder:text-gray-500' type="text" />
          <button>Add Todo</button>
        </form>
        <div>
          <ul>
            <li>Single Todo</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
