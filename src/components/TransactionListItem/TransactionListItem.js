import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import { fetchContacts } from 'redux/contacts/contactsOperations'; //??
import { deleteTransaction } from 'redux/transaction/transactionOperations.js';
import { selectLoadingTransactions } from 'redux/transaction/transactionSelectors.js';
// import { ContactEditor } from 'components/ContactEditor/ContactEditor';
// import { Spinner } from 'components/Spinner/Spinner';
// import { Modal } from 'components/Modal/Modal';

//! Модальное окно
import { ModalTransactionLDelete } from 'components/ModalTransactionLDelete/ModalTransactionLDelete.jsx';
// import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ModalTransactionLDeleteWindow } from 'components/ModalTransactionLDeleteWindow/ModalTransactionLDeleteWindow.js';

import css from './TransactionListItem.module.css';



export const TransactionListItem = ({ id, date, description, category, sum }) => {
    const dispatch = useDispatch();

    //! Модальное окно
    const [showModal, setShowModal] = useState(false);
    // const [newBalance, setNewBalance] = useState(0); //?...!
    const toggleModal = () => {
        setShowModal(!showModal);
    }


    const isLoading = useSelector(selectLoadingTransactions);
    console.log("ContactListItem==>isLoading:", isLoading); //!


    const handleDeleteQuestion = () => {
        toggleModal();
        // dispatch(deleteTransaction(id)); //!!!!!
    };




    return (
        <>
            <li className={css.TransactionListItem}>
                <p className={css.TransactionListItemText}>
                    {date}
                </p>
                <p className={css.TransactionListItemText}>
                    {description}
                </p>
                <p className={css.TransactionListItemText}>
                    {category}
                </p>
                <p className={css.TransactionListItemTextSum}>
                    {-sum}
                </p>


                {/* <button
                    type="button"
                    className={css.ContactListEditBtn}
                    onClick={handleEdit}
                    disabled={isLoading}
                >
                    Edit
                    {isLoading ? [<Spinner size="18" />, " Editing..."] : "Edit"}
                </button> */}

                <button
                    type="button"
                    className={css.ContactListDeleteBtn}
                    onClick={handleDeleteQuestion}
                    // onClick={() => deleteContact(id)}
                    disabled={isLoading}
                >
                    Delete
                    {/* {isLoading ? [<Spinner size="18" />, " Deleting..."] : "Delete"} */}
                </button>

                {/* //! Модальное окно */}
                {showModal && (
                    <ModalTransactionLDelete onClose={toggleModal}>
                        <ModalTransactionLDeleteWindow
                            id={id}
                            toggleModal={toggleModal}
                        />
                    </ModalTransactionLDelete>
                )}
            </li>
        </>
    );
};

TransactionListItem.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired,
};
