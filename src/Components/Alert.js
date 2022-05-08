import React from "react";
import "../Css/Alert.css";
import { MdDone, MdOutlineError } from "react-icons/md";
const Alert = ({ alert, edit }) => {
    let content = "";
    if (alert.class === "alert-success") {
        if (!edit) content = "Expenses Added Successfully";
        else content = "Expenses Edit Successfully";
    } else {
        content = "Smothing went wrong try again!";
    }
    return (
        <div className={alert.class ? `alert ${alert.class} show` : "alert"}>
            {alert.class === "alert-success" ? <MdDone /> : <MdOutlineError />}
            <p>{content}</p>
        </div>
    );
};

export default Alert;
