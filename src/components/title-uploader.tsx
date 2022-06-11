import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useInput } from "../hooks/use-input";

const TITLE_LABEL: string = "제목";
const WRONG_TITLE_HELPER_LABEL: string = "제목을 입력해주세요.";

export type TitleUploaderProps = {
  callback: (key: string, value: any) => void;
};

const TitleUploader = ({ callback }: TitleUploaderProps) => {
  const [titleState, setTitleState] = useState<"init" | "empty" | "filled">(
    "init",
  );

  const value = useInput("", (v) => {
    callback("title", v);
    setTitleState(v.length > 0 ? "filled" : "empty");
  });

  return (
    <TextField
      id="standard-basic"
      margin="normal"
      fullWidth
      value={value.value}
      onChange={value.onChange}
      label={TITLE_LABEL}
      error={titleState === "empty"}
      helperText={titleState === "empty" && WRONG_TITLE_HELPER_LABEL}
    />
  );
};

export default TitleUploader;
