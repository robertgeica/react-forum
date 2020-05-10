import React, { useEffect } from 'react';
import TopicTemplate from './TopicTemplate';
import TopicHeaderTemplate from './TopicHeaderTemplate';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PostTemplate from '../Posts/PostTemplate';
import PostsTest from '../Posts/PostsTest';

const GamingTopics = () => {

    const [topics, setTopics] = ([[
        {
            id: Date.now(),
            title: 'rdr',
            likes: 2,
            replies: 3,
            views: 7,
            activity: 12
        },

        {
            id: Date.now(),
            title: 'gta',
            likes: 12,
            replies: 32,
            views: 72,
            activity: 122
        }
    ]]);

    console.log(topics);

    const likes = 2;
    const replies = 3;
    const views = 7;
    const activity = '1d';

    return (
        <div className="GamingTopic">
        <h2>Category name</h2>

            <TopicHeaderTemplate />

       

            {
                topics.map((key, item) => (
                    <TopicTemplate
                        categoryPath={`/gaming/${key.title}`}
                        key={key.id}
                        title={key.title}
                        likes={key.likes}
                        replies={key.replies}
                        views={key.views}
                        activity={key.activity}
                    />
                ))
            }


            

            
            
        </div>
    )
}


const RouterConfig = () => {
    return (
        <Router >
            <Switch>
                <Route exact path={`/gaming`} component={GamingTopics} />
				<Route exact path={`/gaming/rdr`} component={PostsTest}/>
            </Switch>
        </Router>
    )
}

export default RouterConfig;