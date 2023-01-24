import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../../UI/Layout';
import Loading from "../../UI/Loading";
import { API_KEY } from '../../utils/constants'
import Carousel from '../../components/Carousel';
import RenderIf from '../../utils/renderIf';
import useFetch from '../../hooks/useFetch';
import { useAppContext } from '../../context';
import Details from '../../components/Details';
import Tabs from '../../components/Tabs';
function SingleMovie() {
  const { movieView } = useAppContext();
  const { id } = useParams();
  const [url, setUrl] = useState(`movie/${id}?api_key=${API_KEY}&language=en-US`);

  useEffect(() => {
    if (movieView) {
        setUrl( `tv/${id}?api_key=${API_KEY}&language=en-US`);
    } else {
      setUrl(`movie/${id}?api_key=${API_KEY}&language=en-US`);
    }
  },[setUrl])
  const { data, isLoading } = useFetch(url);

  return (
    <Layout title={data?.title}>
      <Details details={data} loading={isLoading}/>
      <Tabs id={id}/>
      
    </Layout>
  )
}
export default SingleMovie