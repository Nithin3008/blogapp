import ExistingComments from "./ExistingComments";

function Comments() {
  return (
    <div>
      <div className="flex gap-4 items-center lg:w-3/5">
        <textarea
          className=" rounded-sm p-2 w-full"
          placeholder="Write a comment"
        />
        <button className="bg-blue-500 text-white h-fit p-2 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}

export default Comments;
