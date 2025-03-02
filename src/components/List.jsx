import React from 'react';
import Person from './Person';

export default function List({clear}) {

  return (
    <section>
      {clear.map(person => {
        const { id, name, image, age } = person;
        return (
          <Person key={id}
                  name={name}
                  image={image}
                  age={age}/>
        )
      })}
    </section>
  )
}