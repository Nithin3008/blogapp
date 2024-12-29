import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import PostList from "./pages/PostList";
import Write from "./pages/Write";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import SinglePostPage from "./pages/SinglePostPage";
import AuthVerify from "./components/AuthVerify";

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
          element: (
            <AuthVerify>
              <PostList />
            </AuthVerify>
          ),
        },
        {
          path: "/:slug",
          element: (
            <AuthVerify>
              <SinglePostPage />
            </AuthVerify>
          ),
        },
        {
          path: "/write",
          element: (
            <AuthVerify>
              <Write />
            </AuthVerify>
          ),
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
