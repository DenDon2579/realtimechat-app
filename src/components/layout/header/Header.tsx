import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux';
import { signOut } from '../../../data/store/mainReducer';

const Header: React.FC = () => {
    const userData = useAppSelector((state) => state.mainReducer.user);
    const isAuth = useAppSelector((state) => state.mainReducer.auth.isAuth);
    const dispatch = useAppDispatch();

    return (
        <div className={classes.wrapper}>
            {isAuth && (
                <Link to='profile' className={classes.link}>
                    <div className={classes.userInfo}>
                        <div className={classes.userInfoLeft}>
                            <img
                                src={
                                    userData?.photoURL ? userData.photoURL : ''
                                }
                                alt='avatar'
                            />
                        </div>
                        <div className={classes.userInfoRight}>
                            <span>{userData?.displayName}</span>
                        </div>
                    </div>
                </Link>
            )}
            <Link to='chat' className={classes.chatLink}>
                Chat
            </Link>
            {isAuth && (
                <button
                    className={classes.logoutButton}
                    onClick={() => dispatch(signOut())}
                >
                    Logout
                </button>
            )}
        </div>
    );
};
export default Header;
