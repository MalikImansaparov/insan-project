import React from 'react';
import Banner from '../components/main/banner';
import { News } from '../components/main/news';
import { Enroll } from '../components/main/enroll';

const MainPage = () => {
  return (
    <>
      <Banner />
      <News />
      <Enroll />
    </>
  );
};

export default MainPage;
