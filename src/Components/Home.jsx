import { useState, useEffect } from "react";
import BlogSection from "./BlogSection";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7211/api/Blog").then((response) =>
      response.json().then((data) => {
        // console.log(data);
        setData(data);
      })
    );
  }, []);
  return (
    <>
      <BlogSection data={data} />
      {/* <BlogSection /> */}
    </>
  );
}
