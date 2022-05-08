import React from "react";
import "../Css/Button.css";
const Button = props => {
    return (
        <button
            type={props.type ? props.type : null}
            onClick={props.clearAllExpenses ? props.clearAllExpenses : null}
        >
            {props.content} {props.children}
        </button>
    );
};

export default Button;
