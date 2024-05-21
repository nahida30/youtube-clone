import React from 'react';
import logo from "/images/logo.png";
import { Link } from 'react-router-dom';
import Menubar from './Menubar';
import img1 from "/images/user.png"

const Navbar = () => {
    return (
     <div>
         <div className="navbar bg-base-100 px-10 ">
  <div className="navbar-start">
    <div>
    <div className="drawer z-10">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

    <label htmlFor="my-drawer" className="btn bg-transparent drawer-button rounded-full">☰</label>
  </div> 
  <div className="drawer-side z-10 mt-16">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-2 w-80 min-h-full bg-base-200 text-base-content">

      <li><a href="/" className='font-semibold text-lg'>🏠 Home</a></li>
      <li><a className='font-semibold text-lg'>🎬 Shorts</a></li>
      <li><a className='font-semibold text-lg'>📽 Subscription</a></li>
      <hr /> 
      <div className='flex gap-5 px-5 text-lg font-semibold'>
      <h1>You </h1>
      <h1>&gt;</h1>
      </div>
      <li><a className='font-semibold text-lg'>👤 Your Channel</a></li>
      <li><a className='font-semibold text-lg'>🕓 History</a></li>
      <li><a className='font-semibold text-lg'>🎥 Your Videos</a></li>
      <li><a className='font-semibold text-lg'>🕗 Watch Later</a></li>
      <li><a className='font-semibold text-lg'>👍 Liked Videos</a></li>
      <hr />
      <h1 className=' px-5 text-lg font-semibold'>Subscriptions</h1>
      <li >
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={img1} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ">
                        <p className="font-semibold text-lg text-gray-900 truncate dark:text-white">Neil Sims</p>
                        </div>
                        <div className='mr-20'>•</div>
                </div>
            </li>
      <li>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={img1} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ">
                        <p className="font-semibold text-lg text-gray-900 truncate dark:text-white">Neil Sims</p>
                        </div>
                        <div className='mr-20'>•</div>
                </div>
            </li>
      <li>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={img1} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ">
                        <p className="font-semibold text-lg text-gray-900 truncate dark:text-white">Neil Sims</p>
                        </div>
                        <div className='mr-20'>•</div>
                </div>
            </li>
      <li>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={img1} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ">
                        <p className="font-semibold text-lg text-gray-900 truncate dark:text-white">Neil Sims</p>
                        </div>
                        <div className='mr-20'>•</div>
                </div>
            </li>
      <li>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={img1} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ">
                        <p className="font-semibold text-lg text-gray-900 truncate dark:text-white">Neil Sims </p>
                        </div>
                        <div className='mr-20'>•</div>
                </div>
            </li>
      <li>
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={img1} alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ">
                        <p className="font-semibold text-lg text-gray-900 truncate dark:text-white">Neil Sims</p>
                        </div>
                        <div className='mr-20'>•</div>
                </div>
            </li>

            <hr />
            <h1 className=' px-5 text-lg font-semibold'>Explore</h1>
            <li><a className='font-semibold text-lg'>🔥Trending</a></li>
            <li><a className='font-semibold text-lg'>♫  Music</a></li>

      <hr />
      <h5 className='w-36 mb-2'>About Press Copyright Contact us Creators Advertise Developers</h5>
      <h5 className='mb-2'>Terms Privacy Policy & Safety How YouTube worksTest new features</h5>
      <h5 className='mb-20'>© 2024 Google LLC</h5>
      
    </ul>
  </div>
</div>
    </div>
    
  <a href="/">
  <img src={logo} alt="logo" className='w-24' />
  </a>
  </div>
  <div className="navbar-center hidden lg:flex">
   
<form className="max-w-lg mx-auto">
    <div className="flex">
        
       
        <div class="relative w-[500px] ">
            <input type="search"  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full   border  focus:ring-black-500 focus:border-black-500  dark:placeholder-gray-400 dark:text-white dark:focus:border-black-500" placeholder="Search" required />
            <button type="submit" className="absolute w-16 top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-transparent border border-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-black-300 dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800 rounded-r-full">
                <svg class="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>

    {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div> */}
 
  </div>

  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
        <div  className="flex items-center">
                 <div className="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full border border-black -mt-5" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="Neil image" />
                      
                  </div>
                  <div className="flex-1 min-w-0">
                      <p>
                         Nahida Zaman Bina
                      </p>
                      <p>
                        nahidazmn@gmail.com
                      </p>
                      <Link className='text-blue-500'>View Your Channel</Link>   
                  </div> 
                </div> 
        </li>
        <hr />
        <li>
        <div  className="flex items-center">
                 <div className="flex-shrink-0">
                      {/* <img class="w-8 h-8 rounded-full border border-black " src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="Neil image" /> */}
                      <h1 class="w-8 h-8 rounded-full font-bold text-2xl ">G</h1>
                      
                  </div>
                  <div className="flex-1 min-w-0">
                      <p>
                         Google Account
                      </p>
                     
                  </div> 
                </div> 
        <div  className="flex items-center">
                 <div className="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full border border-black " src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="Neil image" />
                      
                  </div>
                  <div className="flex-1 min-w-0">
                      <p>
                         Switch Account
                      </p>
                     
                  </div> 
                </div> 
        <div  className="flex items-center">
                 <div className="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full border border-black " src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="Neil image" />
                      
                  </div>
                  <div className="flex-1 min-w-0">
                      <p>
                         Sign Out
                      </p>
                     
                  </div> 
                </div> 


        </li>
        <hr />
        <li>

        <div  className="flex items-center">
                 <div className="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full border border-black " src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="Neil image" />
                      
                  </div>
                  <div className="flex-1 min-w-0">
                      <p>
                         Send Feedback
                      </p>
                     
                  </div> 
                </div> 

        </li>
      </ul>
    </div>
    
  </div>

 
    <Menubar></Menubar>

  
     </div>
  


    );
};

export default Navbar;