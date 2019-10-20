import React, {useState} from 'react';
import firebase from '../firebase/firebase.js';

const SignUp = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');

  const isPassEqual = ()=> {
    if(password === repeatPass){
      return true;
    }
    return false;
  }

  const register = (e)=>{
    e.preventDefault();
    if(isPassEqual()){
      firebase
      .auth()
      .createUserWithEmailAndPassword(login, password)
      .then(authUser => {
        setLogin('')
        setPassword('')
        setRepeatPass('');
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  return (
    <div className='login'>
      <form onSubmit={register}>
        <label>Login</label>
        <input name='login' value={login} type='email' onChange={(e)=> setLogin(e.currentTarget.value)} />
        <label>Password</label>
        <input name='pass' value={password} type='password' onChange={(e)=> setPassword(e.currentTarget.value)}/>
        <label>Repeat psw</label>
        <input name='repeat_psw' value={repeatPass} type='password' onChange={(e)=> setRepeatPass(e.currentTarget.value)}/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default SignUp;
