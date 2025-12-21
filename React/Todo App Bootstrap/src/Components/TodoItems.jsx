import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoItemContext from "../Store/TodoItemsProvider";

const TodoItems = () => {
  const { items} = useContext(TodoItemContext);
  return (
    <>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoText={item.todoText}
          todoDate={item.todoDate}
        />
      ))}
    </>
  );
};

export default TodoItems;
