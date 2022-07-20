import React, { useCallback, useState } from "react";
import { VolunteerPostType } from "volunteer-type";
import Footer from "../../../components/common/footer";
import Header from "../../../components/common/header";
import HeaderTopSpace from "../../../components/common/header/header-top-space";
import ImageUploader from "../../../components/post/image-uploader";
import MilkdownEditor from "../../../components/post/milkdown-editor";
import PostButton from "../../../components/post/post-button";
import TitleUploader from "../../../components/post/title-uploader";
import VolunteerToolBar from "../../../components/post/volunteer-tool-bar";
import useAuthCheck from "../../../hooks/use-auth-check";
import { timestampToUnixTimestamp } from "../../../utils";
import { BodyContainer } from "./styles";

const formData = new FormData();

const VolunteerCreate = () => {
  useAuthCheck();

  const [requestBody, setRequestBody] = useState<VolunteerPostType>({
    title: "",
    content: "",
    volunteerDate: timestampToUnixTimestamp(new Date().getTime()),
    applicationDate: timestampToUnixTimestamp(new Date().getTime()),
    maximumPeople: 0,
  });

  const requestCallback = useCallback((key: string, value: any) => {
    setRequestBody((prev) => ({ ...prev, [key]: value }));
  }, []);

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

export default VolunteerCreate;
