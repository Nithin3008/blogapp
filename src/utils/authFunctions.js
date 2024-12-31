import axios from "axios";

export async function signUpUser(data) {
  data = {
    ...data,
    img: "https://res.cloudinary.com/king-cloud/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1735629706/c2o17bay4dd7sffdtfou.jpg",
  };
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
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
