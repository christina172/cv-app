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
        let addClass;
        if (this.state.schools.length > 0) {
            addClass = "expanded";
        } else {
            addClass = "";
        };
        let addClass1;
        if (this.state.schools.length === 0) {
            addClass1 = "empty";
        } else {
            addClass1 = "";
        };
        let class2;
        if (this.state.schools.length === 1 || this.state.schools.length === 2) {
            class2 = "component-content";
        } else {
            class2 = "component-content-add";
        };
        return (
            <div className='component-container'>
                <div className={`component-heading-add ${addClass}`}>
                    <h2>Education and Training</h2>
                    <button onClick={this.addSchool}>Add</button>
                </div>
                <Schools schools={this.state.schools} delete={this.deleteSchool} addClass1={addClass1} class2={class2} />
            </div>
        )
    }
}

export default Education;