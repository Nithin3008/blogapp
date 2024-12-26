import { SignUp } from "@clerk/clerk-react";

function RegisterPage() {
  return (
    <div className="flex justify-center h-[80vh]">
      <SignUp />
    </div>
  );
}

export default RegisterPage;
