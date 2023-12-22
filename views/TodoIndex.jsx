const { useState, useEffect } = React
const { useSelector, useDispatch } = ReactRedux

import { todoService } from '../services/todo.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { SET_TODOS } from '../store/store.js'

export function Todoindex() {
  const dispatch = useDispatch()
  // const [todos, setTodos] = useState(null)
  const todos = useSelector((storeState) => storeState.todos)
  console.log('todos:', todos)
  // const cart = useSelector((storeState) => storeState.shoppingCart)

  useEffect(() => {
    console.log('load todos')
    todoService
      .query()
      .then((todos) => dispatch({ type: SET_TODOS, todos }))
      .catch((err) => console.log('err:', err))

    return () => {
      console.log('end!')
    }
  }, [])

  if (!todos) return <div>loading...</div>
  return (
    <section className='todo-index todo-main-layout'>
      <h1>im index</h1>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <li className='todo-preview' key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.mission}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
