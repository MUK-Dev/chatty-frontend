import { useAuthChatBox } from "@/hooks/use-auth-chat-box";
import { KINGSTON } from "@/lib/constants";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function LoginForm() {
  const { addMessage } = useAuthChatBox();
  const handleLogin = () => {
    addMessage({
      avatar: KINGSTON,
      message:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aletur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      timestamp: new Date(),
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome back Sire!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogin}>Login</Button>
      </CardFooter>
    </Card>
  );
}

export default LoginForm;
