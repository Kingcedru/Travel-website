import React from 'react'

function InputFields(prop) {
  return (
    <div className='grid gap-2'>
        <label htmlFor={prop.id} className='text-white'>{prop.label}</label>
        <input type={prop.type} placeholder={prop.placeholder} id={prop.id} className='px-4 py-3 w-72 border-0 bg-transparent border-b outline-none'/>
    </div>
  )
}

export default InputFields