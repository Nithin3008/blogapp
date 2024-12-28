import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import PostList from "./pages/PostList";
import Write from "./pages/Write";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import SinglePostPage from "./pages/SinglePostPage";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/posts",
          element: <PostList />,
        },
        {
          path: "/test",
          element: <SinglePostPage />,
        },
        {
          path: "/write",
          element: <Write />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
