import Heading from '@/components/Heading';
import HomeContainer from '@/components/HomeContainer';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar';
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
