import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "../components/home/index";
import Command from "../components/command/index";
import Footer from "../components/Footer/Footer";
import OurServices from "../components/OurServices/OurServices.jsx";
import DevelopmentMobile from "../components/DevelopmentMobile/DevelopmentMobile";
import OurClients from "../components/OurClients/OurClients";
import HowWork from "../components/HowWork/HowWork";
import Contacts from "../components/Contacts/Contacts";
import OptimizationPage from "../components/optimazition";
import Tools from "../components/tools";
import { optimalComponents, erpSystems } from "../utils/Constants";
import { fields } from "../utils/feilds";
import UiDesign from "../components/ui";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Home() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("common");
  const title = "SignIn";
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <HomePage />
      <OurServices />
      <Command />
      <DevelopmentMobile />
      <OptimizationPage item={erpSystems} />
      <UiDesign />
      {optimalComponents.map((item) => (
        <OptimizationPage key={item.id} item={item} />
      ))}
      <Tools />
      <OurClients />
      <HowWork />
      <Contacts />
      <Footer />
    </>
  );
}
export default Home;
