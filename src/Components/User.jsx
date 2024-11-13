import { useEffect, useState } from "react";
import UserBlog from "./UserBlog";

export default function User() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    fetch(`https://localhost:7211/api/Users/GetUserDetails?id=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setIsLoading(false);
      });
  }, []);

  const [GetUserDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const userId = localStorage.getItem("id");
    fetch(`https://localhost:7211/api/Users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserDetails(data);
      })
      .catch((error) => {
        console.error("Error Fetching User Details : ", error);
      });
  }, []);

  return (
    <div className="mt-20 flex ml-32 mr-32 justify-center space-x-4">
      <div className="Section-A  w-3/5">
        <div className="flex  justify-between ml-5 mr-5">
          <div>
            <h1 className="text-4xl font-medium">Viraldevmurari</h1>
          </div>
          <div className="mt-1">
            <svg width="25" height="25">
              <path
                fill="evenodd"
                d="M5 12.5q0 .828.586 1.414.585.585 1.414.586.828 0 1.414-.586.585-.586.586-1.414 0-.828-.586-1.414A1.93 1.93 0 0 0 7 10.5q-.828 0-1.414.586-.585.586-.586 1.414m5.617 0q0 .828.586 1.414.587.585 1.414.586.828 0 1.414-.586t.586-1.414-.586-1.414a1.93 1.93 0 0 0-1.414-.586q-.827 0-1.414.586-.586.586-.586 1.414m5.6 0q0 .828.586 1.414.585.585 1.432.586.827 0 1.413-.586t.587-1.414q0-.828-.587-1.414a1.93 1.93 0 0 0-1.413-.586q-.847 0-1.432.586t-.587 1.414z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mt-7 mr-5 mb-2 ml-5 flex  text-gray-600 font-medium">
          <div className="mr-3">
            <span>Home</span>
          </div>
          <div className=" mr-3 ">
            <span>List</span>
          </div>
          <div className="mr-3 ">
            <span>About</span>
          </div>
        </div>
        <hr />
        <div className="ml-5 mr-5">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            userData.map((item) => <UserBlog key={item.id} data={item} />)
          )}
        </div>
      </div>
      <div className="Section-B  w-2/5">
        <div className=" ml-10">
          <div>
            <img
              className="w-20 h-20 rounded-full"
              src="https://media.licdn.com/dms/image/v2/D4D03AQGSIlY4C1GUXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718221877344?e=1736380800&v=beta&t=DGbqP9VZJz92oALn0kZmHMfs6WzLG_Q-ObaWgSB5P5c"
            />
          </div>
          <div className="mt-3 font-semibold">
            <span>{GetUserDetails?.username}</span>
          </div>
          <div className="mt-2 text-gray-600">
            <p>{GetUserDetails?.bio}</p>
          </div>
          <div className="mt-5">
            <span className="text-sm text-green-700 hover:text-black hover:underline cursor-pointer">
              Edit Profile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
