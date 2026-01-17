import { act, createContext, useState } from 'react'
import initialItems from '../data/initialTodoIiems'
import { useReducer } from 'react';

const TodoItemContext=createContext();

const todoItemsReducer=(items,action)=>{
  let newItems=items;
  switch(action.type){
    case 'Add_Item':{
      // const {todoText,todoDate}=action.payload;
      // newItems=[...items,{id:todoText,todoText:todoText,todoDate:todoDate}];
      const {id,todoText,todoDate}=action.payload;
      newItems=[...items,{id,todoText:todoText,todoDate:todoDate}];
      break;
    }
    case 'Delete_Item':{
      const {id}=action.payload;
      newItems=[...items.filter(item=>item.id!==id)];
      break;
    }
    case 'AddAllItems':{
      const {items}=action.payload;
      newItems=items;
    }
    default:
      return newItems; 
  }   

  return newItems; 
}

export const TodoItemsProvider = ({children}) => {
    // const [items,setItems]=useState(initialItems);
    let [items,dispatch]=useReducer(todoItemsReducer,[]);

    // const addItems=(todoText,todoDate)=>{
    //   // setItems([...items,{id:todoText,todoText:todoText,todoDate:todoDate}]);

    //   dispatch(
    //     {
    //       type:'Add_Item',
    //       payload:{todoText,todoDate}
    //     }
    //   );
    // }

    const addItems = (id,todoText, todoDate) => {
      // setItems([...items,{id:todoText,todoText:todoText,todoDate:todoDate}]);

      dispatch({
        type: "Add_Item",
        payload: {id,todoText, todoDate },
      });
    };

    const deleteItem=(id)=>{
        // setItems([...items.filter(item=>item.id!==id)]);
        dispatch({
          type: "Delete_Item",
          payload: {id},
        });
    }

    const addAllItems=(items)=>{
        dispatch({
          type: "AddAllItems",
          payload: { items },
        });
    }
  return (
    <TodoItemContext.Provider value={{items:items , addItems:addItems , deleteItem:deleteItem , addAllItems}}>
        {children}
    </TodoItemContext.Provider>
  )
}  

export default TodoItemContext;