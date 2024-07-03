import { AppProps } from 'next/app';
import { NextComponentType } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

interface MyAppProps extends AppProps {
  Component: NextComponentType;
  pageProps: {
    session?: Session;
    [key: string]: any;
  };
}

export default function App({ Component, pageProps: { session, ...pageProps } }: MyAppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

