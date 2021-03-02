import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

const styles = {
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    marginLeft: '1rem',

  }
}

function TodoList (props) {

  return (
    <ul style = { styles.ul }>
      { props.items.map( (todo, index) => {
        return <TodoItem todo = { todo } key = { todo.id } index = { index } onChange = { props.onToggle } ></TodoItem>
      })}
    </ul>
  );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList;
