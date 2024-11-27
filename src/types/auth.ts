export type AuthChatBoxMessage = {
  message: string;
  avatar: string;
  timestamp: Date;
};

export interface AuthChatBoxProviderState {
  messages: AuthChatBoxMessage[];
  addMessage: (message: AuthChatBoxMessage) => void;
}
