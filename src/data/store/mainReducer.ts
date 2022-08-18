import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage, IServerMessage } from '../../types/message';
import { IUser } from '../../types/user';

interface IState {
    auth: {
        isAuth: boolean;
    };
    user: IUser | null;
    messages: IMessage[] | null;
}

const initialState: IState = {
    auth: {
        isAuth: false,
    },
    user: null,
    messages: null,
};

const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    reducers: {
        signIn(state, action: PayloadAction<IUser>) {
            state.user = action.payload;
            state.auth.isAuth = true;
        },
        signOut(state) {
            state.user = null;
            state.auth.isAuth = false;
        },
        setDisplayName(state, action: PayloadAction<string>) {
            if (state.user) {
                state.user.displayName = action.payload;
            }
        },
        setMessages(state, action: PayloadAction<IServerMessage[]>) {
            state.messages = action.payload.map((message) => {
                if (message.userName === state.user?.displayName) {
                    return {
                        ...message,
                        fromMe: true,
                    };
                }
                return {
                    ...message,
                    fromMe: false,
                };
            });
        },
    },
});

export default mainSlice.reducer;
export const { signIn, signOut, setDisplayName, setMessages } =
    mainSlice.actions;
