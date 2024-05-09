import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signUp } from "@/http/api";
import { NetworkError } from "@/types";
import { Label } from "@radix-ui/react-label";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Signed up successfully!");
      navigate("/dashboard/home");
    },
    onError: (error: NetworkError) => {
      toast.error(error.response?.data?.message || "Something Went Wrong!");
    },
  });
  const handleSignUp = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!name || !email || !password) {
      toast.error("Please fill all the fields!");
      return;
    }
    mutation.mutate({ name, email, password });
  }; // Add a closing curly brace here
  return (
    <section className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                ref={nameRef}
                id="name"
                placeholder="Sandip Sapkota"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                placeholder="login@sapkotasandip.com.np"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input ref={passwordRef} id="password" type="password" />
            </div>
            <div className="flex items-center">
              <Button onClick={handleSignUp} type="submit" className="w-full">
                {mutation.isPending ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RegisterPage;
