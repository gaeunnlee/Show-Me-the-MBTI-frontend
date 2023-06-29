import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";

const Container = styled.div`
  position: fixed;
  top: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;
const Title = styled(Link)`
  font-weight: bold;
  color: #fff;
  font-size: 25px;
`;
const Admin = styled(Link)`
    color: #fff;
    font-size: 30px;
`

export default function Nav() {
  const [show, setShow] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setShow(false);
      setTimeout(() => {
        setShow(true);
      }, 3000);
    }
  }, []);

  return (
    <>
      {show && (
        <Container>
          <Title to="/">Show Me The MBTI</Title>
          <Admin to="/admin">
            <AiOutlineSetting />
          </Admin>
        </Container>
      )}
    </>
  );
}
