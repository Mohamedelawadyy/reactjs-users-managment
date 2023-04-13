import "./userPage.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../services/API";

export default function UserPage() {
  const [user, setUser] = useState({});

  const { userId } = useParams();

  const getUserDetails = async () => {
    try {
      const userDetails = await getUser(userId);
      setUser(userDetails);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, [userId]);
  return (
    <div className="container">
      <h1 className="text-center"> User Details</h1>
      <div className="card">
        <img src={user.image} className="card-img-top" alt={user.firstName} />
        <div className="card-body">
          <h2 className="card-title">User Name : {user.username}</h2>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            First Name: {user.firstName}
          </h2>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            Last Name: {user.lastName}
          </h2>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            Middle Name : {user.maidenName}
          </h2>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            Email: {user.email}
          </h2>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            Phone : {user.phone}
          </h2>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            Gender: {user.gender}
          </h2>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            BirthDate: {user.birthDate}
          </h2>
          <h2 className="card-subtitle mb-2 text-body-secondary">
            University: {user.university}
          </h2>
          <p className="card-text">{}</p>
        </div>
        <div className="btns-group d-flex align-items-center gap-3">
          <Link className="btn btn-secondary" to={`posts`}>
            Get Posts
          </Link>
          <Link className="btn btn-secondary" to={`todos`}>
            Get Todos
          </Link>
        </div>
      </div>
    </div>
  );
}
