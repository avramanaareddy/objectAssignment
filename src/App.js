import React from "react";
import "./styles.css";

export default function App() {
  const person={name:'ramana'}
  const updatedPerson=Object.assign({},person,{name:'venkata',age:40})
  return (
    <div className="App">
      <h1>Origina constant object :: {person.name}</h1>
      <h2>After new properties: {updatedPerson.name}, {updatedPerson.age}</h2>
    </div>
  );
}
