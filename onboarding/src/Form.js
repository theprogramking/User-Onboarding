import React from "react";

function Form({ data, updateFormData }) {
    
    const changeHandler = event => {
        updateFormData(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
    <form>
      <label htmlFor="emailInput">
        Name
        <input id="emailInput" type="email" name="email" placeholder="Email" onChange={evt => changeHandler()} />
      </label>
      <label htmlFor="passwordInput">
        Password
        <input id="passwordInput" type="password" name="password" placeholder="Password" onChange={evt => changeHandler()}/>
      </label>
      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input id="termsInput" type="checkbox" name="terms" onChange={evt => changeHandler()} />
      </label>
      <button onClick={() => handleSubmit()}>Submit!</button>
    </form>
    );
}

export default Form;