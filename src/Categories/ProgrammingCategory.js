import React from 'react';
import topic from '../images/topic2.png'
import CategoryTemplate from './CategoryTemplate';

const ProgrammingCategory = () => {

    const categoryImage = topic;
    const categoryTitle = "JavaScript Programming";
    const categoryDescription = "World of JavaScript Programming";
    const totalTopics = 10;
    const activeUsers = 202;
    const lastActivityDate = 'Today, 4:20';
    const lastTopictitle = 'React Hooks and Router in a nutshell! Check for more...';

    return (
        <div className="programming">
            <CategoryTemplate
                linkTo='/programming'
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

export default ProgrammingCategory;