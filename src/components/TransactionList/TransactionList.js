// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { ContactListItem } from '../ContactListItem/ContactListItem';


import css from './TransactionList.module.css';



export const TransactionList = ({ visibleContacts }) => {
    return (
        <ul className={css.ContactList}>
            {/* {visibleContacts.map(({ id, name, number }) => ( */}
            {visibleContacts.map(({ _id, name, phone }) => (
                <ContactListItem
                    key={_id}
                    id={_id}
                    name={name}
                    // number={number} //??
                    phone={phone}
                />
            ))}
        </ul>
    );
};


TransactionList.propTypes = {
    visibleContacts: PropTypes.array.isRequired,
};