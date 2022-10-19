import React, { useState } from 'react';
import './metrics.css';
import { Row, Col, Card, CardGroup, ProgressBar } from 'react-bootstrap';
import CandidateTwo from './CandiadateTwo';
import CandidateOne from './CandidateOne';
import CandidateOneProgressBar from './CandidateOneProgressBar';
import CandidateTwoProgressBar from './CandidateTwoProgressBar';

const HeadToHead = () => {
    const [candidateDescription] = useState({
        ElectionId: 2,
        ElectionName: 'Elecciones presidenciales',
        Region: 'Carrera por Baja California',
        ElectionDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis viverra lorem. Suspendisse vel libero ullamcorper, egestas lorem a, ultrices arcu. Vestibulum condimentum massa dui, vel accumsan mauris sodales eu. Vestibulum dolor eros, pulvinar nec pellentesque a, finibus eu arcu.',
        candidateResults: [
            {
                Id: 2,
                AvatarUrl: 'https://bit.ly/3MvA3E9',
                GivenName: 'Clark',
                Surnames: 'Kent',
                Votes: 55000000,
                Percentage: 70,
                PartyName: 'Partido de la Revolución Institucional',
                PartyColor: '#DFFF00',
                PartyCode: 'PRI',
                PartyLogo: 'https://bit.ly/3LiiRSs',
            },
        ],
        candidateTwoResults: [
            {
                Id: 3,
                AvatarUrl: 'https://bit.ly/3Mxq3do',
                GivenName: 'Bruce',
                Surnames: 'Wayne',
                Votes: 45000000,
                Percentage: 30,
                PartyName: 'Partido de la Revolución Democrática',
                PartyColor: '#2E4053',
                PartyCode: 'PRD',
                PartyLogo: 'https://bit.ly/3OuHux8',
            },
        ],
    });

    const mapCandidateOne = (candidateObj) => {
        return <CandidateOne key={candidateObj.Id} candidate={candidateObj}></CandidateOne>;
    };

    const mapCandidateProgressBar = (candidateObj) => {
        return <CandidateOneProgressBar key={candidateObj.Id} progress={candidateObj}></CandidateOneProgressBar>;
    };

    const mapCandidateTwo = (candidateObj) => {
        return <CandidateTwo key={candidateObj.Id} candidate={candidateObj}></CandidateTwo>;
    };

    const mapCandidateTwoProgressBar = (candidateObj) => {
        return <CandidateTwoProgressBar key={candidateObj.Id} progressTwo={candidateObj}></CandidateTwoProgressBar>;
    };

    return (
        <>
            <div className="my-3 mx-1">
                <CardGroup className="container w-100">
                    <Card className="p-1 m-5">
                        <Row>
                            <div className="text-center">
                                <h1 className="text-primary big my-3">{candidateDescription.ElectionName}</h1>
                                <h4 className="header-title  m-2">{candidateDescription.Region}</h4>
                                <div>
                                    <p className="mt-1 mb-3 px-4">{candidateDescription.ElectionDescription}</p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Row className="drop left-div">
                                <Col>{candidateDescription?.candidateResults.map(mapCandidateOne)}</Col>
                                <Col className="drop right-div">
                                    {candidateDescription?.candidateTwoResults.map(mapCandidateTwo)}
                                </Col>
                            </Row>
                            <ProgressBar
                                style={{ width: '975px', color: 'black' }}
                                className="progress mx-auto mt-1 mb-3 ">
                                {candidateDescription.candidateResults.map(mapCandidateProgressBar)}
                                {candidateDescription.candidateTwoResults.map(mapCandidateTwoProgressBar)}
                            </ProgressBar>
                        </Row>
                    </Card>
                </CardGroup>
            </div>
        </>
    );
};

export default HeadToHead;
