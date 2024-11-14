function AddBlog() {
  return (
    <div>
      <div className="mt-20 flex-col flex ml-44 mr-32 justify-center ">
        <div className="content mt-5 flex">
          <div className="mr-3 border-black border rounded-full">
            <svg className="svgIcon-use" width="25" height="25">
              <path d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7" fill="evenodd"></path>
            </svg>
          </div>
          <div className="text-base">Content</div>
        </div>
        <div className="content mt-5 flex">
          <div className="mr-3 border-black border rounded-full">
            <svg className="svgIcon-use" width="25" height="25">
              <path d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7" fill="evenodd"></path>
            </svg>
          </div>
          <div className="text-base">
            <input className="bg-white"></input>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddBlog;
