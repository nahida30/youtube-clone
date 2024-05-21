import React from 'react';
import YoutubeDatas from './YoutubeDatas';

const YoutubeData = ({youtubeData}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mx-10">
                {
                    youtubeData ?.map(youtubeDataCategory => <YoutubeDatas key={youtubeDataCategory.id} youtubeDataCategory={youtubeDataCategory}></YoutubeDatas>)
                   
                }
            </div>
        </div>
    );
};

export default YoutubeData;