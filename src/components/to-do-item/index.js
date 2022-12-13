import React from 'react'
import styles from './styles'

const CheckIcon = ({ isComplete, onCheckClick }) => {
  return (
    <i
      onClick={onCheckClick}
      style={
        isComplete ? styles.toDoItemIconComplete : styles.toDoItemIconIncomplete
      }
      className={isComplete ? 'fa fa-check-square-o' : 'fa fa-square-o'}
    ></i>
  )
}

const ToDoItem = ({ item, deleteToDo, handleCheck }) => {
  return (
    <li className='list-group-item'>
      <CheckIcon
        onCheckClick={() => handleCheck({ item })}
        isComplete={item.status}
      />
      <span style={item.status ? styles.toDoItemContentComplete : styles.toDoItemContentIncomplete}>{item.title}</span>
      <span
        style={styles.deleteButton}
        onClick={() => deleteToDo(item.id)}
        className='badge badge-danger'
      >
        Delete
      </span>
    </li>
  )
}

export default ToDoItem
