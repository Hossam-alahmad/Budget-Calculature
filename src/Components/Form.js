import React from "react";
import "../Css/Form.css";
import Button from "./Button";
const Form = ({ edit, handleSubmit, expense, handleCharge, handleAmount }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex-form">
                <div className="form-group">
                    <label htmlFor="charge">Charge</label>
                    <input
                        type="text"
                        id="charge"
                        placeholder="e.g Car payment"
                        onChange={handleCharge}
                        value={expense.charge}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="text"
                        id="amount"
                        placeholder="e.g 100"
                        onChange={handleAmount}
                        value={expense.amount}
                    />
                </div>
            </div>
            <Button
                type="submit"
                content={edit ? "Edit Expense" : "Add Expense"}
            />
        </form>
    );
};

export default Form;
