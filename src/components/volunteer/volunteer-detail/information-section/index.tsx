import React from "react";
import { VolunteerGetDetailType } from "volunteer-type";
import ImageCarousel from "../image-carousel";
import VolunteerInformation from "../volunteer-information";
import {
  InformationSectionContainer,
  InformationSectionWrapper,
} from "./styles";

export type InformationSectionProps = {
  volunteer?: VolunteerGetDetailType;
};

const InformationSection = ({ volunteer }: InformationSectionProps) => {
  return (
    <InformationSectionContainer>
      <InformationSectionWrapper>
        {volunteer && (
          <>
            <ImageCarousel images={volunteer.pictures.map(({ url }) => url)} />
            <VolunteerInformation data={volunteer} />
          </>
        )}
      </InformationSectionWrapper>
    </InformationSectionContainer>
  );
};

InformationSection.defaultProps = {
  volunteer: undefined,
};

export default InformationSection;
