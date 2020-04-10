import React, {useState} from 'react';
import './contact-form.css';
import {Row, Col, Form, Input, Button} from "antd";
import {Link} from "react-router-dom";
import {HomeFilled, PhoneFilled, MailFilled} from "@ant-design/icons";

function ContactForm() {

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');


    return (
        <div className="contact-form-block">
            <div className="contact-header">
                <h1>contact</h1>
                <div className="path">
                    <Link to="/"><span className="path-name">Home </span></Link>
                    <span className="path-arrow"> > </span>
                    <Link to="#"><span className="path-name">Shop </span></Link>
                    <span className="path-arrow"> > </span>
                    <span className="path-name">Contact Us </span>
                </div>
            </div>
            <div className="container">
                <Row gutter={30} className="contact-content">
                    <Col span={8}>
                        <div className="contact-content-header">
                            <h1 className="main-header"><span>contact us</span></h1>
                        </div>
                        <div className="contact-content-main">
                            <div className="contact-content-item">
                                <div className="contact-content-item-image">
                                    <HomeFilled />
                                </div>
                                <div className="contact-content-item-text">
                                    <span>Address: </span>
                                    <h4>987 Main st. New York, NY, 00001, U.S.A</h4>
                                </div>
                            </div>
                            <div className="contact-content-item">
                                <div className="contact-content-item-image">
                                    <PhoneFilled />
                                </div>
                                <div className="contact-content-item-text">
                                    <span>Telephone: </span>
                                    <h4>(012) 345-7689</h4>
                                </div>
                            </div>
                            <div className="contact-content-item">
                                <div className="contact-content-item-image">
                                    <MailFilled />
                                </div>
                                <div className="contact-content-item-text">
                                    <span>Fax: </span>
                                    <h4>0123456789</h4>
                                </div>
                            </div>
                            <p>
                                Phasellus pellentesque purus in massa aenean in pede phasellus libero ac tellus pellentesque semper.
                            </p>
                            <div className="contact-mail-block">
                                <span>Customer Service: </span>
                                <Link to="#" className="contact-mail"><h4>hello@bella.com</h4></Link>
                            </div>
                            <div className="contact-mail-block">
                                <span>Returns and Refunds: </span>
                                <Link to="#" className="contact-mail"><h4>hello@bella.com</h4></Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="contact-content-header">
                            <h1 className="main-header"><span>contact form</span></h1>
                        </div>
                        <div className="contact-form">
                            <Form
                                form={form}
                                initialValues={{
                                    layout: formLayout,
                                }}
                            >
                                <Form.Item>
                                    <Input placeholder="Name" className="header-main-input contact-input" />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder="Email" className="header-main-input contact-input" />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder="Subject" className="header-main-input contact-input" />
                                </Form.Item>
                                <Form.Item>
                                    <Input.TextArea rows={10} placeholder="Message" className="header-main-input contact-input" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" className="contact-button" size={"large"}>send message</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ContactForm;
