import React from 'react';

const YoutubeSideCardsShow = ({sideYoutubeDataCategory}) => {
    const {id,thumbnail, userImage, userName, userEmail, timeAgo, sideCardImage} = sideYoutubeDataCategory || {}
    return (
       
      <div className="card card-side w-[100%] h-[25%] bg-base-100  mt-5 -ml-20 ">
      <figure className='w-[100%] h-[110px] rounded-lg'><img className='w-77 h-[110px]  rounded-lg' src={sideCardImage} alt="Movie"/></figure>
      <div className='ml-2'>
      <h2 className="card-title text-lg w-56">New movie is released!</h2>
      <p>Click the button to watch on Jetflix app.</p>
      <p class="text-sm text-gray-500 truncate dark:text-gray-400">{timeAgo}</p>
    </div>
</div>

     
    );
};

export default YoutubeSideCardsShow;