import React, { useState } from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: '',
    lName: ''
  });
 

  function handleChange(event){
   
    const {value, name} = event.target;

    setFullName(prevValue => {
      
        if(event.target.name === 'fName') {
          return {
            fName: value,
            lName: prevValue.lName
          }
        } else if (name === 'lName') {
          return {
            fName: prevValue.fName,
            lName: value
          };
        }
    });
  };

  return (
    <div className="container">
      <h1>Olá {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
          name="fName" 
          onChange={handleChange} 
          placeholder="Nome" 
          value={fullName.fName} 
        />

        <input 
          name="lName" 
          onChange={handleChange} 
          placeholder="Sobrenome" 
          value={fullName.lName} 
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
