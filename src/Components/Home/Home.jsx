import React from 'react';
import { useLoaderData } from 'react-router-dom';
import YoutubeData from './YoutubeData';

const Home = () => {
    const youtubeData = useLoaderData()
    console.log(youtubeData);

    return (
        

<div>
    <YoutubeData youtubeData={youtubeData}></YoutubeData>
</div>


    );
};

export default Home;