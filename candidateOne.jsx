const _logger = debug.extend('CandidateOne');

function CandidateOne(props) {
    _logger(props);

    return (
        <>
            <Container className="p-0 m-0">
                <div className="row p-0 m-0">
                    <Col className="col-md-4 p-0 m-0">
                        <img className="avatar rounded-circle rounded" src={props.candidate.AvatarUrl} alt="..." />
                    </Col>
                    <Col className="drop col-md-8">
                        <Row>
                            <Col className>
                                <div className="drop header-title p-0 my-1 fw-bold">
                                    <img
                                        className="drop my-0 mx-2 icon rounded rounded-circle"
                                        src={props.candidate.PartyLogo}
                                        alt="..."
                                    />
                                    {props.candidate.PartyCode} {props.candidate.Surnames}, {props.candidate.GivenName}
                                </div>
                            </Col>
                        </Row>

                        <Row className="drop">
                            <Col md={2}>
                                <span className="drop fw-bold">
                                    <p className="">{`${props.candidate.Percentage}%`}</p>
                                </span>
                            </Col>
                            <Col md={3}>
                                <p className="">{props.candidate.Votes}</p>
                            </Col>
                            <Col>
                                <p style={{ fontSize: '.65rem' }}>{props.candidate.PartyName}</p>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </Container>
        </>
    );
}

CandidateOne.propTypes = {
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

export default CandidateOne;
