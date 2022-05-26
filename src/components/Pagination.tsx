import React from "react";
import {
  Pagination as MaterialPagination,
  PaginationItem,
} from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

export type PaginationProps = {
  url: string;
  page: number;
  totalPages: number;
};

const Pagination = ({ url, page, totalPages }: PaginationProps) => {
  return (
    <PaginationContainer>
      <MaterialPagination
        count={totalPages}
        page={page}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/${url}${item.page === 1 ? "" : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </PaginationContainer>
  );
};

export default Pagination;
