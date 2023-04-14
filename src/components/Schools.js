import React from 'react';
import School from "./School";

function Schools(props) {
    let { schools, addClass1, class2 } = props;
    return (
        <div className={`${class2} ${addClass1}`}>
            {schools.map((school) => {
                return (
                    <School key={school.id} school={school} delete={props.delete} />
                );
            })}
        </div>
    )
}

export default Schools;