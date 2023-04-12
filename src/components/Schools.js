import React from 'react';
import School from "./School";

class Schools extends React.Component {
    render() {
        let { schools, addClass1, class2 } = this.props;
        return (
            <div className={`${class2} ${addClass1}`}>
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