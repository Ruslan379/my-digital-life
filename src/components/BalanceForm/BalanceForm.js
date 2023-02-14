// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// import { getBalance, changeBalance } from 'redux/auth/authOperations.js';
import { changeBalance } from 'redux/auth/authOperations.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
// import { Spinner } from 'components/Spinner/Spinner';

import css from './BalanceForm.module.css';



export const BalanceForm = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getBalance());
    // }, [dispatch]);

    const balance = useSelector(selectBalance);
    console.log("BalanceForm ==> balance:", balance); //!

    const isRefreshing = useSelector(selectIsRefreshing);
    console.log("BalanceForm ==> isRefreshing:", isRefreshing); //!



    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const balance = form.elements.balance.value;

        dispatch(changeBalance({ balance }));
        toast.success(`Your balance of ${balance} UAN has been successfully added`);
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
                        id="inputName"
                        type="text"
                        name="balance"
                        pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                        title="Вalance must be whole numbers (or decimal numbers)"
                        required
                    // value={balance}
                    // onChange={handleChange}
                    />
                </label>
                <br />


                <button
                    className={css.FormBtn}
                    type="submit"
                // disabled={isRefreshing}
                >
                    CONFIRM
                    {/* {isRefreshing ? <Spinner size="32">CONFIRM</Spinner> : "CONFIRM"} */}
                </button>
            </form>

            <ToastContainer autoClose={1500} theme={"colored"} />
        </>
    );
}





