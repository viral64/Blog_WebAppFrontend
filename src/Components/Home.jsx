import { useState, useEffect } from "react";
import BlogSection from "./BlogSection";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://BlogWeb.somee.com/api/Blog")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => <BlogSection key={item.id} data={item} />)
      )}
    </>
  );
}
