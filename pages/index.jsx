import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "../components/home/index";
import Command from "../components/command/index";
import Footer from '../components/Footer/Footer'
import OurServices from "../components/OurServices/OurServices.jsx";
import DevelopmentMobile from "../components/DevelopmentMobile/DevelopmentMobile";
import OurClients from "../components/OurClients/OurClients";
import HowWork from "../components/HowWork/HowWork";
import Contacts from "../components/Contacts/Contacts";
import FormsBuilder from "../components/Forms/FormsBuilder";
import { fields } from "../utils/feilds";
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
function Home() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("common");
  const title = 'SignIn';
  const onSubmit = (values) => {
    console.log(values);
  }
  return (
    <>
      <div className="container mx-auto">
        <HomePage />
      </div>
      <OurServices />
      <Command />
      <DevelopmentMobile />
      <OurClients />
      <HowWork />
     <Contacts />
     {/* <h1>sdsdfsdf</h1> */}
     <FormsBuilder title={title} onSubmit={onSubmit} feilds={fields} />
      <Footer/>
    </>
  );
}
export default Home;
