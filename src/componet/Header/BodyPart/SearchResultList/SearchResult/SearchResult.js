import {DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined} from '@ant-design/icons';
import {Avatar, Comment, Tooltip} from 'antd';
import moment from 'moment';
import React, {createElement, useState} from 'react';
import './SearchResult.css'
import BlogCarousel from "./BlogCarousel/BlogCarousel";
//ant 的评论

const SearchResult = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const [replay, setReplay] = useState(11)
    const [images, setImages] = useState("")

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like tooltip " title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">评论：{replay}</span>,
    ];
    return (
        <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
            content={
                <div>
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficientlydf.
                    </p>
                    <BlogCarousel/>
                </div>


            }
            datetime={
                <div>
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span className="insertTime">{moment().fromNow()}</span> <span></span>

                    </Tooltip>
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span className="insertTime">{moment().format('YYYY-MM-DD HH:mm:ss')}</span>
                    </Tooltip>
                </div>


            }

        />
    );
};

export default SearchResult;