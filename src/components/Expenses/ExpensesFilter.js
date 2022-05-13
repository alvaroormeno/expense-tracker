import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const dropdownChangeHandler = function(eventObject) {

        console.log(eventObject.target.value);
        // Here we listen to change (year selected) and call this dropdownChangeHandler function, by using (<select onChange={dropdownChangeHandler}>) 
        // we console.log(eventObject.target.value) to assure that we are listening to the right info we want which is the date selected. 
        // Tehn with props.onChangeFilter(eventObject.target.value) we are grabbing the prop onChangeFilter which is declared
        // on the <ExpensesFilter onChangeFilter={filterChangeHandler}/> in the EXPENSE.JS file return body 
        // This prop points to a function named filterChangeHandler declared in EXPENSE.JS file, therefore when pointing to it we are passing a parameter (eventObject.target.value). 
        // This prop with info of selected year is received on EXPENSE.JS filterChangeHandler function with a prop called by us SelectedYear.
        // this selectedYear prop carries the information passed and we then can console log it etc... 
        // by this we have lifted the state or in other words lifted/passed the information 
        // one level above from a child component (EXPENSE FILTER.JS) to a parent component (EXPENSE.JS) 
        props.onChangeFilter(eventObject.target.value)

    };


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select 
          onChange={dropdownChangeHandler}
          // two way binding,,,, selecteing prop selected in declared EXPENSEFILTER component in Expenses.js
          // therefore the initial value of this year selector equals to the value the props.selected carries
          value={props.selected}>
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