import React from 'react';
import './post.css';
import {Link} from "react-router-dom";
import {HeartFilled, MessageFilled} from "@ant-design/icons";
import './post.css';
import {Col} from "antd";

function Post(props) {
    return (
        <Col span={12}>
            <div className="post">
                <div className="post-image">
                    <img src={props.imageLink} alt=""/>
                </div>
                <div className="post-content">
                    <h3><Link to="#" className="post-subheader">Shoes</Link> / <Link to="#" className="post-subheader">Dress</Link></h3>
                    <h4>Standard Post Comment Header Here</h4>
                    <p>Fusce gravida interdum eros a mollis. Sed non lorem varius, volutpat nisl in, laoreet ante.</p>
                    <div className="post-footer">
                        <span className="post-date">
                            6th June 2014
                        </span>
                        <span className="separator">/</span>
                        <span className="post-details">
                            <MessageFilled /> 27
                        </span>
                        <span className="separator">/</span>
                        <span className="post-details">
                            <HeartFilled /> 8
                        </span>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default Post;

