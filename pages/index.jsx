import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "../components/home/index";
import Command from "../components/command/index";
import Footer from '../components/Footer/Footer'
import OurServices from "../components/OurServices/OurServices.jsx";
import DevelopmentMobile from "../components/DevelopmentMobile/DevelopmentMobile";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
function Home() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("common");
  return (
    <>
      <div className="container mx-auto">
        <HomePage />
      </div>
      <OurServices />
      <Command />
      <DevelopmentMobile />
      <Footer/>
    </>
  );
}
export default Home;
