import Button from "./Button";

const AddTodo=()=>{
    const addHandler=()=>{
      console.log('trying to add items');
    }

    const texChangeHandler=(event)=>{
      console.log(event.target.value,event);
    }

    return <>
        <div className="container row-margin">
          <div className="row">
            <div className="col-6">
              <input type="text" className="form-control" placeholder="Enter Todo Here" onChange={texChangeHandler}></input>
            </div>

            <div className="col-4">
              <input type="date" className="form-control" ></input>
            </div>
            <div className="col-2">
              {/* <button type="button" className="btn btn-success">Add</button> */}
              <Button  btnType={'Success'}  btnText={'Add'} handler={addHandler}/>
            </div>
          </div>
        </div>
    </>
}

export default AddTodo;