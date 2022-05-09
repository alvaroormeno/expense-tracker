import './ExpenseItem.css'


// React ensures we get 1 PARAMETER for the component, we can name it whatever we want, tipically it is named props
// It holds all the values for our costum element 
function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    ); 
}

export default ExpenseItem;

