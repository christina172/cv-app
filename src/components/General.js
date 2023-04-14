import React, { useState } from 'react';
import format from 'date-fns/format';

function General(props) {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        position: "",
        birthDate: "",
        address: "",
        email: "",
        phone: "",
        submitted: false,
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
        })
    }
    const openEditMode = event => {
        event.preventDefault();
        setState({
            ...state,
            submitted: false
        })
    }
    let { firstName, lastName, position, birthDate, address, email, phone, submitted } = state;
    if (submitted) {
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
                <button onClick={openEditMode}>Edit</button>
            </div>
        )
    } else {
        return (
            <div className='component-container'>
                <div className="component-heading">
                    <h2>General information</h2>
                </div>
                <div className='component-content'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName">First name: </label>
                            <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleInputChange} placeholder='John' required />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last name: </label>
                            <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleInputChange} placeholder='Smith' required />
                        </div>
                        <div>
                            <label htmlFor="position">Desired position: </label>
                            <input type="text" id="position" name="position" value={position} onChange={handleInputChange} placeholder='Editor' required />
                        </div>
                        <div>
                            <label htmlFor="birthDate">Date of birth: </label>
                            <input type="date" id="birthDate" name="birthDate" value={birthDate} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label htmlFor="address">Address: </label>
                            <input type="text" id="address" name="address" value={address} onChange={handleInputChange} placeholder='City, Country' required />
                        </div>
                        <div>
                            <label htmlFor="email">Email address: </label>
                            <input type="email" id="email" name="email" value={email} onChange={handleInputChange} placeholder='example@mail' required />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone number: </label>
                            <input type="text" id="phone" name="phone" value={phone} onChange={handleInputChange} placeholder='123-45-67' pattern="\d{3}[-]\d{2}[-]\d{2}" required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default General;