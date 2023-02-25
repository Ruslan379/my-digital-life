// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { getAllTransactions } from 'redux/transaction/transactionOperations.js';
import { TransactionListItem } from '../TransactionListItem/TransactionListItem.js';
// import { selectAllTransactions } from 'redux/transaction/transactionSelectors.js';

import css from './TransactionList.module.css';




export const TransactionList = ({ transactions, transactionsType }) => {
    // export const TransactionList = ({ transactionsType }) => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAllTransactions());
    // }, [dispatch]);

    // const transactions = useSelector(selectAllTransactions);
    console.log("TransactionList ==> transactions:", transactions); //!

    const transactionsExpenses = transactions.filter(transaction => transaction.transactionsType === "expenses");
    console.log("TransactionList ==> transactionsExpenses:", transactionsExpenses); //!

    const transactionsIncome = transactions.filter(transaction => transaction.transactionsType === "income");
    console.log("TransactionList ==> transactionsIncome:", transactionsIncome); //!

    let selectionByTransactionType = []
    if (transactionsType === "expenses") {
        selectionByTransactionType = transactionsExpenses
    }
    if (transactionsType === "income") {
        selectionByTransactionType = transactionsIncome
    }

    return (
        <>
            <div className={css.TransactionListHeader}>
                <p className={css.TransactionListText}>
                    Date
                </p>
                <p className={css.TransactionListText}>
                    Description
                </p>
                <p className={css.TransactionListText}>
                    Category
                </p>
                <p className={css.TransactionListText}>
                    Sum
                </p>
                <p className={css.TransactionListText}>

                </p>
            </div>

            <ul className={css.ContactList}>
                {selectionByTransactionType.map(({ _id, transactionsType, date, description, category, sum }) => (
                    <TransactionListItem
                        key={_id}
                        id={_id}
                        transactionsType={transactionsType}
                        date={date}
                        description={description}
                        category={category}
                        sum={sum}
                    />
                ))}
            </ul>
        </>
    );
};


TransactionList.propTypes = {
    transactions: PropTypes.array.isRequired,
};