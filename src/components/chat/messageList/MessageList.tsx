import React from 'react';
import { useAppSelector } from '../../../hooks/react-redux';
import Message from '../message/Message';
import classes from './MessageList.module.scss';

interface IProps {}

const MessageList: React.FC<IProps> = (props) => {
    const messages = useAppSelector((state) => state.mainReducer.messages);
    return (
        <div className={classes.wrapper}>
            <div className={classes.messageList}>
                {messages?.map((message, i) => (
                    <Message key={i} data={message} />
                ))}
            </div>
        </div>
    );
};
export default MessageList;
