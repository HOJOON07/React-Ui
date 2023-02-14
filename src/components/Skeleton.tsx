import React from "react";
import styled from "@emotion/styled";
import { Keyframes } from "@emotion/react";

interface Props {
  width?: number;
  height?: number;
  circle?: boolean;
  rounded?: boolean;
  count?: number;
  unit?: string;
  animation?: boolean;
  color?: string;
  style?: React.CSSProperties;
}

const Base = styled.div<Props>``;

const Content = styled.span`
  opacity: 0;
`;

const Skeleton: React.FC<Props> = () => {
  return <></>;
};

export default Skeleton;
