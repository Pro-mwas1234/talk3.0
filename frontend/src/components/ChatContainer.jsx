import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import MessageSkeleton from './skeletons/MessageSkeleton';
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';

const ChatContainer = () => {
    const {messages, getMessages,isMessagesLoading,selectedUser} = useChatStore();

 useEffect(() => {
  if (selectedUser?._id) {
    getMessages(selectedUser._id);
  }
}, [selectedUser?._id, getMessages]);

if(isMessagesLoading) {
  return (
  <div className="flex-1 flex flex-col overflow-auto">
    <ChatHeader/>
    <MessageSkeleton/>
    <MessageInput/>
  </div>
)
}
  

  return (
    <div className="flex flex-col flex-1 overflow-auto">
        <ChatHeader/>
        <p className="">messages...</p>

        <MessageInput />
    </div>
  )
}

export default ChatContainer