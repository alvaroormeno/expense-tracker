import './ExpenseItem.css'


// React ensures we get 1 PARAMETER for the component, we can name it whatever we want, tipically it is named props
// It holds all the values for our costum element 
function ExpenseItem(props) {
    
    
    // Having this variable month that holds data of month using data being passed by props makes it cleaer to insert
    // it later inside the component JSX
    const month = props.date.toLocaleString('en-US', {month: "long"});
    const day = props.date.toLocaleString('en-US', {day: "2-digit"});
    const year = props.date.getFullYear();


    return (
        <div className='expense-item'>
            {/* Calendar type display for Date inside ExpenseItem Component */}
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    ); 
}

export default ExpenseItem;

