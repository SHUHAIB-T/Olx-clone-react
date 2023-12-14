import { Link } from "react-router-dom";
import Logo from "../../../public/images/olx-logo.png";
import "./Login.css";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const { email, password } = data;
    console.log(data);
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "enter a valid email",
              },
            })}
            defaultValue=""
          />
          <p className="error-message">{errors.email?.message}</p>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            {...register("password", { required: "this field is required" })}
            defaultValue=""
          />
          <p className="error-message">{errors.password?.message}</p>
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
