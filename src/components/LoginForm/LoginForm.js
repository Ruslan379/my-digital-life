import { useDispatch } from 'react-redux';
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
            <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
                <label className={css.label}>
                    Email
                    <input type="email" name="email" />
                </label>
                <label className={css.label}>
                    Password
                    <input type="password" name="password" />
                </label>
                <button type="submit">LOG IN</button>
            </form>
            {/* //! 1 - вариант */}
            {IsRegistrIn && (
                <div className={css.container}>
                    <p className={css.title}>
                        <span className={css.spanName}>
                            {user.name}
                        </span>
                        &nbsp;thank you for your registration. Please LOG IN
                    </p>
                </div>
            )}
            {/* //! 2 - вариант */}
            {/* <div className={css.container}>
                <p className={css.title}>
                    {IsRegistrIn ? `${user.name} thank you for your registration. Please LOG IN` : ""}
                </p>
            </div> */}
        </>
    );
};
