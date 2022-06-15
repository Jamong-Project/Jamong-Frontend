import React from "react";
import {
  Pagination as MaterialPagination,
  PaginationItem,
} from "@mui/material";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { hasQuery } from "../utils";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

export type PaginationProps = {
  page: number;
  totalPages: number;
};

const Pagination = ({ page, totalPages }: PaginationProps) => {
  const location = useLocation();

  return (
    <PaginationContainer>
      <MaterialPagination
        count={totalPages}
        page={page}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={
              hasQuery(location.search)
                ? `${location.pathname}${location.search.replace(
                    /&page=\d+/,
                    "",
                  )}&page=${item.page}`
                : `${location.pathname}?page=${item.page}`
            }
            {...item}
          />
        )}
      />
    </PaginationContainer>
  );
};

export default Pagination;
