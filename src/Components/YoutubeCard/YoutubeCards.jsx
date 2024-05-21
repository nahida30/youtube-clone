import React, { useState } from 'react';
import YoutubeSideCard from './YoutubeSideCard';
import img1 from "/images/embadded.png"
import img2 from "/images/whatsapp.png"
import img3 from "/images/facebook.jpg"
import img4 from "/images/X icon.png"
import img5 from "/images/email.png"
import img6 from "/images/reddit.png"
import img7 from "/images/instagram.png"
import Comment from './Comment';

const YoutubeCards = ({ youtubeDataCategory }) => {
    const { thumbnail, userImage, userName, userEmail, timeAgo } = youtubeDataCategory || {};
    const [likesCount, setLikesCount] = useState(0);
    const [dislikesCount, setDislikesCount] = useState(0);
    const [likeClicked, setLikeClicked] = useState(false);
    const [dislikeClicked, setDislikeClicked] = useState(false);

    const handleLikeButtonClick = () => {
        if (!likeClicked) {
            setLikesCount(likesCount + 1);
            setLikeClicked(true);
            setDislikesCount(0);
            setDislikeClicked(false);
        } else {
            setLikesCount(0);
            setLikeClicked(false);
        }
    };

    const handleDislikeButtonClick = () => {
        if (!dislikeClicked) {
            setDislikesCount(dislikesCount + 1);
            setDislikeClicked(true);
            setLikesCount(0);
            setLikeClicked(false);
        } else {
            setDislikesCount(0);
            setDislikeClicked(false);
        }
    };

    // Check if the thumbnail is available before rendering
    if (!thumbnail) {
        return <div>Loading...</div>; // or any loading indicator/message you prefer
    }

   

    return (
        <div className='flex'>
            <div className='px-10 mt-5 relative z-1'>
       <video class=" w-[90%] rounded-lg" controls>
       <source src="/docs/videos/flowbite.mp4" type="video/mp4" />   
       </video>
       <h1 className='text-xl font-semibold'>Video Title | Content Creator | Content | Some Comment</h1>


       <div className='w-[100%] grid grid-cols-2'>
                 <div  className="flex items-center mt-2 w-[80%] ">
                 <div className="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full border border-black" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="Neil image" />
                      
                  </div>
                  <div className="flex-1 min-w-0 ms-4 mt-2 w-[10%]">
                      <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                          {userName}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {userEmail}
                      </p>
                     
                  </div> 
                  <div>
                    {/* <button className='w-28 h-10 rounded-full bg-black text-white text-semibold'>Subscribe</button>  */}
                    <ul className="menu menu-horizontal px-1 ">
     
      <li>
        <details>
          <summary className='w-36 h-10 rounded-full bg-black text-white text-semibold hover:bg-black ...'>
            Subscribe
          </summary>
          <ul className=" rounded-t-none w-36 ">
            <li><a >🔔 All</a></li>
            <li><a >🔔 Personal</a></li>
            <li><a >🔕 None</a></li>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<li className='btn'  onClick={()=>document.getElementById('my_modal_1').showModal()}> 🔕 Unsubscribe</li>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">

    <p className="py-4">Unsubscribe from this?</p>
    <div className="modal-action">
      <form method="dialog">
        <button className='btn'>Cancle</button>
        <button className="btn">Unsubscribe</button>
      </form>
    </div>
  </div>
</dialog>
          </ul>
        </details>
      </li>
    </ul>
                    
                  </div>    
                  
                </div> 


                <div className='w-[113%]  flex items-center -ml-14'>
                <div dir="ltr ">
    
                <button
                className='ml-2 p-2 bg-[#dbdbdb] text-black w-20 h-10 rounded-s-full hover:bg-[#cdcdcd] active:bg-[#cdcdcd] focus:outline-none border-r-[1px] border-slate-100'
                onClick={handleLikeButtonClick}
            >
                👍 {likesCount}
            </button>
  
                   </div>
                   
                   <div dir="rtl">

                   <button
                className='p-2 bg-[#dbdbdb] text-black w-20 h-10 rounded-s-full hover:bg-[#cdcdcd] active:bg-[#cdcdcd] focus:outline-none'
                onClick={handleDislikeButtonClick}
            >
                👎 {dislikesCount}
            </button>
                  </div>

                  <div>
                    {/* <button className='ml-5 w-24 h-10 bg-[#dbdbdb] rounded-full hover:bg-[#cdcdcd] active:bg-[#cdcdcd] focus:outline-none  ...'>↪ Share</button> */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className='ml-5 w-24 h-10 bg-[#dbdbdb] rounded-full hover:bg-[#cdcdcd] active:bg-[#cdcdcd] focus:outline-none  ...' onClick={()=>document.getElementById('my_modal_3').showModal()}>↪ Share</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-semibold text-lg">Share</h3>
    {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
    <div className='flex gap-5'>
      <img className='w-12 h-12 border border-black rounded-full' src={img1} alt="" />
      
      <img className='w-12 h-12 border border-black rounded-full' src={img2} alt="" />
      <img className='w-12 h-12 border border-black rounded-full' src={img3} alt="" />
      <img className='w-12 h-12 border border-black rounded-full' src={img4} alt="" />
      <img className='w-12 h-12 border border-black rounded-full' src={img5} alt="" />
      <img className='w-12 h-12 border border-black rounded-full' src={img6} alt="" />
      <img className='w-12 h-12 border border-black rounded-full' src={img7} alt="" />

    </div>
    
<form className="max-w-md mx-auto mt-5">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> 
        
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Copy</button>
    </div>
</form>

  </div>
</dialog>
                  </div>
                  <div>
                    <button className='ml-5 w-28 h-10 bg-[#dbdbdb] rounded-full hover:bg-[#cdcdcd] active:bg-[#cdcdcd] focus:outline-none  ...'>⬇️ Download</button>
                  </div>

                 
                  <div className="dropdown dropdown-end ml-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full bg-[#dbdbdb] ">
         <p className='mt-2 font-bold'>...</p>
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
        <li> <a className="justify-between"> Clip</a>
        </li>
        <li><a>Save</a></li>
        <li><a>Report</a></li>
      </ul>
    </div>

                </div>

                  
              </div>

              <div className='w-[90%] h-16 bg-[#dbdbdb] mt-2 rounded-lg p-2' >
                <p className='w-96 font-semibold text-black'>231K views  Streamed 1 year ago  Reading Gap Fill </p>
                <button className='text-black'>more...</button>

              </div>

              <div className='flex gap-20 mt-5'>
                <div>
                  <p className='text-xl font-bold text-black'>786 Comments</p>
                </div>
                <div>
                  <p className='text-base text-black font-semibold'>Sort By</p>
                </div>
              </div>


              <div>

                {/* comment part  */}
              <div  className="flex items-center mt-2 w-[90%] ">
                 <div className="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full border border-black" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="Neil image" />
                      
                  </div>
                  <div className="flex-1 min-w-0 ms-4  w-[100%]">
                      <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                         Add a comment
                      </p>
                      <hr/>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                         
                      </p>
                     
                  </div> 
                </div> 


                <Comment></Comment>
              </div>

      </div>

    <YoutubeSideCard></YoutubeSideCard>

        </div>
      
    );
};

export default YoutubeCards;
