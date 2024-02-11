import Heading from '@/Components/Heading';
import HomeContainer from '@/Components/HomeContainer';
import Layout from '@/Components/Layout';
import Sidebar from '@/Components/Sidebar';

import React from 'react'

const Landing = () => {
  return (
    <Layout>
      <Heading />
      <div className="flex h-screen px-12">
        <HomeContainer />
        <Sidebar />
      </div>
    </Layout>
  );
}

export default Landing
