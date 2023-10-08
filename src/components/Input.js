import React from 'react'

function Input({children,...props}) {
  return (
      <input className='text-sm py-2 px-8 text-gray-600 border outline-none my-2 rounded' {...props}>
          {children}
      </input>
  )
}

export default Input