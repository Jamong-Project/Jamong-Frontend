import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import VolunteerCard from "./volunteer-card";
import { VolunteerCardItem } from "../models";
import Pagination from "./pagination";

const VolunteerListContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  align-items: center;
  width: 100%;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
`;

const VolunteerList = () => {
  const volunteers: VolunteerCardItem[] = [
    {
      title: "Volunteer Name",
      picture: "https://via.placeholder.com/150",
      applicationDate: new Date(),
      volunteerDate: new Date(2022, 5, 30, 20, 0),
      maximumPerson: 10,
      currentVolunteers: 5,
    },
    {
      title: "Volunteer Name",
      picture: "https://via.placeholder.com/150",
      applicationDate: new Date(),
      volunteerDate: new Date(2022, 5, 30, 20, 0),
      maximumPerson: 10,
      currentVolunteers: 5,
    },
    {
      title: "Volunteer Name",
      picture: "https://via.placeholder.com/150",
      applicationDate: new Date(),
      volunteerDate: new Date(2022, 5, 30, 20, 0),
      maximumPerson: 10,
      currentVolunteers: 5,
    },
    {
      title: "Volunteer Name",
      picture: "https://via.placeholder.com/150",
      applicationDate: new Date(),
      volunteerDate: new Date(2022, 5, 30, 20, 0),
      maximumPerson: 10,
      currentVolunteers: 5,
    },
    {
      title: "Volunteer Name",
      picture: "https://via.placeholder.com/150",
      applicationDate: new Date(),
      volunteerDate: new Date(2022, 5, 30, 20, 0),
      maximumPerson: 10,
      currentVolunteers: 5,
    },
  ];

  const location = useLocation();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setPage(parseInt(query.get("page") || "1", 10));
  }, [location]);

  return (
    <VolunteerListContainer>
      <ListContainer>
        {volunteers.map((volunteer) => (
          <CardBox>
            <VolunteerCard volunteer={volunteer} />
          </CardBox>
        ))}
      </ListContainer>
      <Pagination url="list" page={page} totalPages={10} />
    </VolunteerListContainer>
  );
};

export default VolunteerList;
