import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Button from './components/Button'
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentList'
import Title from './components/Title'


function App() {

  const students=['sujoy', 'rahul','alok','neeraj','deepak','gautam'];

  const newStudents=['mango', 'apple','fruit','banana','orange','guava'];
  
  const dangerHandler=()=>{
    console.log('Danger Clicked');
  }

  const deleteHandler=()=>{
    console.log('Delete Clicked');
  }

  const saveHandler=()=>{
    console.log('Save Clicked');
  }



  return (
    <>
      <Heading/>

      <Title titleText="Naming"/>
      <Title titleText="Flamingo"/>
      <Title titleText="Development"/>
      <Title titleText="Destruction"/>
      <Paragraph/>
      {/* <DangerButton/>
      <DeleteButton/>
      <SaveButton/> */}

      <Button btnType='DangerButton' btnText='Log Out' handler={dangerHandler}/>
      <Button btnType='DeleteButton' btnText='Delete' handler={deleteHandler}/>
      <Button btnText='Save' handler={saveHandler}/>


      <DynamicComponent/>
      <StudentList students={students}/>
      <StudentList students={newStudents}/>
    </>
  )
}

export default App
