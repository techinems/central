import React, { FunctionComponent } from "react";
import { signIn } from "next-auth/react";

const Login: FunctionComponent = () => {
  return (
    <div>
      <button
        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/schedule' })}
      >
        Log in With Google
      </button>
    </div>
  );
};

export default Login;