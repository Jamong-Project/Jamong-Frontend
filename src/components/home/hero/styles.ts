import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const HeroContainer = styled.article`
  height: 1024px;
  position: relative;
`;

export const HeroItemContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroItemDetailContainer = styled.div`
  display: flex;
  margin: 0 20px;
`;

export const HeroTextContainer = styled.div`
  margin-right: 120px;
  text-align: center;
`;

export const HeroBackground = styled.div`
  background-color: aliceblue;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: -1;
`;

export const WaveContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  bottom: 0;
`;

const RocketMove = keyframes`
  0% {
      transform: translate(0px, 0px);
  }

  50% {
      transform: translate(-5px, -10px);
  }

  100% {
      transform: translate(0px, 0px);
  }
`;

export const Rocket = styled.img`
  height: 300px;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-name: ${RocketMove};
`;
