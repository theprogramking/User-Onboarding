import React, {useState} from 'react';
import logo from './logo.svg';
import Form from "/Form.js";
import './App.css';

const initValue = {
  name: "",
  email: "",
  password: "",
  tos: ""
};

const [formData, updateFormData] = useState(initValue);

function App() {
  return (
    <div className="App">
      <Form {...initValue} />
    </div>
  );
}

export default App;
