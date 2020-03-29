import React from "react";

export const StatsBody = ({details}) => {

    let attackerAllies = ['attacker_1', 'attacker_2', 'attacker_3', 'attacker_4']
    let defenderAllies = ['defender_1', 'defender_2', 'defender_3', 'defender_4']

    const getAllies = (role, details) => {
        let ally = role === 'attacker' ? attackerAllies : defenderAllies
        let allyName = []
        ally.map((a)=>{
            if(details[a].length > 0 || details[a]!== undefined || details[a]!==null){
                allyName.push(details[a])
            }
            else {
                return;
            }
        })
        if (allyName === [])
            return 'NA';
        let result = ''
        allyName.map((k)=>{
            if(typeof k === 'string'){
                result += ' '+k
            }
        })
        return result
    }

    return (
        <tbody style={{textAlign:'left'}}>
            <tr>
                <td>King</td>
                <td>{details.attacker_king ? details.attacker_king : 'NA'}</td>
                <td>{details.defender_king ? details.defender_king : 'NA'}</td>
            </tr>
            <tr>
                <td>Commander</td>
                <td>{details.attacker_commander ? details.attacker_commander : 'NA'}</td>
                <td>{details.defender_commander ? details.defender_commander : 'NA'}</td>
            </tr>
            <tr>
                <td>Allies</td>
                <td>{getAllies('attacker', details)}</td>
                <td>{getAllies('defender', details)}</td>
            </tr>
            <tr>
                <td>Size</td>
                <td>{details.attacker_size ? details.attacker_size : 'NA'}</td>
                <td>{details.defender_size ? details.defender_size : 'NA'}</td>
            </tr>
        </tbody>
    )
}