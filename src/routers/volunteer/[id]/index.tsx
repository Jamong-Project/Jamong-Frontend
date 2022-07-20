import React, { useEffect } from "react";
import { useParams } from "react-router";
import { VolunteerGetDetailType } from "volunteer-type";
import Footer from "../../../components/common/footer";
import Header from "../../../components/common/header";
import HeaderTopSpace from "../../../components/common/header/header-top-space";
import InformationSection from "../../../components/volunteer/volunteer-detail/information-section";
import ReadOnlyMilkdown from "../../../components/volunteer/volunteer-detail/read-only-milkdown";
import useAuthCheck from "../../../hooks/use-auth-check";
import useFetchData from "../../../hooks/use-fetch-data";
import useVolunteerStore from "../../../stores/volunteer-store";

const Volunteer = () => {
  const { id } = useParams();
  const { setVolunteer, setIsLoading } = useVolunteerStore();
  const [data, loading] = useFetchData<VolunteerGetDetailType>(
    `/v1/volunteers/${id}`,
  );

  useAuthCheck();

  useEffect(() => {
    setIsLoading(loading);
    setVolunteer(data);
  }, [data, loading, setIsLoading, setVolunteer]);

  return (
    <div>
      <Header />
      <HeaderTopSpace />
      <InformationSection />
      {data && <ReadOnlyMilkdown text={data.content} />}
      <Footer />
    </div>
  );
};

export default Volunteer;
