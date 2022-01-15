import { useState, useEffect } from "react";
import styled from "styled-components";
import LikeBtn from "./LikeBtn";
const Hero = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [picture, setPicture] = useState([]);

  // styles
  const Container = styled.div`
    border: 5px solid black;
    padding: 1rem;
    display: flex;
    margin-bottom: 4rem;
  `;
  const HeroImage = styled.img`
    width: 25rem;
    height: 25rem;
    object-fit: contain;
  `;
  const Herotext = styled.div`
    padding-left: 2rem;
    margin-top: 3rem;
  `;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );
      const result = await response.json();
      setPicture(result);
    };
    fetchApi();
  }, [API_KEY]);

  return (
    <Container>
      <HeroImage src={picture.url} alt="Astronomy picture of the day" />
      <Herotext>
        <h3>{picture.title}</h3>
        <div>{picture.explanation}</div>
      </Herotext>
      <LikeBtn />
    </Container>
  );
};
export default Hero;
