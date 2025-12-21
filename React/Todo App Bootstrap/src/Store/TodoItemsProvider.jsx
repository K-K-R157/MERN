import { createContext, useState } from 'react'
import initialItems from '../data/initialTodoIiems'

const TodoItemContext=createContext();


export const TodoItemsProvider = ({children}) => {
    const [items,setItems]=useState(initialItems);

    const addItems=(todoText,todoDate)=>{
      setItems([...items,{id:todoText,todoText:todoText,todoDate:todoDate}]);

    }

    const deleteItem=(id)=>{
        setItems([...items.filter(item=>item.id!==id)]);
    }
  return (
    <TodoItemContext.Provider value={{items:items , addItems:addItems , deleteItem:deleteItem}}>
        {children}
    </TodoItemContext.Provider>
  )
}

export default TodoItemContext;