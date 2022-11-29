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
import Contacts from "../components/Contacts/Contacts"
import OptimizationPage from "../components/optimazition";
import Desktop from "../components/assets/png/Desktop.png";
import Desktop2 from "../components/assets/png/Desktop2.png";
import Desktop3 from "../components/assets/png/Desktop3.png";
import Desktop4 from "../components/assets/png/Desktop4.png";
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const optimalComponents = [
  {
    id: 1,
    title: "optimization Infrastructures",
    desc: "text2",
    color: "blue",
    image: Desktop,
    flex: "",
    arr: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 2,
    title: "it consulting",
    desc: "text4",
    color: "white",
    image: Desktop2,
    flex: "flex-row-reverse",
    arr: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 3,
    title: "it education centre",
    desc: "text5",
    color: "blue",
    image: Desktop3,
    flex: "",
    arr: [1, 2, 3, 4, 5, 6],
  },
];
const erpSystems = {
  id: 1,
  title: "erp systems",
  desc: "text3",
  color: "blue",
  image: Desktop4,
  flex: "",
  arr: [1, 2, 3, 4, 5, 6],
};

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
      <OurClients />
      <HowWork />
     <Contacts />
      <Command />
      <OptimizationPage item={erpSystems} />
      {optimalComponents.map((item) => (
        <OptimizationPage key={item.id} item={item} />
      ))}
      <Footer />
    </>
  );
}
export default Home;
