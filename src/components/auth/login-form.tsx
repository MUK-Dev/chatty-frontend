import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useMutation } from "react-query";

import { login_req } from "@/api/auth";
import { useAuthChatBox } from "@/hooks/use-auth-chat-box";
import { KINGSTON, ROBERT } from "@/lib/constants";
import { CommonError } from "@/types/common";

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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleLogin.mutate(values);
    },
  });

  const handleLogin = useMutation(login_req, {
    onSuccess() {
      addMessage({
        avatar: ROBERT,
        message: "We have waited for your return.",
        sender: "Robert",
        timestamp: new Date(),
      });
      formik.setSubmitting(false);
      formik.resetForm();
    },
    onError(error: AxiosError<CommonError>) {
      addMessage({
        avatar: KINGSTON,
        message: error.response?.data.message ?? "Something went wrong...",
        sender: "Kingston",
        timestamp: new Date(),
      });
      formik.setSubmitting(false);
    },
  });

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Welcome back Sire!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={formik.isSubmitting}>
            Login
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default LoginForm;
