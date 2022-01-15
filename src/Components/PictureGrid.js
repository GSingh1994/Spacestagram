import { useState, useEffect } from "react";
import styled from "styled-components";
import LikeBtn from "./LikeBtn";

const PictureGrid = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [pictures, setPictures] = useState([]);

  //   styles
  const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
  `;
  const Cards = styled.div`
    background-color: #fff;
    padding: 0.8rem;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  `;
  const FlexImages = styled.img`
    width: 20rem;
    height: 20rem;
    user-select: none;
  `;
  const ImageInfo = styled.div`
    margin: 0.5rem;
    font-weight: bold;

    display: flex;
    justify-content: space-between;
  `;
  const ImageTitle = styled.div`
    width: 15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
  const ImageDate = styled.div`
    font-weight: 100;
  `;

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
