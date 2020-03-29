import React, { Fragment } from "react";
import { DetailsHeader } from "./DetailsHeader";
import { DetailsBody } from "./DetailsBody";

export const DetailsComponent = ({details}) => {
    return (
        <Fragment>
            <div className="nameFont" style={{ paddingTop: '20px' }}>Battle Details</div>
            <div style={{ paddingTop: '40px' }}>
                <table className="table table-dark table-striped">
                    <DetailsHeader />
                    <DetailsBody details={details} />
                </table>
            </div>
        </Fragment>
    )
}