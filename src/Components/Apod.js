import { useState, useEffect } from "react";
const Apod = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [picture, setPicture] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );
      const result = await response.json();
      setPicture(result.url);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <img src={picture} alt="Astronomy picture of the day" />
    </div>
  );
};
export default Apod;
