import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import { TodoItemsProvider } from "./Store/TodoItemsProvider";

function App() {
  return (
    <>
      <center>
        <TodoItemsProvider>
          <AppName />
          <AddTodo />
          {/* <TodoItem  todoText='Add Milk' todoDate='29/08/2023'/> */}
          {/* {items.map(item=><TodoItem id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>)} */}
          <TodoItems />
        </TodoItemsProvider>
      </center>
    </>
  );  
}

export default App;
