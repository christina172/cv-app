import React from 'react';
import uniqid from "uniqid";
import Jobs from "./Jobs";

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {
                id: uniqid()
            },
            jobs: []
        }
    }
    addJob = event => {
        event.preventDefault();
        this.setState({
            jobs: this.state.jobs.concat(this.state.job),
            job: {
                id: uniqid(),
            },
        });
    }
    deleteJob = (id) => {
        this.setState({
            jobs: this.state.jobs.filter(item => item.id !== id)
        });
    }
    render() {
        return (
            <div>
                <div className='header'>
                    <h2>Work experience</h2>
                    <button onClick={this.addJob}>Add</button>
                </div>
                <Jobs jobs={this.state.jobs} delete={this.deleteJob} />
            </div>
        )
    }
};

export default Work;