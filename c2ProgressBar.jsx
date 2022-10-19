const _logger = debug.extend('CandidateProgressBar');

function CandidateTwoProgressBar(props) {
    _logger(props);

    return (
        <>
            <ProgressBar
                className="progress-bar pBar right-div"
                variant="danger"
                key={2}
                min={0}
                max={100}
                label={`${props.progressTwo.Percentage}%`}
                role="progressbar"
                style={{ width: `${props.progressTwo.Percentage}%`, backgroundColor: props.progressTwo.PartyColor }}
            />
        </>
    );
}

CandidateTwoProgressBar.propTypes = {
hectek marked this conversation as resolved.
    progressTwo: PropTypes.shape({
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

export default CandidateTwoProgressBar;
