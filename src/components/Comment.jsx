import { format } from "timeago.js";
import { useContext } from "react";
import { userContext } from "../context/userDetails";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

const Comment = ({ comment, postId }) => {
  const { userDetails, authToken } = useContext(userContext);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      return axios.delete(`http://localhost:3000/comments/${comment._id}`, {
        headers: {
          Authorization: authToken,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      toast.success("Comment deleted successfully");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment.user.img && (
          <img
            src={comment.user.img}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <span className="font-medium">{comment.user.email}</span>
        <span className="text-sm text-gray-500">
          {format(comment.createdAt)}
        </span>
        {userDetails && comment.user.email === userDetails.email && (
          <span
            className="text-xs text-red-300 hover:text-red-500 cursor-pointer"
            onClick={() => mutation.mutate()}
          >
            delete
            {mutation.isPending && <span>(in progress)</span>}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
      </div>
    </div>
  );
};

export default Comment;
