import { Header } from "./components/Header";
import './App.css';
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionHistory } from "./components/TransactionHistory";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
      </div>
    </div>
  );
}

export default App;
