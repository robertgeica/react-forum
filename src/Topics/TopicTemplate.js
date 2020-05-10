import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './TopicTemplate.css';



const Topic = ({categoryPath, title, likes, replies, views, activity}) => {

    return (
        <div className="Topic">
        

            <div className="topics-list">
                <div className="left-bar">
                    
            
                    <Link className="category-title-link" to={`${categoryPath}`}>
                        <h3>{title}</h3>
                    </Link>
            
            

                    
                </div>

                <div className="right-bar">
                    <p id="topic-author">
                        <i className="fas fa-user"></i>
                    </p>
                    <p id="topic-likes">{likes}</p>
                    <p id="topic-replies">{replies}</p>
                    <p id="topic-views">{views}</p>
                    <p id="topic-activity-date">{activity}</p>


                </div>
            </div>
        </div>
    )
}

const e404 = () => {
    return (
    <h1>error</h1>

    )
}

export default Topic;