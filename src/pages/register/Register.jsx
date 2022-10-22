import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Dambujo Social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              id=""
            />
            <input
              type="email"
              placeholder="E-mail"
              id=""
            />
            <input
              type="text"
              placeholder="Username"
              id=""
            />
            <input
              type="password"
              placeholder="Password"
              id=""
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
