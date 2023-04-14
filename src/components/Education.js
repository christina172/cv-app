import React, { useState } from 'react';
import uniqid from "uniqid";
import Schools from "./Schools";

function Education(props) {
    const [state, setState] = useState({
        school: {
            id: uniqid()
        },
        schools: []
    });
    const addSchool = event => {
        event.preventDefault();
        setState({
            schools: state.schools.concat(state.school),
            school: {
                id: uniqid(),
            },
        });
    }
    const deleteSchool = (id) => {
        setState({
            ...state,
            schools: state.schools.filter(item => item.id !== id)
        });
    }
    let addClass;
    if (state.schools.length > 0) {
        addClass = "expanded";
    } else {
        addClass = "";
    };
    let addClass1;
    if (state.schools.length === 0) {
        addClass1 = "empty";
    } else {
        addClass1 = "";
    };
    let class2;
    if (state.schools.length === 1 || state.schools.length === 2) {
        class2 = "component-content";
    } else {
        class2 = "component-content-add";
    };
    return (
        <div className='component-container'>
            <div className={`component-heading-add ${addClass}`}>
                <h2>Education and Training</h2>
                <button onClick={addSchool}>Add</button>
            </div>
            <Schools schools={state.schools} delete={deleteSchool} addClass1={addClass1} class2={class2} />
        </div>
    )
};

export default Education;