import React from "react";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import HeaderTopSpace from "../components/common/header-top-space";
import VolunteerList from "../components/volunteer-list";

const Volunteer = () => {
  return (
    <>
      <Header />
      <HeaderTopSpace />
      <VolunteerList />
      <Footer />
    </>
  );
};

export default Volunteer;
