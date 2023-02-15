// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';


// import { getBalance, updateBalance } from 'redux/auth/authOperations.js';
// import { updateBalance } from 'redux/auth/authOperations.js'; //!!!!!
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
// import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { useAuth } from 'hooks';

// import { Spinner } from 'components/Spinner/Spinner';

import css from './TransactionForm.module.css';



export const TransactionForm = () => {
    // const dispatch = useDispatch();

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
        const currentDate = form.elements.currentDate.value;
        const description = form.elements.description.value;
        const category = form.elements.category.value;
        const sum = form.elements.sum.value;

        if (category === "true") {
            toast.warning(`Please choose a product category`);
            return;
        }
        if (!sum) {
            toast.warning(`Please enter the transaction amount`);
            return;
        }

        const expensesTransaction = {
            currentDate,
            description,
            category,
            sum
        };

        console.log("expensesTransaction", expensesTransaction);

        // dispatch(addExpensesTransaction({ expensesTransaction })); //!!!!!
        toast.success(`Your Expenses transaction has been successfully added`);
        form.reset();
        return;
    };



    return (
        <>
            <form
                className={css.Form}
                id="transactionForm"
                onSubmit={handleSubmit}
            >

                <label className={css.FormLabel}>
                    {/* DATE */}
                    {/* {isRefreshing ? "Please wait..." : "Balance"} */}
                    {/* <br /> */}
                    <input
                        className={css.FormInput}
                        // id="inputName"
                        type="text"
                        name="currentDate"
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
                {/* <br /> */}

                <label className={css.FormLabel}>
                    {/* DESCRIPTION */}
                    {/* {isRefreshing ? "Please wait..." : "Balance"} */}
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

                <label className={css.FormLabel}
                // for="productCategory"
                >
                    {/* Choose a Product category: */}
                </label>
                {/* <p className={css.selectText}> */}
                <select className={css.selectText}
                    id="productCategory"
                    // value={"Product category"}
                    // defaultValue={"Product category"}
                    name="category"
                    // placeholder="Product category"
                    form="transactionForm"
                // required
                >
                    {/* <option value="Product category" disabled>******</option> */}
                    {/* <option className={css.selectPlaceholder} disabled>Product category</option> */}
                    <option className={css.selectPlaceholder} value disabled selected>Product category</option>
                    <option value="transport">Transport</option>
                    <option value="products">Products</option>
                    <option value="health">Health</option>
                    <option value="alcohol">Alcohol</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="housing">Housing</option>
                    <option value="technique">Technique</option>
                    <option value="communal">Communal, communication</option>
                    <option value="sports">Sports, hobbies</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                </select>
                {/* </p> */}


                {/* <br /> */}

                <label className={css.FormLabel}>
                    {/* SUM */}
                    {/* {isRefreshing ? "Please wait..." : "Balance"} */}
                    {/* <br /> */}
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
                {/* <br /> */}

                <button className={css.FormBtn}
                    type="submit"
                // disabled={isRefreshing}
                >
                    INPUT
                    {/* {isRefreshing ? <Spinner size="32">CONFIRM</Spinner> : "CONFIRM"} */}
                </button>
                {/* //! Кнопка очистки формы - 2 */}
                <input className={css.FormBtn}
                    type="reset"
                    value="CLEAR"
                    form="transactionForm"
                // onChange={handleClearSubmit}
                />
            </form>

            <ToastContainer autoClose={1500} theme={"colored"} />
        </>
    );
}





