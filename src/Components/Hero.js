import { useState, useEffect } from "react";
import LikeBtn from "./LikeBtn";
import { HeroContainer, HeroImage, HeroText } from "./styles";

const Hero = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [picture, setPicture] = useState([]);

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
    <HeroContainer>
      <HeroImage src={picture.url} alt="Astronomy picture of the day" />
      <HeroText>
        <h3>{picture.title}</h3>
        <div>{picture.explanation}</div>
      </HeroText>
      <LikeBtn />
    </HeroContainer>
  );
};
export default Hero;
