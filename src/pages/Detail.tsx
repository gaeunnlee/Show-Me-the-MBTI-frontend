import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { FaUndoAlt, FaCheck } from "react-icons/fa";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Jalnan";
  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;
const ResultContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;
const ResultCard = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #1388c7;
  ${({ theme }) => theme.media.mobile} {
    font-size: 40px;
    width: 60px;
    height: 60px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  ${({ theme }) => theme.media.mobile} {
    gap: 10px;
  }
`;
const Card = styled.div`
  font-size: 20px;
  background-color: #fff;
  width: 400px;
  height: 300px;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
  font-family: "TheJamsil";
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 0;
  }
  span {
    font-size: 15px;
    color: #777;
  }
  ${({ theme }) => theme.media.mobile} {
    width: 85vw;
    height: 100px;
    font-size: 15px;
    span {
      margin-top: 3px;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 40px;
`;
const RetryButton = styled.button`
  color: #fff;
  font-size: 50px;
  cursor: pointer;
`;

export default function Detail() {
  const [result, setResult] = useState<String[]>([]);
  const [info, setInfo] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    setResult(location.state.mbtiArray);
      fetch(`/mbti/${location.state.mbti}`)
          .then((response)=>{
            return response.json();
          })
          .then((data)=>{
              console.log(data)
              setInfo(data.info)
          });
  }, []);

  return (
    <Container>
      <ResultContainer>
        <ResultCard>{result[0]}</ResultCard>
        <ResultCard>{result[1]}</ResultCard>
        <ResultCard>{result[2]}</ResultCard>
        <ResultCard>{result[3]}</ResultCard>
      </ResultContainer>
      <CardContainer>
        <Card>{info}</Card>
      </CardContainer>
      <ButtonContainer>
        <RetryButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            navigate("/");
          }}
        >
          <FaUndoAlt />
        </RetryButton>
      </ButtonContainer>
    </Container>
  );
}
