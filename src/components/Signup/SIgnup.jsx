import Logo from "../../../public/images/olx-logo.png";
import "./Signup.css";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FirebaseContext } from "../../store/FirebaseContext";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const firebase = useContext(FirebaseContext);
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            {...register("name", { required: "this field is required" })}
            defaultValue="John"
          />
          <p className="error-message">{errors.name?.message}</p>
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            id="fname"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "enter a valid email",
              },
            })}
            defaultValue="John"
          />
          <p className="error-message">{errors.email?.message}</p>
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            {...register(
              "phone",
              { required: "this is required" },
              {
                pattern: {
                  value: /^((\+)33|0)[1-9](\d{2}){4}$/,
                  message: "enter a valid phone number ",
                },
              }
            )}
            defaultValue="Doe"
          />
          <p className="error-message">{errors.phone?.message}</p>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            {...register("password", {
              required: "this is required",
              minLength: { value: 5, message: "minimum 5 charecters required" },
            })}
            defaultValue=""
          />
          <p className="error-message">{errors.password?.message}</p>
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
