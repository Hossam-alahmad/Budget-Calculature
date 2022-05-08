import React from "react";
import Item from "./Item";
import "../Css/List.css";
import { MdDelete } from "react-icons/md";
import Button from "./Button";
const List = ({ expenses, deleteExpense, clearAllExpenses, editExpense }) => {
    return (
        <div className="list">
            <ul>
                {expenses.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        deleteExpense={deleteExpense}
                        editExpense={editExpense}
                    />
                ))}
            </ul>
            {expenses.length > 0 && (
                <Button
                    content={`Clear Expenses`}
                    clearAllExpenses={clearAllExpenses}
                >
                    <MdDelete />
                </Button>
            )}
        </div>
    );
};

export default List;
