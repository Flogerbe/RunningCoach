import React from 'react';
import background from '../assets/static/background.png';
import '../assets/styles/Login.scss';

const Login = () => {
  return (
    <main className="Login--main">
      <section className="Login--header">
      
      </section>
      <section className="Login--options">
        <div className="SignIn">
          SIGN IN
        </div>
        <div className="SignUp">
          SIGN UP
        </div>
      </section>
      <section className="Login--formContainer">
        <form className="Login--form">
          <input type="text" name="user" id="user" placeholder="USER" />
          <input type="password" name="password" id="password" placeholder="PASSWORD" />
          <button type="submit">SIGN IN</button>
        </form>
      </section>
      <section className="SignUp--formContainer">
        <input type="text" name="user" id="user" placeholder="USER" />
        <input type="password" name="password" id="password" placeholder="PASSWORD" />
        <button type="submit">SIGN UP</button>
      </section>
    </main>
  );
}

export default Login;
