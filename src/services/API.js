export const getAllUsers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};

export const getUser = (userId) => {
  return fetch(`https://dummyjson.com/users/${userId}`).then((res) =>
    res.json()
  );
};
export const getUserPosts = (userId) => {
  return fetch(`https://dummyjson.com/users/${userId}/posts`).then((res) =>
    res.json()
  );
};
export const getUserTodos = (userId) => {
  return fetch(`https://dummyjson.com/users/${userId}/todos`).then((res) =>
    res.json()
  );
};
