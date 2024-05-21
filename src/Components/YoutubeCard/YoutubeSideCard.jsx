
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import YoutubeSideCards from './YoutubeSideCards';

const YoutubeSideCard = () => {

    

    // const [sideCard, setsideCard] = useState([])
    // useEffect(()=>{
    //   fetch('/sideData.json')
    //   .then(res=> res.json())
    //   .then(data =>setsideCard(data))
    // }, [])
    // console.log(sideCard)

const sideYoutubeData = useLoaderData();
  return (
    <div>
      <YoutubeSideCards sideYoutubeData={sideYoutubeData}></YoutubeSideCards>
    </div>
  );
};

export default YoutubeSideCard;
