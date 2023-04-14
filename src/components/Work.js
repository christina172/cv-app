import React, { useState } from 'react';
import uniqid from "uniqid";
import Jobs from "./Jobs";

function Work(props) {
    const [state, setState] = useState({
        job: {
            id: uniqid()
        },
        jobs: []
    });
    const addJob = event => {
        event.preventDefault();
        setState({
            jobs: state.jobs.concat(state.job),
            job: {
                id: uniqid(),
            },
        });
    }
    const deleteJob = (id) => {
        setState({
            ...state,
            jobs: state.jobs.filter(item => item.id !== id)
        });
    }
    let addClass;
    if (state.jobs.length > 0) {
        addClass = "expanded";
    } else {
        addClass = "";
    };
    let addClass1;
    if (state.jobs.length === 0) {
        addClass1 = "empty";
    } else {
        addClass1 = "";
    };
    let class2;
    if (state.jobs.length === 1 || state.jobs.length === 2) {
        class2 = "component-content";
    } else {
        class2 = "component-content-add";
    }
    return (
        <div className='component-container'>
            <div className={`component-heading-add ${addClass}`}>
                <h2>Work Experience</h2>
                <button onClick={addJob}>Add</button>
            </div>
            <Jobs jobs={state.jobs} delete={deleteJob} addClass1={addClass1} class2={class2} />
        </div>
    )
};

export default Work;