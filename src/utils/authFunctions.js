import axios from "axios";

export async function signUpUser(data) {
  console.log(data);
  try {
    const response = await axios.post(
      "https://blogappbackend-wpn8.onrender.com/users/signup",
      data
    );
    return response.data.token;
  } catch (error) {
    console.log(error);
  }
}
export async function loginUser(data) {
  try {
    const response = await axios.post(
      "https://blogappbackend-wpn8.onrender.com/users/login",
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function logout() {
  localStorage.clear();
}
