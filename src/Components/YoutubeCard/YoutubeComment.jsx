import React from 'react';
import CommentShow from './CommentShow';

const YoutubeComment = ({commentData}) => {
    return (
        <div>
        <div>
            {
                commentData ?.map(commentDataCategory => <CommentShow key={commentDataCategory.id} commentDataCategory={commentDataCategory}></CommentShow>)
               
            }
        </div>
    </div>
    );
};

export default YoutubeComment;