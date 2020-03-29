import React from "react";

export const DetailsBody = ({details}) => {
    return (
        <tbody style={{textAlign:'left'}}>
        <tr>
            <td>Name</td>
            <td>{details.name ? details.name : 'NA'}</td>
        </tr>
        <tr>
            <td>Year</td>
            <td>{details.year ? details.year : 'NA'}</td>
        </tr>
        <tr>
            <td>Battle No.</td>
            <td>{details.battle_number}</td>
        </tr>
        <tr>
            <td>Battle Type</td>
            <td>{details.battle_type ? details.battle_type : 'NA'}</td>
        </tr>
        <tr>
            <td>Major Death</td>
            <td>{details.major_death ? details.major_death : 'NA'}</td>
        </tr>
        <tr>
            <td>Location</td>
            <td>{details.location ? details.location : 'NA'}</td>
        </tr>
        <tr>
            <td>Region</td>
            <td>{details.region ? details.region : 'NA'}</td>
        </tr>
        <tr>
            <td>Note</td>
            <td>{details.note ? details.note : 'NA'}</td>
        </tr>
        <tr>
            <td>Outcome</td>
            <td>{details.attacker_outcome && details.attacker_outcome==='win' ? `${details.attacker_king} Win` : `${details.defender_king} Win`}</td>
        </tr>
    </tbody>
    )
}