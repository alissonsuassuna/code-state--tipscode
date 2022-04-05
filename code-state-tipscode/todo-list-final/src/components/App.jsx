import React, { useState } from "react";

function App() {

  const [contact, setContact] = useState({
    fName: '',
    lName: '',
    email: ''
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setContact((prevValue) => {
        return {
          ...prevValue,
          [name]: value
        }
    });
  };
 
  return (
    <div className="container">
      <h1>Olá {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} value={contact.fName} name="fName" placeholder="Nome"  />
        <input onChange={handleChange} value={contact.lName} name="lName"  placeholder="Sobrenome" />
        <input onChange={handleChange} value={contact.email} name="email"  placeholder="E-mail" />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
