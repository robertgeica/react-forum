import React from 'react';
import {Link} from 'react-router-dom';
import './CategoryTemplate.css';

const CategoryTemplate = ({linkTo, categoryImage, categoryTitle, categoryDescription, totalTopics, activeUsers, lastActivityDate, lastTopictitle}) => {
    
    return (
        <div className="categories">
            <div className="left-side">
                <div className="category-image">
                    <img src={categoryImage}></img>
                </div>

                <div className="category">
                    
                    <Link className="category-title-link" to={linkTo}>
                        <h1 className="category-title">{categoryTitle}</h1>
                    </Link>

                    <p className="category-description">{categoryDescription}</p>
                </div>
            </div>

            <div className="right-side">
                <div className="top">

                    <div className="top-category">
                        <h4>Topics</h4>
                        <span id="total-topic">{totalTopics}</span>
                    </div>

                    <div className="top-category">
                        <h4>Active Users</h4>
                        <span>{activeUsers}</span>
                    </div>

                    <div className="top-category">
                        <h4>Activity</h4>
                        <span>{lastActivityDate}</span>
                    </div>
                </div>

                <div className="bottom">
                    <h5 className="last-topic">Last topic</h5>

                    <div className="last-topic-title">
                        <i className="fab fa-xbox"></i>
                        
                        <p>{lastTopictitle}</p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default CategoryTemplate;

