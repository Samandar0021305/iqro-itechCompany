import React from "react";
import { useTranslation } from "next-i18next";

const PageTitle = ({ title }) => {
  const { t } = useTranslation();
  return (
    <h4 className="text-3xl  lg:text-6xl lg:w-1/3  text-blue font-semibold ">
      {t(`titles.${title}`)}
    </h4>
  );
};

export default PageTitle;
