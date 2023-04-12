import React from 'react';
import format from 'date-fns/format';

class School extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            org: "",
            degree: "",
            field: "",
            from: "",
            to: "",
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
        let { org, degree, field, from, to, submitted } = this.state;
        if (submitted) {
            return (
                <div className="edu-info">
                    <div><span>Educational organization:</span> {org}</div>
                    <div><span>Qualification or degree:</span> {degree}</div>
                    <div><span>Field of study:</span> {field}</div>
                    <div><span>From:</span> {format(new Date(from), "MMMM, YYY")}</div>
                    <div><span>To:</span> {format(new Date(to), "MMMM, YYY")}</div>
                    <div className='buttons'>
                        <button onClick={this.openEditMode}>Edit</button>
                        <button onClick={() => this.props.delete(this.props.school.id)}>Delete</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="form-container">
                    <form onSubmit={this.handleSubmit} className='edu-form'>
                        <div>
                            <label htmlFor="org">Educational organization: </label>
                            <input type="text" id="org" name="org" value={org} onChange={this.handleInputChange} placeholder='Trinity College' required />
                        </div>
                        <div>
                            <label htmlFor="degree">Qualification or degree: </label>
                            <input type="text" id="degree" name="degree" value={degree} onChange={this.handleInputChange} placeholder='Bachelor of Arts' required />
                        </div>
                        <div>
                            <label htmlFor="field">Field of study: </label>
                            <input type="text" id="field" name="field" value={field} onChange={this.handleInputChange} placeholder='English' required />
                        </div>
                        <div>
                            <label htmlFor="from">From: </label>
                            <input type="month" id="from" name="from" value={from} onChange={this.handleInputChange} required />
                        </div>
                        <div>
                            <label htmlFor="to">To: </label>
                            <input type="month" id="to" name="to" value={to} onChange={this.handleInputChange} required />
                        </div>
                        <div className='buttons'>
                            <button type="submit">Submit</button>
                            <button onClick={() => this.props.delete(this.props.school.id)}>Delete</button>
                        </div>
                    </form>
                </div>
            )
        }

    }
};

export default School;
