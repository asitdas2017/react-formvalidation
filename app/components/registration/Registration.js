import React, {Component} from "react";
import RegistrationForm from "./RegistrationForm";

export default class Registration extends Component {

    handleRootSubmit(fields){
        console.log("Value : ", fields);
    }

    render() {
        return (
            <div>
                <RegistrationForm 
                onSubmit={fields => this.handleRootSubmit(fields)} />
            </div>
        );
    }
};
