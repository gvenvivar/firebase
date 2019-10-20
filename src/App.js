import React, { useState } from 'react';
import './App.css';
// import FirebaseContext from './firebase/context.js';
import AddnewDish from './components/addDishForm'
import MenuList from './components/menuList'
import AuntBlock from './components/auntBlock'
import firebase from './firebase/firebase.js';

function App() {
  const [user, setUser] = useState(false);
  console.log(user);

  const changeUser = (user)=>{
    setUser(user);
  }

  const signOut = (e)=>{
    e.preventDefault();
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      setUser(false);
      console.log('signOut successful')
    }).catch(function(error) {
      // An error happened.

      console.log(console.error())
    });
  }

  return (
    <div className="App">
      <h2>Test</h2>
      {user
        ?<div><p>{user}</p><button onClick={signOut}>Sign Out</button></div>
        :<AuntBlock changeUser={changeUser}/>}
      <AddnewDish />
      <MenuList />
    </div>
  );
}

export default App;
