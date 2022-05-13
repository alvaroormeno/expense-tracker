import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const dropdownChangeHandler = function(eventObject) {

        console.log(eventObject.target.value);
        // we listen to change and call this ExpenseFilter function, we console.log(eventObject.target.value)
        // to assure that we are listening to the right info we want which is the date selected. Then with 
        // props.onChangeFilter(eventObject.target.value) we are grabbing the prop onChangeFilter which is declared
        // on the <ExpensesFilter onChangeFilter={filterChangeHandler}/> in the EXPENSE.JS file return body.
        // This prop points to a function named filterChangeHandler declared in EXPENSE.JS file which then 
        // console logs it... by this we have lifted the state or in other words lifted/passed the information 
        // one level above from a child component (EXPENSE FILTER.JS) to a parent component (EXPENSE.JS) 
        props.onChangeFilter(eventObject.target.value)

    };


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;