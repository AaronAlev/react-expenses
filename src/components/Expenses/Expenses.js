import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses= (props) => {
    const [yearFilter, setExpenseFilter] = useState('2023')

    const filterHandler = (yearFilter) => {
        console.log(yearFilter)
        setExpenseFilter(yearFilter)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterHandler}/>
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem expenseData={expense} key={expense.id}/>
                })
            }
        </Card>
    );
}

export default Expenses;