import RootLayout from "../layouts/RootLayout";
import AddUsers from "../pages/AddUsers";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import UserPosts from "../pages/UserPosts";
import UserTodos from "../pages/UserTodos";
export const rootRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "addUsers",
        element: <AddUsers />,
      },
      {
        path: "users/:userId",
        element: <UserPage />,
      },
      {
        path: "users/:userId/posts",
        element: <UserPosts />,
      },
      {
        path: "users/:userId/todos",
        element: <UserTodos />,
      },
    ],
  },
];
