import React from 'react';
import {Link} from 'react-router-dom';

const Category = ({linkTo, topicImage, topicTitle, topicDescription, totalTopics, activeUsers, lastActivityDate, lastTopictitle}) => {
    
    return (
        <div className="categories">
            <div className="left-side">
                <div className="topic-image">
                    <img src={topicImage}></img>
                </div>

                <div className="topic">
                    
                    <Link to={linkTo}>
                        <h1>{topicTitle}</h1>
                    </Link>
                    
                    <p>{topicDescription}</p>
                </div>
            </div>

            <div className="right-side">
                <div className="top">

                    <div className="top-topic">
                        <h4>Topics</h4>
                        <span id="total-topic">{totalTopics}</span>
                    </div>

                    <div className="top-topic">
                        <h4>Active Users</h4>
                        <span>{activeUsers}</span>
                    </div>

                    <div className="top-topic">
                        <h4>Activity</h4>
                        <span>{lastActivityDate}</span>
                    </div>
                </div>

                <div className="bottom">
                    <h5 class="last-topic">Last topic</h5>

                    <div class="last-topic-title">
                        <i class="fab fa-xbox"></i>
                        
                        <p>{lastTopictitle}</p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Category;

