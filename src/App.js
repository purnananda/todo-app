import Header from './components/header'
import ToDoList from './components/to-do-list'

const App = () => {
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-6">
          <ToDoList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
