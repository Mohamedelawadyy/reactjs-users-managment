import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TableTd(props) {
  const user = props.user;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(user.id);
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName);
    fetch(`https://dummyjson.com/users/${user.id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        userName,
        email,
        age,
        password,
        birthDate,
        gender,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const handleDeleteUser = (id) => {
    console.log(id);
    fetch(`https://dummyjson.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
  };

  // const handleUpdateUser = (id) => {
  //   console.log(id);
  // };

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
        <Button variant="primary" onClick={() => handleShow()}>
          Update
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>update user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <InputGroup.Text>First and last name</InputGroup.Text>
                <Form.Control
                  aria-label="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Form.Control
                  aria-label="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputGroup>
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>phone Number</Form.Label>
                <Form.Control type="text" placeholder="User phone Number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="User password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>BirthDate</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="BirthDate"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </Form.Group>
              <Form.Select
                aria-label="Default select example"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Button
                className="mx-2"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Update
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
