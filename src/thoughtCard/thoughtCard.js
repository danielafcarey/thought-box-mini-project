import React from 'react';

export const ThoughtCard = ({ title, body }) => {
  return (
    <div>
      <h3>{ title }</h3> 
      <p>{ body }</p>
    </div>
  )
}
