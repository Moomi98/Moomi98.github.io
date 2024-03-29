import styled from "styled-components";
import { emojiVideo, homeImage1 } from "../assets/index";
import { TypeAnimation } from "react-type-animation";
import { forwardRef } from "react";

const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 70px;
  padding-top: 50px;
`;

const HomeLayout = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const IntroLayout = styled.div`
  width: 50%;
  height: 75%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FlexTextLayout = styled.span`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const H4Orange = styled.h4`
  font-size: 16px;
  letter-spacing: 2.3px;
  color: #ffbd39;
`;

const H1White = styled.h1`
  font-size: 60px;

  color: white;
  font-weight: bold;
`;

const H1Orange = styled.h1`
  font-size: 60px;
  color: #ffbd39;
  font-weight: bold;
`;

const ImageLayout = styled.video`
  width: 60%;
  height: 60%;
`;
const Home = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <HomeLayout>
        <IntroLayout>
          <H4Orange>안녕하세요!</H4Orange>
          <TypeAnimation
            sequence={[
              "주니어 개발자",
              3000,
              "프론트엔드 개발자",
              3000,
              () => {},
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "60px", fontWeight: "bold", color: "white" }}
          />
          <FlexTextLayout>
            <H1Orange>김정현</H1Orange>
            <H1White>입니다.</H1White>
          </FlexTextLayout>
        </IntroLayout>
        <ImageLayout muted autoPlay loop>
          <source src={emojiVideo} />
        </ImageLayout>
      </HomeLayout>
    </Container>
  );
});

export default Home;
