import React, { FunctionComponent } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const Login: FunctionComponent = () => {
  const handleGoogleLogin = async (googleData: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(googleData);
  }
  return (
    <div>
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}
        buttonText="Log in with Google"
        onSuccess={handleGoogleLogin}
        onFailure={handleGoogleLogin}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;