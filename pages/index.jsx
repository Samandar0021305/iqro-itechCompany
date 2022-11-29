import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "../components/home/index";
import Command from "../components/command/index";
import Footer from "../components/Footer/Footer";
import OptimizationPage from "../components/optimazition";
import Desktop from "../components/assets/png/Desktop.png";
import Desktop2 from "../components/assets/png/Desktop2.png";
import Desktop3 from "../components/assets/png/Desktop3.png";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const optimalComponents = [
  {
    id: 1,
    title: "optimization Infrastructures",
    desc: "IT Systems of any level of complexity at a convenient time for you",
    color: "blue",
    image: Desktop,
    flex: "",
    arr: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 2,
    title: "it consulting",
    desc: "We can improve the qualifications of your employees thereby increasing the efficiency of your company",
    color: "white",
    image: Desktop2,
    flex: "flex-row-reverse",
    arr: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 3,
    title: "it education centre",
    desc: "We can improve the qualifications of your employees thereby increasing the efficiency of your company",
    color: "blue",
    image: Desktop3,
    flex: "",
    arr: [1, 2, 3, 4, 5, 6],
  },
];

function Home() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("common");
  return (
    <>
      <HomePage />
      <Command />
      {optimalComponents.map((item) => (
        <OptimizationPage key={item.id} item={item} />
      ))}
      <Footer />
    </>
  );
}
export default Home;
