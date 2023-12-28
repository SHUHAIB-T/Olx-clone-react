import "./View.css";
import { postContext } from "../../store/PostContext";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { FirebaseContext } from "../../store/FirebaseContext";

function View() {
  const [userDetails, setUserDetails] = useState({ name: "", phone: "" });
  const { postDetails } = useContext(postContext);
  const { firestore } = useContext(FirebaseContext);

  useEffect(() => {
    const Ref = collection(firestore, "users");
    const qry = query(Ref, where("id", "==", `${postDetails.userId}`));
    getDocs(qry).then((snap) => {
      snap.forEach((data) => {
        setUserDetails({ ...data.data() });
      });
    });
  },[]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.name}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
