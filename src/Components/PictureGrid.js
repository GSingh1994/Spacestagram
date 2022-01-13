import { useState, useEffect } from "react";
import styled from "styled-components";

const PictureGrid = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [pictures, setPictures] = useState([]);

  //   styles
  const FlexContainer = styled.div`
    display: flex;
    padding: 5rem;
    flex-wrap: wrap;
    justify-content: space-between;
  `;
  const Cards = styled.div`
    /* border: 1px solid salmon; */
    background-color: #fff;
    padding: 0.8rem;
    border-radius: 4px;
    /* width: 10rem; */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  `;
  const FlexImages = styled.img`
    width: 20rem;
    height: 20rem;
  `;
  const ImageCaption = styled.div`
    /* color: goldenrod; */
  `;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=20`
      );
      const result = await response.json();
      setPictures(result);
    };
    fetchApi();
  }, [API_KEY]);

  return (
    <FlexContainer>
      {pictures.map((i) => {
        return (
          <div key={i.date}>
            <Cards>
              <FlexImages src={i.url} alt={"Picture of " + i.title} />
              <ImageCaption>{i.title}</ImageCaption>
            </Cards>
          </div>
        );
      })}
    </FlexContainer>
  );
};

export default PictureGrid;
