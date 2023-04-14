import React from 'react';
import Job from "./Job";

function Jobs(props) {
    let { jobs, addClass1, class2 } = props;
    return (
        <div className={`${class2} ${addClass1}`}>
            {jobs.map((job) => {
                return (
                    <Job key={job.id} job={job} delete={props.delete} />
                );
            })}
        </div>
    )
}

export default Jobs;