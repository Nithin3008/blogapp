export async function uploadImage(imageData) {
  if (imageData) {
    const file = imageData;
    const present_key = "social_media_proj";
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", present_key);
    formData.append("cloud_name", "king-cloud");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/king-cloud/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const x = await res.json();
    return x.url;
  } else {
    false;
  }
}
