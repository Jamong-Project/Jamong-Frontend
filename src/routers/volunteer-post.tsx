import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import HeaderTopSpace from "../components/common/header-top-space";
import ImageUploader from "../components/image-uploader";
import MilkdownEditor from "../components/milkdown/milkdown-editor";
import PostButton from "../components/post-button";
import TitleUploader from "../components/title-uploader";
import VolunteerToolBar from "../components/volunteer-tool-bar";
import { VolunteerPostType } from "../models/volunteer-post-type";
import { timestampToUnixTimestamp } from "../utils";

const BodyContainer = styled.div`
  > * {
    margin: 16px 0;
  }

  margin: 16px auto;
  max-width: 1280px;
  width: 100%;
`;

const formData = new FormData();

const VolunteerPost = () => {
  const [requestBody, setRequestBody] = useState<VolunteerPostType>({
    title: "",
    content: "",
    volunteerDate: timestampToUnixTimestamp(new Date().getTime()),
    applicationDate: timestampToUnixTimestamp(new Date().getTime()),
    maximumPeople: 0,
  });

  const requestCallback = useCallback(
    (key: string, value: any) => {
      setRequestBody((prev) => ({ ...prev, [key]: value }));
    },
    [requestBody],
  );

  return (
    <>
      <Header />
      <HeaderTopSpace />
      <BodyContainer>
        <TitleUploader callback={requestCallback} />
        <VolunteerToolBar callback={requestCallback} />
        <MilkdownEditor callback={requestCallback} />
        <ImageUploader formData={formData} />
        <PostButton formData={formData} requestBody={requestBody} />
      </BodyContainer>
      <Footer />
    </>
  );
};

export default VolunteerPost;
