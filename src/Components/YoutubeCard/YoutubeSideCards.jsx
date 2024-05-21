import React from 'react';
import YoutubeSideCardsShow from './YoutubeSideCardsShow';

const YoutubeSideCards = ({sideYoutubeData}) => {
    return (
        <div>
            <div>
                {
                    sideYoutubeData ?.map(sideYoutubeDataCategory => <YoutubeSideCardsShow key={sideYoutubeDataCategory.id} sideYoutubeDataCategory={sideYoutubeDataCategory}></YoutubeSideCardsShow>)
                }
            </div>
        </div>
    );
};

export default YoutubeSideCards;