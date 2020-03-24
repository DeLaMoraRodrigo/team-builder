import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.onFormSubmit}>
            <label>Name: 
                <input
                    name="userName"
                    type="text"
                    value={props.formValues.userName}
                    onChange={props.onInputChange}
                    pattern="[A-Za-z]{0,}"
                >
                </input>
            </label>

            <br/>

            <label>Email: 
                <input
                    name="userEmail"
                    type="text"
                    value={props.formValues.userEmail}
                    onChange={props.onInputChange}
                    pattern="[A-Za-z]{0,}"
                >
                </input>
            </label>

            <br/>

            <label>Role: 
                <input
                    name="userRole"
                    type="text"
                    value={props.formValues.userRole}
                    onChange={props.onInputChange}
                    pattern="[A-Za-z]{0,}"
                >
                </input>
            </label>

            <br/>

            <input type="submit" />
        </form>
    )
}

export default Form;