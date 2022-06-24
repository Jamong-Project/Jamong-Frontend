import styled from "@emotion/styled";
import { Backdrop, Icon, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CarouselPager from "./carousel-pager";

const ImageCarouselContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.divider};
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    pointer-events: all;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;

const CarouselPagesContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const setVisibility = (enabled: boolean) => (enabled ? "visible" : "hidden");

export type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [backdropOpen, setBackdropOpen] = useState<boolean>(false);
  const imageContainerRef = useRef<HTMLObjectElement>(null);
  const FIRST_IMAGE_PAGE: number = 0;
  const LAST_IMAGE_PAGE: number = images.length - 1;

  const previousImageEvent = () => {
    if (currentImg === FIRST_IMAGE_PAGE) return;

    setCurrentImg((prev) => prev - 1);
  };

  const nextImageEvent = () => {
    if (currentImg === LAST_IMAGE_PAGE) return;

    setCurrentImg((prev) => prev + 1);
  };

  const handleBackdrop = () => setBackdropOpen((prev) => !prev);

  useEffect(() => {
    if (imageContainerRef.current === null) return;

    imageContainerRef.current.style.transform = `translateX(-${currentImg}00%)`;
  }, [currentImg]);

  return (
    <>
      <Backdrop
        open={backdropOpen}
        onClick={handleBackdrop}
        sx={{ zIndex: 999 }}
      >
        <img src={images[currentImg]} alt={images[currentImg]} />
      </Backdrop>
      <ImageCarouselContainer>
        <ButtonContainer>
          <IconButton
            aria-label="back"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              visibility: setVisibility(currentImg !== FIRST_IMAGE_PAGE),
              ":hover": {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              },
            }}
            onClick={previousImageEvent}
          >
            <Icon sx={{ color: "white" }}>arrow_back_ios_new</Icon>
          </IconButton>
          <IconButton
            aria-label="front"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              visibility: setVisibility(currentImg !== LAST_IMAGE_PAGE),
              ":hover": {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              },
            }}
            onClick={nextImageEvent}
          >
            <Icon sx={{ color: "white" }}>arrow_forward_ios_new</Icon>
          </IconButton>
        </ButtonContainer>
        <CarouselPagesContainer>
          <CarouselPager
            currentPages={currentImg + 1}
            maximumPages={images.length}
            hasBackground
          />
        </CarouselPagesContainer>
        <ImageContainer ref={imageContainerRef} onClick={handleBackdrop}>
          {images.map((url) => (
            <ImageItem src={url} key={url} />
          ))}
        </ImageContainer>
      </ImageCarouselContainer>
    </>
  );
};

export default ImageCarousel;
