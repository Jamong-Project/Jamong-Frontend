/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallVolunteerCard from "../small-volunteer-card";
import useFetchData from "../../hooks/use-fetch-data";
import GradientDivider from "../gradient-divider";
import { VolunteerCardItem } from "../../models";

const HomeVolunteerListContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: var(--wave-color);
`;

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
`;

const VolunteerCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const HomeVolunteerList = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, loading, error] = useFetchData<VolunteerCardItem[]>(
    "/v1/volunteers?from=0&to=3&ordering=-id",
  );

  return (
    <>
      <HomeVolunteerListContainer>
        <ListItemContainer data-aos="fade-up">
          <h1>최근 봉사활동</h1>
          <VolunteerCardContainer>
            {error && <h2>최근 봉사활동이 존재하지 않아요 🥲</h2>}
            {data === undefined || loading
              ? null
              : data.map((value: VolunteerCardItem) => {
                  return <SmallVolunteerCard key={value.id} cardItem={value} />;
                })}
          </VolunteerCardContainer>
        </ListItemContainer>
      </HomeVolunteerListContainer>
      <GradientDivider topColor="var(--wave-color)" bottomColor="transparent" />
    </>
  );
};

export default HomeVolunteerList;
