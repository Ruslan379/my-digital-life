import { useSelector } from 'react-redux';

import {
    selectUser,
    selectIsLoggedIn,
    selectIsRegistrIn,
    selectIsRefreshing,

} from 'redux/auth/authSelectors';




export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const IsRegistrIn = useSelector(selectIsRegistrIn);
    const isRefreshing = useSelector(selectIsRefreshing);


    return {
        user,
        isLoggedIn,
        IsRegistrIn,
        isRefreshing,
    };
};
