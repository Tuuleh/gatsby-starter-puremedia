import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero"

import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { sections } = useSiteMetadata();
  const availableSections = {
    "hero": Hero,
  };

  return(
      <>
        <Layout>
          { sections.map(section => {
            let SectionName = availableSections[section];
            return <SectionName />
          }) }
        </Layout>
      </>
  )
}

