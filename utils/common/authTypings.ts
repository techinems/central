// Contains a few typings to help with authenticated state
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type AuthPageOptions = {
  requiresAuth: boolean
};

export type NextAuthPage<P = {}, IP = P> = {
  authOptions?: AuthPageOptions;
} & NextPage<P, IP>;

export type EnhancedAppProps = AppProps & {
  Component: NextAuthPage;
} 