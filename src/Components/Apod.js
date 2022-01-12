import { useState, useEffect } from "react";
import styled from "styled-components";
const Apod = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [picture, setPicture] = useState([]);

  // styles
  const Container = styled.div`
    width: 80%;
  `;
  const Image = styled.img`
    width: 80rem;
    height: 30rem;
    object-fit: contain;
  `;

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
      );
      const result = await response.json();
      setPicture(result.url);
    };
    fetchApi();
  }, [API_KEY]);

  return (
    <Container>
      <Image src={picture} alt="Astronomy picture of the day" />
    </Container>
  );
};
export default Apod;
