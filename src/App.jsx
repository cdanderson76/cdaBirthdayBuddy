import './index.css';
import { useState } from 'react';
import data from './data';
import List from './components/List';

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
};
