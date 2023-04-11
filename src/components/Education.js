import React from 'react';
import uniqid from "uniqid";
import Schools from "./Schools";

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            school: {
                id: uniqid()
            },
            schools: []
        }
    }
    addSchool = event => {
        event.preventDefault();
        this.setState({
            schools: this.state.schools.concat(this.state.school),
            school: {
                id: uniqid(),
            },
        });
    }
    deleteSchool = (id) => {
        this.setState({
            schools: this.state.schools.filter(item => item.id !== id)
        });
    }
    render() {
        return (
            <div>
                <div className='header'>
                    <h2>Education and Traning</h2>
                    <button onClick={this.addSchool}>Add</button>
                </div>
                <Schools schools={this.state.schools} delete={this.deleteSchool} />
            </div>
        )
    }
}

export default Education;