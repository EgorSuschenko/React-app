import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  }

}

function AddTodo( {onCreate}) {
  const input = useInputValue('');

  const styles = {
    form: {
      margin: '1rem',
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    if(input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form style = { styles.form } onSubmit = {submitHandler}>
      <input {...input.bind}></input>
      <button type = 'submit'>Add new point</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default AddTodo
