import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import debug from 'sabio-debug';
import './metrics.css';

const _logger = debug.extend('CandidateOne');

function CandidateTwo(props) {
    _logger(props);

    return (
        <>
            <Container className="p-0 m-0">
                <div className="row p-0 m-0">
                    <Col className="drop col-md-8">
                        <Row>
                            <Col className>
                                <div className="drop header-title p-0 my-1 fw-bold">
                                    {props.candidate.Surnames}, {props.candidate.GivenName} {props.candidate.PartyCode}
                                    <img
                                        className="drop my-0 mx-2 icon rounded rounded-circle"
                                        src={props.candidate.PartyLogo}
                                        alt="..."
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row className="drop">
                            <Col>
                                <p style={{ fontSize: '.65rem' }}>{props.candidate.PartyName}</p>
                            </Col>
                            <Col md={3}>
                                <p className="">{props.candidate.Votes}</p>
                            </Col>
                            <Col md={2}>
                                <span className="drop fw-bold">
                                    <p>{`${props.candidate.Percentage}%`}</p>
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-md-4 p-0 m-0">
                        <img className="avatarTwo rounded rounded-circle" src={props.candidate.AvatarUrl} alt="..." />
                    </Col>
                </div>
            </Container>
        </>
    );
}

CandidateTwo.propTypes = {
    candidate: PropTypes.shape({
        Id: PropTypes.number,
        AvatarUrl: PropTypes.string,
        GivenName: PropTypes.string,
        Surnames: PropTypes.string,
        Votes: PropTypes.number,
        Percentage: PropTypes.number,
        PartyName: PropTypes.string,
        PartyColor: PropTypes.string,
        PartyCode: PropTypes.string,
        PartyLogo: PropTypes.string,
    }),
};

export default CandidateTwo;
