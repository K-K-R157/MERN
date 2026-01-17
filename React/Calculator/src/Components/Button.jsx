import React from 'react'

const Button = ({text,onClickHandler}) => {
  return (
    <button className=' bg-gray-300 hover:bg-gray-400 active:bg-gray-500 w-10 h-10 m-0.5 border border-gray-400 font-semibold rounded-sm' onClick={onClickHandler}>{text}</button>
  )
}
export default Button;