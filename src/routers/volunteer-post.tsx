/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import HeaderTopSpace from "../components/common/header-top-space";
import ImageUploader from "../components/image-uploader";
import MilkdownEditor from "../components/milkdown/milkdown-editor";
import TitleUploader from "../components/title-uploader";
import { VolunteerPostType } from "../models/volunteer-post-type";

const VolunteerPost = () => {
  const formData = new FormData();
  const [requestBody, setRequestBody] = useState<VolunteerPostType>({
    title: "",
    content: "",
    volunteerDate: 0,
    applicationDate: 0,
    maximumPeople: 0,
  });

  const requestCallback = (key: string, value: any) => {
    setRequestBody((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <Header />
      <HeaderTopSpace />
      <TitleUploader callback={requestCallback} />
      <MilkdownEditor />
      <ImageUploader formData={formData} />
      <Footer />
    </>
  );
};

export default VolunteerPost;
