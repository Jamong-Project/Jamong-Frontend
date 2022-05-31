import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import VolunteerCard from "./volunteer-card";
import { VolunteerCardItem } from "../models";
import Pagination from "./pagination";

const VolunteerListContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  align-items: center;
  width: 100%;
`;

const CardBox = styled.div`
  margin: 20px auto 0 auto;
`;

const VolunteerList = () => {
  const volunteers: VolunteerCardItem[] = [
    {
      volunteerName: "Volunteer Name",
      description:
        "국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.",
      image: "https://via.placeholder.com/150",
      startDate: new Date(),
      endDate: new Date(2022, 5, 30, 20, 0),
      maxVolunteers: 10,
      currentVolunteers: 5,
    },
    {
      volunteerName: "Volunteer Name",
      description:
        "국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.",
      image: "https://via.placeholder.com/150",
      startDate: new Date(),
      endDate: new Date(2022, 5, 30, 20, 0),
      maxVolunteers: 10,
      currentVolunteers: 5,
    },
    {
      volunteerName: "Volunteer Name",
      description:
        "국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.",
      image: "https://via.placeholder.com/150",
      startDate: new Date(),
      endDate: new Date(2022, 5, 30, 20, 0),
      maxVolunteers: 10,
      currentVolunteers: 5,
    },
    {
      volunteerName: "Volunteer Name",
      description:
        "국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.",
      image: "https://via.placeholder.com/150",
      startDate: new Date(),
      endDate: new Date(2022, 5, 30, 20, 0),
      maxVolunteers: 10,
      currentVolunteers: 5,
    },
    {
      volunteerName: "Volunteer Name",
      description:
        "국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.",
      image: "https://via.placeholder.com/150",
      startDate: new Date(),
      endDate: new Date(2022, 5, 30, 20, 0),
      maxVolunteers: 10,
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
