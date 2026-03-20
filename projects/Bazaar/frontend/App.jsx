import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import { TodoItemsProvider } from "./Store/TodoItemsProvider";
import LoadItems from "./Components/LoadItems";

function App() {
  return ( 
    <>
      <center>
        <TodoItemsProvider> 
          <AppName />
          <AddTodo />
          <LoadItems/>
          <TodoItems />
        </TodoItemsProvider>
      </center>
    </>
  );  
}

export default App;
