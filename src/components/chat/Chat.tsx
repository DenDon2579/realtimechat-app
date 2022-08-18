import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import classes from './Chat.module.scss';
import MessageList from './messageList/MessageList';
import {
    addDoc,
    collection,
    orderBy,
    query,
    Timestamp,
} from 'firebase/firestore';
import { fireDatabase } from '../..';
import { useAppDispatch, useAppSelector } from '../../hooks/react-redux';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { setMessages } from '../../data/store/mainReducer';
import { IServerMessage } from '../../types/message';

const Chat: React.FC = () => {
    const messagesRef = collection(fireDatabase, 'messages');
    const q = query(messagesRef, orderBy('createdAt'));

    const [messages, loading] = useCollectionData(q);
    console.log(messages);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (messages) {
            dispatch(setMessages(messages as IServerMessage[]));
        }
    }, [messages, dispatch]);
    const user = useAppSelector((state) => state.mainReducer.user);
    const [newMessageValue, setNewMessageValue] = useState('');
    const sendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newMessageValue.length > 0) {
            const data: IServerMessage = {
                userName: user?.displayName,
                userAvatar: user?.photoURL,
                userId: user?.userID,
                createdAt: Timestamp.now().seconds,
                message: newMessageValue,
            };

            addDoc(collection(fireDatabase, 'messages'), data);
        }
        setNewMessageValue('');
    };
    const textAreaChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMessageValue(e.target.value);
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.messageList}>
                <MessageList />
            </div>
            <div className={classes.newMessage}>
                <form onSubmit={sendMessage}>
                    <input
                        value={newMessageValue}
                        onChange={textAreaChangeHandler}
                    />
                    <button type='submit'>{'>'}</button>
                </form>
            </div>
        </div>
    );
};
export default Chat;
