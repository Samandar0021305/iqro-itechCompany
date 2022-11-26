import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "../components/home";
import Command from "../components/command";
import Footer from '../components/Footer/Footer'

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
      <Command />
      <Footer/>
    </>
  );
}
export default Home;
