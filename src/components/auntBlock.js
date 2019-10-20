import React, {useState, useRef} from "react"
import SignUp from '../components/signup'
import Login from '../components/login'

function changeActiveTab(i, setshowLogin, loginRef, signUpRef){
  const login = i.classList.contains('login');
  if(login){
    setshowLogin(true);
    signUpRef.current.classList.remove('active');
    i.classList.add('active');

  } else{
    setshowLogin(false);
    loginRef.current.classList.remove('active');
    i.classList.add('active');
  }
}

const AuntBlock = (props)=>{
  const [showLogin, setshowLogin] = useState(true);
  const loginRef = useRef();
  const signUpRef = useRef();


  return (
    <div className='auntWrap'>
      <span className='login active' ref={loginRef} onClick={(e)=>changeActiveTab(e.currentTarget, setshowLogin, loginRef, signUpRef)}>Login</span>
      <span className='signup' ref={signUpRef} onClick={(e)=>changeActiveTab(e.currentTarget, setshowLogin, loginRef, signUpRef)}>SignUp</span>
      {showLogin?<Login changeUser={props.changeUser}/>:<SignUp/>}
    </div>
  )
}

export default AuntBlock;
