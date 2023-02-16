import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from 'components/Container/Container';

import { Loader } from 'components/Loader/Loader';

import { getBalance } from 'redux/auth/authOperations';
import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
// import { useAuth } from 'hooks';
import { getAllTransactions } from 'redux/transaction/transactionOperations.js';
import { selectLoadingTransactions, selectAllTransactions } from 'redux/transaction/transactionSelectors.js';

import { BalanceForm } from 'components/BalanceForm/BalanceForm.js';
import { TransactionForm } from 'components/TransactionForm/TransactionForm.js';
import { TransactionList } from 'components/TransactionList/TransactionList.js';


//-----------------------------------------------------------------------------------
export default function ExpensesPage() {
  const dispatch = useDispatch();

  //! Тип траззакции "expenses"
  const transactionsType = "expenses"

  useEffect(() => {
    dispatch(getBalance());
    dispatch(getAllTransactions());
  }, [dispatch]);


  const balance = useSelector(selectBalance);
  console.log("ExpensesPage ==> balance:", balance); //!

  const isRefreshing = useSelector(selectIsRefreshing);
  console.log("ExpensesPage ==> isRefreshing:", isRefreshing); //!

  const isLoading = useSelector(selectLoadingTransactions);
  console.log("ExpensesPage ==> isLoading:", isLoading); //!

  const transactions = useSelector(selectAllTransactions);
  console.log("ExpensesPage ==> transactions:", transactions); //!


  return (
    <Container>
      <h2>Balance: {balance}</h2>
      <BalanceForm />
      <br />
      <br />

      <h2>Expenses transactions</h2>
      <TransactionForm transactionsType={transactionsType} />


      {isLoading && <Loader />}

      {transactions.length > 0 && (
        <>
          <h2>Expenses transactions list</h2>

          {/* <TransactionList
            transactions={transactions}
            visibleTransaction={visibleTransaction}
          /> */}

          {/* <Filter /> */}
        </>
      )}

      {/* {contacts.length > 0 && !isLoading && <DeleteAllContacts />} */}

    </Container>
  );
}
