import { useState, useEffect } from "react";
import styled from "styled-components";

const PictureGrid = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [pictures, setPictures] = useState([]);

  //   styles
  const FlexContainer = styled.div`
    background-color: beige;
    display: flex;
    padding: 5rem;
    flex-wrap: wrap;
    justify-content: space-between;
  `;
  const FlexImages = styled.img`
    width: 20rem;
    margin-bottom: 4rem;
  `;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
      );
      const result = await response.json();
      setPictures(result.photos);
    };
    fetchApi();
  }, [API_KEY]);

  return (
    <FlexContainer>
      {pictures.map((i) => {
        return (
          <FlexImages
            key={i.id}
            src={i.img_src}
            alt={"Picture of " + i.rover.name + " rover"}
          />
        );
      })}
    </FlexContainer>
  );
};

export default PictureGrid;
