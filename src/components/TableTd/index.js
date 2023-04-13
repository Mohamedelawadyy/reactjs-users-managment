import React from "react";
import { Link } from "react-router-dom";

export default function TableTd(props) {
  const user = props.user;

  const handleDeleteUser = (id) => {
    console.log(id);
    fetch(`https://dummyjson.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const handleUpdateUser = (id) => {
    console.log(id);
  };

  return (
    <>
      <td>
        <Link to={`users/${user.id}`}>{user.username}</Link>
      </td>
      <td>
        <Link to={`users/${user.id}`}>{user.firstName}</Link>
      </td>
      <td>
        <Link to={`users/${user.id}`}>{user.lastName}</Link>
      </td>
      <td>
        <Link to={`users/${user.id}`}>{user.email}</Link>
      </td>
      <td>
        <Link to={`users/${user.id}`}>{user.phone}</Link>
      </td>
      <td>
        <Link to={`users/${user.id}`}>{user.gender}</Link>
      </td>
      <td>
        <Link to={`users/${user.id}`}>{user.age}</Link>
      </td>
      <div className="p-2">
        <button
          className="btn btn-secondary"
          onClick={() => handleDeleteUser(user.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-secondary mx-2"
          onClick={() => handleUpdateUser(user.id)}
        >
          Update
        </button>
      </div>
    </>
  );
}
