import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { uploadImage } from "../utils/otherFunc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Write() {
  const { register, control, handleSubmit, reset } = useForm();

  const nav = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = localStorage.getItem("authToken");

      return axios.post("http://localhost:3000/posts", newPost, {
        headers: {
          Authorization: token,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post created");
      nav(`/${res.data.slug}`);
    },
  });

  async function onSubmit(data) {
    const plainText = data.content.replace(/<[^>]+>/g, "");
    const img = data.img.length > 0 ? await uploadImage(data.img[0]) : null;
    console.log(data.img);
    data = { ...data, content: plainText, img };
    mutation.mutate(data);
    reset();
  }

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-40px)]">
      <h1 className="text-xl">Create a New Post</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-1  gap-3 py-1"
      >
        <div>
          <span>Add a cover page</span>
          <span>
            <FontAwesomeIcon icon={faImage} style={{ color: "#fff" }} />
            <input type="file" {...register("img")} />
          </span>
        </div>
        <input
          placeholder="Blog title"
          className="bg-transparent text-3xl"
          {...register("title")}
        />
        <div className="space-x-2">
          <label className="text-sm">Choose a Category</label>
          <select
            className="p-2 rounded-xl bg-white shadow-md outline-none"
            {...register("category")}
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          placeholder="A short Description"
          className="bg-white rounded-xl p-1 outline-none"
          {...register("description")}
        />
        <Controller
          name="content"
          control={control}
          render={({ field: { onChange, value } }) => (
            <ReactQuill
              theme="snow"
              className="bg-white flex-1 rounded-lg"
              value={value} // Bind the value from react-hook-form
              onChange={onChange} // Update the form state on change
            />
          )}
        />

        <button
          type="submit"
          disabled={mutation.isPending}
          className="disable:bg-blue-300 disabled:cursor-not-allowed mt-8 cursor:pointer bg-blue-600 text-md text-white p-1 w-fit rounded-lg"
        >
          {mutation.isPending ? "Loading" : "Send"}
        </button>
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
}

export default Write;
