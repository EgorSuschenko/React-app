import React from 'react'
import TodoList from './Todo/TodoList';


function App() {
  const todos = [
    {id: 1, completed: false, title: 'First thing'},
    {id: 2, completed: false, title: 'Second thing'},
    {id: 3, completed: false, title: 'Third thing'}
  ]

  return (
    <div className="wrapper">
      <h1>Test React project</h1>
      <TodoList items = { todos }></TodoList>
    </div>
  );
}

export default App;
