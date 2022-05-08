import { useState, useEffect } from "react";
import Alert from "./Components/Alert";
import Form from "./Components/Form";
import List from "./Components/List";
import "./Css/App.css";

function App() {
    // all expenses ======================
    const [expenses, setExpenses] = useState([]);
    // one expense ===================
    const [expense, setExpense] = useState({
        id: null,
        charge: "",
        amount: "",
    });
    // alert state ====================
    const [alert, setAlert] = useState({ class: null });
    // edit state ======================
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        console.log("Total Expenses :", expenses);
    }, [expenses]);

    // add Expense to expeneses state=======================
    const addExpense = (charge, amount) => {
        const exp = { id: Math.floor(Math.random() * 10000), charge, amount };
        setExpenses([...expenses, exp]);
        console.log("Expense add :", exp);
    };
    // delete expense from expenses state ====================
    const deleteExpense = id => {
        const afterDelete = expenses.filter(expense => expense.id !== id);
        setExpenses([...afterDelete]);
        setExpense({ id: null, charge: "", amount: "" });
        console.log("Delete Expense with id:", id);
    };
    // edit expense =======================
    const editExpense = id => {
        const [expense] = expenses.filter(item => item.id === id);
        setEdit(true);
        setExpense(expense);
        console.log("Catch expense to edit:", expense);
    };
    // clear all expenses ===================
    const clearAllExpenses = () => {
        setExpenses([]);
        console.log("Clear all expenses");
    };
    const handleCharge = e => {
        setExpense({ ...expense, charge: e.target.value });
    };
    const handleAmount = e => {
        setExpense({ ...expense, amount: parseInt(e.target.value) });
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (!expense.charge && /^s*$/.test(expense.charge)) {
            setAlert({ class: "alert-error" });
        } else if (!/^[0-9]+$/.test(expense.amount)) {
            setAlert({ class: "alert-error" });
        } else {
            setAlert({ class: "alert-success" });
            if (edit) {
                setExpenses(prevExpense =>
                    prevExpense.map(item =>
                        item.id === expense.id ? expense : item
                    )
                );

                console.log("Edit Expense done! with id:", expense.id);
            } else {
                addExpense(expense.charge, parseInt(expense.amount));
            }
            setExpense({ id: null, charge: "", amount: "" });
        }
        setTimeout(() => {
            setAlert({ class: "" });
            setEdit(false);
        }, 1500);
    };

    return (
        <div className="App">
            <Alert alert={alert} edit={edit} />
            <h1>Budget Calculator</h1>
            <div className="app-box">
                <Form
                    edit={edit}
                    expense={expense}
                    handleSubmit={handleSubmit}
                    handleAmount={handleAmount}
                    handleCharge={handleCharge}
                />
                <List
                    expenses={expenses}
                    deleteExpense={deleteExpense}
                    clearAllExpenses={clearAllExpenses}
                    editExpense={editExpense}
                />
            </div>
            <h2>
                Total spending :
                <span className="total">
                    {expenses.reduce((acc, current) => {
                        let result = acc + current.amount;
                        return result;
                    }, 0)}
                    $
                </span>
            </h2>
        </div>
    );
}

export default App;
