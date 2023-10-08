import React from 'react'

const Textarea= ({children,...props})=> {
  return (
      <textarea className='text-sm py-2 px-8 text-gray-600  border outline-none focus:outline-none my-2 rounded' {...props}>
          {children}
      </textarea>
  )
}

export default Textarea