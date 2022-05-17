import React, {useState} from "react";

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense (props) {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = function(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)

        setIsEditing(false)
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

return (
    <div className="new-expense">
        {isEditing === false && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
)

};

export default NewExpense;