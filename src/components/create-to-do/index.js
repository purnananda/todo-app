import React, { useState } from 'react'
import styles from './styles'

const CreateToDo = ({ addToDo }) => {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('active')

  const handleChange = (field, value) => {
    if (field === 'title') {
      setTitle(value)
    }
    if (field === 'status') {
      setStatus(value)
    }
  }

  const onAddTask = () => {
    addToDo({ title, status: status === 'complete' ? true : false })
    setTitle('')
    setStatus('active')
  }

  const onCanceTask = () => {
    setTitle('')
    setStatus('active')
  }

  return (
    <div style={styles.addToDoContainer}>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='mb-3'>
            <label htmlFor='title' className='form-label'>
              Title
            </label>
            <input
              className='form-control'
              id='title'
              type='text'
              value={title}
              placeholder='Title'
              onChange={evt => handleChange('title', evt.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='status' className='form-label'>
              Status
            </label>
            <select
              id='status'
              className='form-control'
              value={status}
              onChange={evt => handleChange('status', evt.target.value)}
            >
              <option value='active'>Active</option>
              <option value='complete'>Completed</option>
            </select>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-md-3'>
          <button
            type='button'
            style={styles.addButton}
            className='btn btn-primary'
            onClick={onAddTask}
          >
            Add Task
          </button>
          <button
            type='button'
            style={styles.cancelButton}
            className='btn btn-secondary'
            onClick={onCanceTask}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateToDo
