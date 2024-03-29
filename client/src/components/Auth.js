import React, { useContext, useState } from "react";
import { UserContext } from "../context/userProvider";
export default function Auth(props) {
  const { loading, signup, login, loginError, resetError } = useContext(UserContext);

  const initUserInfo = { username: "", password: "" };
  const [userInfo, setUserInfo] = useState(initUserInfo);
  const [haveAccount, setHaveAccount] = useState(true);

  const userChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };


  const updateUserHandler = (event) => {
    event.preventDefault()    
      haveAccount ? login(userInfo) : signup(userInfo);
    
 
  };

  const haveAccountToggler = () => {
    setHaveAccount(!haveAccount);
    resetError()
  };

  return (
    <div className="auth-main-div">
    
     <h1>Track My Dog</h1> 
     {loading && <div>Loading</div>}
      { !loading && <form className="auth-form" onSubmit={updateUserHandler}>
        <label>Username</label>
        <input name="username" onChange={userChangeHandler} type="text" />
        <label>Password</label>
        <input name="password"  onChange={userChangeHandler} autoComplete="on" type="password" />
        {haveAccount ? <button>Login</button> : <button>Sign Up</button>}
        {haveAccount ? <div>
        <section className="login-error">{loginError}</section>
          <section className="no-account-text" onClick={haveAccountToggler}>
           
            Don't have an account? Click Here
          </section>
          </div>
         : 
         <div>
            <section className="login-error">{loginError}</section>
          <section className="go-back-text" onClick={haveAccountToggler}>Go Back to Login</section>
          </div>
        }
      </form>}
    </div>
  );
}
