import React from 'react'
import './Post.css';
import {Avatar} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatbubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined, Share } from '@material-ui/icons';
function Post({profilrPic, image, username, timestamp, message}) {
    return (
        <div className="post">
        <div className="post_top">
            <Avatar src={profilrPic} className="post_avatar" />
            <div className="post_topInfo">
                <h3>{username}</h3>
                <p>TimeStamp...</p>
            </div>
        </div> 
        <div className="post_bottom">
            <p>{message}</p>
        </div>
        <div className="post_image">
            <img src={image} alt="" />
        </div> 
        <div className="post_options">
        <div className="post_option">
          <ThumbUpIcon />
          <p>Like</p>
          </div>
          <div className="post_option">
              <ChatbubbleOutlineIcon />
              <p>comment</p>
          </div>
          <div className="post_option">
              <NearMeIcon />
              <p>Share</p>
          </div>
          <div className="post_option">
              <AccountCircleIcon />
              <ExpandMoreOutlined />
          </div>

        

        
        </div>          
        </div>
    )
}

export default Post 
