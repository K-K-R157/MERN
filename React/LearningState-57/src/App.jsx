import List from "./Components/List";
// import { useState } from "react";

function App() {
  // Without USe State
  const studentArr = ["Nirmala", "Aman", "Akash", "Amanullah", "Abhijeet", "Gopi"];
  console.log('came to paint app components');
  console.log(studentArr);

  const onChangeHandler = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      studentArr.push(event.target.value);
      console.log(studentArr);
    }
  }

  return (
    <>
    <h1 className="text-5xl">
      Learners of MERN Stack
    </h1>
    <List list={studentArr}></List>
    <input type="text" placeholder="New Student Name" onKeyDown={onChangeHandler} />
  </>

  )
}

export default App;