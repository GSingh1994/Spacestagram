import { useState, useEffect } from "react";
import LikeBtn from "./LikeBtn";
import {
  FlexContainer,
  Cards,
  FlexImages,
  ImageInfo,
  ImageTitle,
  ImageDate,
} from "./styles";

const PictureGrid = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=30`
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
              <ImageInfo>
                <div>
                  <ImageTitle> {i.title}</ImageTitle>
                  <ImageDate>{i.date}</ImageDate>
                </div>
                <LikeBtn />
              </ImageInfo>
            </Cards>
          </div>
        );
      })}
    </FlexContainer>
  );
};

export default PictureGrid;
