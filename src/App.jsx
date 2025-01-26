import './index.css';
import { useState } from 'react';
import data from './data';

export default function App() {

  const [ clear, setClear ] = useState(data);

  function clearList() {
    setClear([]);
  }

  return (
    <section className="container">
      <h3>{clear.length} Birthdays Today</h3>
      <List clear={clear}/>
      <button className="btn btn-block" onClick={clearList}>Clear All</button>
    </section>
  );
}

function List({clear}) {

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

function Person({ name, image, age }) {
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
