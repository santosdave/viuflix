import React, { useState, useEffect, memo } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../../UI/Layout'
import Cards from '../../components/Cards'
import { API_KEY } from '../../utils/constants'
import instance from '../../axios'

function Trending() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(2);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        instance()
          .get(`trending/all/week?api_key=${API_KEY}&language=en-US&page=1`)
          .then((res) => {
            setData(res.data?.results);
          });
      }, [setData]);
    
      const fetchData = () => {
        instance()
          .get(`trending/all/week?api_key=${API_KEY}&language=en-US&page=${page}`)
          .then((res) => {
            setData([...data, ...res.data?.results]);
            setPage(page + 1);
            if (page === res?.total_pages) {
              setHasMore(false);
            }
          });
      };
  return (
    <Layout title="Trending">
      <InfiniteScroll
        dataLength={data?.length}
        next={fetchData}
        hasMore={hasMore}
      >
        <Cards title="Trending " data={data} />
      </InfiniteScroll>
    </Layout>
  )
}

export default memo(Trending)