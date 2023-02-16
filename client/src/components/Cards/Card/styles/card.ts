import styled from "styled-components";

export const CardContainer = styled.div`
 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: wrap-content;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  margin: 10px;
  padding: 20px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Name = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;



