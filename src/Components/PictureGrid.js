import { useState, useEffect } from "react";

const PictureGrid = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
      );
      const result = await response.json();
      setPictures(result.photos);
    };
    fetchApi();
  }, []);

  return (
    <div>
      {pictures.map((i) => {
        return (
          <img
            key={i.id}
            src={i.img_src}
            alt={"Picture of " + i.rover.name + " rover"}
          />
        );
      })}
    </div>
  );
};

export default PictureGrid;
