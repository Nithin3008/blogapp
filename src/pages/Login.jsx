import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="flex items-center justify-center p-2">
      <SignIn signUpUrl="/register" />
    </div>
  );
}

export default Login;
