import React from "react";
import {
  Pagination as MaterialPagination,
  PaginationItem,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { changePage, hasQuery } from "../../../utils";
import { PaginationContainer } from "./styles";

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
                ? changePage(location.pathname, location.search, item.page)
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
