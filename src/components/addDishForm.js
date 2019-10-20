import React, {useState} from 'react';
// import AddnewDishHooks from '../hooks/hooks.js';
import firebase from '../firebase/firebase.js';

const AddnewDish = () => {

  const [dishName, setdishName] = useState('');
  const [dishImg, setdishImg] = useState('');
  const [dishPrice, setdishPrice] = useState(0);

  // const {inputs, handleInputChange, handleSubmit} = AddnewDishHooks();

  const writeDishtoMenu = (dishName, dishImg, dishPrice) => {
    firebase.firestore().collection('menu').add({
      name: dishName,
      url: dishImg,
      price : dishPrice
    })
    .then(() => {
      setdishName('');
      setdishImg('');
      setdishPrice(0);
    });
  }

  const onSubmit = event => {
    event.preventDefault();
    writeDishtoMenu(dishName, dishImg, dishPrice);
  }

  return (<div>
    <h2>Add new dish to menu</h2>
    <form onSubmit={onSubmit}>
        <input
          name="dishName"
          value={dishName}
          onChange={e => setdishName(e.currentTarget.value)}
          type="text"
          placeholder="Dish name"
        />
        <input
          name="dishImg"
          value={dishImg}
          onChange={e => setdishImg(e.currentTarget.value)}
          type="text"
          placeholder="URL"
        />
        <input
          name="dishPrice"
          value={dishPrice}
          onChange={e => setdishPrice(e.currentTarget.value)}
          type="text"
          placeholder="0"
        />
        <button type="submit">Add new dish</button>
      </form>
  </div>)}

  export default AddnewDish;
