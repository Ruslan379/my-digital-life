// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { TransactionListItem } from '../TransactionListItem/TransactionListItem.js';


import css from './TransactionList.module.css';



export const TransactionList = ({ transactions }) => {
    return (
        <ul className={css.ContactList}>
            {transactions.map(({ _id, date, transactionsType, description, category, sum }) => (
                <TransactionListItem
                    key={_id}
                    id={_id}
                    date={date}
                    transactionsType={transactionsType}
                    description={description}
                    category={category}
                    sum={sum}
                />
            ))}
        </ul>
    );
};


TransactionList.propTypes = {
    transactions: PropTypes.array.isRequired,
};