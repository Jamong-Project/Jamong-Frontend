import React from "react";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import HeaderTopSpace from "../components/common/header-top-space";
import MilkdownEditor from "../components/milkdown/milkdown-editor";

const VolunteerPost = () => {
  return (
    <>
      <Header />
      <HeaderTopSpace />
      <MilkdownEditor />
      <Footer />
    </>
  );
};

export default VolunteerPost;
