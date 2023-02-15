// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// import { getBalance, updateBalance } from 'redux/auth/authOperations.js';
import { updateBalance } from 'redux/auth/authOperations.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
// import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { useAuth } from 'hooks';

// import { Spinner } from 'components/Spinner/Spinner';

import css from './TransactionForm.module.css';



export const TransactionForm = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getBalance());
    // }, [dispatch]);

    const { isRefreshing: isRefreshingAuth, user, balance: balanceAuth } = useAuth();
    const balanceUser = user.balance; //! тормозит
    console.log("TransactionForm ==> balanceUser:", balanceUser); //!
    console.log("TransactionForm ==> balanceAuth:", balanceAuth); //!
    console.log("TransactionForm ==> isRefreshingAuth:", isRefreshingAuth); //!

    const balance1 = useSelector(selectBalance);
    console.log("TransactionForm ==> balance1:", balance1); //!

    const isRefreshing = useSelector(selectIsRefreshing);
    console.log("TransactionForm ==> isRefreshing:", isRefreshing); //!



    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const balance = form.elements.balance.value;

        dispatch(updateBalance({ balance }));
        toast.success(`Your balance of ${balance} UAN has been successfully added`);
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

                <label className={css.FormLabel}>
                    {/* DATE */}
                    {/* {isRefreshing ? "Please wait..." : "Balance"} */}
                    <br />
                    <input
                        className={css.FormInput}
                        // id="inputName"
                        type="text"
                        name="date"
                        placeholder="Date"
                    // pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                    // title="Вalance must be whole numbers (or decimal numbers)"
                    // required
                    // value={balance1}
                    // readonly
                    // defaultValue={"Date"}
                    // defaultValue={(balance1) ? balance1 : balanceAuth}
                    // onChange={handleSubmit}
                    />
                </label>
                <br />

                <label className={css.FormLabel}>
                    {/* DESCRIPTION */}
                    {/* {isRefreshing ? "Please wait..." : "Balance"} */}
                    <br />
                    <input
                        className={css.FormInput}
                        // id="inputName"
                        type="text"
                        name="description"
                        placeholder="Product description"
                    // pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                    // title="Вalance must be whole numbers (or decimal numbers)"
                    // required
                    // readonly
                    // value={balance1}
                    // defaultValue={"Product description"}
                    // defaultValue={(balance1) ? balance1 : balanceAuth}
                    // onChange={handleSubmit}
                    />
                </label>
                <br />

                <label className={css.FormLabel}>
                    {/* CATEGORY */}
                    {/* {isRefreshing ? "Please wait..." : "Balance"} */}
                    <br />
                    <input
                        className={css.FormInput}
                        // id="inputName"
                        type="text"
                        name="category"
                        placeholder="Product category"
                    // pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                    // title="Вalance must be whole numbers (or decimal numbers)"
                    // required
                    // readonly
                    // value={balance1}
                    // defaultValue={"Product category"}
                    // defaultValue={(balance1) ? balance1 : balanceAuth}
                    // onChange={handleSubmit}
                    />
                </label>
                <br />

                <label className={css.FormLabel}>
                    {/* SUM */}
                    {/* {isRefreshing ? "Please wait..." : "Balance"} */}
                    <br />
                    <input
                        className={css.FormInput}
                        // id="inputName"
                        // type="text"
                        type="text"
                        name="sum"
                        placeholder="0,00"
                        pattern="^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"
                        title="Вalance must be whole numbers (or decimal numbers)"
                    // focus
                    // style={{ color: "red" }}
                    // required
                    // readonly
                    // value={balance1}
                    // defaultValue={"0,00"}
                    // defaultValue={(balance1) ? balance1 : balanceAuth}
                    // onChange={handleSubmit}
                    />
                </label>
                <br />

                <button className={css.FormBtn}
                    type="submit"
                // disabled={isRefreshing}
                >
                    INPUT
                    {/* {isRefreshing ? <Spinner size="32">CONFIRM</Spinner> : "CONFIRM"} */}
                </button>

                <button className={css.FormBtn}
                    type="button"
                // disabled={isRefreshing}
                >
                    CLEAR
                    {/* {isRefreshing ? <Spinner size="32">CONFIRM</Spinner> : "CONFIRM"} */}
                </button>
            </form>

            <ToastContainer autoClose={1500} theme={"colored"} />
        </>
    );
}





