import React, { useEffect, useState } from "react";
// import { getUserTodos } from "../services/API";
import { useParams } from "react-router-dom";

export default function UserTodos() {
  const [todos, setTodos] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  }, [userId]);

  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <div className="card mb-3 text-center" key={todo.id}>
          <h5 className="mb-3 mt-4">{todo.todo}</h5>
          <p>User Id: {todo.userId}</p>
        </div>
      ))}
    </div>
  );
}
