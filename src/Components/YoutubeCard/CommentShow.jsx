import React from 'react';

const CommentShow = ({commentDataCategory}) => {
    const {id,thumbnail, userImage, userName, userEmail, timeAgo} = commentDataCategory || {}
    return (
        <div  className="flex items-center mt-6 w-[90%] ">
                 <div className="flex-shrink-0  -mt-4">
                      <img class="w-8 h-8 rounded-full border border-black" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="Neil image" />
                      
                  </div>
                  <div className="flex-1 min-w-0 ms-4  w-[100%] mt-5">
                      <p className="font-medium text-gray-900 truncate dark:text-white ">
                        {userName} <span className='text-gray-500 text-xs'>5 Hours Ago</span>
                      </p>
                    
                      <p className="text-black truncate dark:text-gray-400">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. At eum architecto omnis labore perferendis eos laboriosam. Nulla eligendi distinctio omnis.
                      </p>
                      <div className='flex gap-5 mt-2'>
                        <div>
                        <button>👍 2</button>
                        </div>

                        <div>
                        <button>👎</button>
                        </div>
                        <div>
                          <button className='text-sm text-black'>Reply</button>
                        </div>
                      </div>
                     
                  </div> 
                </div> 
    );
};

export default CommentShow;