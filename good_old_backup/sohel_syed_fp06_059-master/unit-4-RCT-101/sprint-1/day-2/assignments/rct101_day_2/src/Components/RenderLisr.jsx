import React from 'react'

const RenderLisr = ({items}) => {
  return (
    <div>
      {items.map((ele) => (
        <li>{ele}</li>
      ))}
    </div>
  )
}

export default RenderLisr