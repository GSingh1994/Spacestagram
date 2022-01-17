import styled from "styled-components";
import "@fontsource/roboto";

// Hero Component
export const HeroContainer = styled.div`
  border: 5px solid black;
  padding: 1rem;
  display: flex;
  margin-bottom: 4rem;
  font-family: "Roboto";
  letter-spacing: 1px;
  line-height: 1.3rem;
`;
export const HeroImage = styled.img`
  width: 25rem;
  height: 25rem;
  object-fit: contain;
`;
export const HeroText = styled.div`
  padding-left: 2rem;
  margin-top: 3rem;
`;

// PictureGrid Component
export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 3rem;
  font-family: "Roboto";
`;
export const Cards = styled.div`
  background-color: #fff;
  padding: 0.8rem;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
export const FlexImages = styled.img`
  width: 20rem;
  height: 20rem;
  user-select: none;
`;
export const ImageInfo = styled.div`
  margin: 0.5rem;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
`;
export const ImageTitle = styled.div`
  width: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ImageDate = styled.div`
  font-weight: 100;
`;
