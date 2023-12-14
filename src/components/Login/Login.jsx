import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/images/olx-logo.png";
import "./Login.css";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseContext } from "../../store/FirebaseContext";
import { useContext } from "react";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { auth } = useContext(FirebaseContext);
  const submit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCridential) => {
        console.log(userCridential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <>
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
    </>
  );
}

export default Login;
