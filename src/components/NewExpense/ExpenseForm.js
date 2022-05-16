import React, {useState} from "react";

import './ExpenseForm.css'

function ExpenseForm(props) {

    // - Here we have 3 different USESTATE hooks one for Title, Amount and Date. Each input inside the form has a onChange event listener
    //  which collects data from these 3 inputs and directs them to their own function which are declared under CONST (titleChangeHandler,
    //  amountChangeHandler, dateChangeHandler). Each function has a event property which lets us target the value of data passed into each
    //  function. Each USESTATE hook is declared with empty string since then component gets rendered first time nothing is entered but 
    //  using DESTRUCTURING, we can get the two elements first the enteredTitle and following a function to set the new entered title. 
    //  So when we call titleChangeHandler Function we pass the event target value of the form to the setEnteredFunction from the useStateHook
    const [enteredTitle, setEnteredTitle] = useState('')

    const [enteredAmount, setEnteredAmount]= useState('')

    const [enteredDate, setEnteredDate]= useState('')

    const titleChangeHandler = function(event) {
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = function(event) {
        setEnteredAmount(event.target.value)
    };

    const dateChangeHandler = function(event) {
        setEnteredDate(event.target.value)
    };

    // - Here in this submitHandler Function which gets called by the OnSubmit event listener of the complete form, first we prevent the page from
    //  reloading by using the event property PREVENTDEFAULT. Then we collect all date from the 3 useState hooks first elements which save
    //  the entered date from the 3 event listeners in each input, and put them all in one array. This array expenseData has a different
    //  property (title, amount and date, which we can call whatever we want) and each equals to their respective elements that hold the data
    // from each useState hook. 
    const submitHandler = function(event) {
        // this prevents the page to reload once clicked Submit button
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            // Here we create a NEW DATE with built in date constructor in which we pass DATE data from enteredDate
            date: new Date(enteredDate + 'T00:00:00')
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">

            <div className="new-expense__control">
                <label>Title</label>
                {/* Added onChange event listener to listen all changes in the input and then send it to whatever function declared */}
                <input 
                type="text" 
                // This is called two way bining (adding a value attribute to this input element), When submitHandler Function is called
                //  at the end the setEntered values are once again set to an empty string therefore the value of this input sets to empty
                //  once the subnmit button is clicked and the inputs have recorded the value by the onChange event listener etc. 
                value={enteredTitle} 
                onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                type="number" 
                min="0.01" 
                step="0.01" 
                value={enteredAmount}
                onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input 
                type="date" 
                min="2019-01-01" 
                max="2023-12-31" 
                value={enteredDate}
                onChange={dateChangeHandler}/>
            </div>

        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
    </form>
)


}

export default ExpenseForm;