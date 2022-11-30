import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import NavLogo from "../../assets/navbar-logo.svg";
import Image from "next/image";
import { NavbarList } from "../../utils/Constants";
import Button from "../BaseButton/BaseButton";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

function Navbar() {
  // const [toogleEl,setToogleEl] = useState(false)
  const [hidden, sethidden] = useState("hidden");
  const classes = `${hidden} bg-[#E9F7FF] absolute h-[100vh] pt-36 left-0 top-0 w-full p-10 rounded-b-3xl z-30 space-y-10 text-white text-center`;
  const toogle = () => {
    hidden == "hidden" ? sethidden("none") : sethidden("hidden");
  };

  const background = {
    background: "#159EEC",
    display: "flex",
    color: "white",
    borderRadius: "20px",
    width: "70px",
    height: "30px",
  };
  const router = useRouter();
  const handleLocaleChange = (event) => {
    const value = event.target.value;
    router.push(router.route, router.asPath, {
      locale: value,
    });
  };
  const { t } = useTranslation("common");
  const [navTextList, setnavTextList] = useState(NavbarList);
  return (
    <nav className="w-full mt-2 top-0 bg-white z-10 dark:bg-slate-900">
      <div className="container  pl-2 mx-auto py-5 flex sm:pl-2 sm:pr-2 pr-2 items-center md:justify-between justify-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={NavLogo}
            className="lg:w-40 lg:h-14 w-24 h-5"
            alt="navbar logo"
          />
        </div>
        <div className="flex items-center sm:ml-auto sm:mr-4  ml-auto">
          <ul className="flex space-x-10 items-center text-gray-600 dark:text-gray-100 mt-0.5 font-400  font-normal text-sm capitalize">
            {navTextList.map((post, index) => {
              return (
                <li
                  className="hover:text-gray-500  mr-5 items-center justify-center lg:flex hidden "
                  key={post.id}
                >
                  <a key={post.id + 7} href={post.key}>
                    {t(post.text)}
                  </a>
                </li>
              );
            })}

            <li>
              <select
                onChange={handleLocaleChange}
                className="text-gray-600 bg-[#fff] mr-6"
                value={router.locale}
              >
                <option value="en">Eng</option>
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
              </select>
            </li>
            <li className="hover:text-gray-500  mr-5 items-center justify-center lg:flex hidden ">
              <a
                style={background}
                className="flex items-center justify-center"
                href="tel:998930026613"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          onClick={toogle}
          className="space-y-1 visible lg:hidden cursor-pointer z-40"
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
        <ul className={classes}>
          {navTextList.map((post, id) => {
            return <li key={post.id + 15}>{t(post.text)}</li>;
          })}
          <Button className="bg-blue py-3 px-10"> Contact </Button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
