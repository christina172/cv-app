import React, { useState } from 'react';
import format from 'date-fns/format';

function Job(props) {
    const [state, setState] = useState({
        occupation: "",
        employer: "",
        from: "",
        to: "",
        tasks: "",
        submitted: false
    });
    const handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        setState({
            ...state,
            [name]: value
        });
    }
    const handleSubmit = event => {
        event.preventDefault();
        setState({
            ...state,
            submitted: true
        });
    }
    const openEditMode = event => {
        event.preventDefault();
        setState({
            ...state,
            submitted: false
        })
    }
    let { occupation, employer, from, to, tasks, submitted } = state;
    if (submitted) {
        return (
            <div className='job-info'>
                <div><span>Occupation or position held:</span> {occupation}</div>
                <div><span>Employer:</span> {employer}</div>
                <div><span>From:</span> {format(new Date(from), "MMMM, YYY")}</div>
                <div><span>To:</span> {format(new Date(to), "MMMM, YYY")}</div>
                <div><span>Tasks and responsibilities:</span> {tasks}</div>
                <div className='buttons'>
                    <button onClick={openEditMode}>Edit</button>
                    <button onClick={() => props.delete(props.job.id)}>Delete</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='form-container'>
                <form onSubmit={handleSubmit} className="job-form">
                    <div>
                        <label htmlFor="occupation">Occupation or position held: </label>
                        <input type="text" id="occupation" name="occupation" value={occupation} onChange={handleInputChange} placeholder='Assistant editor' required />
                    </div>
                    <div>
                        <label htmlFor="employer">Employer: </label>
                        <input type="text" id="employer" name="employer" value={employer} onChange={handleInputChange} placeholder='Starling Publishing' required />
                    </div>
                    <div>
                        <label htmlFor="from">From: </label>
                        <input type="month" id="from" name="from" value={from} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label htmlFor="to">To: </label>
                        <input type="month" id="to" name="to" value={to} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label htmlFor="tasks">Tasks and responsibilities: </label>
                        <textarea id="tasks" name="tasks" value={tasks} onChange={handleInputChange} required />
                    </div>
                    <div className='buttons'>
                        <button type="submit">Submit</button>
                        <button onClick={() => props.delete(props.job.id)}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default Job;