import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getBalance, updateBalance } from 'redux/auth/authOperations.js';
// import { updateBalance } from 'redux/auth/authOperations.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
import { selectBalanceNew } from 'redux/transaction/transactionSelectors';
// import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { useAuth } from 'hooks';

// import { Spinner } from 'components/Spinner/Spinner';

//! Модальное окно
import { ModalNullBalance } from 'components/ModalNullBalance/ModalNullBalance.jsx';
// import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ModalNullBalanceWindow } from 'components/ModalNullBalanceWindow/ModalNullBalanceWindow.js';

import css from './BalanceForm.module.css';



export const BalanceForm = ({ balance }) => {
    console.log("BalanceForm ==> BALANCE:", balance); //!
    const dispatch = useDispatch();

    //! Модальное окно
    const [showModal, setShowModal] = useState(false);
    // const [newBalance, setNewBalance] = useState(0); //?...!
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        dispatch(getBalance());
        // }, [dispatch]);
    });


    const { isRefreshing: isRefreshingAuth, user, balance: balanceAuth } = useAuth();
    const balanceUser = user.balance; //! тормозит
    console.log("BalanceForm ==> balanceUser:", balanceUser); //!
    console.log("BalanceForm ==> balanceAuth:", balanceAuth); //!
    console.log("BalanceForm ==> isRefreshingAuth:", isRefreshingAuth); //!

    const balance1 = useSelector(selectBalance);
    console.log("BalanceForm ==> balance1:", balance1); //!
    console.log("BalanceForm ==> typeof balance1:", (typeof Number(balance1))); //!


    const isRefreshing = useSelector(selectIsRefreshing);
    console.log("BalanceForm ==> isRefreshing:", isRefreshing); //!

    const balanceNew = useSelector(selectBalanceNew);
    console.log("BalanceForm ==> balanceNew:", balanceNew); //!

    // setNewBalance(balanceNew)
    // console.log("BalanceForm ==> newBalance:", newBalance); //?...!



    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const balance = form.elements.balance.value;

        dispatch(updateBalance({ balance }));
        toast.success(`Your balance has been successfully updated to ${balance} UAN`);
        form.reset();
        return;
    };



    return (
        <>
            <form
                className={css.Form}
                onSubmit={handleSubmit}
            >
                <label
                    className={css.FormLabel}
                >
                    Balance:&nbsp;&nbsp;&nbsp;
                    {/* {isRefreshing ? "Please wait..." : "Balance"} */}
                    <input
                        className={css.FormInput}
                        // id="inputName"
                        type="text"
                        name="balance"
                        pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                        title="Вalance must be whole numbers (or decimal numbers)"
                        // disabled={balance1} //! пока не блокировать
                        // required
                        // value={balance1}
                        // readonly
                        // defaultValue={balance} //! тормозит
                        placeholder={balance1}
                    // defaultValue={(balance1) ? balance1 : balanceAuth}
                    // onChange={handleSubmit}
                    />
                </label>


                <button
                    className={css.FormBtn}
                    type="submit"
                // disabled={balance1} //! пока не блокировать
                >
                    {/* CONFIRM */}
                    {
                        balance1
                            ?
                            <span className={css.btnConfirmDisabled}>
                                CONFIRM
                            </span>
                            :
                            <span className={css.btnConfirmActive}>
                                CONFIRM
                            </span>
                    }
                    {/* {isRefreshing ? <Spinner size="32">CONFIRM</Spinner> : "CONFIRM"} */}
                </button>

            </form>

            {/* //! Модальное окно */}
            {!balance1 && (
                <ModalNullBalance onClose={toggleModal}>
                    <ModalNullBalanceWindow />
                </ModalNullBalance>
            )}

            <ToastContainer autoClose={1500} theme={"colored"} />
        </>
    );
}





