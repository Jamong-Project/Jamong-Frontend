import React from "react";
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

const VolunteerToolBarContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 16px auto;
  justify-content: space-between;
  display: flex;
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

  const peopleValue = useInput(0, (v) => {
    callback("maximumPeople", v);
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
      />
    </VolunteerToolBarContainer>
  );
};

export default VolunteerToolBar;
