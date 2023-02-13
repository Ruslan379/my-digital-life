// import { useAuth } from 'hooks';
import css from './Home.module.css'




export default function Home() {
    // const { user, isLoggedIn } = useAuth();
    // console.log("user", user); //!

    return (
        <div className={css.container}>
            <h1 className={css.title}>
                <span className={css.spanName} role="img" aria-label="Greeting icon">
                    {/* 💁 {isLoggedIn ? user.name : "Register or Log In"} */}
                    Register or Log In
                    <br />
                </span>
                Welcome to My Digital Life
                <br />
                <span className={css.spanWith}>
                    &nbsp;(Designed with love for programming...)
                </span>
            </h1>
        </div>
    );
}
// { user.name }