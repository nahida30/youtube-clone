import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import YoutubeCards from './YoutubeCards';

const YoutubeCard = () => {
    const [youtubeDataCategory, setYoutubeDataCategory] = useState({});

    const { id } = useParams();
    const youtubeData = useLoaderData();

    useEffect(() => {
        const findCategory = youtubeData[id];

        setYoutubeDataCategory(findCategory);
    }, [id, youtubeData]);

    return (
        <div>
            <YoutubeCards youtubeDataCategory={youtubeDataCategory} />
        </div>
    );
};

export default YoutubeCard;
