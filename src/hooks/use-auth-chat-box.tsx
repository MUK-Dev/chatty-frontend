import { useContext } from "react";

import { AuthChatBoxContext } from "@/providers/auth-chat-box-provider";

export const useAuthChatBox = () => {
  const context = useContext(AuthChatBoxContext);

  if (context === undefined)
    throw new Error("useAuthChatBox must be used within a AuthChatBoxProvider");

  return context;
};
