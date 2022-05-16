import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";




const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
]





function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  

  const addExpenseHandler = function(expense) {
    // console.log('In app js')
    // console.log(expense)

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>

      <Expenses
      // Here we are passing our expenses via a prop we named items which points to a variables named expenses which holds our expenses info
        items={expenses}
      ></Expenses>


    
    </div>
  );
}

export default App;
