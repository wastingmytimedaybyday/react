import './App.css';
import Person from './Person/Person.js';

const personnel = [
    {name:"Matt", age:24},
    {name:"Death", age:30},
    {name:"Numero", age:34},
]

const App = () => {
  return (
    <div className="App">
      <Person name={personnel[0].name} age={personnel[0].age} />
      <Person name={personnel[1].name} age={personnel[1].age} />
      <Person name={personnel[2].name} age={personnel[2].age} />
    </div>
    
  );
}
export default App;

