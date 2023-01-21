import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Layout from '../../UI/Layout'
import Cards from '../../components/Cards'
import { API_KEY } from '../../utils/constants'
import instance from '../../axios'
import { useAppContext } from '../../context';

function Popular() {
  const [moviedata, setMovieData] = useState([]);
  const [tvdata, setTvData] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const { movieView } = useAppContext();


  useEffect(() => {
    instance()
      .get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setMovieData(res.data?.results);
      });
    instance()
      .get(`tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setTvData(res.data?.results);
      });
  }, [setMovieData,setTvData ]);

  const fetchData = () => {
    if (movieView) {
      instance()
        .get(`tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        .then((res) => {
          setTvData([...tvdata, ...res.data?.results]);
          setPage(page + 1);
          if (page === res?.total_pages) {
            setHasMore(false);
          }
        });
    } else {
      instance()
        .get(`movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        .then((res) => {
          setMovieData([...moviedata, ...res.data?.results]);
          setPage(page + 1);
          if (page === res?.total_pages) {
            setHasMore(false);
          }
        });
    }

  };
  return (
    <Layout title='Popular'>
      <InfiniteScroll
        dataLength={movieView ? (tvdata?.length) : (moviedata?.length)}
        next={fetchData}
        hasMore={hasMore}
      >
        <Cards title="Popular" data={movieView ? tvdata : moviedata} />
      </InfiniteScroll>
    </Layout>
  )
}
export default Popular