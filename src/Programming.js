import React from 'react';
import topic from './topic2.png'
import Category from './Category';

const Programming = () => {

    const topicImage = topic;
    const topicTitle = "JavaScript Programming";
    const topicDescription = "World of JavaScript Programming";
    const totalTopics = 10;
    const activeUsers = 202;
    const lastActivityDate = 'Today, 4:20';
    const lastTopictitle = 'React Hooks and Router in a nutshell! Check for more...';

    return (
        <div className="programming">
            <Category
                linkTo='/programming'
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

export default Programming;