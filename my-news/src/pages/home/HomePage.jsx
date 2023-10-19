import React from 'react';

import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
import Articles from './container/Articles';

import CTA from './container/CTA';
import ArticleDetailPage from '../articleDetail/ArticleDetailPage';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Articles />
      <CTA />
    </>
  );
};
export default HomePage;
