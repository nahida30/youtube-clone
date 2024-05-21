import React from 'react';
import YoutubeComment from './YoutubeComment';
import { useLoaderData } from 'react-router-dom';

const Comment = () => {
    const commentData = useLoaderData()
    console.log(commentData);
    return (
        <div>
            <YoutubeComment commentData={commentData}></YoutubeComment>
        </div>
    );
};

export default Comment;