export type AuthChatBoxMessage = {
  message: string;
  avatar: string;
  timestamp: Date;
  sender: string;
};

export interface AuthChatBoxProviderState {
  messages: AuthChatBoxMessage[];
  addMessage: (message: AuthChatBoxMessage) => void;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  username: string;
  email: string;
  age: number;
  gender: "f" | "m" | "u";
  password: string;
}
