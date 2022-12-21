import React, { useContext, useState } from "react";
import { UserContext } from "../context/userProvider";
export default function Auth(props) {
  const { signup, login } = useContext(UserContext);

  const initUserInfo = { username: "", password: "" };
  const [userInfo, setUserInfo] = useState(initUserInfo);
  const [haveAccount, setHaveAccount] = useState(true);

  const userChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const updateUserHandler = (event) => {
    event.preventDefault();
    {
      haveAccount ? login(userInfo) : signup(userInfo);
    }
  };

  const haveAccountToggler = () => {
    setHaveAccount(!haveAccount);
  };

  return (
    <div>
      <form onSubmit={updateUserHandler}>
        <label>Username</label>
        <input name="username" onChange={userChangeHandler} type="text" />
        <label>Password</label>
        <input name="password" onChange={userChangeHandler} type="password" />
        {haveAccount ? <button>Login</button> : <button>Sign Up</button>}
        {haveAccount ? (
          <section onClick={haveAccountToggler}>
            {" "}
            Don't have an account? Click Here
          </section>
        ) : (
          <section onClick={haveAccountToggler}>Go Back to Login</section>
        )}
      </form>
    </div>
  );
}
