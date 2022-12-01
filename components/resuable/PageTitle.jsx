import React from "react";
import { useTranslation } from "next-i18next";

const PageTitle = ({ title ,id}) => {
  const { t } = useTranslation();
  return (
    <h4 id={id}  className="text-3xl tracking-wider lg:text-6xl sm:w-1/2 text-blue font-semibold ">
      {t(`titles.${title}`)}
    </h4>
  );
};

export default PageTitle;
