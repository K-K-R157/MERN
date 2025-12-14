import './App.css'
import AppName from './Components/AppName'
import AddTodo from './Components/AddTodo'
import TodoItems from './Components/Items'

function App() {
  
  return (
    <>
      <center>
        <AppName/>
        <AddTodo/>
        {/* <TodoItem  todoText='Add Milk' todoDate='29/08/2023'/> */}
        {/* {items.map(item=><TodoItem id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>)} */}
        <TodoItems/>
      </center>
    </>
  )
}

export default App;
