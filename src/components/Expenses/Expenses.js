import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses= (props) => {
    const [expenseFilter, setExpenseFilter] = useState('2023')

    const addExpenseFilterHandler = (expenseFilter) => {
        console.log(expenseFilter)
        setExpenseFilter(expenseFilter)
    }

    return (
        <Card className='expenses'>
            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]} />
            <ExpensesFilter onAddExpenseFilter={addExpenseFilterHandler}/>
        </Card>
    );
}

export default Expenses;