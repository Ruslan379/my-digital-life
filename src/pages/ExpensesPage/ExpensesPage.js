import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getBalance } from 'redux/auth/authOperations';
import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
// import { useAuth } from 'hooks';



import { Container } from 'components/Container/Container';
import { BalanceForm } from 'components/BalanceForm/BalanceForm.js';


//-----------------------------------------------------------------------------------
export default function ExpensesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBalance());
  }, [dispatch]);


  const balance = useSelector(selectBalance);
  console.log("ExpensesPage ==> balance:", balance); //!

  const isRefreshing = useSelector(selectIsRefreshing);
  console.log("ExpensesPage ==> isRefreshing:", isRefreshing); //!


  return (
    <Container>

      <BalanceForm />

      <h2>Balance: {balance}</h2>

    </Container>
  );
}
