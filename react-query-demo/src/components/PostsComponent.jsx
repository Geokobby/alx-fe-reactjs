// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching, // indicates background refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 min - data stays fresh before refetch
    cacheTime: 1000 * 60 * 5, // 5 min - data stays in cache
  });

  if (isLoading) {
    return <p className="text-blue-500">Loading posts...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      {/* Refetch Button */}
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul className="space-y-3">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border-b pb-2">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
