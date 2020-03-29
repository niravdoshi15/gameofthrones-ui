import React, { Fragment } from "react";
import { StatsComponent } from './StatsComponent'
import { DetailsComponent } from "./DetailsComponent";

export const DisplayBattle = ({ finalResult }) => {

    const battleInfo = (finalResult) => {
        return (
            <div style={{ textAlign: 'center' }}>
                <div className="nameFont">{finalResult.name}</div>
                <div className="img-column">
                    <img className="grayImage" src="/final.jpg" />
                </div>
                <DetailsComponent details={finalResult} />
                <StatsComponent details={finalResult} />
            </div>

        )
    }

    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="container-detials">
                    {finalResult !== undefined ? battleInfo(finalResult) : null}
                </div>
            </div>
        </Fragment>
    )
}