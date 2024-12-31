import axios from "axios";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useContext } from "react";
import { userContext } from "../context/userDetails";

const fetchComments = async (postId) => {
  const res = await axios.get(
    `https://blogappbackend-wpn8.onrender.com/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }) => {
  const { userDetails, authToken } = useContext(userContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      return axios.post(
        `https://blogappbackend-wpn8.onrender.com/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      desc: formData.get("desc"),
    };

    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          name="desc"
          className=" rounded-sm p-2 w-full"
          placeholder="Write a comment"
        />
        <button className="bg-blue-500 text-white h-fit p-2 rounded-lg">
          Send
        </button>
      </form>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading comments!"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Sending...)`,
                createdAt: new Date(),
                user: {
                  // img: userDetails.imageUrl,
                  email: userDetails.email,
                },
              }}
            />
          )}

          {data.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={postId} />
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
