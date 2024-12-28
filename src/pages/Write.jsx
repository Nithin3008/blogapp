import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useForm, Controller } from "react-hook-form";

function Write() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
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
            <input type="file" {...register("image")} />
          </span>
        </div>
        <input placeholder="Blog title" className="bg-transparent text-3xl" />
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
          name="blogData"
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
          className=" mt-8 cursor:pointer bg-blue-600 text-md text-white p-1 w-fit rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Write;
