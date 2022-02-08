import React from 'react';
import Layout from '../Layout/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import useServices from '../../hooks/useService';


const Services = () => {
    const [services, setServices] = useServices();
    return (
        <>
            <Layout>
                <div className="page-title">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xl={12}>
                                <h1>Services</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="service-section section-padding">
                    <Container>
                        <Row>
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

export default Services;