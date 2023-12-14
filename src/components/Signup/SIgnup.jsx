import Logo from "../../../public/images/olx-logo.png";
import "./Signup.css";

import { useForm } from "react-hook-form";
import { firestore, auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { phone, name, email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        await updateProfile(auth.currentUser, { displayName: name });
        addDoc(collection(firestore, "users"), {
          id: result.user.uid,
          name: name,
          phone: phone,
        }).then(() => {
          navigate("/login");
        });
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  };

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
            defaultValue=""
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
            defaultValue=""
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
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
}
