import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import YoutubeSideCard from '../YoutubeCard/YoutubeSideCard';

const myCreatedRoute = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`data.json`)
      },
      {
        path: '/youtubecard/:id',
        element: <YoutubeCard></YoutubeCard>,
        loader: ({ params }) => fetch(`data.json`)
      },
      {
        path: '/youtubecard/:id',
        element: <YoutubeSideCard></YoutubeSideCard>,
        loader: () => fetch(`sideData.json`)
      },
      {
        path: '/youtubecard/:id',
        element: <Comment></Comment>,
        loader: () => fetch(`data.json`)
      }
      
      
    ]
  }
]);

export default myCreatedRoute;
