import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import VolunteerCard from "./volunteer-card";
import { OrderingType, VolunteerCardItem } from "../models";
import Pagination from "./pagination";
import useFetchData from "../hooks/use-fetch-data";
import { filterData, FilterType } from "../utils";
import OrderingButtonGroup from "./ordering-button-group";

const DATA_PER_PAGE: number = 12;

const orderingOption: { [key in OrderingType]: string } = {
  new: "-id",
  popular: "currentPeople",
  title: "title",
  application: "applicationDate",
  volunteer: "volunteerDate",
};

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
  const [totalPages, setTotalPages] = useState<number>(1);
  const [page, setPage] = useState<number>(0);
  const [ordering, setOrdering] = useState<OrderingType>("new");
  const location = useLocation();

  const [data, loading, error, header] = useFetchData<VolunteerCardItem[]>(
    `v1/volunteers?from=${(page - 1) * DATA_PER_PAGE}&to=${
      page * DATA_PER_PAGE
    }&ordering=${orderingOption[ordering]}`,
    page > 0,
  );

  useEffect(() => {
    if (header !== undefined) {
      setTotalPages(Math.ceil(header["total-page"] / DATA_PER_PAGE));
    }
  }, [header]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setPage(parseInt(query.get("page") || "1", 10));
    setOrdering((query.get("ordering") as OrderingType) || "new");
  }, [location]);

  return (
    <VolunteerListContainer>
      <OrderingButtonGroup path="volunteer" current={ordering} />
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
      <Pagination page={page ?? 0} totalPages={totalPages} />
    </VolunteerListContainer>
  );
};

export default VolunteerList;
