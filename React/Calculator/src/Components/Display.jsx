import React from 'react'

const Display = ({displayValue}) => {
  return (
    <div className='bg-gray-50 my-2 mx-3 h-8 border border-gray-400 rounded-xs'>
        {displayValue ? displayValue : ""}
    </div>
  )
}

export default Display