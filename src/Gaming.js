import React from 'react';
import topic from './topic1.png'
import Category from './Category';


const Gaming = () => {

    const topicImage = topic;
    const topicTitle = "World of Gamers";
    const topicDescription = "Video games don't make us violent. Lag does.";
    const totalTopics = 46;
    const activeUsers = 55;
    const lastActivityDate = 'Today, 3:16';
    const lastTopictitle = 'Red Dead Redemption 2 on PC!';

    return (
        <div className="gaming">
            <Category
                linkTo='/gaming'
                topicImage={topicImage}
                topicTitle={topicTitle}
                topicDescription={topicDescription}
                totalTopics={totalTopics}
                activeUsers={activeUsers}
                lastActivityDate={lastActivityDate}
                lastTopictitle={lastTopictitle}

            />
        </div>
    );
}

export default Gaming;