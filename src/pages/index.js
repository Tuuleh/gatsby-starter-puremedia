import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import Services from "../components/services";

import { useSiteMetadata } from "../hooks/use-site-metadata";

export default () => {
  const { sections } = useSiteMetadata();
  const availableSections = {
      "hero": Hero,
      "portfolio": Portfolio,
      "services": Services
  };

  return(
      <>
        <Layout>
          { sections.map((section, i) => {
            let SectionName = availableSections[section];
            return <SectionName key={i} />
          }) }
        </Layout>
      </>
  )
}

