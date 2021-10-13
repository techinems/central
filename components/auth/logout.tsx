import React, { FunctionComponent } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout, GoogleLogoutProps } from 'react-google-login';

const Logout: FunctionComponent = () => {
  const handleGoogleLogout = () => {
    console.log('Logged Out');
  }
  return (
    <div>
      <GoogleLogout
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}
        buttonText="Logout"
        onLogoutSuccess={handleGoogleLogout}
      />
    </div>
  );
}

export default Logout;