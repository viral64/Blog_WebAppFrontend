import { Link } from "react-router-dom";
const BlogSection = (props) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-34"
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Blog Cover"
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
            <Link
              to={`blog/${props.data.blogId}`}
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
            >
              {props.data.title}
            </Link>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {props.data.description}
            </p>

            <Link
              to={`blog/${props.data.blogId}`}
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </Link>

            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt="Author"
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  {props.data.username}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Lead Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
