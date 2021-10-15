import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { SessionProvider, signIn, useSession } from 'next-auth/react'
import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { EnhancedAppProps } from '../utils/authTypings';

function Central({ Component, pageProps: { session, ...pageProps } }: EnhancedAppProps) {
  return (
    <SessionProvider session={session}>
      {Component.authOptions?.requiresAuth ?
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
        :
        <Component {...pageProps} />
      }
    </SessionProvider>
  );
}

// The generic auth guard for the application which ensures that every child component has a valid session
// This means we only pay the auth prieverytime the user navigates is client based from within the authenticated tree
const AuthGuard: FunctionComponent = ({ children }) => {
  const { data: session, status } = useSession();
  const isSignedIn = !!session?.user;
  useEffect(() => {
    if (status === 'loading') return;
    if (!isSignedIn) {
      signIn("google")
    }
  }, [status, isSignedIn]);

  if (isSignedIn) {
    // Return all the children if signed in, fragment prevents a parent container as we don't want layout issues
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }

  return <div>Loading...</div>;
}

export default Central