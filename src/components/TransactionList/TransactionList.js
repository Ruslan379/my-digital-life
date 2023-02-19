// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { TransactionListItem } from '../TransactionListItem/TransactionListItem.js';


import css from './TransactionList.module.css';



export const TransactionList = ({ transactions }) => {
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
                {transactions.map(({ _id, transactionsType, date, description, category, sum }) => (
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