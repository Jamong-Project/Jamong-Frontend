import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useAnimationFrame from "../hooks/use-animation-frame";
import useWindowSize from "../hooks/use-window-size";
import LogoSlide from "./LogoSlide";

const SliderContainer = styled.div`
  overflow: hidden;
`;

const SliderArea = styled.div`
  display: flex;
`;

const LogoArea = styled.div`
  display: flex;
`;

export type LogoSliderProps = {
  logos: string[];
};

const LogoSlider = ({ logos }: LogoSliderProps) => {
  const refSliderContainer = useRef<HTMLDivElement>(null);
  const refItemArea = useRef<HTMLDivElement>(null);
  const refScrollX = useRef<number>(0);

  const windowSize = useWindowSize();

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const { current: sContent } = refItemArea;
    if (sContent) {
      setEnabled(windowSize.width < sContent.clientWidth);
    }
  }, [windowSize]);

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: sContainer } = refSliderContainer;
      const { current: sContent } = refItemArea;

      if (sContainer && sContent) {
        refScrollX.current += 0.5;
        sContainer.scrollLeft = refScrollX.current;

        if (sContainer.scrollLeft >= sContent.clientWidth) {
          refScrollX.current = 0;
          sContainer.scrollLeft = 0;
        }
      }
    }, []),
  );

  return (
    <SliderContainer ref={refSliderContainer}>
      <SliderArea
        className="logo-slider"
        style={{ justifyContent: enabled ? "" : "center" }}
      >
        <LogoArea ref={refItemArea}>
          {logos.map((src) => (
            <LogoSlide key={`${src}1`} src={src} />
          ))}
        </LogoArea>
        {enabled ? (
          <LogoArea style={{ display: "flex" }}>
            {logos.map((src) => (
              <LogoSlide key={`${src}2`} src={src} />
            ))}
          </LogoArea>
        ) : null}
      </SliderArea>
    </SliderContainer>
  );
};

export default LogoSlider;
