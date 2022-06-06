import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import VolunteerCard from "./volunteer-card";
import { VolunteerCardItem } from "../models";
import Pagination from "./pagination";
import useFetchData from "../hooks/use-fetch-data";
import { filterData, FilterType } from "../utils";

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
  const [data, loading, error] = useFetchData(
    `${process.env.REACT_APP_BACKEND_URL}/v1/volunteers`,
  );

  const location = useLocation();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setPage(parseInt(query.get("page") || "1", 10));
  }, [location]);

  return (
    <VolunteerListContainer>
      <ListContainer>
        {
          {
            [FilterType.DATA_GET_FAILED]: <div>에러가 발생했습니다.</div>,
            [FilterType.DATA_GET_LOADING]: null,
            [FilterType.DATA_GET_SUCCESSFUL]:
              data &&
              data.map((volunteer: VolunteerCardItem) => (
                <CardBox key={volunteer.id}>
                  <VolunteerCard volunteer={volunteer} />
                </CardBox>
              )),
            [FilterType.DATA_GET_EMPTY]: <div>데이터가 없습니다.</div>,
          }[filterData(data, loading, error)]
        }
      </ListContainer>
      <Pagination url="volunteer" page={page} totalPages={10} />
    </VolunteerListContainer>
  );
};

export default VolunteerList;
