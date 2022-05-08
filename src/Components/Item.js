import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Item = ({ item, deleteExpense, editExpense }) => {
    return (
        <li className="item">
            <p>
                {item.charge}
                <span>{item.amount}$</span>
            </p>
            <p className="icons">
                <MdEdit
                    className="edit-icon"
                    onClick={() => editExpense(item.id)}
                />
                <MdDelete
                    className="delete-icon"
                    onClick={() => deleteExpense(item.id)}
                />
            </p>
        </li>
    );
};

export default Item;
