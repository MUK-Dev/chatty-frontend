import { createContext, ReactNode, useCallback, useState } from "react";

import { AuthChatBoxMessage, AuthChatBoxProviderState } from "@/types/auth";

export const AuthChatBoxContext = createContext<AuthChatBoxProviderState>({
  messages: [],
  addMessage: () => {},
});

const AuthChatBoxProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<AuthChatBoxMessage[]>([]);
  const addMessage = useCallback(
    (message: AuthChatBoxMessage) =>
      setMessages((prev) => {
        return [...prev, message];
      }),
    [],
  );

  return (
    <AuthChatBoxContext.Provider value={{ messages, addMessage }}>
      {children}
    </AuthChatBoxContext.Provider>
  );
};

export default AuthChatBoxProvider;
