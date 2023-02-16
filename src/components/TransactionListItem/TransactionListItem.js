// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import { fetchContacts } from 'redux/contacts/contactsOperations'; //??
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectLoading } from 'redux/contacts/contactsSelectors';
// import { ContactEditor } from 'components/ContactEditor/ContactEditor';
// import { Spinner } from 'components/Spinner/Spinner';
// import { Modal } from 'components/Modal/Modal';

import css from './TransactionListItem.module.css';



// export const ContactListItem = ({ id, name, number }) => { //??
export const TransactionListItem = ({ id, date, description, category, sum }) => {
    // const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const isLoading = useSelector(selectLoading);
    // console.log("ContactListItem==>isLoading:", isLoading); //!


    // const handleDelete = () => dispatch(deleteContact(id)); //??

    const handleDelete = () => {
        dispatch(deleteContact(id));
        // dispatch(fetchContacts()); //??
    };


    // const toggleModal = () => {
    //     setShowModal(!showModal);
    // };

    // const handleEdit = () => {
    //     toggleModal()
    //     //! +++++++++++++++++++++++++++++++++++
    //     // const newName = "RoseEDIT"
    //     // const newNumber = "000-00-00"
    //     // console.log("id:", id);
    //     // console.log("newName:", newName);
    //     // console.log("newNumber:", newNumber);

    //     // ContactForm(newName, newNumber)

    //     // dispatch(editContact({ id, newName, newNumber }))
    //     //! +++++++++++++++++++++++++++++++++++
    // };




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
                <p className={css.TransactionListItemText}>
                    {sum}
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
                    onClick={handleDelete}
                    // onClick={() => deleteContact(id)}
                    disabled={isLoading}
                >
                    Delete
                    {/* {isLoading ? [<Spinner size="18" />, " Deleting..."] : "Delete"} */}
                </button>

                {/* {showModal && (
                    <Modal onClose={toggleModal}>
                        <ContactEditor
                            id={id}
                            name={name}
                            // number={number}
                            phone={phone}
                            toggleModal={toggleModal}

                        />
                    </Modal>
                )} */}
            </li>
        </>
    );
};

TransactionListItem.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    transactionsType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};
