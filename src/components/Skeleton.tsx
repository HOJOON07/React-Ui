import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { count } from "console";

interface Props {
  //스켈레톤 전달 받을 Prop 정의
  width?: number;
  height?: number;
  circle?: boolean; //원형 스켈레톤을 만들 수 있음
  rounded?: boolean; //border radius 가 둥근형태
  count?: number; //width,height 이 지정되어 있지 않고 인라인으로 지정할때 글자의 갯수
  unit?: string; //px ,% 단위
  animation?: boolean; //애니메이션 유무
  color?: string; //스켈레톤의 배경 색
  style?: React.CSSProperties; //스켈레톤의 추가적인 스타일 (객체)
}

const pulseKeyframe = keyframes`
   0% {
    opacity:1;
   }
   50%{
    opacity: 0.4;
   }
   100% {
    opacity: 1;
   }
`;

//

const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out infinite;
`;

//스켈레톤을 감쌀 element

const Base = styled.div<Props>`
  ${({ color }) => color && `background-color:${color}`}; 
    // 컬러가 있으면 백그라운드 컬러는 컬러다.
  ${({ rounded }) => rounded && "border-radius: 8px"}; 
    // 라운디드가 같으면 radius 는 8px
  ${({ circle }) =>
    circle && "border-radius: 50%"}; //circle 을 받으면 radius 50%
  ${({ width, height }) =>
    (width || height) &&
    "display:block"}; //width,height 가 있다면 display는 block으로 선언해준다.
  ${({ animation }) =>
    animation &&
    pulseAnimation};, //animation이 있다면 pulseAnimation을 적용한다. animation이 true 이면 해당하는 애니메이션이 동작한다.
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  height: ${({ height, unit }) => height && unit && `${height}${unit}`} ;
`;

const Content = styled.span`
  opacity: 0;
`;

const Skeleton: React.FC<Props> = ({
  animation = true,
  width,
  height,
  circle,
  rounded,
  count,
  unit,
  color,
  style,
}) => {
  const content = useMemo(
    () => [...Array({ length: count })].map(() => "-").join(""),
    [count]
  );
  return (
    <Base
      style={style}
      rounded={rounded}
      circle={circle}
      width={width}
      height={height}
      animation={animation}
      unit={unit}
      color={color}
    >
      <Content>{content}</Content>
    </Base>
  );
};

export default Skeleton;
