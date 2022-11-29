import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "../components/home/index";
import Command from "../components/command/index";
import Footer from "../components/Footer/Footer";
import OptimizationPage from "../components/optimazition";
import Tools from "../components/tools";
import { optimalComponents, erpSystems } from "../utils/Constants";

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
      <HomePage />
      <Command />
      <OptimizationPage item={erpSystems} />
      {optimalComponents.map((item) => (
        <OptimizationPage key={item.id} item={item} />
      ))}
      <Tools />
      <Footer />
    </>
  );
}
export default Home;
