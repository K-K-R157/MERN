import { act, createContext, useState } from 'react'
import initialItems from '../data/initialTodoIiems'
import { useReducer } from 'react';

const TodoItemContext=createContext();

const todoItemsReducer=(currentItems,action)=>{
  const newItems=currentItems;
  switch(action.type){
    case 'Add_Item':{
      const {todoText,todoDate}=action.payload;
      newItems=[...items,{id:todoText,todoText:todoText,todoDate:todoDate}];
      break;
    }
    case 'Delete_Item':{
      const {id}=action.payload;
      newItems=[...items.filter(item=>item.id!==id)];
      break;
    }
  }

  return newItems;
}

export const TodoItemsProvider = ({children}) => {
    // const [items,setItems]=useState(initialItems);
    const [items,dispatch]=useReducer(todoItemsReducer,initialItems);

    const addItems=(todoText,todoDate)=>{
      // setItems([...items,{id:todoText,todoText:todoText,todoDate:todoDate}]);

      dispatch(
        {
          type:'Add_Item',
          payload:{todoText,todoDate}
        }
      )

    }

    const deleteItem=(id)=>{
        // setItems([...items.filter(item=>item.id!==id)]);
        dispatch({
          type: "Delete_Item",
          payload: {id},
        });
    }
  return (
    <TodoItemContext.Provider value={{items:items , addItems:addItems , deleteItem:deleteItem}}>
        {children}
    </TodoItemContext.Provider>
  )
}  

export default TodoItemContext;