import React, { useState } from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import styled from "@emotion/styled";
import { useInput } from "../hooks/use-input";
import { timestampToUnixTimestamp } from "../utils";

const VOLUNTEER_TIME_PICKER_LABEL: string = "봉사 시간 설정";
const APPLICATION_TIME_PICKER_LABEL: string = "신청 시작 날짜 설정";
const MAXIMUM_PEOPLE_LABEL: string = "최대 인원 설정";
const ZERO_PEOPLE_ERROR_LABEL: string = "0명은 선택할 수 없습니다.";
const EMPTY_PEOPLE_ERROR_LABEL: string = "인원을 선택해주세요.";

const VolunteerToolBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateTimeContainer = styled.div`
  display: flex;
`;

export type VolunteerToolBarProps = {
  callback: (key: string, value: any) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const VolunteerToolBar = ({ callback }: VolunteerToolBarProps) => {
  const [volunteerValue, setVolunteerValue] = React.useState<Date | null>(
    new Date(),
  );
  const [applicationValue, setApplicationValue] = React.useState<Date | null>(
    new Date(),
  );

  const [countState, setCountState] = useState<
    "init" | "empty" | "filled" | "zero"
  >("init");

  const peopleValue = useInput(0, (v) => {
    callback("maximumPeople", v);

    if (v <= 0) {
      setCountState("zero");
      return;
    }

    if (v === "" || v === null || v === undefined) {
      setCountState("empty");
      return;
    }

    setCountState("filled");
  });

  const onChange = (newDate: Date | null, key: string) => {
    switch (key) {
      case "volunteerDate":
        setVolunteerValue(newDate);
        break;
      case "applicationDate":
        setApplicationValue(newDate);
        break;
      default:
        return;
    }

    callback(key, timestampToUnixTimestamp(newDate?.getTime() ?? 0));
  };

  return (
    <VolunteerToolBarContainer>
      <DateTimeContainer>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label={VOLUNTEER_TIME_PICKER_LABEL}
            value={volunteerValue}
            onChange={(newDate) => onChange(newDate, "volunteerDate")}
            disablePast
          />
        </LocalizationProvider>
        <div
          style={{
            width: "1px",
            backgroundColor: "var(--color-primary-gray)",
            margin: "0 16px",
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label={APPLICATION_TIME_PICKER_LABEL}
            value={applicationValue}
            onChange={(newDate) => onChange(newDate, "applicationDate")}
            disablePast
          />
        </LocalizationProvider>
      </DateTimeContainer>
      <TextField
        sx={{ marginLeft: "16px" }}
        value={peopleValue.value}
        onChange={peopleValue.onChange}
        label={MAXIMUM_PEOPLE_LABEL}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        type="number"
        error={countState === "empty" || countState === "zero"}
        helperText={
          {
            empty: EMPTY_PEOPLE_ERROR_LABEL,
            zero: ZERO_PEOPLE_ERROR_LABEL,
            init: "",
            filled: "",
          }[countState]
        }
      />
    </VolunteerToolBarContainer>
  );
};

export default VolunteerToolBar;
