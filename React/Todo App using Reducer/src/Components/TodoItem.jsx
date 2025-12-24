import Button from "./Button";
import { useContext } from "react";
import TodoItemContext from "../Store/TodoItemsProvider";


const TodoItem=({id,todoText,todoDate})=>{

  const { deleteItem} = useContext(TodoItemContext);

    return <>
        <div className="container row-margin">
            <div className="row">
              <div className="col-6 text-truncate">
                  {todoText}
              </div>
 
              <div className="col-4">
                {todoDate}
              </div>
              <div className="col-2">
                {/* <button type="button" className="btn btn-danger">delete</button> */}
                <Button btnType={'Danger'}  btnText={'Delete'} handler={()=>deleteItem(id)}/>
              </div>
            </div>
        </div>
    </>  
}

export default TodoItem;