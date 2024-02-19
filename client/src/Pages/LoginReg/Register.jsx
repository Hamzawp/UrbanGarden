import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/apiCalls";

const Register = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    city: undefined,
    country: undefined,
    phone: undefined,
    password: undefined,
    isAdmin: false,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleChange1 = (e) => {
    const { id, value, checked } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: id === "isAdmin" ? checked : value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, credentials);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (location) {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${location.lat}&lon=${location.lng}&format=jsonv2`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.address.city) {
            credentials.city = data.address.city;
            credentials.country = data.address.country;
          } else if (data.address.town) {
            credentials.city = data.address.town;
            credentials.country = data.address.country;
          } else if (data.address.village) {
            credentials.city = data.address.village;
            credentials.country = data.address.country;
          } else if (data.address.county) {
            credentials.city = data.address.county;
            credentials.country = data.address.country;
          } else {
            credentials.city = data.display_name;
            credentials.country = data.address.country;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location]);

  return (
    <div className="RegisterDiv">
      <div className="register">
        <div className="image">
          <img
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696405394-plant-pot-stand-651d1780a4081.png?crop=1.00xw:0.856xh;0,0.0792xh&resize=980:*"
            alt=""
          />
        </div>
        <div className="details">
          <h1 className="title">Sign Up</h1>
          <div className="input">
            <label htmlFor="">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">Phone No</label>
            <input
              type="number"
              id="phone"
              placeholder="Enter your number"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="NurseryOwnerChk">
            <p>
              <input type="checkbox" id="isAdmin" onChange={handleChange1} />
              Are You a Nursery Owner?
            </p>
          </div>
          <button className="register-button" onClick={handleClick}>
            Sign Up
          </button>
          <Link to={"/login"}>
            <span className="signup">Already have an account? SignIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
