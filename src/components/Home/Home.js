import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../Layout/Layout';
import { IoSearchOutline } from "react-icons/io5";
import useServices from '../../hooks/useService';
import Service from '../Service/Service';

const Home = () => {
    const [services] = useServices();
    return (
        <>
            <Layout>
                <div className="hero-section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xl={8}>
                                <div className="hero-content">
                                    <h1>
                                        Learn Course Online <br />
                                        <span>New Today</span>
                                    </h1>
                                    <form action="#" className="search-from">
                                        <div className="input-wrap">
                                            <input type="text" placeholder="Search Course" />
                                            <button><IoSearchOutline></IoSearchOutline></button>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="counter-section section-padding-sm">
                    <Container>
                        <Row>
                            <Col xl={12}>
                                <div className="count-wrapper">
                                    <div className="single-count">
                                        <h4>Successfully <br />
                                            Trained</h4>
                                        <h2>1478</h2>
                                        <p>ENROLLED LEARNERS</p>
                                    </div>

                                    <div className="single-count">
                                        <h4>Successfully <br />
                                            Trained</h4>
                                        <h2>1730</h2>
                                        <p>COUNTRYWIDE AWARDS</p>
                                    </div>

                                    <div className="single-count">
                                        <h4>Successfully <br />
                                            Trained</h4>
                                        <h2>280</h2>
                                        <p>SUCCESS EVENTS</p>
                                    </div>

                                    <div className="single-count">
                                        <h4>Successfully <br />
                                            Trained</h4>
                                        <h2>1045</h2>
                                        <p>ONLINE COURSES</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="service-section section-padding">
                    <Container>
                        <Row>
                            <Col xl={12}>
                                <div className="section-title text-center">
                                    <h2 className="title">Popular Courses</h2>
                                </div>
                            </Col>
                            <Col xl={12}>
                                <div className="service-wrapper">
                                    <Row>
                                        {
                                            services.map((service, key) => <Col xl={6} key={key}><Service service={service}></Service></Col>)
                                        }
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

export default Home;