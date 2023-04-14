import React, { useEffect, useState } from "react";
import "./homePage.css";
import TableTd from "../components/TableTd";
import { getAllUsers } from "../services/API";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleUsersDetails = (userId) => {
    console.log(userId);
    // window.location.pathname = `users/${userId}`;
  };

  const usersList = users.map((user) => (
    <tr key={user.id} onClick={() => handleUsersDetails(user.id)}>
      <TableTd user={user} />
    </tr>
  ));

  function throttle(func, delay) {
    let timerId;
    return function (...args) {
      if (!timerId) {
        timerId = setTimeout(() => {
          func.apply(this, args);
          timerId = null;
        }, delay);
      }
    };
  }

  const throttledChangeData = throttle((e) => {
    let inputVl = e.target.value;
    const url = new URL("https://dummyjson.com/users/search?");
    const params = new URLSearchParams();
    params.append("q", inputVl);
    url.search = params.toString();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.users);
        setUsers(data.users);
        // handle response data here
      })
      .catch((error) => {
        // handle error here
        console.log(error);
      });
  }, 1000);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Users table</h1>
            <div className="fillter-input d-flex align-items-center justify-content-center">
              <input
                className="form-control mb-3 w-50"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={throttledChangeData}
              />
            </div>
            <table id="users">
              <thead>
                <tr>
                  <th>Users Name</th>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>gender</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>{usersList}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
