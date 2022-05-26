import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ReactComponent as Wave } from "../../assets/wave.svg";

const HeroContainer = styled.article`
  height: 1024px;
  position: relative;
`;

const HeroItemContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroItemDetailContainer = styled.div`
  display: flex;
  margin: 0 20px;
`;

const HeroTextContainer = styled.div`
  margin-right: 120px;
  text-align: center;
`;

const HeroBackground = styled.div`
  background-color: aliceblue;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: -1;
`;

const WaveContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  bottom: 0;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroItemContainer>
        <HeroItemDetailContainer>
          <HeroTextContainer>
            <h1 style={{ fontSize: 45, marginBottom: 0 }}>
              Volunteer Starts From Here
            </h1>
            <h3 style={{ marginTop: 0 }}>간편하게 예약하는 자몽 봉사</h3>
            <Button variant="outlined" href="/list">
              Let&apos;s get started
            </Button>
          </HeroTextContainer>
          <img
            className="rocket"
            alt="rocket"
            src="images/rocket.png"
            height={300}
          />
        </HeroItemDetailContainer>
      </HeroItemContainer>
      <HeroBackground>
        <WaveContainer>
          <Wave fill="var(--wave-color)" width="100%" />
        </WaveContainer>
      </HeroBackground>
    </HeroContainer>
  );
};

export default Hero;