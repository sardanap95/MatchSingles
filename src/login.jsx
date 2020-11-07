import React from "react";
import loginImg from "./final.png";
// export class Login extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
const Login = (props) => (
  <div className="base-container" ref={props.containerRef}>
    <div className="content">
      <div className="image">
        <img src={loginImg} alt="test"/>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn">
        Login
      </button>
    </div>
  </div>
);
export default Login;