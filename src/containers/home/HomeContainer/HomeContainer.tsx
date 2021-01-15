import React from "react";
import { GetStaticProps, GetServerSideProps } from "next";

import { HomeContainerProps as Props } from "./HomeContainer.types";
import Home from "components/home/Home/Home";

const HomeContainer: React.FC<Props> = props => {
  return <Home />;
};

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {}
  };
};

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {}
  };
};

HomeContainer.defaultProps = {};

export default HomeContainer;
