import { create } from "zustand";

interface IToggleReply {
    isReplyMail: boolean;
    toggleReply: ()=> void;
}

const useToggleReply = create<IToggleReply>((set)=>({
    isReplyMail: false,
    toggleReply: ()=> set((state)=>({isReplyMail: !state.isReplyMail}))
}))

export default useToggleReply