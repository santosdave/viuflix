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
        data={data?.results}
        style={{ marginTop: 40 }}
      />
    </Loading>
  );
}

function TopRated() {
  const url = `movie/top_rated?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);
  return (
    <Loading loading={isLoading}>
      <Carousel
        title="Top Rated"
        data={data?.results}
        style={{ marginTop: 40 }}
      />
    </Loading>
  );
}
function OnTheAir() {
  const url = `trending/all/week?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);
  return (
    <Loading loading={isLoading}>
      <Carousel
        title="Trending"
        data={data?.results}
        style={{ marginTop: 40 }}
      />
    </Loading>
  );
}

function Home() {
  return (
    <Layout title="Home">
      <NowPlaying />
      <OnTheAir/>
      <Popular />
      <TopRated/>
      <div className="footer">Rebuilt in React • 2022  • Powered by The Movie DB </div>
    </Layout>
  )
}

export default Home