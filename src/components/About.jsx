import React from "react";
import { LatestJobApi } from "./LatestJobApi";
import { GovernmentSchemesApi } from './GovernmentSchemesApi';

const About = () => {
    return (
        <>
            <div className="about_container">
                <div className="about_latest_jobs">
                    <h2>Latest Jobs</h2>
                    {
                        LatestJobApi.map((data, ind) => {
                            return <p key={ind}>{data.jobName}</p>
                        })
                    }
                </div>

                <div className="about_government_schemes">
                    <h2>Government Schemes</h2>
                    {
                        GovernmentSchemesApi.map((data, ind) => {
                            return <p key={ind}>{data.governmentSchemes}</p>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default About