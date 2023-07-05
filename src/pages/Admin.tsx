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
const Title = styled.h1`
  font-family: "TheJamsil";
  margin-bottom: 30px;
  font-size: 20px;
  color: #fff;
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
const InputContainer = styled.form`
  display: flex;
`;
const TextArea = styled.textarea`
  font-family: "TheJamsil";
  border: 0;
  width: 320px;
  height: 130px;
  border-radius: 10px 0 0 10px;
  line-height: 150%;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  resize: none;
  color: #555;
  &:focus {
    outline: 0;
  }
  ${({ theme }) => theme.media.mobile} {
    width: 200px;
    height: 80px;
    font-size: 17px;
    padding: 15px;
  }
`;
const Add = styled.input`
  width: 100px;
  height: 130px;
  font-family: "TheJamsil";
  margin: 0;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  ${({ theme }) => theme.media.mobile} {
    width: 80px;
    height: 80px;
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

interface DataProps {
  mbti: string;
  info: string
}

export default function Admin() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<string[]>([]);
  const [data, setData] = useState<DataProps>({
    mbti: '',
    info: ''
  });
  const [selected, setSelected] = useState(false);
  const [desc, setDesc] = useState("");
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

  useEffect(()=>{
    setData((prev)=>{ return {
      ...prev,
      info: desc
    }})
  },[desc])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    fetch(`/mbti`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data) ,
    }).then(res => {
      if(res.ok) {
        alert("추가 완료")
        // navigate('/list')
      }
    })
    navigate('/mbti')
  };

  return (
    <Container>
      <Title>MBTI 성향 추가</Title>
      <ResultContainer>
        <ResultCard>{result[0]}</ResultCard>
        <ResultCard>{result[1]}</ResultCard>
        <ResultCard>{result[2]}</ResultCard>
        <ResultCard>{result[3]}</ResultCard>
      </ResultContainer>
      {selected || (
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
      )}
      {selected && (
        <InputContainer
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            handleSubmit(e);
          }}
        >
          <TextArea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setDesc(e.currentTarget.value);
            }}
            value={desc}
          />
          <Add type="submit" value="추가" />
        </InputContainer>
      )}
      <ButtonContainer>
        <RetryButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            setStep(0);
            setResult([]);
            setSelected(false);
            setDesc("");
          }}
        >
          <FaUndoAlt />
        </RetryButton>
        {selected || (
          <>
            {result.length === 4 && (
              <SubmitButton
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  setSelected(true);
                  setData((prev:DataProps)=>{ return {
                    ...prev,
                    mbti: result.toString().split(",").join(""),
                  }})
                }}
              >
                <FaCheck />
              </SubmitButton>
            )}
          </>
        )}
      </ButtonContainer>
    </Container>
  );
}
