import React from "react";

const Tervehdys = (props) => {
  return (
    <div>
      <p>Terve {props.nimi}!</p>
    </div>
  )
}

const Pvm = () => {

  const pvm = new Date()

  return (
    <div>
      <p>
      {pvm.toString()}
    </p>
    </div>
  )
}

const App = () => {
  console.log('konsoliteksti')
  const a = 5
  const b = 4
  

  return (
  <div>
    <h1 className="otsikko">Hei maailma</h1>
    <br />
    <Tervehdys nimi="Joonas"/>
    <Tervehdys nimi="Miki"/>
    <Pvm />
    <p>Lorem ipsum</p>
    <p>
      {a} + {b} = {a + b}
    </p>
    
  </div>
  )
}

export default App;
