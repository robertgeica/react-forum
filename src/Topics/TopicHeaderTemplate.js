import React from 'react';
import './TopicHeaderTemplate.css';


const TopicHeader = () => {

    return (
        <div className="TopicHeader">

            <div className="topic-header">
                <div className="left-header-bar">
                    <h4>Title</h4>

                    
                </div>

                <div className="right-header-bar">
                    <p id="topic-author">Author</p>
                    <p id="topic-likes">Likes</p>
                    <p id="topic-replies">Replies</p>
                    <p id="topic-views">Views</p>
                    <p id="topic-activity-date">Activity</p>


                </div>
            </div>
        </div>
    )
}

export default TopicHeader;