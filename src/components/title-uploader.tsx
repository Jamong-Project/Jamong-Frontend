import { TextField } from "@mui/material";
import React from "react";
import { useInput } from "../hooks/use-input";

const TITLE_LABEL: string = "제목";

export type TitleUploaderProps = {
  callback: (key: string, value: any) => void;
};

const TitleUploader = ({ callback }: TitleUploaderProps) => {
  const value = useInput("", (v) => {
    callback("title", v);
  });

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <TextField
        id="standard-basic"
        margin="normal"
        fullWidth
        value={value.value}
        onChange={value.onChange}
        label={TITLE_LABEL}
      />
    </div>
  );
};

export default TitleUploader;
