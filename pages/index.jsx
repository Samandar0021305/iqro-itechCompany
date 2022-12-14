import React, { useState,useEffect } from "react";
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
import UiDesign from "../components/ui";
import Navbar from "../components/Navbar/Navbar";
import dynamic from 'next/dynamic'

import AOS from 'aos';
import 'aos/dist/aos.css';

export const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Home() {

  const [tooglerElement, setTooglerElement] = useState(true)
  const [toogler, setToogler] = useState(true);
  const [hidden, sethidden] = useState("hidden");
  const classes = `${hidden} bg-[#E9F7FF] absolute  h-[100vh] pt-24 left-0 top-0 w-full p-10 rounded-b-3xl z-30 space-y-10 text-white text-center`;
  const toogle = () => {
    hidden == "hidden" ? sethidden("none") : sethidden("hidden");
    setToogler(pre => !pre)
  };
  const navbarHanlder = () => {
    setToogler(p => true)
    setTooglerElement(p => !p)
    hidden == "hidden" ? sethidden("none") : sethidden("hidden");

  }
  const TooglerHandler = () => {
    setToogler(pre => !pre)
    hidden == "hidden" ? sethidden("none") : sethidden("hidden");

  }
  const background = {
    background: "#159EEC",
    display: "flex",
    color: "white",
    borderRadius: "20px",
    width: "70px",
    height: "30px",
  };

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <AnimatedCursor
        innerSize={16}
        outerSize={16}
        color='161,196,253'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}

      />
      
      <Navbar classes={classes} background={background}
        TooglerHandler={TooglerHandler}
        toogle={toogle}
        toogler={toogler}
        navbarHanlder={navbarHanlder}
      />
      {
        toogler ? <>

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
          <Footer /></> : ""
      }

    </>
  );
}
export default Home;
