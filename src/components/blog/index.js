import React from 'react';
import './blog.css';
import {UnorderedListOutlined} from "@ant-design/icons";
import {Button, Row} from "antd";
import Post from '../post';

function Blog() {
    return (
        <div className="main-blog">
            <div className="container">
                <div className="main-blog-header">
                    <h1><span>our recent posts</span></h1>
                    <Button type="default" icon={<UnorderedListOutlined />} className="card-button" size={"large"}>
                        see all posts
                    </Button>
                </div>
                <Row className="posts" gutter={20}>
                    <Post imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/blog/recent-post-1.jpg"}/>
                    <Post imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/blog/recent-post-2.jpg"}/>
                    <Post imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/blog/recent-post-3.jpg"}/>
                    <Post imageLink={"http://eazzy.me/html/bella-men/assets/img/preview/blog/recent-post-4.jpg"}/>
                </Row>
            </div>
        </div>
    );
}

export default Blog;
