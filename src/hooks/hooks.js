import React, { useState } from 'react';

const AddnewDishHooks = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleInputChange,
    inputs
  };
}
export default AddnewDishHooks;
