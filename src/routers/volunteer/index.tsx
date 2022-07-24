import React from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import HeaderTopSpace from "../../components/common/header/header-top-space";
import VolunteerList from "../../components/volunteer/volunteer-list";
import useAuthCheck from "../../hooks/use-auth-check";

const Volunteers = () => {
  useAuthCheck();

  return (
    <>
      <Header />
      <HeaderTopSpace />
      <VolunteerList />
      <Footer />
    </>
  );
};

export default Volunteers;
