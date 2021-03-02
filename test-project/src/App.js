import React, { lazy, useEffect } from 'react'
import Context from './Context'

import TodoList from './Todo/TodoList';
import Loader from './Loader'

const AddTodo = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./Todo/AddTodo'))
    }, 3000)
  })
);

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);

      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(el => {
        if(el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(el => el.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        }
      ])
    )
  }

  return (
    <Context.Provider value = {{ removeTodo }}>
      <div className="wrapper">
        <h1>Test React project</h1>
        <React.Suspense fallback = {<p>Loading...</p>}>
          <AddTodo onCreate = {addTodo}></AddTodo>
        </React.Suspense>
        { loading && <Loader></Loader>}
        { todos.length ? <TodoList items = { todos } onToggle = { toggleTodo }></TodoList> : loading ? null : <p> No things to do</p> }

      </div>
    </Context.Provider>

  );
}

export default App;
