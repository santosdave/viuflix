import React from 'react'
import NowPlaying from '../../components/NowPlaying';
import Layout from "../../UI/Layout";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../utils/constants";
import Carousel from '../../components/Carousel';


function Popular() {
  const url = `movie/popular?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);

  return (
    <Loading loading={isLoading}>
      <Carousel
        title="Popular Movies"
        style={{ marginTop: 40 }}
      />
    </Loading>
  );
}

function Home() {
  return (
    <Layout title="Home">
      <NowPlaying />
      <Popular />
      <div className="footer">Build on React • 2021</div>
    </Layout>
  )
}

export default Home