import React from 'react';
import topic from '../images/topic1.png'
import CategoryTemplate from './CategoryTemplate';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const GamingCategory = () => {

    const categoryImage = topic;
    const categoryTitle = "World of Gamers";
    const categoryDescription = "Video games don't make us violent. Lag does.";
    const totalTopics = 46;
    const activeUsers = 55;
    const lastActivityDate = 'Today, 3:16';
    const lastTopictitle = 'Red Dead Redemption 2 on PC!';

    return (
        <div className="gaming">


            <CategoryTemplate
                linkTo='/gaming'
                categoryImage={categoryImage}
                categoryTitle={categoryTitle}
                categoryDescription={categoryDescription}
                totalTopics={totalTopics}
                activeUsers={activeUsers}
                lastActivityDate={lastActivityDate}
                lastTopictitle={lastTopictitle}

            />
        </div>
    );
}

export default GamingCategory;