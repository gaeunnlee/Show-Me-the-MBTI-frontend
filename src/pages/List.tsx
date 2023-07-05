import { styled } from "styled-components";
import { TiDelete } from "react-icons/ti";
import { useEffect, useState } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
  gap: 10px;
`;
const Item = styled.div`
  display: flex;
  gap: 5px;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;
const Mbti = styled.span`
  font-family: "Jalnan";
  background-color: #fff;
  padding: 2px;
  border-radius: 2px;
  color: #1388c7;
`;
const Info = styled.span`
  font-family: "TheJamsil";
  color: #0b2939;
  display: flex;
  align-items: center;
`;

const Delete = styled.button`
  cursor: pointer;
`;
interface MbtiProps {
  id: number;
  mbti: string;
  info: string;
}
export default function List() {
  const [mbti, setMbti] = useState<MbtiProps[]>([{
    id:0, mbti: "MBTI", info: "Default Info"
  }]);
  useEffect(() => {
    fetch(`/mbti`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMbti(data);
      });
  }, []);
  //   const mbti = [
  //     {
  //       id: 1,
  //       mbti: "INTP",
  //       info: "논리적이고 창의적이며 분석적",
  //     },
  //     {
  //       id: 2,
  //       mbti: "ENFJ",
  //       info: "따뜻하고 사교적이며 책임감이 강함",
  //     },
  //     {
  //       id: 3,
  //       mbti: "ISFP",
  //       info: "말없이 다정하고 온화하며 사람들에게 친절함",
  //     },
  //   ];
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.classList[2]);
    if (window.confirm(`${id}를 삭제하시겠습니까?`)) {
      fetch("/mbti", {
        method: "DELETE",
        body: JSON.stringify({
          id,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <Container>
      {mbti?.length > 0 &&
        mbti?.map((item) => {
          return (
            <Item>
              <Mbti>{item.mbti}</Mbti>
              <Info>
                {item.info}
                <Delete
                  className={String(item.id)}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    handleDelete(e);
                  }}
                >
                  <TiDelete />
                </Delete>
              </Info>
            </Item>
          );
        })}
    </Container>
  );
}
