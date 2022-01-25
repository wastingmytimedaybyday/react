import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <p className='punainen'>Nimi on {props.name}, ikä on {props.age}.</p>
    </div>
  );
}
export default Person;
