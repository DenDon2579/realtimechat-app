import React, { ChangeEvent, useState } from 'react';
import classes from './Profile.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';
import { setDisplayName } from '../../data/store/mainReducer';

const Profile: React.FC = (props) => {
    const user = useAppSelector((state) => state.mainReducer.user);
    const dispatch = useAppDispatch();
    const [userName, setUserName] = useState(user?.displayName);

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= 15) {
            setUserName(value);
            dispatch(setDisplayName(value));
        }
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}>
                <img src={user?.photoURL ? user.photoURL : ''} alt='avatar' />
            </div>
            <div className={classes.info}>
                <input
                    className={classes.nameInput}
                    value={userName ? userName : ''}
                    onChange={inputChangeHandler}
                ></input>
                <span className={classes.email}>{user?.email}</span>
            </div>
        </div>
    );
};
export default Profile;
