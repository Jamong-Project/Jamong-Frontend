/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "@emotion/react";
import { VolunteerGetType } from "volunteer-type";
import HomeVolunteerListItem from "./home-volunteer-list-item";
import useFetchData from "../../../hooks/use-fetch-data";
import GradientDivider from "../../common/gradient-divider";
import {
  HomeVolunteerListContainer,
  ListItemContainer,
  VolunteerCardContainer,
} from "./styles";

const HomeVolunteerList = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, loading, error] = useFetchData<VolunteerGetType[]>(
    "/v1/volunteers?from=0&to=3&ordering=-id",
  );

  const theme = useTheme();

  return (
    <>
      <HomeVolunteerListContainer>
        <ListItemContainer data-aos="fade-up">
          <h1>최근 봉사활동</h1>
          <VolunteerCardContainer>
            {error && <h2>최근 봉사활동이 존재하지 않아요 🥲</h2>}
            {data === undefined || loading
              ? null
              : data.map((value: VolunteerGetType) => {
                  return (
                    <HomeVolunteerListItem key={value.id} cardItem={value} />
                  );
                })}
          </VolunteerCardContainer>
        </ListItemContainer>
      </HomeVolunteerListContainer>
      <GradientDivider
        topColor={theme.colors.waveColor}
        bottomColor="transparent"
      />
    </>
  );
};

export default HomeVolunteerList;
