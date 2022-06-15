import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router";

const FAILED_TO_POST_MESSAGE: string = "업로드 실패";
const POST_MESSAGE: string = "업로드";
const POSTING_MESSAGE: string = "업로드 중...";
const GO_BACK_MESSAGE: string = "업로드 완료하기";

export type PostButtonProps = {
  formData?: FormData;
  requestBody: any;
  style?: any;
};

const PostButton = ({ formData, requestBody, style }: PostButtonProps) => {
  const navigate = useNavigate();
  const [condition, setCondition] = useState<
    "none" | "loading" | "error" | "done"
  >("none");

  const onClick = () => {
    setCondition("loading");

    if (formData) {
      formData!.append(
        "request",
        new Blob([JSON.stringify(requestBody)], {
          type: "application/json",
        }),
      );
    }

    fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/volunteers`, {
      method: "POST",
      headers: {},
      body: formData,
    })
      .then((response) => response.json())
      .then(() => setCondition("done"))
      .catch(() => setCondition("error"));
  };

  return (
    <LoadingButton
      onClick={condition === "done" ? () => navigate(-1) : onClick}
      variant="contained"
      sx={{ ...style, height: "48px" }}
      fullWidth
      loading={condition === "loading"}
      disableRipple
    >
      {
        {
          none: POST_MESSAGE,
          error: FAILED_TO_POST_MESSAGE,
          done: GO_BACK_MESSAGE,
          loading: POSTING_MESSAGE,
        }[condition]
      }
    </LoadingButton>
  );
};

PostButton.defaultProps = {
  formData: new FormData(),
  style: null,
};

export default PostButton;
