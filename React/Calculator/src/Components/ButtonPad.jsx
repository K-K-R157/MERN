import React from 'react'
import Button from './Button';

const ButtonPad = ({displayValue,setDisplayValue}) => {
    const buttonText=['1','2','+','3','4','-','5','6','*','7','8','/','0','9','.'];

    const displayResult=()=>{
        const result=eval(displayValue);
        setDisplayValue(result);
    }

    const addText=(text)=>setDisplayValue(displayValue+text);

  return (
    <div className='mx-5 mb-2 flex flex-wrap justify-center' >
        <Button text="C" onClickHandler={()=>setDisplayValue("")}/>
        {buttonText.map((text)=><Button key={text} text={text} onClickHandler={()=>addText(text)}/>)}
        <Button text="=" onClickHandler={displayResult}/>

    </div>
  )
}

export default ButtonPad;