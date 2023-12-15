import "./Create.css";
import Header from "../Header/Header";
import { useContext, useState } from "react";
import { FirebaseContext, AuthContext } from "../../store/FirebaseContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [prdName, setPrdName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState();
  const date = new Date();
  const navigate = useNavigate();

  const { firestore, storage } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageRef = ref(storage, `/images/${image.name}`);
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef).then((url) => {
        addDoc(collection(firestore, "products"), {
          userId: user.uid,
          prdName,
          category,
          price,
          url,
          createdAt: date.toDateString(),
        }).then(() => {
          navigate("/");
        });
      });
    });
  };
  return (
    <>
      <Header />
      <div className="centerDiv">
        <label htmlFor="fname">Name</label>
        <br />
        <input
          className="input"
          type="text"
          id="fname"
          name="Name"
          onChange={(e) => {
            setPrdName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="fname">Category</label>
        <br />
        <input
          className="input"
          type="text"
          id="fname"
          name="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <br />
        <label htmlFor="fname">Price</label>
        <br />
        <input
          className="input"
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          id="fname"
          name="Price"
        />
        <br />

        <br />
        <img
          alt="Posts"
          width="200px"
          src={image ? URL.createObjectURL(image) : ""}
        ></img>

        <br />
        <input
          type="file"
          accept=".jpeg, .svg, .png, .jpg"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button onClick={handleSubmit} type="submit" className="uploadBtn">
          upload and Submit
        </button>
      </div>
    </>
  );
};

export default Create;
