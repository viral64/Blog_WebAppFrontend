import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://BlogWeb.somee.com/api/blog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found</p>;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          {blog.title}
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-300">{blog.content}</p>
        <div className="flex items-center mt-6">
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="Author"
          />
          <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200">
              {blog.username}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Lead Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
