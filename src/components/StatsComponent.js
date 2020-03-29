import React, { Fragment } from "react";
import { StatsHeader } from "./StatsHeader";
import { StatsBody } from "./StatsBody";

export const StatsComponent = ({ details }) => {
    return (
        <Fragment>
            <div className="nameFont" style={{ paddingTop: '20px' }}>Battle Statistics</div>
            <div style={{ paddingTop: '40px' }}>
                <table className="table table-dark table-striped">
                    <StatsHeader />
                    <StatsBody details={details} />
                </table>
            </div>
        </Fragment>
    )
}