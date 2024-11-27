import { useEffect } from "react";

import { useAuthChatBox } from "@/hooks/use-auth-chat-box";
import { ROBERT } from "@/lib/constants";

import ChatMsg from "./chat-msg";

function ChatBox() {
  const { addMessage, messages } = useAuthChatBox();

  useEffect(() => {
    addMessage({
      avatar: ROBERT,
      message: "Welcome!",
      timestamp: new Date(),
    });
  }, [addMessage]);

  return (
    <div className="flex flex-1 h-full w-full justify-end flex-col overflow-hidden">
      {messages.map((message) => (
        <ChatMsg key={message.timestamp.toString()} {...message} />
      ))}
    </div>
  );
}

export default ChatBox;
