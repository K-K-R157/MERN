import Button from "./Button";

const TodoItem=({id,todoText,todoDate})=>{
  const deleteHandler=(event)=>{
    // console.log(event);
    console.log(`trying to delete  todo text :${todoText} with id :${id} `);
  }

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
                <Button btnType={'Danger'}  btnText={'Delete'} handler={deleteHandler}/>
              </div>
            </div>
        </div>
    </>
}

export default TodoItem;