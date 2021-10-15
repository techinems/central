// Contains a few typings to help with authenticated state
import { NextPage } from 'next';
import type { AppProps } from 'next/app'

export type AuthPageOptions = {
  requiresAuth: boolean
};

export type NextAuthPage = {
  authOptions?: AuthPageOptions;
} & NextPage;

export type EnhancedAppProps = AppProps & {
  Component: NextAuthPage;
} 