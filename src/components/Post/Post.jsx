import Heart from "../../assets/Heart";
import "./Post.css";

import { useContext, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { FirebaseContext } from "../../store/FirebaseContext";
import { postContext } from "../../store/PostContext.jsx";
import { useNavigate } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();
  const { firestore } = useContext(FirebaseContext);
  const { setPostDetails } = useContext(postContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getDocs(collection(firestore, "products")).then((snapshot) => {
      const allPosts = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProducts(allPosts);
    });
  }, [firestore]);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => {
            return (
              <div
                className="card"
                key={product.id}
                onClick={() => {
                  setPostDetails(product);
                  navigate("/view");
                }}
              >
                <div className="favorite">
                  <Heart />
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
