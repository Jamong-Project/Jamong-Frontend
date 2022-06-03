import React, { useEffect } from "react";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallVolunteerCard from "../small-volunteer-card";

const HomeVolunteerListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: aqua;
`;

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  background-color: tomato;
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

  return (
    <HomeVolunteerListContainer>
      <ListItemContainer data-aos="fade-up">
        <h1>최근 봉사활동</h1>
        <VolunteerCardContainer>
          {[1, 2, 3].map((value) => (
            <SmallVolunteerCard key={value} />
          ))}
        </VolunteerCardContainer>
      </ListItemContainer>
    </HomeVolunteerListContainer>
  );
};

export default HomeVolunteerList;
