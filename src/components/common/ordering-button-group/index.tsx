import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { OrderingButtonGroupContainer } from "./styles";

export type OrderingButtonGroupProps = {
  path: string;
  current: OrderingType;
};

const OrderingButtonGroup = ({ path, current }: OrderingButtonGroupProps) => {
  const ordering: { [key in OrderingType]: string } = {
    new: "최신순",
    popular: "인기순",
    title: "제목순",
    application: "신청시작순",
    volunteer: "봉사시작순",
  };

  return (
    <OrderingButtonGroupContainer>
      <ButtonGroup disableRipple>
        {Object.keys(ordering).map((value) => (
          <Button
            key={value}
            component={Link}
            to={`/${path}?ordering=${value}`}
            variant={value === current ? "contained" : "outlined"}
          >
            {ordering[value as OrderingType]}
          </Button>
        ))}
      </ButtonGroup>
    </OrderingButtonGroupContainer>
  );
};

export default OrderingButtonGroup;
