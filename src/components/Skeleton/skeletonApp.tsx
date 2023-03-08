import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Skeleton from "./Skeleton";

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 /4%) 0px 4px 16px 0px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const PlaceHolder: React.FC = () => (
  <Container>
    <ImageWrapper>
      <Skeleton width={320} height={320}></Skeleton>
    </ImageWrapper>
    <Info>
      <Skeleton width={150} height={29} rounded></Skeleton>
      <div style={{ height: "8px" }}></div>
      <Skeleton width={200} height={19} rounded></Skeleton>
    </Info>
  </Container>
);

const Item: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="http://img.movist.com/?img=/x00/05/74/59_p1.jpg"></Image>
      </ImageWrapper>
      <Info>
        <Title>SlamDunk The First</Title>
        <Description>뚫어 송태섭..!, 선생님.. 농구가 하고 싶어요..</Description>
      </Info>
    </Container>
  );
};

function SkeletonApp() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Base>
      {loading
        ? Array.from({ length: 25 }).map((_, idx) => (
            <PlaceHolder key={idx}></PlaceHolder>
          ))
        : Array.from({ length: 25 }).map((_, idx) => <Item key={idx}></Item>)}
    </Base>
  );
}

export default SkeletonApp;
