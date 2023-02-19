import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';

function getRandomAnimal() {
  const animals = ['bird','cat','cow','dog','gator','horse'];

  return animals[Math.floor(Math.random()*animals.length)];
}
function App() {

  const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }
  const handleClick2 = () => {
    setAnimals([]);
  }

  const renderedAnimals = animals.map((animal,index) => {
    return <AnimalShow type={animal} key={index} />
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderedAnimals}</div>
      <button onClick={handleClick2}>Reset</button>
    </div>
  );
}

export default App;
