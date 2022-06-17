import React from "react";
import { Button } from "@mui/material";
import { ReactComponent as Wave } from "../../../assets/wave.svg";
import {
  HeroBackground,
  HeroContainer,
  HeroItemContainer,
  HeroItemDetailContainer,
  HeroTextContainer,
  WaveContainer,
} from "./styles";

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
            <Button variant="outlined" href="/volunteer">
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
