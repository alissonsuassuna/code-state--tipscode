import React, { useState } from "react";

function App() {

  const [contact, setContact] = useState({
    fName: '',
    lName: '',
    email: ''
  });
 

  return (
    <div className="container">
      <h1>Olá {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="Nome"  />
        <input name="lName"  placeholder="Sobrenome" />
        <input name="email"  placeholder="E-mail" />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
