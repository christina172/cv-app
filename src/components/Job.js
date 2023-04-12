import React from 'react';
import format from 'date-fns/format';

class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occupation: "",
            employer: "",
            from: "",
            to: "",
            tasks: "",
            submitted: false
        }
    }
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            submitted: true
        });
        console.log(this.state.submitted);
    }
    openEditMode = event => {
        event.preventDefault();
        this.setState({
            submitted: false
        })
    }
    render() {
        let { occupation, employer, from, to, tasks, submitted } = this.state;
        if (submitted) {
            return (
                <div className='job-info'>
                    <div><span>Occupation or position held:</span> {occupation}</div>
                    <div><span>Employer:</span> {employer}</div>
                    <div><span>From:</span> {format(new Date(from), "MMMM, YYY")}</div>
                    <div><span>To:</span> {format(new Date(to), "MMMM, YYY")}</div>
                    <div><span>Tasks and responsibilities:</span> {tasks}</div>
                    <div className='buttons'>
                        <button onClick={this.openEditMode}>Edit</button>
                        <button onClick={() => this.props.delete(this.props.job.id)}>Delete</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='form-container'>
                    <form onSubmit={this.handleSubmit} className="job-form">
                        <div>
                            <label htmlFor="occupation">Occupation or position held: </label>
                            <input type="text" id="occupation" name="occupation" value={occupation} onChange={this.handleInputChange} placeholder='Assistant editor' required />
                        </div>
                        <div>
                            <label htmlFor="employer">Employer: </label>
                            <input type="text" id="employer" name="employer" value={employer} onChange={this.handleInputChange} placeholder='Starling Publishing' required />
                        </div>
                        <div>
                            <label htmlFor="from">From: </label>
                            <input type="month" id="from" name="from" value={from} onChange={this.handleInputChange} required />
                        </div>
                        <div>
                            <label htmlFor="to">To: </label>
                            <input type="month" id="to" name="to" value={to} onChange={this.handleInputChange} required />
                        </div>
                        <div>
                            <label htmlFor="tasks">Tasks and responsibilities: </label>
                            <textarea id="tasks" name="tasks" value={tasks} onChange={this.handleInputChange} required />
                        </div>
                        <div className='buttons'>
                            <button type="submit">Submit</button>
                            <button onClick={() => this.props.delete(this.props.job.id)}>Delete</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
};

export default Job;