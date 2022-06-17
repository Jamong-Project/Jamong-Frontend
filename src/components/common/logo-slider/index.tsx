import React, { useCallback, useEffect, useRef, useState } from "react";
import useAnimationFrame from "../../../hooks/use-animation-frame";
import useWindowSize from "../../../hooks/use-window-size";
import { LogoArea, SliderArea, SliderContainer } from "./styles";
import LogoSlide from "./logo-slide";

export type LogoSliderProps = {
  logos: string[];
};

const LogoSlider = ({ logos }: LogoSliderProps) => {
  const refSliderContainer = useRef<HTMLDivElement>(null);
  const refItemArea = useRef<HTMLDivElement>(null);
  const refScrollX = useRef<number>(0);

  const windowSize = useWindowSize();

  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    const { current: sContent } = refItemArea;
    const getWidth = () => {
      if (!sContent) {
        if (!cancelled) {
          requestAnimationFrame(getWidth);
        }
      } else {
        setEnabled(windowSize.width < sContent.clientWidth);
      }
    };
    getWidth();
    return () => {
      cancelled = true;
    };
  }, [logos.length, windowSize]);

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
            <LogoSlide key={`${src}-main`} src={src} />
          ))}
        </LogoArea>
        {enabled ? (
          <LogoArea style={{ display: "flex" }}>
            {logos.map((src) => (
              <LogoSlide key={`${src}-append`} src={src} />
            ))}
          </LogoArea>
        ) : null}
      </SliderArea>
    </SliderContainer>
  );
};

export default LogoSlider;
