import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/react-redux';
import Chat from '../../chat/Chat';
import Login from '../../login/Login';
import Profile from '../../profile/Profile';
import classes from './Content.module.scss';

const Content: React.FC = () => {
    const isAuth = useAppSelector((state) => state.mainReducer.auth.isAuth);
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to={isAuth ? 'chat' : 'login'} />}
                    />

                    <Route path='login' element={<Login />} />
                    <Route
                        path='profile'
                        element={
                            isAuth ? <Profile /> : <Navigate to='/login' />
                        }
                    />
                    <Route
                        path='chat'
                        element={isAuth ? <Chat /> : <Navigate to='/login' />}
                    />
                </Routes>
            </div>
        </div>
    );
};
export default Content;
