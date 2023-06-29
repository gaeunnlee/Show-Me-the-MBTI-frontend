import { styled } from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

  * {
    padding: 0;
    margin: 0;
  }

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  p {
    opacity: 0;
    filter: blur(4px);
  }

  p:nth-child(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    font-size: 60px;
  }

  p:nth-child(2) {
    animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
    font-size: 90px;
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`;
const FirstLine = styled.p`
  color: #fff;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
`;
const SecondLine = styled.p`
  color: #fff;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  display: flex;
  align-items: flex-start;
  height: 100px;
  padding: 0;
  margin: 0;
`;
const SecondLineSmall = styled.span`
  font-size: 50px;
  line-height: 50px;
  margin-right: 5px;
`;

const SecondLineBig = styled.span`
  font-size: 80px;
  line-height: 60px;
`;

export default function Main() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>
        <FirstLine>SHOW ME</FirstLine>
        <SecondLine>
          <SecondLineSmall>THE</SecondLineSmall>
          <SecondLineBig>MBTI</SecondLineBig>
        </SecondLine>
      </h1>
    </Container>
  );
}
