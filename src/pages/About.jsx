import React from "react";
import Container from "../components/Container";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h2>{t("Welcome to React")}</h2>
      <h4>{t("name question")}</h4>
    </Container>
  );
};

export default About;
