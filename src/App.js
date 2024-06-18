import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [{
    date: new Date(2023, 9, 6),
    title: 'Car Insurance',
    amount: 294.67
  },
  {
    date: new Date(2023, 9, 7),
    title: 'Library book overdue',
    amount: 1.45
  }];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;
