import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useMutation } from "react-query";

import { login_req } from "@/api/auth";
import { useAuthChatBox } from "@/hooks/use-auth-chat-box";
import { KINGSTON } from "@/lib/constants";
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
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      handleLogin.mutate(values);
      resetForm();
      setSubmitting(false);
    },
  });

  const handleLogin = useMutation(login_req, {
    onSuccess(data, variables, context) {
      console.log(data, variables, context);
    },
    onError(error: AxiosError<CommonError>) {
      console.log(error);
      addMessage({
        avatar: KINGSTON,
        message: error.response?.data.message ?? "Something went wrong...",
        sender: "Kingston",
        timestamp: new Date(),
      });
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
            <Input id="email" type="email" {...formik.getFieldProps("email")} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Login</Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default LoginForm;
