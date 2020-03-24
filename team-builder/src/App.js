import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";

const initialUsers = [
  {userName: "Rodrigo", userEmail: "rodrigo@rodrigo.com", userRole: "FrontEnd"},
  {userName: "Tommy", userEmail: "tommy@tommy.com", userRole: "Team Lead"},
]

function App() {
  const [user, setUser] = useState(initialUsers)
  const [formValues, setFormValues] = useState({ userName: "", userEmail: "", userRole: "" });

  const onInputChange = event => {
    const changedInput = event.target.name;
    const changedValue = event.target.value;

    setFormValues({
      ...formValues,
      [changedInput]: changedValue,
    })
  }

  const onFormSubmit = event => {
    event.preventDefault();

    const newUser = {
      userName: formValues.userName,
      userEmail: formValues.userEmail,
      userRole: formValues.userRole,
    }

    // if ((formValues.userName == Number(formValues.userName)) ||
    //     (formValues.userEmail == Number(formValues.userEmail)) ||
    //     (formValues.userRole == Number(formValues.userRole)))
    //   {
    //     return alert('No Numbers!')
    //   } else {
    //     setUser([
    //       ...user, newUser
    //     ])
    //   }
      setUser([
        ...user, newUser
      ])
  }
    


  return (
    <div className="App">
      <Form 
        formValues={formValues}
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
      />

      <h3>List of users:</h3>
      {
        user.map((user, index) => <div key={index}>{user.userName} {user.userEmail} {user.userRole}</div>)
      }

    </div>
  );
}

export default App;
