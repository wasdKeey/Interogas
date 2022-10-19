import React, { useState } from 'react';
import TableResultCard from './ResultsCard';

function ResultsCard() {
    const [resultsCard] = useState({
        ElectionId: 0,
        ElectionName: 'Elección de Alcalde',
        Region: 'Carrera por Baja California',
        candidateResults: [
            {
                id: 0,
                AvatarUrl: 'https://bit.ly/3vHwq7o',
                GivenName: 'Clark',
                Surnames: 'Kent',
                Votes: 1000000,
                Percentage: 35.54,
                PartyName: 'Partido de la Revolución Institucional',
                PartyColor: '#FF0000',
                PartyCode: 'PRI',
                PartyLogo: 'https://bit.ly/3LiiRSs',
            },
            {
                id: 1,
                AvatarUrl: 'https://bit.ly/36LQygd',
                GivenNames: 'Bruce Wayne',
                Surnames: 'Wayne',
                Votes: 1500000,
                Percentage: 65.45,
                PartyName: 'Partido de la Revolución Democrática',
                PartyColor: '#FFFF00',
                PartyCode: 'PRD',
                PartyLogo: 'https://bit.ly/3OuHux8',
            },
            {
                id: 2,
                AvatarUrl: 'https://bit.ly/3MvA3E9',
                GivenName: 'Barry',
                Surnames: 'Allen',
                Votes: 500000,
                Percentage: 65.23,
                PartyName: 'Partido de Trabajo/ Labor Party',
                PartyColor: '#40E0D0',
                PartyCode: 'PT',
                PartyLogo: 'https://bit.ly/3LcdSma',
            },
            {
                id: 3,
                AvatarUrl: 'https://bit.ly/3Mxq3do',
                GivenName: 'Victor',
                Surnames: 'Stone',
                Votes: 2000000,
                Percentage: 99.99,
                PartyName: 'Partido de Acción Nacional',
                PartyColor: '#FFBF00',
                PartyCode: 'PAN',
                PartyLogo: 'https://bit.ly/39iCETF',
            },
        ],
    });

    const mapCandidates = (candidateObj) => {
        return <TableResultCard key={candidateObj.id} candidate={candidateObj}></TableResultCard>;
    };

    return (
        <>
            <div>
                <div className="card space col-lg-8 col-md-12 col-sm-12 shadow-lg ">
                    <div className="card-body">
                        <h1 className="text-primary big table-header mt-1 mb-1 ">{resultsCard.ElectionName}</h1>
                        <h6 className=" header-title mb-1">{resultsCard.Region}</h6>
                        <div className="table-responsive">
                            <table className="table  table-md table-centered mb-0 font-14">
                                <thead className="table">
                                    <tr className="table-head">
                                        <th className="mx-3">Candidates</th>
                                        <th className="space mx-4">Party</th>
                                        <th className=" mdi mdi-percent"></th>
                                        <th className="px-5"></th>
                                        <th>Votes</th>
                                    </tr>
                                </thead>
                                <tbody>{resultsCard?.candidateResults.map(mapCandidates)}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResultsCard;
