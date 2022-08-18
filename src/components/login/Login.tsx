import React from 'react';
import { signIn, signOut } from '../../data/store/mainReducer';
import useAuth from '../../hooks/firebase/useAuth';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';
import classes from './Login.module.scss';

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const callLogin = useAuth();
    const login = () => {
        callLogin().then((user) => dispatch(signIn(user)));
    };
    const logout = () => {
        dispatch(signOut());
    };
    const isAuth = useAppSelector((state) => state.mainReducer.auth.isAuth);

    return (
        <div className={classes.wrapper}>
            {isAuth ? (
                <>
                    <h2 className={classes.logged}>
                        You're already logged in | You can{' '}
                        <span className={classes.link} onClick={logout}>
                            logout
                        </span>
                    </h2>
                </>
            ) : (
                <button className={classes.button} onClick={login}>
                    Login with Google
                </button>
            )}
        </div>
    );
};
export default Login;
