import React, { useState } from 'react'
import CreateToDo from '../create-to-do'
import ToDoItem from '../to-do-item'
import styles from './styles'

const data = [
  { id: '1', title: 'First item', created: '', status: false },
  { id: '2', title: 'Second item', created: '', status: true }
]

const ToDoList = () => {
  const [toDoData, setToDoData] = useState(data)

  const addToDo = ({ title, status }) => {
    const newToDoItem = {
      id: toDoData.length + 1,
      title,
      status,
      created: Date.now()
    }
    setToDoData([...toDoData, newToDoItem])
  }

  const deleteToDo = id => {
    const newTodoData = toDoData?.filter(x => x.id !== id)
    setToDoData([...newTodoData])
  }

  const handleCheck = ({ item }) => {
    const filteredData = toDoData?.filter(x => x.id !== item.id)
    setToDoData([...filteredData, { ...item, status: !item.status }])
  }

  return (
    <div>
      <CreateToDo addToDo={addToDo} />

      {toDoData?.length > 0 && (
        <div style={styles.toDoListContainer}>
          <div className='card'>
            <div className='card-header'>To Do List</div>
            <ul className='list-group list-group-flush'>
              {toDoData?.map(x => {
                return (
                  <ToDoItem
                    key={x.id}
                    item={x}
                    deleteToDo={deleteToDo}
                    handleCheck={handleCheck}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default ToDoList
