import React from 'react';

export default function Person({ name, image, age }) {
  return (
    <article className='person'>
      <img src={image} alt={name} className='img'/>
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  )
}