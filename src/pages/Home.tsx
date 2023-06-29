import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  font-size: 100px;
  background-color: #fff;
  width: 300px;
  height: 300px;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
  font-family: "Jalnan";
  color: #acbcff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  p {
    margin: 0;
  }
  span {
    font-size: 15px;
    color: #777;
  }
  ${({ theme }) => theme.media.mobile} {
    width: 100px;
    height: 100px;
    font-size: 50px;
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
const SubmitButton = styled.button`
  color: #fff;
  font-size: 50px;
  cursor: pointer;
`;

const MBTI = [
  [
    { char: "I", desc: "내향형" },
    { char: "E", desc: "외향형" },
  ],
  [
    { char: "N", desc: "감각적" },
    { char: "S", desc: "직관적" },
  ],
  [
    { char: "T", desc: "이성적" },
    { char: "F", desc: "감성적" },
  ],
  [
    { char: "P", desc: "인식형" },
    { char: "J", desc: "판단형" },
  ],
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleClickCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const resultText = e.currentTarget.children[0].innerHTML;
    if (result.length < 4) {
      setResult((prev) => {
        return [...prev, resultText];
      });
      if (step < 3) {
        setStep((prev) => {
          return prev + 1;
        });
      }
    } else {
      setResult((prev) => {
        const slice = prev.slice(0, 3);
        return [...slice, resultText];
      });
    }
  };

  return (
    <Container>
      <ResultContainer>
        <ResultCard>{result[0]}</ResultCard>
        <ResultCard>{result[1]}</ResultCard>
        <ResultCard>{result[2]}</ResultCard>
        <ResultCard>{result[3]}</ResultCard>
      </ResultContainer>
      <CardContainer>
        <Card
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            handleClickCard(e);
          }}
        >
          <p>{MBTI[step][0].char}</p>
          <span>{MBTI[step][0].desc}</span>
        </Card>
        <Card
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            handleClickCard(e);
          }}
        >
          <p>{MBTI[step][1].char}</p>
          <span>{MBTI[step][1].desc}</span>
        </Card>
      </CardContainer>
      <ButtonContainer>
        <RetryButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            setStep(0);
            setResult([]);
          }}
        >
          <FaUndoAlt />
        </RetryButton>
        {result.length === 4 && (
          <SubmitButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              navigate("/detail", {
                state: {
                  mbti: result.toString().split(",").join(""),
                  mbtiArray: result,
                },
              });
            }}
          >
            <FaCheck />
          </SubmitButton>
        )}
      </ButtonContainer>
    </Container>
  );
}
