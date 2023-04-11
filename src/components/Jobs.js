import React from 'react';
import Job from "./Job";

class Jobs extends React.Component {
    render() {
        let { jobs } = this.props;
        return (
            <div>
                {jobs.map((job) => {
                    return (
                        <Job key={job.id} job={job} delete={this.props.delete} />
                    );
                })}
            </div>
        )
    }
}

export default Jobs;