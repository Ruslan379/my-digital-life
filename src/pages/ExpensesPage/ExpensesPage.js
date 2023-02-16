import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getBalance } from 'redux/auth/authOperations';
import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
// import { useAuth } from 'hooks';



import { Container } from 'components/Container/Container';
import { BalanceForm } from 'components/BalanceForm/BalanceForm.js';
import { TransactionForm } from 'components/TransactionForm/TransactionForm.js';


//-----------------------------------------------------------------------------------
export default function ExpensesPage() {
  const dispatch = useDispatch();

  //! Тип траззакции "expenses"
  const transactionsType = "expenses"

  useEffect(() => {
    dispatch(getBalance());
  }, [dispatch]);


  const balance = useSelector(selectBalance);
  console.log("ExpensesPage ==> balance:", balance); //!

  const isRefreshing = useSelector(selectIsRefreshing);
  console.log("ExpensesPage ==> isRefreshing:", isRefreshing); //!


  return (
    <Container>
      <h2>Balance: {balance}</h2>
      <BalanceForm />
      <br />
      <br />

      <h2>Expenses Transactions</h2>
      <TransactionForm transactionsType={transactionsType} />

    </Container>
  );
}
