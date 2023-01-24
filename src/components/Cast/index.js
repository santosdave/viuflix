import React, {useEffect,useState} from 'react'

import Loading from "../../UI/Loading";
import Carousel from "../Carousel";
import EmptyMessage from "../EmptyMessage";

import { useAppContext } from '../../context';
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../utils/constants";

function Cast({id}) {
  const { movieView } = useAppContext();
  const [url, setUrl] = useState();

  useEffect(() =>{
    if(movieView){
      setUrl(`tv/${id}/credits?api_key=${API_KEY}&language=en-US`)
    }else{
      setUrl(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    }
  },[setUrl]);

  const {data ,isLoading} = useFetch(url);
  return (
   <Loading loading={isLoading}  isFull>
      {data.cast?.length ?(
          <Carousel 
          data={data?.cast}
          isCast
          style={{margin: "20px 0 80px 0"}}
          />
      ):(
        <EmptyMessage msg="No data" isHalf/>
      )}
   </Loading>
  )
}
export default Cast