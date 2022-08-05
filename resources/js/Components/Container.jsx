import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-screen-lg mx-auto'>{children}</div>
  )
}
