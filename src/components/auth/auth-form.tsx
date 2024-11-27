import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

function AuthForms() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Tabs
        defaultValue="login"
        className="h-auto w-[400px] transition-all duration-300 ease-in-out"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">First Time?</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <div>
            <LoginForm />
          </div>
        </TabsContent>
        <TabsContent value="register">
          <div>
            <RegisterForm />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AuthForms;
