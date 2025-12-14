import './Button.css';

// const Button=()=>{
//     return  <button className='button'>Click Me</button>;
// }

// export default Button;


// export function DangerButton(){
//     return  <button className='dangerButton'>Log Out</button>;
// }

// export function DeleteButton(){
//     return  <button className='deleteButton'>Delete</button>;
// }


// export function SaveButton(){
//     return  <button className='SaveButton'>Save</button>;
// }

const Button=({btnType,btnText,handler})=>{
    if(btnType=='DangerButton')
        return <button className='dangerButton' onClick={handler}>{btnText}</button>;
    else if(btnType=='DeleteButton')
        return <button className='deleteButton' onClick={handler}>{btnText}</button>;
    else
        return <button className='saveButton' onClick={handler}>{btnText}</button>;
}

export default Button;