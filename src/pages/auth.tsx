import AuthForms from "@/components/auth/auth-form";
import ChatBox from "@/components/auth/chat-box";
import ThemeButtons from "@/components/auth/theme-buttons";
import AuthChatBoxProvider from "@/providers/auth-chat-box-provider";

function Auth() {
  return (
    <AuthChatBoxProvider>
      <div className="flex h-screen w-screen">
        <div className="hidden h-full w-full flex-[0.8] md:flex flex-col border-r items-start p-6">
          <ThemeButtons />
          <ChatBox />
        </div>
        <div className="h-full w-full flex-1">
          <AuthForms />
        </div>
      </div>
    </AuthChatBoxProvider>
  );
}

export default Auth;
