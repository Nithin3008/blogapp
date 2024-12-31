import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { userContext } from "../context/userDetails";

function PostMenuActions({ post }) {
  const navigate = useNavigate();
  const { userDetails, authToken } = useContext(userContext);

  const {
    isPending,
    error,
    data: savedPosts,
  } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      return axios.get(`https://blogappbackend-wpn8.onrender.com/users/saved`, {
        headers: {
          Authorization: authToken,
        },
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      return axios.delete(
        `https://blogappbackend-wpn8.onrender.com/posts/${post._id}`,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Post deleted successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: async () => {
      return axios.patch(
        `https://blogappbackend-wpn8.onrender.com/users/save`,
        {
          postId: post._id,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
      toast.success("post saved");
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  // const handleFeature = () => {
  //   featureMutation.mutate();
  // };

  const handleSave = () => {
    if (!userDetails) {
      return navigate("/login");
    }
    saveMutation.mutate();
  };

  console.log(savedPosts);
  const isSaved = savedPosts?.data?.some((p) => p === post?._id || false);
  return (
    <div>
      <h1>Actions</h1>
      {isPending ? (
        "Loading"
      ) : error ? (
        "Saved Posts fetching failed"
      ) : (
        <div
          className="flex items-center gap-2 py-2 text-sm cursor-pointer"
          onClick={handleSave}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20px"
            height="20px"
          >
            <path
              d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
              stroke="black"
              strokeWidth="2"
              fill={
                saveMutation.isPending
                  ? isSaved
                    ? "none"
                    : "black"
                  : isSaved
                  ? "black"
                  : "none"
              }
            />
          </svg>
          <span>Save this Post</span>
          {saveMutation.isPending && (
            <span className="text-xs">(in progress)</span>
          )}
        </div>
      )}
      <div onClick={handleDelete} className="cursor-pointer text-sm space-x-2">
        <FontAwesomeIcon
          icon={faTrash}
          style={{ color: "#fd0d0d", padding: "0px 8px" }}
        />
        Delete
        {deleteMutation.isPending && (
          <span className="text-sm">Delete in progress</span>
        )}
      </div>
    </div>
  );
}

export default PostMenuActions;
