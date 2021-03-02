import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../Context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    width: '780px',
    border: '1px solid gray',
    borderRadius: '5px',
    marginBottom: '.5rem',
  },

  input: {
    marginRight: '1rem',
  },


}

function TodoItem ({ todo, index, onChange}) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push('done')
  }
  return (
    <li style = {styles.li}>
      <span className = {classes.join(' ')}>
        <input type="checkbox" checked = { todo.completed } style = {styles.input} onChange = {() => onChange(todo.id)}></input>
        <strong>{index + 1}. </strong>
        { todo.title }
      </span>
      <button className = "remove__button" onClick = {removeTodo.bind(null, todo.id)}> &times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}


export default TodoItem;
