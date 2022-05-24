import React from "react";
import {
  Pagination as MaterialPagination,
  PaginationItem,
} from "@mui/material";
import styled from "@emotion/styled";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`;

export type PaginationProps = {
  url: string;
  totalPages: number;
};

const Pagination = ({ url, totalPages }: PaginationProps) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

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
