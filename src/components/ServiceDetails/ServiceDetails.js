import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const getServiceData = (services, sid) => {
    const serviceData = services.find(service => service._id === sid);
    if (serviceData) {
        return serviceData;
    }
    return null;
}

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(
            '../serviceDetails.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const sDetails = getServiceData(services, serviceId);

    return (
        <>
            <Layout>
                <div className="page-title">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xl={12}>
                                <h1>Service Details</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {sDetails &&
                    <div className="section-padding">
                        <Container>
                            <Row className="justify-content-center">
                                <Col xl={12}>
                                    <div className="course-details">
                                        <Row className="mb-5">
                                            <Col xl={6}>
                                                <div className="thumbnail">
                                                    <img src={sDetails.large} alt={sDetails.name} className="img-fluid"/>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <h2 className="mb-3">{sDetails.name}</h2>
                                                <h5 className="mb-4">Price: <span className="text-danger">${sDetails.price}</span></h5>
                                                <ul className="list-group">
                                                    <li className="list-group-item"><b>Lectures:</b> {sDetails.lectures}</li>
                                                    <li className="list-group-item"><b>Enrolled:</b> {sDetails.enrolled}</li>
                                                    <li className="list-group-item"><b>Language:</b> {sDetails.language}</li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <div className="course-content">
                                            <div className="content mb-5" dangerouslySetInnerHTML={{ __html: sDetails.body }}></div>
                                            <div className="faq" dangerouslySetInnerHTML={{ __html: sDetails.faq }}></div>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                }

            </Layout>
        </>
    );
};

export default ServiceDetails;