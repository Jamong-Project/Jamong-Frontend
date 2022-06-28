import React from "react";
import { useParams } from "react-router";
import { VolunteerGetDetailType } from "volunteer-type";
import Footer from "../../../components/common/footer";
import Header from "../../../components/common/header";
import HeaderTopSpace from "../../../components/common/header/header-top-space";
import InformationSection from "../../../components/volunteer/volunteer-detail/information-section";
import ReadOnlyMilkdown from "../../../components/volunteer/volunteer-detail/read-only-milkdown";
import useFetchData from "../../../hooks/use-fetch-data";

const Volunteer = () => {
  const { id } = useParams();
  const [data, loading, error] = useFetchData<VolunteerGetDetailType>(
    `/v1/volunteers/${id}`,
  );

  return (
    <div>
      <Header />
      <HeaderTopSpace />
      {data && <InformationSection volunteer={data} />}
      {data && <ReadOnlyMilkdown text={data.content} />}
      <Footer />
    </div>
  );
};

export default Volunteer;
