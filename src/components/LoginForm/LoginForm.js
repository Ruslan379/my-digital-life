import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks';
import { logIn } from 'redux/auth/authOperations';

import css from './LoginForm.module.css';




export const LoginForm = () => {
    const dispatch = useDispatch();
    const { user, IsRegistrIn } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <>
            <button>
                <a href="http://localhost:3033/api/users/google">Login Google</a>
            </button>

            <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
                <label className={css.label}>
                    Email
                    <input type="email" name="email" />
                </label>
                <label className={css.label}>
                    Password
                    <input type="password" name="password" />
                </label>
                <button className={css.link} type="submit">LOG IN</button>

                {/* //* -------- 1-var: Кнопка REGISTRATION АКТИВНА до РЕГИСТРАЦИИ: -------- */}
                <NavLink className={css.link} to="/register">REGISTRATION</NavLink>

                {/* //? -------- 2-var: Кнопка REGISTRATION не активна до РЕГИСТРАЦИИ: -------- */}
                {/* <button className={css.link}
                    type="button"
                    disabled={!IsRegistrIn}
                >
                    {
                        IsRegistrIn
                            ?
                            <NavLink className={css.linkButton} to="/register">REGISTRATION</NavLink>
                            :
                            <span className={css.spanLogIn}>
                                REGISTRATION
                            </span>
                    }
                </button> */}
            </form>

            {/* //! 1 - вариант: Приглашение ЗАЛОГИНИТЬСЯ */}
            {IsRegistrIn && (
                <div className={css.container}>
                    <p className={css.title}>
                        <span className={css.spanName}>
                            {user.name},
                        </span>
                        &nbsp;&nbsp;thank you for your registration. Please LOG IN
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
