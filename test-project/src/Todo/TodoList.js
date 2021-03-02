import React from 'react';
import TodoItem from './TodoItem';

const styles = {
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none',

  }
}

function TodoList (props) {
  return (
    <ul style = { styles.ul }>
      { props.items.map( (todo, index) => {
        return <TodoItem todo = { todo } key = { todo.id } index = { index } ></TodoItem>
      })}
    </ul>
  );
}

export default TodoList;
