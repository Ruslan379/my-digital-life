// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { TransactionListItem } from '../TransactionListItem/TransactionListItem.js';


import css from './TransactionList.module.css';



export const TransactionList = ({ transactions }) => {
    const transactionsExpenses = transactions.filter(transaction => transaction.transactionsType === "expenses");
    console.log("TransactionList ==> transactionsExpenses:", transactionsExpenses); //!

    const transactionsIncome = transactions.filter(transaction => transaction.transactionsType === "income");
    console.log("TransactionList ==> transactionsIncome:", transactionsIncome); //!

    let visibleTransaction = []
    if (transactions[0].transactionsType === "expenses") {
        visibleTransaction = transactionsExpenses
    }
    if (transactions[0].transactionsType === "income") {
        visibleTransaction = transactionsIncome
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
                {visibleTransaction.map(({ _id, transactionsType, date, description, category, sum }) => (
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