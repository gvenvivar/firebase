import React, {useState} from 'react';
import firebase from '../firebase/firebase.js';

const Login = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (e) => {
    e.preventDefault();

    firebase
    .auth()
    .signInWithEmailAndPassword(login, password)
    .then(authUser => {
      setLogin('')
      setPassword('')
      const user = firebase.auth().currentUser;
      props.changeUser(user.email);
      console.log(user.email);
    })
    .catch(error => {
      console.log(error);
    });

  }

  return (
    <div className='login'>
      <form onSubmit={loginUser}>
        <label>Login</label>
        <input name='login' value={login} type='text' onChange={(e)=> setLogin(e.currentTarget.value)} />
        <label>Password</label>
        <input name='pass' value={password} type='password' onChange={(e)=> setPassword(e.currentTarget.value)} />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login;
