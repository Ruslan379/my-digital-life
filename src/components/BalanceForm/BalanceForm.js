// import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// import { getBalance, updateBalance } from 'redux/auth/authOperations.js';
import { updateBalance } from 'redux/auth/authOperations.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
// import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { useAuth } from 'hooks';

// import { Spinner } from 'components/Spinner/Spinner';

//! Модальное окно
import { ModalNullBalance } from 'components/ModalNullBalance/ModalNullBalance.jsx';
// import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { ModalNullBalanceWindow } from 'components/ModalNullBalanceWindow/ModalNullBalanceWindow.js';

import css from './BalanceForm.module.css';



export const BalanceForm = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    console.log("BalanceForm ==> showModal:", showModal); //!

    // useEffect(() => {
    //     dispatch(getBalance());
    // }, [dispatch]);

    const { isRefreshing: isRefreshingAuth, user, balance: balanceAuth } = useAuth();
    const balanceUser = user.balance; //! тормозит
    console.log("BalanceForm ==> balanceUser:", balanceUser); //!
    console.log("BalanceForm ==> balanceAuth:", balanceAuth); //!
    console.log("BalanceForm ==> isRefreshingAuth:", isRefreshingAuth); //!

    const balance1 = useSelector(selectBalance);
    console.log("BalanceForm ==> balance1:", balance1); //!

    const isRefreshing = useSelector(selectIsRefreshing);
    console.log("BalanceForm ==> isRefreshing:", isRefreshing); //!



    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const balance = form.elements.balance.value;

        dispatch(updateBalance({ balance }));
        toast.success(`Your balance has been successfully updated to ${balance} UAN`);
        // dispatch(getBalance());
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
                    Balance:&nbsp;&nbsp;
                    {/* {isRefreshing ? "Please wait..." : "Balance"} */}
                    <br />
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
                        defaultValue={balance1}
                    // defaultValue={(balance1) ? balance1 : balanceAuth}
                    // onChange={handleSubmit}
                    />
                </label>
                <br />


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

                {/* //! Модальное окно */}
                {balance1 && (
                    <ModalNullBalance onClose={toggleModal}>
                        <ModalNullBalanceWindow toggleModal={toggleModal} />
                        {/* <ContactEditor
                            id={8}
                            name={"name"}
                            phone={"phone"}
                            toggleModal={toggleModal}
                        /> */}
                    </ModalNullBalance>
                )}
            </form>

            <ToastContainer autoClose={1500} theme={"colored"} />
        </>
    );
}





