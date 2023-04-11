import React from 'react';
import School from "./School";

class Schools extends React.Component {
    render() {
        let { schools } = this.props;
        return (
            <div>
                {schools.map((school) => {
                    return (
                        <School key={school.id} school={school} delete={this.props.delete} />
                    );
                })}
            </div>
        )
    }
}

export default Schools;