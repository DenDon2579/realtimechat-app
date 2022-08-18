export interface IServerMessage {
    createdAt: number;
    userAvatar: string | null | undefined;
    message: string | null | undefined;
    userId: string | null | undefined;
    userName: string | null | undefined;
}

export interface IMessage {
    userAvatar: string | null | undefined;
    message: string | null | undefined;
    userId: string | null | undefined;
    userName: string | null | undefined;
    fromMe: boolean | null;
}
