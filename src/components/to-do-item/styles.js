const styles = {
  toDoItemContentActive: {
    marginLeft: '8px',
    fontWeight: '500',
  },
  toDoItemContentComplete: {
    marginLeft: '8px',
    fontWeight: '500',
    opacity: '.7',
    textDecoration: 'line-through',
  },
  toDoItemIconActive: {
    fontSize: '20px',
    color: 'gray',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  toDoItemIconComplete: {
    fontSize: '20px',
    color: 'green',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  deleteButton: {
    float:'right',
    cursor: 'pointer'
  }
}

export default styles
