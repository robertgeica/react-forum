import React from 'react';
import PostTemplate from './PostTemplate';

const PostsTest = (props) => {

    const [posts, setPosts] = ([[
        {
            id: Date.now(),
            username: 'user1',
            message: 'user message test'
        },

        {
            id: Date.now(),
            username: 'user2',
            message: 'message test'
        },

        {
            id: Date.now(),
            username: 'user3',
            message: 'user test'
        },

    ]]);

    return (
        <div>

        {
            posts.map((key, item) => (
                <PostTemplate
                    key={key.id}
                    username={key.username}
                    userMessage={key.message}
                />
            ))
            }


        </div>
    )
}

export default PostsTest;