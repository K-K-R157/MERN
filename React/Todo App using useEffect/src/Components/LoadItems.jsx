import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import TodoItemContext from "../Store/TodoItemsProvider";
import todoItemToClient from '../Store/todoItemToClient';
import { useEffect } from 'react';
import { useState } from 'react';


// const LoadItems = () => {
//     const {items,addAllItems}=useContext(TodoItemContext);

//     if(items.length!==0)
//             return <></>;
    
//     const loadItemsHandler=()=>{
//         fetch("http://localhost:3000/todos")
//           .then((res) => res.json())
//           .then(serverItems=>{
//             const newItems=serverItems.map(todoItemToClient);
//             addAllItems(newItems);
//           });
//     }

//   return (
//     <>
//         <h2>Enjoy Your Day</h2>
//         <Button btnText='Load Todos' handler={loadItemsHandler}/>
//     </>
//   )
// }


const LoadItems = () => {
    const {items,addAllItems}=useContext(TodoItemContext);
    const [isLoading,setIsLoading]=useState(false);

    // if(items.length!==0)
    //         return <></>;

    useEffect(() => {
      setIsLoading(true);
      fetch("http://localhost:3000/todos")
        .then((res) => res.json())
        .then((serverItems) => {
          const newItems = serverItems.map(todoItemToClient);
          addAllItems(newItems);
        })
        .finally(()=>setIsLoading(false));
    }, []);
    
    
  return (
    <>
      {/* {isLoading ? <p>Loading...</p>:<p>Enjoy your day</p>} */}

      {/* {isLoading && <p>Loading...</p>}
        {!isLoading && items.length==0 && <p>Enjoy your day</p>} */}

      {isLoading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && items.length == 0 && <p>Enjoy your day</p>}
    </>
  );
}

export default LoadItems