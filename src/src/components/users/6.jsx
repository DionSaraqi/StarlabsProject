import React from "react";
import { useState, useEffect } from 'react';
const Test6 = () => {
    const [posts, setPosts] = useState([]);
    const userId = 6; // Hardcoded user ID

    useEffect(() => {
        // Fetch posts
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));

    }, []);

    return (
        <div>
            <h1>List of Posts</h1>
            <ol>
                {posts.map(post => (
                    (userId === post.userId) && (
                        <li key={post.id}>
                            <strong>Title:</strong> {post.title} <br/>
                            <strong>Body:</strong> {post.body}
                        </li>
                    )
                ))}
            </ol>
        </div>
    );
};
 
export default Test6;