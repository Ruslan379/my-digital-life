import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

// import defaultAvatar from 'icons/default-avatar.png'; //?
import css from './UserMenu.module.css';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const defaultAvatar = user.avatarURL; //! Загрузка ссылки с АВАТАРКИ MоngoDB c обработкой
    console.log("user:", user); //!
    console.log("defaultAvatar:", defaultAvatar); //!

    return (
        <div className={css.wrapper}>
            <img className={css.avatar}
                src={defaultAvatar}
                alt="" width="32"
            />
            <NavLink className={css.userNameLink} to="/avatar">
                <span className={css.userName}>{user.name}</span>
            </NavLink>
            {/* <span className={css.userName}>{user.name}</span> */}

            <button className={css.btnLogout}
                type="button"
                onClick={() => dispatch(logOut())}
            >
                Logout
            </button>
        </div>
    );
};
