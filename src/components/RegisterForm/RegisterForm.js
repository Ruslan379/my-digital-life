import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';

import { register } from 'redux/auth/authOperations';

import css from './RegisterForm.module.css';




export const RegisterForm = () => {
    const dispatch = useDispatch();
    const { user, IsRegistrIn } = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
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
                <button type="submit">REGISTRATION</button>
            </form>
            {/* //! 1 - вариант */}
            {IsRegistrIn && (
                <div className={css.container}>
                    <p className={css.title}>
                        {user.name} thank you for your registration. Please LOG IN
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
