import { useState } from "react";
import "./Usercard.css";

// eslint-disable-next-line react/prop-types
export default function Usercard({ user, logout }) {
  const [isShowing, setShowing] = useState(false);
  const handleShow = () => {
    setShowing((prev) => (prev = !prev));
  };

  return (
    <>
      {user && (
        <img
          onClick={handleShow}
          className="user--prof"
          src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png"
          alt=""
        />
      )}
      {isShowing && (
        <>
          <div className="user-profile">
            <ul>
              <li className="user_details">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png"
                  alt=""
                  className="profile-img"
                />
                {/* eslint-disable-next-line react/prop-types */}
                <h3>{user.displayName}</h3>
              </li>
              <li>
                <span className="view-and-edit-profile">
                  View and edit profile
                </span>
              </li>
              <hr />
              <li>My ADS</li>
              <li>Buy Business Packages</li>
              <li>Bought Packages and Billing</li>
              <hr />
              <li>help</li>
              <li>Settings</li>
              <hr />
              <li onClick={logout}>Logout</li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
