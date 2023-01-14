import React from 'react'
import NowPlaying from '../../components/NowPlaying';
import Layout from "../../UI/Layout";

function Home() {
  return (
    <Layout title="Home">
      <NowPlaying/>
      <div className="footer">Build on React • 2021</div>
    </Layout>
  )
}

export default Home