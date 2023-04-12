import React from 'react';
import Job from "./Job";

class Jobs extends React.Component {
    render() {
        let { jobs, addClass1, class2 } = this.props;
        return (
            <div className={`${class2} ${addClass1}`}>
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