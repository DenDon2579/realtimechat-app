import React from 'react';
import { IMessage } from '../../../types/message';
import classes from './Message.module.scss';

interface IProps {
    data: IMessage;
}

const Message: React.FC<IProps> = ({ data }) => {
    return (
        <div className={data.fromMe ? classes.right : classes.left}>
            <div className={classes.message}>
                <span className={classes.text}>{data.message}</span>
            </div>
            <div className={classes.user}>
                <span>{data.userName}</span>
                <img
                    src={data?.userAvatar ? data.userAvatar : ''}
                    alt='avatar'
                />
            </div>
        </div>
    );
};
export default Message;
