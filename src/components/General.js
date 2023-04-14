import React from 'react';
import format from 'date-fns/format';

class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            position: "",
            birthDate: "",
            address: "",
            email: "",
            phone: "",
            submitted: false,
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
        })
    }
    openEditMode = event => {
        event.preventDefault();
        this.setState({
            submitted: false
        })
    }
    render() {
        let { firstName, lastName, position, birthDate, address, email, phone } = this.state;
        if (this.state.submitted) {
            return (
                <div className='general-info'>
                    <div className='name-and-position'>
                        <h1>{firstName} {lastName}</h1>
                        <h2>{position}</h2>
                    </div>
                    <div className='date-and-contact'>
                        <div className="date-and-address">
                            <p>{format(new Date(birthDate), "PPP")}</p>
                            <p>{address}</p>
                        </div>
                        <div className='email-and-phone'>
                            <p>{email}</p>
                            <p>{phone}</p>
                        </div>
                    </div>
                    <button onClick={this.openEditMode}>Edit</button>
                </div>
            )
        } else {
            return (
                <div className='component-container'>
                    <div className="component-heading">
                        <h2>General information</h2>
                    </div>
                    <div className='component-content'>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="firstName">First name: </label>
                                <input type="text" id="firstName" name="firstName" value={firstName} onChange={this.handleInputChange} placeholder='John' required />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last name: </label>
                                <input type="text" id="lastName" name="lastName" value={lastName} onChange={this.handleInputChange} placeholder='Smith' required />
                            </div>
                            <div>
                                <label htmlFor="position">Desired position: </label>
                                <input type="text" id="position" name="position" value={position} onChange={this.handleInputChange} placeholder='Editor' required />
                            </div>
                            <div>
                                <label htmlFor="birthDate">Date of birth: </label>
                                <input type="date" id="birthDate" name="birthDate" value={birthDate} onChange={this.handleInputChange} required />
                            </div>
                            <div>
                                <label htmlFor="address">Address: </label>
                                <input type="text" id="address" name="address" value={address} onChange={this.handleInputChange} placeholder='City, Country' required />
                            </div>
                            <div>
                                <label htmlFor="email">Email address: </label>
                                <input type="email" id="email" name="email" value={email} onChange={this.handleInputChange} placeholder='example@mail' required />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone number: </label>
                                <input type="text" id="phone" name="phone" value={phone} onChange={this.handleInputChange} placeholder='123-45-67' pattern="\d{3}[-]\d{2}[-]\d{2}" required />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
};

export default General;