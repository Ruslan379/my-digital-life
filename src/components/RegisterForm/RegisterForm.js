import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks';
import { register } from 'redux/auth/authOperations';

import css from './RegisterForm.module.css';





export const RegisterForm = () => {
    const dispatch = useDispatch();
    const { user, IsRegistrIn } = useAuth();
    console.log("RegisterForm --> IsRegistrIn:", IsRegistrIn);


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: (form.elements.name.value) ? form.elements.name.value : "User",
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <>
            <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
                <label className={css.label}>
                    Username
                    <input type="text" name="name" />
                </label>
                <label className={css.label}>
                    Email
                    <input type="email" name="email" />
                </label>
                <label className={css.label}>
                    Password
                    <input type="password" name="password" />
                </label>
                <button className={css.link} type="submit">REGISTRATION</button>

                {/* //* -------- 1-var: Кнопка LOG IN АКТИВНА до РЕГИСТРАЦИИ: -------- */}
                {/* <NavLink className={css.link} to="/login">LOG IN</NavLink> */}

                {/* //? -------- 2-var: Кнопка LOG IN не активна до РЕГИСТРАЦИИ: -------- */}
                <button className={css.link}
                    type="button"
                    disabled={!IsRegistrIn}
                >
                    {
                        IsRegistrIn
                            ?
                            <NavLink className={css.linkButton} to="/login">LOG IN</NavLink>
                            :
                            <span className={css.spanLogIn}>
                                LOG IN
                            </span>
                    }
                </button>

                {/* //! -------- 3-var: Кнопка LOG IN не ВИДНА до РЕГИСТРАЦИИ: -------- */}
                {/* <button className={css.link}
                    type="button"
                    style={IsRegistrIn ? { display: 'inline-block' } : { display: 'none' }}
                >
                    <NavLink className={css.linkButton} to="/login">LOG IN</NavLink>
                </button> */}
            </form>

            {/* //! 1 - вариант: Приглашение ЗАЛОГИНИТЬСЯ */}
            {IsRegistrIn && (
                <div className={css.container}>
                    <p className={css.title}>
                        <span className={css.spanName}>
                            {user.name},
                        </span>
                        &nbsp;&nbsp;thank you for your registration. Please
                        <span className={css.spanLink}>
                            <NavLink className={css.spanlink} to="/login">LOG IN</NavLink>
                        </span>
                    </p>
                </div>
            )}
            {/* //! 2 - вариант: Приглашение ЗАЛОГИНИТЬСЯ */}
            {/* <div className={css.container}>
                <p className={css.title}>
                    {IsRegistrIn ? `${user.name} thank you for your registration. Please LOG IN` : ""}
                </p>
            </div> */}
        </>
    );
};
