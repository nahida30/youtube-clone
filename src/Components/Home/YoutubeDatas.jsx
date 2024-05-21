import React from 'react';
import { Link } from 'react-router-dom';

const YoutubeDatas = ({youtubeDataCategory}) => {
    const {id,thumbnail, userImage, userName, userEmail, timeAgo} = youtubeDataCategory || {}
    return (
        <div className="max-w-sm bg-white  rounded-lg ">
   
       <Link to={`/youtubecard/${id}`}>
       <img className="rounded-lg w-96 h-52" src={thumbnail} alt="" />
  
    
  <div class="flex items-center -mt-5">
                  <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full border border-black" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="Neil image" />
                      
                  </div>
                  <div class="flex-1 min-w-0 ms-4 mt-5">
                      <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                          {userName}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          {userEmail}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                         {timeAgo}
                      </p>
                  </div>
                  
              </div>
              
              </Link>
    </div>
    );
};

export default YoutubeDatas;