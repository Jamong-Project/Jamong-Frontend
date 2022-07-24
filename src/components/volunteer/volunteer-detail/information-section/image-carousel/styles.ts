import styled from "@emotion/styled";

export const ImageCarouselContainer = styled.div`
  aspect-ratio: 1 / 1;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.divider};
`;

export const ButtonContainer = styled.div`
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

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;

export const CarouselPagesContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
