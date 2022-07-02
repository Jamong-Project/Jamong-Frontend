import React from "react";
import ImageCarousel from "./image-carousel";
import VolunteerInformation from "./volunteer-information";
import {
  InformationSectionContainer,
  InformationSectionWrapper,
} from "./styles";
import useVolunteerStore from "../../../../stores/volunteer-store";

const InformationSection = () => {
  const { volunteer } = useVolunteerStore();

  return (
    <InformationSectionContainer>
      <InformationSectionWrapper>
        {volunteer && (
          <>
            <ImageCarousel images={volunteer.pictures.map(({ url }) => url)} />
            <VolunteerInformation volunteer={volunteer} />
          </>
        )}
      </InformationSectionWrapper>
    </InformationSectionContainer>
  );
};

export default InformationSection;
