import React, { useState } from 'react';
import format from 'date-fns/format';

function School(props) {
    const [state, setState] = useState({
        org: "",
        degree: "",
        field: "",
        from: "",
        to: "",
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
    let { org, degree, field, from, to, submitted } = state;
    if (submitted) {
        return (
            <div className="edu-info">
                <div><span>Educational organization:</span> {org}</div>
                <div><span>Qualification or degree:</span> {degree}</div>
                <div><span>Field of study:</span> {field}</div>
                <div><span>From:</span> {format(new Date(from), "MMMM, YYY")}</div>
                <div><span>To:</span> {format(new Date(to), "MMMM, YYY")}</div>
                <div className='buttons'>
                    <button onClick={openEditMode}>Edit</button>
                    <button onClick={() => props.delete(props.school.id)}>Delete</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="form-container">
                <form onSubmit={handleSubmit} className='edu-form'>
                    <div>
                        <label htmlFor="org">Educational organization: </label>
                        <input type="text" id="org" name="org" value={org} onChange={handleInputChange} placeholder='Trinity College' required />
                    </div>
                    <div>
                        <label htmlFor="degree">Qualification or degree: </label>
                        <input type="text" id="degree" name="degree" value={degree} onChange={handleInputChange} placeholder='Bachelor of Arts' required />
                    </div>
                    <div>
                        <label htmlFor="field">Field of study: </label>
                        <input type="text" id="field" name="field" value={field} onChange={handleInputChange} placeholder='English' required />
                    </div>
                    <div>
                        <label htmlFor="from">From: </label>
                        <input type="month" id="from" name="from" value={from} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label htmlFor="to">To: </label>
                        <input type="month" id="to" name="to" value={to} onChange={handleInputChange} required />
                    </div>
                    <div className='buttons'>
                        <button type="submit">Submit</button>
                        <button onClick={() => props.delete(props.school.id)}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default School;
