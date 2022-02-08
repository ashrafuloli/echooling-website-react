import React from 'react';
import Layout from '../Layout/Layout';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <Layout>
                <div className="page-title">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xl={12}>
                                <h1>Contact Us</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="service-section section-padding">
                    <Container>
                        <Row>
                            <Col xl={12}>
                                <div className="contact-form">
                                    <Row>
                                        <Col xl={6}>
                                            <input type="text" placeholder="Your Full Name"/>
                                        </Col>
                                        <Col xl={6}>
                                            <input type="email" placeholder="Your Email Address"/>
                                        </Col>
                                        <Col xl={12}>
                                            <input type="text" placeholder="Your Subject"/>
                                        </Col>
                                        <Col xl={12}>
                                            <textarea placeholder="Message"></textarea>
                                        </Col>
                                        <Col xl={12}>
                                            <button>send message </button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
        </>
    );
};

export default Contact;