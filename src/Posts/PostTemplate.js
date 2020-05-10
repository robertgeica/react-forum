import React from 'react';
import './PostsTemplate.scss';
import user from '../images/user.png';


const PostTemplate = ({username, userMessage}) => {

    return (
        <div className="post-template">
            
            <div className="post">
                <div className="user">
                    <img src={user} />
                    <p>{username}</p>
                    

                </div>

                <div className="content">
                    <p>{userMessage}</p>
                </div>
            </div>
            
        </div>
    )
}

export default PostTemplate;