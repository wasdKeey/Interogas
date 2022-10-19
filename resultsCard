import React from 'react';
import { ProgressBar, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import debug from 'sabio-debug';
import './metrics.css';

const _logger = debug.extend('resultscard');

function TableResultsCard(props) {
    _logger(props.candidate);

    return (
        <>
            <tr>
                <td>
                    <Row>
                        <Col md={6}>
                            <img className="rAvatar rounded rounded-circle" src={props.candidate.AvatarUrl} alt="..." />
                        </Col>
                        <Col md={6}>
                            <div className="candidateName ">
                                {props.candidate.Surnames}, {props.candidate.GivenName}
                            </div>
                        </Col>
                    </Row>
                </td>
                <td className="noSpace">
                    <Row>
                        <Col className="col col-md-3">
                            <img className="icon-r rounded rounded-circle" src={props.candidate.PartyLogo} alt="..." />
                        </Col>
                        <Col className="col col-md-6">
                            <p style={{ fontSize: '.65rem', textAlign: 'right', height: '15px' }}>
                                {props.candidate.PartyCode} ({props.candidate.PartyName})
                            </p>
                        </Col>
                    </Row>
                </td>
                <td className="text-center noSpace">{props.candidate.Percentage}</td>
                <td className="noSpace">
                    <ProgressBar className="progress  bg-light shadow-lg border border-light">
                        <ProgressBar
                            variant={props.candidate.PartyColor}
                            striped
                            animated
                            label={`${props.candidate.Percentage}%`}
                            className="progress-bar progress-xl"
                            role="progressbar"
                            now={`${props.candidate.Percentage}%`}
                            style={{
                                width: `${props.candidate.Percentage}%`,
                                backgroundColor: props.candidate.PartyColor,
                            }}
                        />
                    </ProgressBar>
                </td>
                <td>{props.candidate.Votes}</td>
            </tr>
        </>
    );
}

TableResultsCard.propTypes = {
hectek marked this conversation as resolved.
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

export default TableResultsCard;
