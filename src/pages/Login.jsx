import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { loginUser } from "../utils/authFunctions";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userDetails";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [pwd, setPwd] = useState(false);
  const nav = useNavigate();
  const { setUserDetails, setToken } = useContext(userContext);

  async function onSubmit(data) {
    try {
      const userData = await loginUser(data);
      setUserDetails(userData.user);
      setToken(userData.token);
      localStorage.setItem("authToken", userData.token);
      nav("/");
    } catch (error) {
      console.log(error);
    }
    reset();
  }

  async function testLogin() {
    try {
      const data = {
        email: import.meta.env.VITE_USERNAME,
        password: import.meta.env.VITE_PASSWORD,
      };
      console.log(data);
      const userData = await loginUser(data);
      setUserDetails(userData.user);
      setToken(userData.token);
      localStorage.setItem("authToken", userData.token);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-[calc(80vh-40px)] flex flex-col justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 mx-auto rounded-lg p-4 lg:w-[45%] flex flex-col gap-4 justify-center items-center drop-shadow-md"
      >
        <h1 className="lg:text-2xl font-semibold">Sign in to Blog App</h1>
        <h3 className="text:xs lg:text-lg text-gray-600">
          Welcome back! Please sign in to continue
        </h3>
        <input
          {...register("email")}
          placeholder="email"
          className="bg-gray-200 p-2 rounded-lg"
        />

        <label className="bg-gray-200 p-2 rounded-lg">
          <input
            {...register("password")}
            type={pwd ? "password" : "text"}
            placeholder="password"
            className="bg-gray-200 outline-none"
          />
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => setPwd(!pwd)}
            className="cursor:pointer"
          />
        </label>
        <div className="space-x-5">
          <button
            type="submit"
            className="w-fit bg-black text-white p-2 rounded-lg"
          >
            Continue
          </button>
          <button
            onClick={() => testLogin()}
            type="button"
            className="w-fit bg-black text-white p-2 rounded-lg"
          >
            Test Cred
          </button>
        </div>
        <p>
          Didn't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </form>
      <hr />
    </div>
  );
}

export default Login;
