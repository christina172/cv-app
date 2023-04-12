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
        let addClass;
        if (this.state.jobs.length > 0) {
            addClass = "expanded";
        } else {
            addClass = "";
        };
        let addClass1;
        if (this.state.jobs.length === 0) {
            addClass1 = "empty";
        } else {
            addClass1 = "";
        };
        let class2;
        if (this.state.jobs.length === 1 || this.state.jobs.length === 2) {
            class2 = "component-content";
        } else {
            class2 = "component-content-add";
        }
        return (
            <div className='component-container'>
                <div className={`component-heading-add ${addClass}`}>
                    <h2>Work Experience</h2>
                    <button onClick={this.addJob}>Add</button>
                </div>
                <Jobs jobs={this.state.jobs} delete={this.deleteJob} addClass1={addClass1} class2={class2} />
            </div>
        )
    }
};

export default Work;