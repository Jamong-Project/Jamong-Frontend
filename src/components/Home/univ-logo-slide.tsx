import styled from "@emotion/styled";
import React from "react";
import LogoSlider from "../logo-slider";

const BASE_ASSET_URL = "images/univ-logo/";
const MAIN_TEXT = "벌써 수많은 대학생들이 참여했어요! 🙋🏻‍♂️🙋🏻‍♀️";

const univName: string[] = [
  "가천대학교.jpg",
  "가톨릭대학교.jpg",
  "건국대학교.jpg",
  "고려대학교.jpg",
  "광운대학교.png",
  "국민대학교.png",
  "삼육대학교.jpg",
  "상명대학교.jpg",
  "서울과학기술대학교.png",
  "서울기독교대학교.png",
  "서울대학교.png",
  "서울시립대학교.png",
  "서울여자대학교.jpg",
  "숭실대학교.jpg",
];

const UnivLogoSlideContainer = styled.div`
  text-align: center;
  padding: 60px 0px;
`;

const UnivLogoSlide = () => {
  return (
    <UnivLogoSlideContainer>
      <h1>{MAIN_TEXT}</h1>
      <LogoSlider logos={univName.map((name) => `${BASE_ASSET_URL}${name}`)} />
    </UnivLogoSlideContainer>
  );
};

export default UnivLogoSlide;
