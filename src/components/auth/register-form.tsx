import { AxiosError } from "axios";
import { useFormik } from "formik";
import { useMutation } from "react-query";

import { register_req } from "@/api/auth";
import { useAuthChatBox } from "@/hooks/use-auth-chat-box";
import { KINGSTON, ROBERT } from "@/lib/constants";
import { RegisterDto } from "@/types/auth";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function RegisterForm() {
  const { addMessage } = useAuthChatBox();

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      age: 0,
      gender: "",
      password: "",
    },
    onSubmit: (values) => {
      handleRegister.mutate(values as RegisterDto);
    },
  });

  const handleRegister = useMutation(register_req, {
    onSuccess() {
      addMessage({
        avatar: ROBERT,
        message: "Great. You are in.",
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
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Need to know you first.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" required {...formik.getFieldProps("name")} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              required
              {...formik.getFieldProps("username")}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              {...formik.getFieldProps("email")}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              required
              {...formik.getFieldProps("age")}
              onChange={(e) => formik.setFieldValue("age", +e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label>Gender</Label>
            <Select
              required
              {...formik.getFieldProps("gender")}
              onValueChange={(value) => formik.setFieldValue("gender", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Gender</SelectLabel>
                  <SelectItem value="m">Male</SelectItem>
                  <SelectItem value="f">Female</SelectItem>
                  <SelectItem value="u">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              {...formik.getFieldProps("password")}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={formik.isSubmitting}>
            Register
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default RegisterForm;
