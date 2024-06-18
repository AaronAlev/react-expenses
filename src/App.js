import './App.css';
import Expenses from './components/Expenses/Expenses';

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
  return (
    <div className='App'>
      <Expenses
        expenses={expenses}
      />
    </div>
  );
}

export default App;
