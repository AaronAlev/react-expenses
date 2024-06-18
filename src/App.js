import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
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
  return (
    <div className='App'>
      <ExpenseItem 
        expenseData={expenses[0]}
      />
      <ExpenseItem 
        expenseData={expenses[1]}
      />
    </div>
  );
}

export default App;
